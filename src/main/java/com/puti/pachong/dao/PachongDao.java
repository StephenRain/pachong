package com.puti.pachong.dao;

import com.puti.pachong.entity.Pachong;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Component;

import java.util.List;

@Mapper
@Component
public interface PachongDao {

    @Select("select * from pachong")
    List<Pachong> list();

    @Select("select * from pachong where id=#{id}")
    Pachong selectById(Integer id);

}
