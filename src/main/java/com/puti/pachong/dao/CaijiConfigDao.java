package com.puti.pachong.dao;

import com.puti.pachong.entity.pachong.CaijiConfig;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Component;

@Mapper
@Component
public interface CaijiConfigDao {

    @Insert("insert into caijiConfig values(#{exportDir})")
    int insert(CaijiConfig caijiConfig);

    @Select("select * from caijiConfig limit 1")
    CaijiConfig getFirst();


}
