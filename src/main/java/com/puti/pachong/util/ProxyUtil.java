package com.puti.pachong.util;

import com.puti.pachong.entity.http.HttpRequest;
import com.puti.pachong.entity.proxy.FreeProxy;
import com.puti.pachong.http.HttpRestRequest;
import io.micrometer.core.instrument.util.StringUtils;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class ProxyUtil {


    public static boolean isAlive(FreeProxy freeProxy) {
        HttpRestRequest restRequest = new HttpRestRequest();
        HttpRequest request = new HttpRequest();
        request.setUrl("https://www.baidu.com");
        request.setFreeProxy(freeProxy);
        request.setConnectTimeOut(4000);
        request.setReadTimeOut(3000);
        try {
            String res = restRequest.getRequest(request);
            if (StringUtils.isEmpty(res)) {
                return false;
            }
        } catch (Exception e) {
            return false;
        }

        return true;
    }

}
