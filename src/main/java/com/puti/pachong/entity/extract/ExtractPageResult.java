package com.puti.pachong.entity.extract;

import lombok.Data;

import java.util.LinkedList;
import java.util.List;

@Data
public class ExtractPageResult {


    //private Pachong pachong;

    //当前第几页
    private Integer currPage;

    private List<ExtractUnitResult> unitResultList;

    public ExtractPageResult addUnitResult(ExtractUnitResult unitResult) {
        if (unitResultList == null) {
            unitResultList = new LinkedList<>();
        }
        unitResultList.add(unitResult);
        return this;
    }
}
