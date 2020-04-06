package com.puti.pachong.handler;


import com.puti.pachong.entity.ExtractPageResult;
import com.puti.pachong.entity.ExtractPointResult;
import com.puti.pachong.entity.ExtractUnitResult;
import com.puti.pachong.entity.Pachong;
import com.puti.pachong.entity.excel.ExcelSheetPO;
import com.puti.pachong.entity.excel.ExcelVersion;
import com.puti.pachong.util.ExcelUtil;
import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.collections4.CollectionUtils;
import org.springframework.stereotype.Component;

import java.io.FileOutputStream;
import java.io.OutputStream;
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
            if (pachong.getSaveType() == 1) {
                //String filePath = File.separator + (StringUtils.isEmpty(pachong.getWeituofang()) ? "自营" : pachong.getWeituofang()) + "-" + DateUtil.nowFormat() + ".xlsx";
                String filePath = "G://aa.xlsx";
                this.toExcel(pageResultList, filePath, false);
            }
        }
        log.info("处理器已结束");
    }

    @SneakyThrows
    public void toExcel(List<ExtractPageResult> pageResultList, String filePath, boolean done) {
        if (CollectionUtils.isNotEmpty(pageResultList)) {
            List<List<Object>> dataList = new LinkedList<>();
            OutputStream outputStream = new FileOutputStream(filePath);
            ExcelSheetPO sheetPO = new ExcelSheetPO();

            sheetPO.setSheetName(pageResultList.get(0).getPachong().getWeituofang());
            List<ExtractUnitResult> unitResultList = pageResultList.get(0).getUnitResultList();
            if (CollectionUtils.isNotEmpty(unitResultList)) {
                List<ExtractPointResult> pointResultList = unitResultList.get(0).getPointResultList();
                if (CollectionUtils.isNotEmpty(pointResultList)) {
                    sheetPO.setHeaders(pointResultList.stream().map(ExtractPointResult::getName).toArray(String[]::new));
                    dataList.add(pointResultList.stream().map(ExtractPointResult::getValue).collect(Collectors.toList()));
                }
            }

            sheetPO.setDataList(dataList);
            List<ExcelSheetPO> sheetPOList = new LinkedList<>();
            sheetPOList.add(sheetPO);
            ExcelUtil.createWorkbookAtOutStream(ExcelVersion.V2007, sheetPOList, outputStream, true);
            log.info("保存爬取数据至:" + filePath);
        }
    }

    @Override
    public void run() {
        this.handle();
    }
}
