package com.puti.pachong.entity.extract;

import com.puti.pachong.entity.Pachong;
import lombok.Data;

import java.util.LinkedHashMap;
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
    private List<String> urlList;

    // 当前正在爬取的url
    private String currentUrl;

    // 当前爬取到的页面数据
    private String extractValue;

    /**
     * key：实际爬取的url
     * value：爬取的原始页面
     */
    private Map<String, String> urlToExtractVal = new LinkedHashMap<>();

}
