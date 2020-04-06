package com.puti.pachong.util;

import com.puti.pachong.entity.excel.ExcelSheetPO;
import com.puti.pachong.entity.excel.ExcelVersion;
import lombok.SneakyThrows;
import org.junit.jupiter.api.Test;

import java.util.Collections;

class ExcelUtilTest {

    @Test
    @SneakyThrows
    void createWorkbookAtDisk() {
        ExcelSheetPO sheetPO = new ExcelSheetPO();
        sheetPO.setSheetName("asdfasdfasdg");
        sheetPO.setHeaders(new String[]{"名称"});
        sheetPO.setDataList(Collections.singletonList(Collections.singletonList("woshi 张三")));
        ExcelUtil.createWorkbookAtDisk(ExcelVersion.V2007, Collections.singletonList(sheetPO), "G://test2.xlsx");
    }

    @Test
    void createWorkbookAtOutStream() {
    }
}