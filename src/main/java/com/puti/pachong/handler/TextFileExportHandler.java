package com.puti.pachong.handler;

import com.puti.pachong.entity.extract.ExtractPageResult;
import com.puti.pachong.entity.extract.ExtractPointResult;
import com.puti.pachong.entity.extract.ExtractUnitResult;
import com.puti.pachong.entity.extract.PaginationResult;
import com.puti.pachong.util.DateUtil;
import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.collections4.CollectionUtils;

import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardOpenOption;
import java.util.LinkedList;
import java.util.List;
import java.util.stream.Collectors;

@Slf4j
public class TextFileExportHandler extends ResultExportHandler {

    private static final String SPLIT_CHAR = "\t";


    @Override
    @SneakyThrows
    public void handle(PaginationResult paginationResult) {
        String filePath = "G://" + DateUtil.nowFormat() + "-" + paginationResult.getPachong().getTargetSiteName() + ".txt";
        List<String> textString = new LinkedList<>();
        List<ExtractPageResult> pageResultList = paginationResult.getPageResultList();
        if (CollectionUtils.isNotEmpty(pageResultList)) {
            pageResultList.stream().forEach((e) -> {
                List<ExtractUnitResult> unitResultList = e.getUnitResultList();
                if (CollectionUtils.isNotEmpty(unitResultList)) {
                    unitResultList.forEach((unitResult) -> {
                        List<ExtractPointResult> pointResultList = unitResult.getPointResultList();
                        if (CollectionUtils.isNotEmpty(pageResultList)) {
                            String lineString = pointResultList.stream().map(ExtractPointResult::getValue).map(String::valueOf).collect(Collectors.joining(SPLIT_CHAR));
                            textString.add(lineString);
                        }
                    });
                }
            });
        }
        Files.write(Paths.get(filePath), textString, StandardOpenOption.CREATE_NEW, StandardOpenOption.WRITE);
        log.info("导出至文本文件:" + filePath);
    }
}
