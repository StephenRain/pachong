package com.puti.pachong.util;

import com.puti.pachong.entity.proxy.FreeProxy;
import org.junit.jupiter.api.Test;

class ProxyUtilTest {

    @Test
    void isAlive() {
        FreeProxy freeProxy = new FreeProxy();
        freeProxy.setIp("99.79.83.80");
        freeProxy.setPort(80);
        boolean alive = ProxyUtil.isAlive(freeProxy);
        System.out.println("alive = " + alive);
    }
}