package com.puti.pachong.entity.extract;

import lombok.Data;

import java.util.List;

/**
 * 表示被抓取页面的一个单元，包含多个ExtractPoint
 * 比如 一个商品的信息，包括 名称，价格，店铺 等等
 */
@Data
public class ExtractUnit {

    private List<ExtractPoint> points;


}
