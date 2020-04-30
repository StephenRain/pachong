package com.puti.pachong.controller;

import com.puti.pachong.entity.ResultMsg;
import com.puti.pachong.entity.http.HttpRequest;
import com.puti.pachong.http.HttpRestRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/cross", produces = "application/json; charset=utf-8")
public class CrossOriginController {

    @Autowired
    private HttpRestRequest restRequest;

    @RequestMapping("/get")
    public ResultMsg getPage(String url) {
        HttpRequest httpRequest = HttpRequest.defaultGetRequest(url);
        String response = restRequest.request(httpRequest);
        return ResultMsg.success(response);
    }

}
