package com.puti.pachong.handler;


import com.puti.pachong.entity.extract.PaginationResult;
import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;

import java.util.concurrent.BlockingQueue;
import java.util.concurrent.LinkedBlockingQueue;
import java.util.concurrent.TimeUnit;

/**
 * 对页面解析后的结果进行处理的处理器
 */
@Slf4j
public abstract class ResultExportHandler {

    private BlockingQueue<PaginationResult> extractPageResultChannel = new LinkedBlockingQueue<>(200);

    @SneakyThrows
    public boolean addExtractResult(PaginationResult paginationResult) {
        return extractPageResultChannel.offer(paginationResult, 10, TimeUnit.SECONDS);
    }

    public abstract void handle(PaginationResult paginationResult);

    @SneakyThrows
    public void handle() {
        log.info("导出处理器已启动");
        while (!extractPageResultChannel.isEmpty()) {
            PaginationResult paginationResult = extractPageResultChannel.poll(10, TimeUnit.SECONDS);
            if (paginationResult == null) {
                return;
            }
            this.handle(paginationResult);
        }
        log.info("导出处理器已结束");
    }

}
