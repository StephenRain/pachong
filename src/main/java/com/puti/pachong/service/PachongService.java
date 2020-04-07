package com.puti.pachong.service;

import com.puti.pachong.dao.PachongDao;
import com.puti.pachong.entity.Pachong;
import com.puti.pachong.entity.ResultMsg;
import com.puti.pachong.entity.extract.ExtractPagination;
import com.puti.pachong.entity.extract.PaginationResult;
import com.puti.pachong.handler.ResultExportHandler;
import com.puti.pachong.helper.HttpRestHelper;
import com.puti.pachong.parser.HtmlParser;
import com.puti.pachong.parser.ParserFactory;
import com.puti.pachong.util.TemplateUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;

@Service
@Slf4j
public class PachongService {

    @Autowired
    private PachongDao pachongDao;
    @Autowired
    private HttpRestHelper httpRestHelper;
    @Autowired
    @Qualifier("resultExportHandler")
    private ResultExportHandler resultHandler;

    public List<Pachong> list() {
        return pachongDao.list();
    }

    public Pachong selectById(Integer id) {
        return pachongDao.selectById(id);
    }

    public Object execute(Integer id) {
        Pachong pachong = this.selectById(id);
        ExtractPagination pagination = new ExtractPagination();
        pagination.setPachong(pachong);
        List<String> urlList = TemplateUtil.parseTemplate(pachong.getUrl());
        pagination.setUrlList(urlList);
        // 将分页中的所有页面地址爬取下来
        for (String url : urlList) {
            log.info("正在爬取:" + url);
            String returnResult = "";
            if ("get".equalsIgnoreCase(pachong.getMethod())) {
                returnResult = httpRestHelper.getString(url, new HashMap<>());
            }
            pagination.getUrlToExtractVal().put(url, returnResult);
        }
        HtmlParser parser = ParserFactory.getParser(pachong.getResponseType());
        PaginationResult paginationResult = parser.parse(pagination);
        resultHandler.addExtractResult(paginationResult);
        // 启动处理器
        new Thread(resultHandler).start();
        return ResultMsg.success();
    }

    public boolean insert(Pachong pachong) {
        pachongDao.insert(pachong);
        return true;
    }

    public void update(Pachong pachong) {
        pachongDao.update(pachong);
    }
}
