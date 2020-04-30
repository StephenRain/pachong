package com.puti.pachong.example.wukong;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.puti.pachong.entity.http.HttpRequest;
import com.puti.pachong.http.HttpRestRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpMethod;

import java.util.*;

/*
自动答题处理器
 */
@Slf4j
public class AutoAnswerHandler {

    static List<Question> questionList = new LinkedList<>();
    private static String wukongUrl = "https://www.wukong.com/wenda/web/ugcinvited/bonus_question/?concern_id=5798809181&t=%s&activity=answer_get_bonus";
    private static String answerUrl = "https://www.wukong.com/wenda/web/commit/postanswer/?origin_source=answer_requesting_recommend&source=question_click_write_answer";

    public static void getQuestionList() {
        String url = String.format(wukongUrl, new Date().getTime());
        Map<String, String> headerMap = new HashMap<>();
        headerMap.put("referer", "https://www.wukong.com/winner/");
        headerMap.put("user-agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36");
        headerMap.put("cookie", "tt_webid=6815002425444304391; _ga=GA1.2.1254726838.1586741406; __utmz=182021921.1586741591.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); tt_webid=6815002425444304391; _gid=GA1.2.612486355.1586871534; __utma=182021921.1254726838.1586741406.1586939597.1586965392.5; passport_auth_status=9709191051bbdaa4c3dfe6f603f9b9c8%2C9d8bab7118a682b0ced310c063d9dfbb; sid_guard=1eaaf92e41e02c9619ed69035ceae7ff%7C1587057452%7C5184000%7CMon%2C+15-Jun-2020+17%3A17%3A32+GMT; uid_tt=571f5304ff0fc0efde8b53fd1b4728b7; uid_tt_ss=571f5304ff0fc0efde8b53fd1b4728b7; sid_tt=1eaaf92e41e02c9619ed69035ceae7ff; sessionid=1eaaf92e41e02c9619ed69035ceae7ff; sessionid_ss=1eaaf92e41e02c9619ed69035ceae7ff; wenda_login_status=1; wendacsrftoken=2a9911d0c66a87e5470ed57abcf93266; cookie_tt_page=585d43caf495105de716ffb4a1f2eb2b; s_v_web_id=k94e2zx4_Xo53PIIb_hzVZ_46WN_9xud_6WoxZq5ZOR1R; answer_enterFrom=; answer_finalFrom=https%3A%2F%2Fmp.toutiao.com%2Fprofile_v3%2Fgraphic%2Farticles; SLARDAR_WEB_ID=70a455dc-8a8a-4663-bdb8-7361032569d2");
        headerMap.put("wendacsrftoken", "wendacsrftoken: 2a9911d0c66a87e5470ed57abcf93266");
        HttpRequest httpRequest = HttpRequest.defaultGetRequest(wukongUrl, headerMap);
        HttpRestRequest restRequest = new HttpRestRequest();
        String response = restRequest.request(httpRequest);
        JSONObject jsonObject = JSONObject.parseObject(response);
        Integer errNo = jsonObject.getInteger("err_no");
        if (errNo != 0) {
            log.info("悟空问答问题接口返回错误");
            return;
        }
//        String extract = String.valueOf(JSONPath.extract(response, "$.wenda_invited_question_list[*].title"));
        JSONArray questionJSONArray = jsonObject.getJSONArray("wenda_invited_question_list");
        for (int i = 0; i < questionJSONArray.size(); i++) {
            JSONObject quesObj = questionJSONArray.getJSONObject(i);
            String qid = quesObj.getString("qid");
            String title = quesObj.getString("title");
            Question question = new Question(qid, title);
            questionList.add(question);
        }
    }

