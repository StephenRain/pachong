package com.puti.pachong.entity.proxy;

import lombok.Data;

import java.util.Date;

/**
 * 免费的代理
 */
@Data
public class FreeProxy {

    private Integer id;
    private String ip;
    private Integer port;
    private boolean alive;
    private Integer responseTime;// 响应时间 ms
    private Date lastCheckDate;
}
