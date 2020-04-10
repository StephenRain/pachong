package com.puti.pachong.service;

import com.alibaba.fastjson.JSON;
import com.puti.pachong.dao.PachongDao;
import com.puti.pachong.entity.Pachong;
import com.puti.pachong.entity.ResultMsg;
import com.puti.pachong.entity.extract.ExtractPagination;
import com.puti.pachong.entity.extract.ExtractUnit;
import com.puti.pachong.entity.extract.PaginationResult;
import com.puti.pachong.entity.http.HttpRequest;
import com.puti.pachong.entity.proxy.FreeProxy;
import com.puti.pachong.handler.ExcelExportHandler;
import com.puti.pachong.handler.ResultExportHandler;
import com.puti.pachong.handler.TextFileExportHandler;
import com.puti.pachong.http.HttpRequester;
import com.puti.pachong.parser.HtmlParser;
import com.puti.pachong.parser.ParserFactory;
import com.puti.pachong.util.ProxyUtil;
import com.puti.pachong.util.TemplateUtil;
import io.micrometer.core.instrument.util.StringUtils;
import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Slf4j
public class PachongService {
    // 抓取页面的时间间隔
    private final Integer REQUEST_INTERVAL = 1000 * 2;

    @Autowired
    private PachongDao pachongDao;
    @Autowired
    @Qualifier("httpRestRequest")
    private HttpRequester httpRequester;

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
                String returnResult = "";
                if (StringUtils.isEmpty(pachong.getMethod()) || "get".equalsIgnoreCase(pachong.getMethod())) {
                    returnResult = httpRequester.getRequest(HttpRequest.defaultGetRequest(url, pachong.getHeaderMap()));
                    if (StringUtils.isEmpty(returnResult)) {
                        continue;
                    }
                }
                pagination.getUrlToExtractVal().put(url, returnResult);
                Thread.sleep(1500);
            }
        }

        HtmlParser parser = ParserFactory.getParser(pachong.getResponseType());
        ExtractUnit extractUnit = JSON.parseObject(pachong.getExtractUnit(), ExtractUnit.class);
        if (extractUnit == null || extractUnit.getPoints().stream().allMatch(e -> StringUtils.isEmpty(e.getSelector()))) {
            return ResultMsg.success(pagination);
        }
        PaginationResult paginationResult = parser.parse(pagination);

        ResultExportHandler resultExportHandler;
        if (pachong.getSaveType() == 0) {
            resultExportHandler = new ExcelExportHandler();
        } else {
            resultExportHandler = new TextFileExportHandler();
        }
        if (!paginationResult.isSuccess()) {
            return ResultMsg.error(paginationResult);
        }
        resultExportHandler.addExtractResult(paginationResult);
        resultExportHandler.handle();
        return ResultMsg.success(paginationResult);
    }

    @SneakyThrows
    public boolean insert(Pachong pachong) {
        checkProxy(pachong);
        pachongDao.insert(pachong);
        return true;
    }

    @SneakyThrows
    public void update(Pachong pachong) {
        checkProxy(pachong);
        pachongDao.update(pachong);
    }

    @SneakyThrows
    private void checkProxy(Pachong pachong) {
        String proxyFilePath = pachong.getProxyFilePath();
        List<String> strings;
        // 添加代理IP
        if (StringUtils.isNotEmpty(proxyFilePath)) {
            if (proxyFilePath.endsWith(".txt")) {
                strings = Files.readAllLines(Paths.get(proxyFilePath));
            } else if (proxyFilePath.contains(":")) {
                strings = Arrays.asList(proxyFilePath.split("\r\n"));
            } else {
                return;
            }
            List<FreeProxy> freeProxyList = strings.stream().map((e) -> {
                FreeProxy freeProxy = new FreeProxy();
                String[] split = e.split("\t");
                freeProxy.setIp(split[0]);
                freeProxy.setPort(Integer.parseInt(split[1]));
                return freeProxy;
            }).collect(Collectors.toList());
            List<FreeProxy> freeProxies = ProxyUtil.aliveProxyList(freeProxyList);
        }
    }
}
