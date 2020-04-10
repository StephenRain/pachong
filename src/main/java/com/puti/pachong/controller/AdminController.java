package com.puti.pachong.controller;

import com.puti.pachong.entity.Pachong;
import com.puti.pachong.service.PachongService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@Controller
@RequestMapping(value = "admin")
public class AdminController {

    @Autowired
    private PachongService pachongService;

    @RequestMapping("/index")
    public Object index() {
        return new ModelAndView("index").addObject("name", "张三");
    }

    @RequestMapping("/list/view")
    public Object list() {
        List<Pachong> list = pachongService.list();
        list.forEach((e) -> {
            if (e.getUrl().length() > 30) {
                e.setUrlSmall(e.getUrl().substring(0, 30) + "...");
            }
        });
        return new ModelAndView("pachong/list").addObject("list", list);
    }

    @RequestMapping("detail/view")
    public Object detail(Integer id) {
        if (id == null) {
            return new ModelAndView("pachong/detail");
        }
        Pachong pachong = pachongService.selectById(id);
        return new ModelAndView("pachong/detail").addObject("pachong", pachong);
    }

    @RequestMapping("execute")
    public Object execute(Integer id) {
        new Thread(() -> {
            pachongService.execute(id);
        }).start();
        return "redirect:/admin/list/view";
    }

    @RequestMapping("delete")
    public Object delete(Integer id) {
        pachongService.delete(id);
        return "redirect:/admin/list/view";
    }
}
