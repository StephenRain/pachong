package com.puti.pachong.entity.extract;

import com.puti.pachong.entity.Pachong;
import lombok.Data;
import org.apache.commons.collections4.CollectionUtils;

import java.util.LinkedList;
import java.util.List;

/**
 * 爬取页面经过处理后的最终结果
 */
@Data
public class PaginationResult {

    private Pachong pachong;
    private List<ExtractPageResult> pageResultList;
    private String msg;

    public static PaginationResult error(String msg) {
        PaginationResult result = new PaginationResult();
        result.setMsg(msg);
        return result;
    }

    public static PaginationResult success(List<ExtractPageResult> pageResultList) {
        PaginationResult result = new PaginationResult();
        result.setPageResultList(pageResultList);
        return result;
    }

    public PaginationResult addPageResult(ExtractPageResult pageResult) {
        if (CollectionUtils.isEmpty(pageResultList)) {
            pageResultList = new LinkedList<>();
        }
        pageResultList.add(pageResult);
        return this;
    }

}
