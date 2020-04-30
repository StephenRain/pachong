package com.puti.pachong.jdk;

import org.junit.jupiter.api.Test;

public class ThreadLocalTest {


    @Test
    public void test1() {
        ThreadLocal<String> threadLocal = new ThreadLocal<>();
        threadLocal.set("lisi");


        String s = threadLocal.get();
        System.out.println("s = " + s);

    }
}
