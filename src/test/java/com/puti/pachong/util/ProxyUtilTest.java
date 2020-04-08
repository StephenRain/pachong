package com.puti.pachong.util;

import com.puti.pachong.entity.proxy.FreeProxy;
import org.junit.jupiter.api.Test;

class ProxyUtilTest {

    @Test
    void isAlive() {
        FreeProxy freeProxy = new FreeProxy();
        freeProxy.setIp("14.20.235.88");
        freeProxy.setPort(808);
        boolean alive = ProxyUtil.isAlive(freeProxy);
        System.out.println("alive = " + alive);
    }
}