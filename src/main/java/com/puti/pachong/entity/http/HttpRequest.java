package com.puti.pachong.entity.http;

import lombok.Data;
import org.springframework.http.HttpMethod;

import java.util.HashMap;
import java.util.Map;

/**
 * @author yaotianchi
 * @date 2019/8/19
 */
@Data
public class HttpRequest {

    protected String url;

    protected HttpMethod type = HttpMethod.GET;

    protected String charset = "utf-8";

    protected boolean useProxy = false;

    protected Map<String, String> params = new HashMap<>(8);

    protected Map<String, String> cookies = new HashMap<>(8);

    protected Map<String, String> headers = new HashMap<>(16);

    protected Map<String, String> body = new HashMap<>(16);

    public static HttpRequest defaultGetRequest(String url, Map<String, String> headers) {
        HttpRequest httpRequest = new HttpRequest();
        httpRequest.setUrl(url);
        httpRequest.setType(HttpMethod.GET);
        httpRequest.setHeaders(headers);
        return httpRequest;
    }

    public void addHeader(String key, String value) {
        headers.put(key, value);
    }

    public void addPostField(String key, String value) {
        body.put(key, value);
    }


}
