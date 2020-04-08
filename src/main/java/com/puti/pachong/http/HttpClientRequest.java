package com.puti.pachong.http;

import com.puti.pachong.entity.http.HttpRequest;
import com.puti.pachong.entity.http.HttpRes;
import com.puti.pachong.util.HttpClientUtil;
import org.springframework.stereotype.Component;

@Component
public class HttpClientRequest implements HttpRequester {

    @Override
    public String getRequest(HttpRequest httpRequest) {
        HttpRes httpRes = HttpClientUtil.getInstace().request(httpRequest, httpRequest.isUseProxy());
        return httpRes.getContent();
    }
}
