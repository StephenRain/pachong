package com.puti.pachong.handler;

import com.puti.pachong.entity.extract.PaginationResult;
import com.puti.pachong.util.DateUtil;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class TextFileExportHandler extends ResultExportHandler {

    private final String splitChar = "\t";


    @Override
    public void handle(PaginationResult paginationResult) {
        String filePath = "G://" + DateUtil.nowFormat() + "-" + paginationResult.getPachong().getWeituofang() + ".txt";

        //todo
//        Files.write(Paths.get(filePath), )
    }
}
