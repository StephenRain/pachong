package com.puti.pachong.controller;

import com.puti.pachong.service.PachongService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "admin")
public class AdminController {

    @Autowired
    private PachongService pachongService;

    @RequestMapping("/list")
    public Object list(){
        return pachongService.list();
    }


}
