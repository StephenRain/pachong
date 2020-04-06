package com.puti.pachong.handler;


import com.puti.pachong.entity.Pachong;
import com.puti.pachong.entity.excel.ExcelSheetPO;
import com.puti.pachong.entity.extract.ExtractPageResult;
import com.puti.pachong.entity.extract.ExtractPointResult;
import com.puti.pachong.entity.extract.ExtractUnitResult;
import com.puti.pachong.util.DateUtil;
import com.puti.pachong.util.ExcelUtil;
import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.collections4.CollectionUtils;
import org.springframework.stereotype.Component;

import java.util.LinkedList;
import java.util.List;
import java.util.concurrent.BlockingQueue;
import java.util.concurrent.LinkedBlockingQueue;
import java.util.concurrent.TimeUnit;
import java.util.stream.Collectors;

/**
 * 对页面解析后的结果进行处理的处理器
 */
@Component
@Slf4j
public class ExtractResultHandler implements Runnable {

    private BlockingQueue<ExtractPageResult> extractPageResultChannel = new LinkedBlockingQueue<>(200);


    @SneakyThrows
    public boolean addExtractResult(ExtractPageResult extractPageResult) {
        return extractPageResultChannel.offer(extractPageResult, 10, TimeUnit.SECONDS);
    }

    @SneakyThrows
    public void handle() {
        log.info("处理器已启动");
        List<ExtractPageResult> pageResultList = new LinkedList<>();
        while (!extractPageResultChannel.isEmpty()) {
            ExtractPageResult extractPageResult = extractPageResultChannel.poll(10, TimeUnit.SECONDS);
            if (extractPageResult != null) {
                pageResultList.add(extractPageResult);
            }
        }
        for (ExtractPageResult pageResult : pageResultList) {
            Pachong pachong = pageResult.getPachong();
            if (pachong.getSaveType() == 0) {
                String filePath = "G://" + DateUtil.nowFormat() + "-" + pachong.getWeituofang() + ".xls";
                this.toExcel(pageResultList, filePath, false);
            }
        }
        log.info("处理器已结束");
    }

    @SneakyThrows
    public void toExcel(List<ExtractPageResult> pageResultList, String filePath, boolean done) {
        if (CollectionUtils.isNotEmpty(pageResultList)) {
            List<List<String>> dataList = new LinkedList<>();
            ExcelSheetPO sheetPO = new ExcelSheetPO();
            for (ExtractPageResult pageResult : pageResultList) {
                sheetPO.setSheetName(pageResult.getPachong().getWeituofang());
                List<ExtractUnitResult> unitResultList = pageResult.getUnitResultList();
                if (CollectionUtils.isNotEmpty(unitResultList)) {
                    for (ExtractUnitResult unitResult : unitResultList) {
                        List<String> unitDataList = new LinkedList<>();
                        dataList.add(unitDataList);
                        List<ExtractPointResult> pointResultList = unitResult.getPointResultList();
                        if (CollectionUtils.isNotEmpty(pointResultList)) {
                            sheetPO.setHeaders(pointResultList.stream().map(ExtractPointResult::getName).toArray(String[]::new));
                            unitDataList.addAll(pointResultList.stream().map(ExtractPointResult::getValue).map(String::valueOf).collect(Collectors.toList()));
                        }
                    }

                }
            }
            ExcelUtil.createExcel(filePath, ExcelUtil.generateWorkbook(sheetPO.getSheetName(), sheetPO.getHeaders(), 0, 0, dataList, null));

            log.info("保存爬取数据至:" + filePath);
        }
    }

    @Override
    public void run() {
        this.handle();
    }
}
