package com.puti.pachong.handler;


import com.puti.pachong.entity.extract.PaginationResult;
import com.puti.pachong.util.DateUtil;
import com.puti.pachong.util.SpringUtil;
import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.util.concurrent.BlockingQueue;
import java.util.concurrent.LinkedBlockingQueue;
import java.util.concurrent.TimeUnit;

/**
 * 对页面解析后的结果进行处理的处理器
 */
@Component
@Slf4j
public class ResultExportHandler implements Runnable {

    private BlockingQueue<PaginationResult> extractPageResultChannel = new LinkedBlockingQueue<>(200);

    @SneakyThrows
    public boolean addExtractResult(PaginationResult paginationResult) {
        return extractPageResultChannel.offer(paginationResult, 10, TimeUnit.SECONDS);
    }

    @SneakyThrows
    public void handle() {
        log.info("导出处理器已启动");
        while (!extractPageResultChannel.isEmpty()) {
            PaginationResult paginationResult = extractPageResultChannel.poll(10, TimeUnit.SECONDS);
            if (paginationResult == null) {
                return;
            }
            if (paginationResult.getPachong().getSaveType() == null || paginationResult.getPachong().getSaveType() == 0) {
                ExcelExportHandler excelExportHandler = SpringUtil.getBean(ExcelExportHandler.class);
                String filePath = "G://" + DateUtil.nowFormat() + "-" + paginationResult.getPachong().getWeituofang() + ".xls";
                excelExportHandler.handle(paginationResult, filePath);
            }
        }
        log.info("导出处理器已结束");
    }

    @Override
    public void run() {
        this.handle();
    }
}
