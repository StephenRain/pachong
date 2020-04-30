package com.puti.pachong.http;

import com.puti.pachong.entity.http.HttpRequest;

/**
 * Http请求器
 */

public interface HttpRequester {


    String request(HttpRequest httpRequest);

}
