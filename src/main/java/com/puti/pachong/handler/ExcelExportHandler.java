package com.puti.pachong.handler;

import com.puti.pachong.entity.excel.ExcelSheetPO;
import com.puti.pachong.entity.extract.ExtractPageResult;
import com.puti.pachong.entity.extract.ExtractPointResult;
import com.puti.pachong.entity.extract.ExtractUnitResult;
import com.puti.pachong.entity.extract.PaginationResult;
import com.puti.pachong.entity.pachong.Pachong;
import com.puti.pachong.service.CaijiConfigService;
import com.puti.pachong.service.PachongService;
import com.puti.pachong.util.ExcelUtil;
import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.collections4.CollectionUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.LinkedList;
import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@Component
public class ExcelExportHandler extends ResultExportHandler {

    private PachongService pachongService;

    private CaijiConfigService configService;

    public ExcelExportHandler() {

    }

    @Autowired
    public ExcelExportHandler(PachongService pachongService, CaijiConfigService configSerivce) {
        this.pachongService = pachongService;
        this.configService = configSerivce;
    }


    @SneakyThrows
    @Override
    public void handle(PaginationResult paginationResult) {
        Pachong pachong = paginationResult.getPachong();

        String filePath = configService.getFirst().getExportDir() + "/" + pachong.getTargetSiteName() + ".xls";
        List<ExtractPageResult> pageResultList = paginationResult.getPageResultList();
        if (CollectionUtils.isNotEmpty(pageResultList)) {
            List<List<String>> dataList = new LinkedList<>();
            ExcelSheetPO sheetPO = new ExcelSheetPO();
            for (ExtractPageResult pageResult : pageResultList) {
                sheetPO.setSheetName("第" + pageResult.getCurrPage() + "页");
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
            pachong.setStatus("采集完成");
            pachong.setResultPath(filePath);
            pachongService.update(pachong);
        }
    }
}
