package com.puti.pachong.entity;
import lombok.Data;

import java.util.List;
import java.util.Map;

@Data
public class PageExtract {

    private Integer pachongId;

    private List<ExtractPoint> extractPointList;

}
