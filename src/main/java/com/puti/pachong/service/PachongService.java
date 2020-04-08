package com.puti.pachong.service;

import com.alibaba.fastjson.JSON;
import com.puti.pachong.dao.PachongDao;
import com.puti.pachong.entity.Pachong;
import com.puti.pachong.entity.ResultMsg;
import com.puti.pachong.entity.extract.ExtractPagination;
import com.puti.pachong.entity.extract.ExtractUnit;
import com.puti.pachong.entity.extract.PaginationResult;
import com.puti.pachong.entity.http.HttpRequest;
import com.puti.pachong.handler.ResultExportHandler;
import com.puti.pachong.http.HttpRequester;
import com.puti.pachong.parser.HtmlParser;
import com.puti.pachong.parser.ParserFactory;
import com.puti.pachong.util.TemplateUtil;
import io.micrometer.core.instrument.util.StringUtils;
import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class PachongService {

    @Autowired
    private PachongDao pachongDao;
    @Autowired
    @Qualifier("httpRestRequest")
    private HttpRequester httpRequester;
    @Autowired
    @Qualifier("resultExportHandler")
    private ResultExportHandler resultHandler;

    public List<Pachong> list() {
        return pachongDao.list();
    }

    public Pachong selectById(Integer id) {
        return pachongDao.selectById(id);
    }

    @SneakyThrows
    public ResultMsg execute(Integer id) {
        Pachong pachong = this.selectById(id);

        ExtractPagination pagination = new ExtractPagination();
        pagination.setPachong(pachong);
        String originUrlTemplate = pachong.getUrl();
        String[] originUrlList = originUrlTemplate.split(";");
        for (String urlSplitTemplate : originUrlList) {
            List<String> urlList = TemplateUtil.parseTemplate(urlSplitTemplate.trim());
            pagination.getRealUrlList().addAll(urlList);
            // 将分页中的所有页面地址爬取下来
            for (String url : urlList) {
                log.info("正在爬取:" + url);
                String returnResult = "";
                if (StringUtils.isEmpty(pachong.getMethod()) || "get".equalsIgnoreCase(pachong.getMethod())) {
                    returnResult = httpRequester.getRequest(HttpRequest.defaultGetRequest(url, pachong.getHeaderMap()));
                    if (StringUtils.isEmpty(returnResult)) {
                        continue;
                    }
                }
                pagination.getUrlToExtractVal().put(url, returnResult);
                Thread.sleep(20);
            }
        }

        HtmlParser parser = ParserFactory.getParser(pachong.getResponseType());
        ExtractUnit extractUnit = JSON.parseObject(pachong.getExtractUnit(), ExtractUnit.class);
        if (extractUnit == null || extractUnit.getPoints().stream().allMatch(e -> StringUtils.isEmpty(e.getSelector()))) {
            return ResultMsg.success(pagination);
        }
        PaginationResult paginationResult = parser.parse(pagination);
        resultHandler.addExtractResult(paginationResult);
        // 启动处理器
        new Thread(resultHandler).start();
        return ResultMsg.success(paginationResult);
    }

    public boolean insert(Pachong pachong) {
        pachongDao.insert(pachong);
        return true;
    }

    public void update(Pachong pachong) {
        pachongDao.update(pachong);
    }
}
