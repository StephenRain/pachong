package com.puti.pachong.dao;

import com.puti.pachong.entity.Pachong;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import org.springframework.stereotype.Component;

import java.util.List;

@Mapper
@Component
public interface PachongDao {

    @Select("select * from pachong")
    List<Pachong> list();

    @Select("select * from pachong where id=#{id}")
    Pachong selectById(Integer id);

    @Insert("insert into pachong (url,method,weituofang,responseType,extractUnit,saveType,headers,proxyFilePath) values(#{url},#{method},#{weituofang},#{responseType},#{extractUnit},#{saveType},#{headers},#{proxyFilePath})")
    void insert(Pachong pachong);

    @Update("update pachong set url=#{url},method=#{method},weituofang=#{weituofang},responseType=#{responseType},extractUnit=#{extractUnit},saveType=#{saveType},headers=#{headers},proxyFilePath=#{proxyFilePath} where id=#{id}")
    void update(Pachong pachong);
}
