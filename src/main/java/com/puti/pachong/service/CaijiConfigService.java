package com.puti.pachong.service;

import com.puti.pachong.dao.CaijiConfigDao;
import com.puti.pachong.entity.pachong.CaijiConfig;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CaijiConfigService {

    @Autowired
    private CaijiConfigDao configDao;

    public int insert(CaijiConfig caijiConfig) {
        return configDao.insert(caijiConfig);
    }

    public CaijiConfig getFirst() {
        CaijiConfig config = configDao.getFirst();
        if (config == null) {
            config = new CaijiConfig();
            config.setExportDir("E://采集导出/");
        }
        return config;
    }

}
