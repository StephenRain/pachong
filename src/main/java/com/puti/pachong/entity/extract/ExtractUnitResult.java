package com.puti.pachong.entity.extract;

import lombok.Data;

import java.util.LinkedList;
import java.util.List;

/**
 * 表示抓取单元提取后的结果，包含多个抓取点结果
 */
@Data
public class ExtractUnitResult {

    private List<ExtractPointResult> pointResultList;

    public ExtractUnitResult addPointResult(ExtractPointResult extractPointResult) {
        if (pointResultList == null) {
            pointResultList = new LinkedList<>();
        }
        pointResultList.add(extractPointResult);
        return this;
    }


}
