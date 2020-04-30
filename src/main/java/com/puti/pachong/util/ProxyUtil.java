package com.puti.pachong.util;

import com.puti.pachong.entity.http.HttpRequest;
import com.puti.pachong.entity.proxy.FreeProxy;
import com.puti.pachong.http.HttpRestRequest;
import io.micrometer.core.instrument.util.StringUtils;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.collections4.CollectionUtils;

import java.util.LinkedList;
import java.util.List;
import java.util.stream.Collectors;

@Slf4j
public class ProxyUtil {


    public static boolean isAlive(FreeProxy freeProxy) {
        HttpRestRequest restRequest = new HttpRestRequest();
        HttpRequest request = new HttpRequest();
        request.setUrl("https://www.google.com");
        request.setFreeProxy(freeProxy);
        request.setConnectTimeOut(3000);
        request.setReadTimeOut(2000);
        try {
            String res = restRequest.request(request);
            if (StringUtils.isEmpty(res)) {
                return false;
            }
        } catch (Exception e) {
            return false;
        }
        log.info("代理IP成活【" + freeProxy.getIp() + ":" + freeProxy.getPort() + "】");
        return true;
    }

    public static List<FreeProxy> aliveProxyList(List<FreeProxy> freeProxyList) {
        List<FreeProxy> resList = new LinkedList<>();
        if (CollectionUtils.isEmpty(freeProxyList)) {
            return resList;
        }
        return freeProxyList.stream().filter(ProxyUtil::isAlive).collect(Collectors.toList());
    }


}
