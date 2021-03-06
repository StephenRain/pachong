package com.puti.pachong.parser;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONPath;
import com.puti.pachong.entity.extract.*;
import com.puti.pachong.entity.pachong.Pachong;
import com.puti.pachong.util.TemplateUtil;
import io.micrometer.core.instrument.util.StringUtils;
import lombok.extern.slf4j.Slf4j;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.springframework.stereotype.Component;

import java.util.*;

/**
 * 对抓取的页面进行解析
 */
@Component
@Slf4j
public class HtmlParser extends ExtractResultParser {

    public PaginationResult parse(ExtractPagination pagination) {
        log.info("HTML解析器-启动");
        PaginationResult paginationResult = new PaginationResult();
        Pachong pachong = pagination.getPachong();
        paginationResult.setPachong(pachong);
        Map<String, String> urlToExtractVal = pagination.getUrlToExtractVal();
        int currPage = 0;
        for (String originUrl : urlToExtractVal.keySet()) {
            currPage++;
            log.info("HTML解析器-正在解析:" + originUrl);
            String pageContent = urlToExtractVal.get(originUrl);
            if (StringUtils.isEmpty(pageContent)) {
                continue;
            }
            ExtractUnit extractUnit = JSON.parseObject(pachong.getExtractUnit(), ExtractUnit.class);
            // 如果爬取单元为空，表示不用解析
            if (extractUnit == null) {
                return PaginationResult.error("抓取单元不能为空");
            }
            List<ExtractPoint> pointList = extractUnit.getPoints();

            ExtractPageResult extractPageResult = new ExtractPageResult();
            paginationResult.addPageResult(extractPageResult);
            extractPageResult.setCurrPage(currPage);


            // 简单判断 返回内容格式
            if (pageContent.startsWith("{") || pageContent.startsWith("[")) {
                // 说明json
                pointList.stream().forEach((e) -> {
                    String name = e.getName();
                    String selector = e.getSelector();
                    Object extract = JSONPath.extract(pageContent, selector);
                    ExtractUnitResult unitResult = new ExtractUnitResult();
                    extractPageResult.addUnitResult(unitResult);
                    // 先不写了 todo 先把悟空问答自动答题写完再说，然后再改这个代码


                });


            }

            Document doc = Jsoup.parse(pageContent);

            // key：抓取点所有可能的选择器
            // value：该抓取点
            Map<List<String>, ExtractPoint> pointSelectorMap = new LinkedHashMap<>();

            for (ExtractPoint extractPoint : pointList) {
                List<String> realSelectorList = TemplateUtil.parseTemplate(extractPoint.getSelector());
                pointSelectorMap.put(realSelectorList, extractPoint);
            }
            List<List<String>> pointSelectors = new LinkedList<>(pointSelectorMap.keySet());
            // 判断每个抓取点对应页面中实际标签的个数是否一致
            long count = pointSelectors.stream().map(List::size).distinct().count();
            if (count != 1) {
                return PaginationResult.error("抓取点个数不一致，选择器对应个数不一致");
            }
            List<String> orderList = new LinkedList<>();
            List<String> selectorList = pointSelectors.get(0);
            for (int i = 0; i < selectorList.size(); i++) {
                for (int j = 0; j < pointSelectors.size(); j++) {
                    orderList.add(pointSelectors.get(j).get(i));
                }
            }

            ExtractUnitResult unitResult = new ExtractUnitResult();
            for (int i = 0; i < orderList.size(); i++) {
                String realSelector = orderList.get(i);
                if (i % pointSelectors.size() == 0) {
                    unitResult = new ExtractUnitResult();
                    extractPageResult.addUnitResult(unitResult);
                    log.info("=====================================");
                }
                ExtractPoint extractPoint = pointSelectorMap.get(pointSelectorMap.keySet().stream().filter((list) -> list.contains(realSelector)).findFirst().orElse(Collections.emptyList()));
                ExtractPointResult extractPointResult = new ExtractPointResult();
                Element element = doc.selectFirst(realSelector);
                String extractVal;
                if (element == null) {
                    extractVal = "空值";
                } else {
                    if (!StringUtils.isEmpty(extractPoint.getAttrName())) {
                        extractVal = element.attr(extractPoint.getAttrName());
                    } else {
                        extractVal = element.text();
                    }
                }
                log.info("【" + extractPoint.getName() + "】" + "====>【" + extractVal + "】");
                extractPointResult.setName(extractPoint.getName());
                extractPointResult.setValue(extractVal);
                unitResult.addPointResult(extractPointResult);
            }
        }
        log.info("HTML解析器-结束");
        return paginationResult;
    }
}
