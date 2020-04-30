package com.puti.pachong.service.wenda.impl;

import com.puti.pachong.entity.http.HttpRequest;
import com.puti.pachong.http.HttpRestRequest;
import com.puti.pachong.service.wenda.IAutoWendaService;
import io.micrometer.core.instrument.util.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BaiduWendaService implements IAutoWendaService {

    private String urlTemp = "https://www.baidu.com/s?ie=UTF-8&wd=%s";

    @Autowired
    private HttpRestRequest restRequest;


    @Override
    public String answer(String question) {
        String url = String.format(urlTemp, question);
        HttpRequest httpRequest = HttpRequest.defaultGetRequest(url);
        String response = restRequest.request(httpRequest);
        if (StringUtils.isEmpty(response)) {
            return "";
        }


        return null;
    }
}
