package com.puti.pachong.http;

import com.alibaba.fastjson.JSON;
import com.puti.pachong.entity.http.HttpRequest;
import com.puti.pachong.entity.proxy.FreeProxy;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.*;
import org.springframework.http.client.SimpleClientHttpRequestFactory;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.StringHttpMessageConverter;
import org.springframework.stereotype.Component;
import org.springframework.util.CollectionUtils;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import java.net.InetSocketAddress;
import java.nio.charset.Charset;
import java.util.List;
import java.util.Map;

/**
 * 使用的是RestTemplate
 */
@Component
@Slf4j
public class HttpRestRequest implements HttpRequester {

    public static RestTemplate getInstance(HttpRequest httpRequest) {
        int connectTimeOut = httpRequest.getConnectTimeOut() == 0 ? 2000 : httpRequest.getConnectTimeOut();
        int readTimeOut = httpRequest.getReadTimeOut() == 0 ? 2000 : httpRequest.getReadTimeOut();
        RestTemplate restTemplate = new RestTemplate();
        final FreeProxy freeProxy = httpRequest.getFreeProxy();
        if (freeProxy != null) {
            restTemplate = new RestTemplate(new SimpleClientHttpRequestFactory() {{
                setProxy(new java.net.Proxy(java.net.Proxy.Type.HTTP, new InetSocketAddress(freeProxy.getIp(), freeProxy.getPort())));
                setConnectTimeout(connectTimeOut);
                setReadTimeout(readTimeOut);
            }});
        }
        List<HttpMessageConverter<?>> list = restTemplate.getMessageConverters();
        for (HttpMessageConverter<?> httpMessageConverter : list) {
            if (httpMessageConverter instanceof StringHttpMessageConverter) {
                ((StringHttpMessageConverter) httpMessageConverter).setDefaultCharset(Charset.forName(httpRequest.getCharset()));
                break;
            }
        }
        return restTemplate;
    }

    /**
     * 请求
     */
    @Override
    public String request(HttpRequest httpRequest) {
        String url = httpRequest.getUrl();
        String resultContent = "";
        Map<String, String> paramMap = httpRequest.getParams();
        RestTemplate restTemplate = getInstance(httpRequest);
        if (!url.startsWith("http")) {
            url = "http://" + url;
        }
        StringBuilder builder = new StringBuilder(url);
        if (!CollectionUtils.isEmpty(paramMap)) {
            if (!url.endsWith("?")) {
                builder.append("?");
            }
            for (String key : paramMap.keySet()) {
                builder.append(key).append("=").append(paramMap.get(key)).append("&");
            }
        }
        HttpHeaders headers = new HttpHeaders();
        httpRequest.getHeaders().forEach(headers::add);

        // 设置请求体
        final HttpEntity entity;
        if (!CollectionUtils.isEmpty(httpRequest.getBody())) {
            Map<String, String> body = httpRequest.getBody();

            if (MediaType.APPLICATION_FORM_URLENCODED.equals(headers.getContentType())) {
                MultiValueMap<String, String> params = new LinkedMultiValueMap<String, String>();
                body.forEach(params::add);
                entity = new HttpEntity<>(params, headers);
            } else {
                String bodyStr = JSON.toJSONString(body);
                entity = new HttpEntity<>(bodyStr, headers);
            }
        } else {
            entity = new HttpEntity<>(headers);
        }

        try {
            ResponseEntity<String> responseEntity = restTemplate.exchange(builder.toString(), httpRequest.getType(), entity, String.class);
            HttpStatus statusCode = responseEntity.getStatusCode();
            if (!HttpStatus.OK.equals(statusCode)) {
                log.info(url + ":请求失败:" + statusCode);
                log.info(responseEntity.getBody());
                return resultContent;
            }
            resultContent = responseEntity.getBody();
        } catch (Exception e) {
            log.error(e.getMessage());
        }
        return resultContent;
    }

}
