package com.puti.pachong.controller;

import com.puti.pachong.entity.Pachong;
import com.puti.pachong.entity.ResultMsg;
import com.puti.pachong.service.PachongService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value = "detail", produces = "application/json; charset=utf-8")
public class PachongDetailController {

    @Autowired
    private PachongService pachongService;

    @RequestMapping("save")
    public Object save(Pachong pachong) {
        if (pachong == null) {
            return ResultMsg.paramError("参数不能为空");
        }
        if (pachong.getId() == null) {
            pachongService.insert(pachong.defaultVal());
        } else {
            pachongService.update(pachong.defaultVal());
        }
        return "redirect:/admin/list/view";
    }

}
