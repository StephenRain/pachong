package com.puti.pachong.vos;

import com.puti.pachong.entity.pachong.Pachong;
import io.micrometer.core.instrument.util.StringUtils;

public class PachongFormat {


    public static Pachong formatPachong(Pachong pachong) {
        if (StringUtils.isEmpty(pachong.getMethod())) {
            pachong.setMethod("GET");
        }
        if (StringUtils.isEmpty(pachong.getTargetSiteName())) {
            pachong.setTargetSiteName("自营");
        }
        if (StringUtils.isEmpty(pachong.getResponseType())) {
            pachong.setResponseType("HTML");
        }
        if (pachong.getExtractUnit() == null) {
            pachong.setExtractUnit("");
        }
        if (StringUtils.isEmpty(pachong.getUrlSmall())) {
            if (pachong.getUrl().length() > 30) {
                pachong.setUrlSmall(pachong.getUrl().substring(0, 30) + "...");
            } else {
                pachong.setUrlSmall(pachong.getUrl());
            }
        }
        return pachong;
    }
}
