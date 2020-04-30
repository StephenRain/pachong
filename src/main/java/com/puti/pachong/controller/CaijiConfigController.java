package com.puti.pachong.controller;

import com.puti.pachong.entity.ResultMsg;
import com.puti.pachong.entity.pachong.CaijiConfig;
import com.puti.pachong.service.CaijiConfigService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping(value = "/caiji")
public class CaijiConfigController {

    @Autowired
    private CaijiConfigService caijiConfigService;

    @RequestMapping("config/view")
    public Object toConfigView() {
        CaijiConfig config = caijiConfigService.getFirst();
        return new ModelAndView("pachong/config").addObject("config", config);
    }

    @ResponseBody
    @RequestMapping(value = "config", produces = "application/json; charset=utf-8")
    public ResultMsg config(CaijiConfig caijiConfig) {
        caijiConfigService.insert(caijiConfig);
        return ResultMsg.success();
    }


}
