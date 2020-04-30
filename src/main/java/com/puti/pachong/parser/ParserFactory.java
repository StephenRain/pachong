package com.puti.pachong.parser;

import com.puti.pachong.util.SpringUtil;
import io.micrometer.core.instrument.util.StringUtils;
import org.springframework.stereotype.Component;

@Component
public class ParserFactory {


    public static HtmlParser getParser(String responseType) {
        if (StringUtils.isEmpty(responseType) || "html".equalsIgnoreCase(responseType)) {
            return SpringUtil.getBean(HtmlParser.class);
        } else {

        }
        return SpringUtil.getBean(HtmlParser.class);
    }

}
