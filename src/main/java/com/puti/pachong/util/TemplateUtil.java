package com.puti.pachong.util;

import io.micrometer.core.instrument.util.StringUtils;
import lombok.extern.slf4j.Slf4j;

import java.util.Collections;
import java.util.LinkedList;
import java.util.List;
import java.util.regex.Pattern;

/**
 * 自定义模板语法的工具类
 * ${数字A-数字B}：生成该占位符 数字A到数字B中所有的数字分别替换后的结果
 */
@Slf4j
public class TemplateUtil {

    private static final String $_REG = "\\$\\{.+\\}";
    private static final String $_STR = "\\$";
    private static final String $_PLACE_REG = "\\$\\{%s+\\}";

    // 表示数字的区间范围
    private static final String NUMBER_RANGE = "[0-9]+-[0-9]+";


    public static boolean isTemplate(String str) {
        if (StringUtils.isEmpty(str)) {
            return false;
        }
        if (str.contains($_STR)) {
            String[] split = str.split($_STR);
            for (String s : split) {
                if (s.contains("}")) {
                    return true;
                }
            }
        }
        return false;
    }


    /**
     * 返回该模板表示的所有字符串
     */
    public static List<String> parseTemplate(String template) {
        if (isTemplate(template)) {
            return Collections.singletonList(template);
        }
        String[] tempSplitArr = template.split($_STR);
        int minNum = 1;
        int maxNum = 1;
        List<String> resStrList = new LinkedList<>();
        for (int i = 0; i < tempSplitArr.length; i++) {
            String tempSplit = tempSplitArr[i];
            if (tempSplit.startsWith("{")) {
                String keyword = tempSplit.substring(1, tempSplit.indexOf("}"));
                if (StringUtils.isNotEmpty(keyword)) {
                    boolean numberRange = Pattern.compile(NUMBER_RANGE).matcher(keyword).matches();
                    if (numberRange) {
                        String[] number = keyword.split("-");
                        int startNum = Integer.parseInt(number[0]);
                        int endNum = Integer.parseInt(number[1]);
                        minNum = Math.min(startNum, endNum);
                        maxNum = Math.max(startNum, endNum);
                    }
                }
            }
        }
        for (int j = minNum; j <= maxNum; j++) {
            String resStr = template.replaceAll(String.format($_PLACE_REG, NUMBER_RANGE), j + "");
            resStrList.add(resStr);
        }
        return resStrList;
    }


    public static void main(String[] args) {
        String input = "#utopia_widget_6 > div.demand-list > div:nth-child(${1-39}) > div.demand-card-body > div.demand-card-title-box > div > span.demand-title.demand-title-long > a";
        List<String> strings = TemplateUtil.parseTemplate(input);
        System.out.println("strings = " + strings);

    }


}
