package com.puti.pachong.entity;

import lombok.Data;

@Data
public class Pachong {

    private Integer id;
    private String url;
    private String method;
    private String weituofang;
    private String responseType;
    private String extractUnit;
    /**
     * 爬取的结果 保存方式
     * 0：打印
     * 1：EXCEL
     */
    private Integer saveType;

}
