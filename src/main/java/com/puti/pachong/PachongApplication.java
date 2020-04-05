package com.puti.pachong;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.puti.pachong.dao")
public class PachongApplication {

    public static void main(String[] args) {
        SpringApplication.run(PachongApplication.class, args);
    }

}
