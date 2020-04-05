package com.puti.pachong.controller;

import com.alibaba.fastjson.JSONObject;
import com.puti.pachong.entity.Pachong;
import com.puti.pachong.service.PachongService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@Controller
@RequestMapping(value = "admin")
public class AdminController {

    @Autowired
    private PachongService pachongService;

    @RequestMapping("/index")
    public Object index(){
        return new ModelAndView("index").addObject("name","张三");
    }

    @RequestMapping("/list/view")
    public Object list(){
        List<Pachong> list = pachongService.list();
        return new ModelAndView("pachong/list").addObject("list",list);
    }






}
