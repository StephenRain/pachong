package com.puti.pachong.entity.excel;

import lombok.Data;

import java.util.List;

/**
 * 定义表格的数据对象
 */
@Data
public class ExcelSheetPO {

    /**
     * sheet的名称
     */
    private String sheetName;

    /**
     * 头部标题集合
     */
    private String[] headers;

    /**
     * 数据集合
     */
    private List<List<Object>> dataList;

}