package com.puti.pachong.entity.http;

import com.puti.pachong.entity.proxy.FreeProxy;
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

    // 免费代理 如果不为空，就用代理
    private FreeProxy freeProxy;
    private int connectTimeOut;
    private int readTimeOut;

    public static HttpRequest defaultGetRequest(String url, Map<String, String> headers) {
        HttpRequest httpRequest = new HttpRequest();
        httpRequest.setUrl(url);
        httpRequest.setType(HttpMethod.GET);
        httpRequest.setHeaders(headers);
        return httpRequest;
    }

    public static HttpRequest defaultGetRequest(String url) {
        HttpRequest httpRequest = new HttpRequest();
        httpRequest.setUrl(url);
        httpRequest.setType(HttpMethod.GET);
        httpRequest.getHeaders().put("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.113 Safari/537.36");
        return httpRequest;
    }

    public void addHeader(String key, String value) {
        headers.put(key, value);
    }

    public void addPostField(String key, String value) {
        body.put(key, value);
    }


}
