package com.puti.pachong.util;

import java.text.SimpleDateFormat;
import java.util.Date;

public class DateUtil {

    public static String nowFormat() {
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        return dateFormat.format(new Date());
    }

}
