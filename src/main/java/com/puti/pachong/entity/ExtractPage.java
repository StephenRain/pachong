package com.puti.pachong.entity;

import lombok.Data;

import java.util.List;

/**
 * 表示抓取的页面，包含多个抓取单元
 */
@Data
public class ExtractPage {

    private List<ExtractUnit> extractUnits;

}
