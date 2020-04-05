package com.puti.pachong.entity;

import lombok.Data;

@Data
public class ExtractPoint {

    /**
     * 提取类型
     * 0：普通文本
     * 1：标签的属性
     */
    private int extractType;

    /**
     * 若提取类型为1，提取的属性名称
     */
    private String attrName;

    /**
     * 选择器表达式
     */
    private String selector;

    /**
     * 自定义名称
     */
    private String name;


}