    public static void answer() {
        for (Question question : questionList) {
            HttpRequest httpRequest = new HttpRequest();
            httpRequest.setUrl(answerUrl);
            HashMap<String, String> bodyMap = new HashMap<>();
            httpRequest.setBody(bodyMap);
            bodyMap.put("qid", question.getQid());
            bodyMap.put("content", "我也不清楚");
            Map<String, String> headMap = new HashMap<>();
            headMap.put("Referer", "https://www.wukong.com/question/" + question.getQid() + "/?extra_tag=answer_get_bonus&origin_source=answer_requesting_recommend");
            headMap.put("wendacsrftoken", "2a9911d0c66a87e5470ed57abcf93266");
            headMap.put("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
            //headMap.put("Cookie","tt_webid=6815002425444304391; _ga=GA1.2.1254726838.1586741406; __utmz=182021921.1586741591.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); tt_webid=6815002425444304391; _gid=GA1.2.612486355.1586871534; __utma=182021921.1254726838.1586741406.1586939597.1586965392.5; passport_auth_status=9709191051bbdaa4c3dfe6f603f9b9c8%2C9d8bab7118a682b0ced310c063d9dfbb; sid_guard=1eaaf92e41e02c9619ed69035ceae7ff%7C1587057452%7C5184000%7CMon%2C+15-Jun-2020+17%3A17%3A32+GMT; uid_tt=571f5304ff0fc0efde8b53fd1b4728b7; uid_tt_ss=571f5304ff0fc0efde8b53fd1b4728b7; sid_tt=1eaaf92e41e02c9619ed69035ceae7ff; sessionid=1eaaf92e41e02c9619ed69035ceae7ff; sessionid_ss=1eaaf92e41e02c9619ed69035ceae7ff; wenda_login_status=1; wendacsrftoken=2a9911d0c66a87e5470ed57abcf93266; cookie_tt_page=585d43caf495105de716ffb4a1f2eb2b; s_v_web_id=k94e2zx4_Xo53PIIb_hzVZ_46WN_9xud_6WoxZq5ZOR1R; answer_finalFrom=https%3A%2F%2Fmp.toutiao.com%2Fprofile_v3%2Fgraphic%2Farticles; SLARDAR_WEB_ID=ee5a1237-8758-4543-8ba1-832f1b62c6d2; _gat=1; answer_enterFrom=");
            headMap.put("Cookie", "tt_webid=6815002425444304391; _ga=GA1.2.1254726838.1586741406; __utmz=182021921.1586741591.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); tt_webid=6815002425444304391; _gid=GA1.2.612486355.1586871534; __utma=182021921.1254726838.1586741406.1586939597.1586965392.5; passport_auth_status=9709191051bbdaa4c3dfe6f603f9b9c8%2C9d8bab7118a682b0ced310c063d9dfbb; sid_guard=1eaaf92e41e02c9619ed69035ceae7ff%7C1587057452%7C5184000%7CMon%2C+15-Jun-2020+17%3A17%3A32+GMT; uid_tt=571f5304ff0fc0efde8b53fd1b4728b7; uid_tt_ss=571f5304ff0fc0efde8b53fd1b4728b7; sid_tt=1eaaf92e41e02c9619ed69035ceae7ff; sessionid=1eaaf92e41e02c9619ed69035ceae7ff; sessionid_ss=1eaaf92e41e02c9619ed69035ceae7ff; wenda_login_status=1; wendacsrftoken=2a9911d0c66a87e5470ed57abcf93266; cookie_tt_page=585d43caf495105de716ffb4a1f2eb2b; s_v_web_id=k94e2zx4_Xo53PIIb_hzVZ_46WN_9xud_6WoxZq5ZOR1R; answer_finalFrom=https%3A%2F%2Fmp.toutiao.com%2Fprofile_v3%2Fgraphic%2Farticles; answer_enterFrom=; SLARDAR_WEB_ID=96e57332-e0c6-4942-9a79-c8627502ad23; _gat=1");
            httpRequest.setHeaders(headMap);
            HttpRestRequest restRequest = new HttpRestRequest();
            httpRequest.setType(HttpMethod.POST);
            String request = restRequest.request(httpRequest);
            System.out.println("request = " + request);
        }
    }


    public static void main(String[] args) {

        getQuestionList();
        answer();

    }

}
