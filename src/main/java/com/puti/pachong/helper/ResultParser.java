package com.puti.pachong.helper;

import com.alibaba.fastjson.JSON;
import com.puti.pachong.entity.ExtractPoint;
import com.puti.pachong.entity.Pachong;
import com.puti.pachong.entity.PageExtract;
import com.puti.pachong.entity.ResultMsg;
import lombok.extern.slf4j.Slf4j;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Slf4j
public class ResultParser {


    public ResultMsg parseHtml(String html, Pachong pachong) {
        Document doc = Jsoup.parse(html);
        String pageExtractStr = pachong.getPageExtract();
        PageExtract pageExtract = JSON.parseObject(pageExtractStr, PageExtract.class);
        if (pageExtract == null) {
            return ResultMsg.paramError("提取对象不能为空");
        }
        List<ExtractPoint> extractPointList = pageExtract.getPoints();
        if (extractPointList == null) {
            return ResultMsg.paramError("提取对象不能为空");
        }
        for (ExtractPoint extractPoint : extractPointList) {
            int extractType = extractPoint.getExtractType();
            Element element = doc.selectFirst(extractPoint.getSelector());
            if (extractType == 0) {
                if (pachong.getSaveType() == 0) {
                    log.info(extractPoint.getName() + "抓取结果：" + element.text());
                }
            } else if (extractType == 1) {
                log.info(extractPoint.getName() + "抓取结果：" + element.attr(extractPoint.getAttrName()));
            }
        }
        return ResultMsg.success();
    }
}
