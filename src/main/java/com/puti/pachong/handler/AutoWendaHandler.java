package com.puti.pachong.handler;

import com.puti.pachong.service.wenda.impl.BaiduWendaService;
import com.puti.pachong.service.wenda.impl.ZhihuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class AutoWendaHandler {

    @Autowired
    private ZhihuService zhihuService;
    @Autowired
    private BaiduWendaService baiduWendaService;

    public String answer(String question) {
        String answer = zhihuService.answer(question);
        return answer;
    }


}
