package com.puti.pachong.helper;

import org.springframework.stereotype.Component;
import org.springframework.util.CollectionUtils;
import org.springframework.web.client.RestTemplate;

import java.util.Map;

@Component
public class HttpRestHelper {


    public String getString(String url, Map<String,Object> paramMap){
        RestTemplate restTemplate = new RestTemplate();
        if (!url.startsWith("http")) {
            url = "http://" + url;
        }
        StringBuilder builder = new StringBuilder(url);
        if (!CollectionUtils.isEmpty(paramMap)) {
            if (!url.endsWith("?")) {
                builder.append("?");
            }
            for(String key : paramMap.keySet()) {
                builder.append(key).append("=").append(paramMap.get(key)).append("&");
            }
        }
        return restTemplate.getForObject(builder.toString(),String.class);
    }

}
