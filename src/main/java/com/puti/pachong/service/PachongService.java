package com.puti.pachong.service;

import com.puti.pachong.dao.PachongDao;
import com.puti.pachong.entity.Pachong;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PachongService {

    @Autowired
    private PachongDao pachongDao;

    public List<Pachong> list(){
        return pachongDao.list();
    }
}
