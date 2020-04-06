package com.puti.pachong.entity.extract;

import lombok.Data;

/**
 * 被抓去页面的一个点，比如一个A标签
 */
@Data
public class ExtractPoint {

    /**
     * 提取的属性名称,如果该值存在就取该值，如果不存在说明是普通文本
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
