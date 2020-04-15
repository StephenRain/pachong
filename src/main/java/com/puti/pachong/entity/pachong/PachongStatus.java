package com.puti.pachong.entity.pachong;

public enum PachongStatus {

    NEW("新建"), RUNNINT("运行"), DONE("完成"), FAIL("失败");

    private String desc;

    PachongStatus(String desc) {
        this.desc = desc;
    }

    public String getDesc() {
        return desc;
    }

    @Override
    public String toString() {
        return "PachongStatus{" +
                "desc='" + desc + '\'' +
                '}';
    }
}
