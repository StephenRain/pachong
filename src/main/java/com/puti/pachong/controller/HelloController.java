package com.puti.pachong.controller;

import com.alibaba.fastjson.JSON;
import com.puti.pachong.entity.ResultMsg;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;

@RestController
@RequestMapping(value = "/test",produces = "application/json; charset=utf-8")
public class HelloController{

    @RequestMapping("/hi")
    public Object hello(){
        HashMap<Object, Object> map =
                new HashMap<>();
        map.put("adf","哈哈哈");
        return map;
    }

}
