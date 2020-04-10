package com.puti.pachong.dao;

import com.puti.pachong.entity.Pachong;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Component;

import java.util.List;

@Mapper
@Component
public interface PachongDao {

    @Select("select * from pachong")
    List<Pachong> list();

    @Select("select * from pachong where id=#{id}")
    Pachong selectById(Integer id);

    @Insert("insert into pachong (url,method,targetSiteName,responseType,extractUnit,saveType,headers,status,resultPath) values(#{url},#{method},#{targetSiteName},#{responseType},#{extractUnit},#{saveType},#{headers},#{status},#{resultPath})")
    void insert(Pachong pachong);

    @Update("update pachong set url=#{url},method=#{method},targetSiteName=#{targetSiteName},responseType=#{responseType},extractUnit=#{extractUnit},saveType=#{saveType},headers=#{headers},status=#{status},resultPath=#{resultPath} where id=#{id}")
    void update(Pachong pachong);

    @Delete("delete from pachong where id=#{id}")
    int delete(Integer id);
}
