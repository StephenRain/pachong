package com.puti.pachong.entity.extract;

import com.puti.pachong.entity.pachong.Pachong;
import lombok.Data;

import java.util.LinkedHashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

/**
 * 爬取页面分页结果数据
 */
@Data
public class ExtractPagination {

    private Pachong pachong;

    // 原始的url模板
    private String urlTemplate;

    // 当前分页爬取所有的url
    private List<String> realUrlList = new LinkedList<>();

    /**
     * key：实际爬取的url
     * value：爬取的原始页面
     */
    private Map<String, String> urlToExtractVal = new LinkedHashMap<>();

}
