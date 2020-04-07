package com.puti.pachong.parser;

import com.alibaba.fastjson.JSON;
import com.puti.pachong.entity.Pachong;
import com.puti.pachong.entity.extract.*;
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
            String extractValue = urlToExtractVal.get(originUrl);
            Document doc = Jsoup.parse(extractValue);
            ExtractUnit extractUnit = JSON.parseObject(pachong.getExtractUnit(), ExtractUnit.class);
            if (extractUnit == null) {
                return PaginationResult.error("抓取单元不能为空");
            }
            ExtractPageResult extractPageResult = new ExtractPageResult();
            paginationResult.addPageResult(extractPageResult);
            extractPageResult.setPachong(pachong);
            extractPageResult.setCurrPage(currPage);
            List<ExtractPoint> pointList = extractUnit.getPoints();
            Map<List<String>, ExtractPoint> pointSelectorMap = new HashMap<>();

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
                }
                ExtractPoint extractPoint = pointSelectorMap.get(pointSelectorMap.keySet().stream().filter((list) -> list.contains(realSelector)).findFirst().orElse(Collections.emptyList()));
                ExtractPointResult extractPointResult = new ExtractPointResult();
                Element element = doc.selectFirst(realSelector);
                String extractVal = element == null ? "空值" : element.text();
                if (StringUtils.isEmpty(extractPoint.getAttrName())) {
                    if (pachong.getSaveType() == 0) {
                        log.info("【" + extractPoint.getName() + "】" + "==解析==>" + extractVal);
                        extractPointResult.setName(extractPoint.getName());
                        extractPointResult.setValue(extractVal);
                        unitResult.addPointResult(extractPointResult);
                    }
                }
            }
        }
        log.info("HTML解析器-结束");
        return paginationResult;
    }
}
