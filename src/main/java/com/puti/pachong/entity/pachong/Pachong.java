package com.puti.pachong.entity.pachong;

import io.micrometer.core.instrument.util.StringUtils;
import lombok.Data;

import java.util.Arrays;
import java.util.LinkedHashMap;
import java.util.Map;

@Data
public class Pachong {

    private Integer id;
    private String url = "";
    // URL的省略，只显示前30个字符
    private String urlSmall = "";
    private String method = "GET";
    private String targetSiteName = "";
    private String responseType = "HTML";
    private String extractUnit = "";
    /**
     * 0刚创建
     * 1正在采集
     * 2采集完成
     * 3采集失败
     */
    private String status;
    /**
     * 爬取的结果 保存方式
     * 0：EXCEL
     * 1：TXT 文件
     */
    private String saveType;

    /**
     * 采集结果保存位置
     */
    private String resultPath;
    /**
     * 请求头信息
     * 格式:从浏览器中直接拷贝的请求头的格式
     * 如下：
     * referer: https://uland.taobao.com/sem/tbsearch?refpid=mm_26632258_3504122_32538762&keyword=%E5%A5%B3%E8%A3%85&clk1=f7659cf2a5a4b7192562be9245d20e2e&upsid=f7659cf2a5a4b7192562be9245d20e2e
     * sec-fetch-dest: script
     * sec-fetch-mode: no-cors
     * sec-fetch-site: same-site
     * user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36
     */
    private String headers;

    /**
     * 目前必须是文本文件格式，并且每个代理IP的ip和port是以\t分割
     * 若此项不为空，则使用代理
     */
    private String proxyFilePath;

    /**
     * 将headers转换为Map类型
     */
    public Map<String, String> getHeaderMap() {
        Map<String, String> map = new LinkedHashMap<>();
        if (StringUtils.isEmpty(this.getHeaders())) {
            return map;
        }
        String[] headerArr = headers.split("\r\n");
        Arrays.asList(headerArr).forEach((e) -> {
            String[] keyValArr = e.split(": ");
            map.put(keyValArr[0].replace(":", ""), keyValArr[1]);
        });
        return map;
    }


}
