package com.mindskip.xzs.domain.enums;

import java.util.HashMap;
import java.util.Map;

public enum QuestionTypeEnum {

    SingleChoice(1, "选择题"),
    TrueFalse(2, "判断题"),
    GapFilling(3, "填空题"),
    ShortAnswer(4, "简答题"),
    ProgramReading(5, "程序读题"),
    ProgramGapFilling(6, "程序完善题"),
    ProgramCoding(7, "编程题");

    int code;
    String name;

    QuestionTypeEnum(int code, String name) {
        this.code = code;
        this.name = name;
    }


    private static final Map<Integer, QuestionTypeEnum> keyMap = new HashMap<>();

    static {
        for (QuestionTypeEnum item : QuestionTypeEnum.values()) {
            keyMap.put(item.getCode(), item);
        }
    }

    public static QuestionTypeEnum fromCode(Integer code) {
        return keyMap.get(code);
    }

    public static boolean needSaveTextContent(Integer code) {
        QuestionTypeEnum questionTypeEnum = QuestionTypeEnum.fromCode(code);
        switch (questionTypeEnum) {
            case GapFilling:
            case ShortAnswer:
                return true;
            default:
                return false;
        }
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


}
