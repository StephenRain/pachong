package com.puti.pachong.service;

import com.puti.pachong.dao.PachongDao;
import com.puti.pachong.entity.Pachong;
import com.puti.pachong.entity.ResultMsg;
import com.puti.pachong.helper.HttpRestHelper;
import com.puti.pachong.helper.ResultParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;

@Service
public class PachongService {

    @Autowired
    private PachongDao pachongDao;
    @Autowired
    private HttpRestHelper httpRestHelper;
    @Autowired
    private ResultParser resultParser;

    public List<Pachong> list(){
        return pachongDao.list();
    }

    public Pachong selectById(Integer id){
        return pachongDao.selectById(id);
    }

    public Object execute(Integer id) {
        Pachong pachong = this.selectById(id);
        String returnResult = "";
        if ("get".equalsIgnoreCase(pachong.getMethod())) {
            returnResult = httpRestHelper.getString(pachong.getUrl(), new HashMap<>());
        }

        if ("html".equalsIgnoreCase(pachong.getResponseType())) {
            return resultParser.parseHtml(returnResult, pachong);
        }
        return ResultMsg.success();
    }

    public void insert(Pachong pachong) {
        pachongDao.insert(pachong);
    }
}
