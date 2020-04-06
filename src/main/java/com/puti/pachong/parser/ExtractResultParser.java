package com.puti.pachong.parser;

import com.alibaba.fastjson.JSON;
import com.puti.pachong.entity.*;
import com.puti.pachong.handler.ExtractResultHandler;
import lombok.extern.slf4j.Slf4j;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * 对抓取的页面进行解析
 */
@Component
@Slf4j
public class ExtractResultParser {

    @Autowired
    private ExtractResultHandler resultHandler;


    public ResultMsg parseHtml(String html, Pachong pachong) {
        Document doc = Jsoup.parse(html);
        ExtractUnit extractUnit = JSON.parseObject(pachong.getExtractUnit(), ExtractUnit.class);
        if (extractUnit == null) {
            return ResultMsg.paramError("爬取页面单元不能为空");
        }
        ExtractPageResult extractPageResult = new ExtractPageResult();
        extractPageResult.setPachong(pachong);
        ExtractPointResult extractPointResult = new ExtractPointResult();
        ExtractUnitResult unitResult = new ExtractUnitResult();
        List<ExtractPoint> pointList = extractUnit.getPoints();
        for (ExtractPoint extractPoint : pointList) {
            int extractType = extractPoint.getExtractType();
            Element element = doc.selectFirst(extractPoint.getSelector());
            if (extractType == 0) {
                if (pachong.getSaveType() == 0) {
                    log.info(extractPoint.getName() + "抓取结果：" + element.text());
                } else if (pachong.getSaveType() == 1) {
                    extractPointResult.setName(extractPoint.getName());
                    extractPointResult.setValue(element.text());
                    unitResult.addPointResult(extractPointResult);
                    extractPageResult.addUnitResult(unitResult);

                }
            } else if (extractType == 1) {
                log.info(extractPoint.getName() + "抓取结果：" + element.attr(extractPoint.getAttrName()));
            }
        }

        // 将解析结果给处理器
        resultHandler.addExtractResult(extractPageResult);
        // 启动处理器
        new Thread(resultHandler).start();
        return ResultMsg.success();
    }
}
