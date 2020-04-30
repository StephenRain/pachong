package com.puti.pachong.service.wenda.impl;


import com.puti.pachong.entity.http.HttpRequest;
import com.puti.pachong.http.HttpRestRequest;
import com.puti.pachong.service.wenda.IAutoWendaService;
import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.net.URLEncoder;
import java.util.Date;

@Service
public class ZhihuService implements IAutoWendaService {

    private String urlTemp = "https://www.zhihu.com/api/v4/search_v3?t=general&q=%s&correction=1&offset=0&limit=20&lc_idx=0&show_all_topics=0";

    @Autowired
    private HttpRestRequest restRequest;

    @Override
    @SneakyThrows
    public String answer(String question) {
        HttpRequest httpRequest = HttpRequest.defaultGetRequest(String.format(urlTemp, question));
        httpRequest.getHeaders().put("referer", "https://www.zhihu.com/search?type=content&q=" + URLEncoder.encode(question, "utf-8"));
        httpRequest.getHeaders().put("cookie", "_xsrf=cI9eZEtE5NPwXNz3A5XVxFIY36x7halv; _zap=69563ced-3661-4a7c-ba3a-13fba0632161; d_c0=\"AIDVfzOAJRGPTvHJ5vQFoh1blPCmnYr5sI0=|1587354411\"; Hm_lvt_98beee57fd2ef70ccdd5ca52b9740c49=1587353214,1587353220,1587353279,1587354412; _ga=GA1.2.1311183132.1587354412; _gid=GA1.2.1382588795.1587354412; capsion_ticket=\"2|1:0|10:1587364010|14:capsion_ticket|44:ODJjMTZjNTY2MmVlNDdlZDg1MzM1ZjEwMmFkZWIwN2I=|4195dc89e78601ab1296ef5371544834e3deb1e5c94fc3f3c82c8064c2016bc5\"; z_c0=\"2|1:0|10:1587364042|4:z_c0|92:Mi4xZXFZaURRQUFBQUFBZ05WX000QWxFU1lBQUFCZ0FsVk55bzZLWHdCY3NSa2xjSF9nMEF0QkZWMW5xekduRTdrTThR|cc1f8b948e4fd6b929fb95c7aee8d25566c579808fb2dc5567839af2bc63fd90\"; unlock_ticket=\"AABpKRl3gQ4mAAAAYAJVTdJHnV4HWa3Ov0Y4RWX1UkTlxA1oeXrzCg==\"; Hm_lpvt_98beee57fd2ef70ccdd5ca52b9740c49=1587365138; KLBRSID=b33d76655747159914ef8c32323d16fd|" + (new Date().getTime()) + "|1587363957");
        String response = restRequest.request(httpRequest);

        return response;
    }
}
