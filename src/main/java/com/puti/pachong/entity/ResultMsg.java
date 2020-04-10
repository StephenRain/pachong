package com.puti.pachong.entity;

import com.puti.pachong.entity.extract.PaginationResult;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ResultMsg {

    /**
     * 状态码
     * 0：成功
     * 1：正在计算中
     * -1：参数错误
     */
    private Integer code;
    private String msg;
    private Object data;


    public static ResultMsg paramError(String msg) {
        ResultMsg resultMsg = new ResultMsg();
        resultMsg.setCode(-1);
        resultMsg.setMsg(msg);
        return resultMsg;
    }

    public static ResultMsg error(PaginationResult result) {
        ResultMsg resultMsg = new ResultMsg();
        resultMsg.setCode(-1);
        resultMsg.setMsg(resultMsg.getMsg());
        resultMsg.setData(null);
        return resultMsg;
    }


    public static ResultMsg success() {
        ResultMsg resultMsg = new ResultMsg();
        resultMsg.setMsg("SUCCESS");
        resultMsg.setCode(0);
        return resultMsg;
    }

    public static ResultMsg success(Object data) {
        ResultMsg resultMsg = success();
        resultMsg.setData(data);
        return resultMsg;
    }


}
