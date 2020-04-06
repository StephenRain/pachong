package com.puti.pachong.controller;

import com.puti.pachong.entity.Pachong;
import com.puti.pachong.entity.ResultMsg;
import com.puti.pachong.service.PachongService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping(value = "detail",produces = "application/json; charset=utf-8")
public class PachongDetailController {

    @Autowired
    private PachongService pachongService;

    @ResponseBody
    @RequestMapping("execute")
    public Object execute(Integer id) {
        return pachongService.execute(id);
    }

    @RequestMapping("save")
    public Object save(Pachong pachong) {
        if (pachong == null) {
            return ResultMsg.paramError("参数不能为空");
        }
        if (pachong.getId() == null) {
            pachongService.insert(pachong);
        } else {
            pachongService.update(pachong);
        }
        return new ModelAndView("admin/list/view");
    }

}
