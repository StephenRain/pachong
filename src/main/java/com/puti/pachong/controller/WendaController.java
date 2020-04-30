package com.puti.pachong.controller;

import com.puti.pachong.entity.ResultMsg;
import com.puti.pachong.handler.AutoWendaHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/wenda", produces = "application/json; charset=utf-8")
public class WendaController {

    @Autowired
    private AutoWendaHandler wendaHandler;


    @RequestMapping(value = "/answer")
    public ResultMsg answer(String question) {
        return ResultMsg.success(wendaHandler.answer(question));
    }


}
