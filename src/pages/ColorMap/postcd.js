
import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

import HEADER from '../../components/Header';
import {
    ShortTextAnswer,
    RadioSelection,
    LargeTextAnswer,
    SliderQuesiton,
    SliderQuestionMoreOptions,
    EmotionModel,
} from '../../components/questionforms';

import { useAlert, types } from 'react-alert'


import {
    Slider,
} from "@mui/material";


import CustomLoading from "../../components/CustomLoading";

const keyOrder = [
    "PAName",
    "RadioForPACondition",
    "SurveyStartTime",
    "SSQ_1",
    "SSQ_2",
    "SSQ_3",
    "SSQ_4",
    "SSQ_5",
    "SSQ_6",
    "SSQ_7",
    "SSQ_8",
    "SSQ_9",
    "SSQ_10",
    "SSQ_11",
    "SSQ_12",
    "SSQ_13",
    "SSQ_14",
    "SSQ_15",
    "SSQ_16",
    "NAUSEA",
    "Oculomotor",
    "Disorientation",
    "SSQTotal",
    "XRSQ_7",
    "XRSQ_8",
    "XRSQ_9",
    "XRSQ_Oculomotor",
    "XRSQ_Disorientation",
    "XRSQ_Autonomic",
    "XRSQ_Total",
    "TLX_1",
    "TLX_2",
    "TLX_3",
    "TLX_4",
    "TLX_5",
    "TLX_6",
    "TLX_7",
    "TLX_8",
    "TLX_9",
    "TLX_10",
    "CS_1",
    "CS_2",
    "CS_3",
    "CS_4",
    "CS_5",
    "CS_6",
    "SP_1",
    "SP_2",
    "SP_3",
    "SP_4",
    "SP_5",
    "SP_6",
    "SP_7",
    "SP_8",
    "SP_9",
    "SP_10",
    "SP_11",
    "SP_12",
    "SP_13",
    "SP_14",
    "SP_15",
    "SP_16",
    "SP_17",
    "SP_18",
    "SP_R_1",
    "SP_R_2",
    "SP_R_3",
    "SP_R_4",
    "SP_R_5",
    "SP_R_6",

    "MISC",
    "PAComment",
    "PerceivedWidth",
    "PerceivedDepth",
    "PerceivedHeight"
];


function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "instant" // 부드러운 스크롤을 위해 behavior 속성을 사용
    });
}

function PostCD() {
    const alert = useAlert()

    const [showLoad, setShowLoad] = useState(false);

    const [formData, setFormData] = useState({
        PAName: "",
        RadioForPACondition: "",
        SurveyStartTime: "",

        SSQ_1: "",
        SSQ_2: "",
        SSQ_3: "",
        SSQ_4: "",
        SSQ_5: "",
        SSQ_6: "",
        SSQ_7: "",
        SSQ_8: "",
        SSQ_9: "",
        SSQ_10: "",
        SSQ_11: "",
        SSQ_12: "",
        SSQ_13: "",
        SSQ_14: "",
        SSQ_15: "",
        SSQ_16: "",

        XRSQ_7: "",
        XRSQ_8: "",
        XRSQ_9: "",

        NAUSEA: "",
        Oculomotor: "",
        Disorientation: "",
        SSQTotal: "",

        XRSQ_Oculomotor: "",
        XRSQ_Disorientation: "",
        XRSQ_Autonomic: "",
        XRSQ_Total: "",

        TLX_1: "",
        TLX_2: "",
        TLX_3: "",
        TLX_4: "",
        TLX_5: "",
        TLX_6: "",
        TLX_7: "",
        TLX_8: "",
        TLX_9: "",
        TLX_10: "",

        CS_1: "",
        CS_2: "",
        CS_3: "",
        CS_4: "",
        CS_5: "",
        CS_6: "",


        SP_1: "",
        SP_2: "",
        SP_3: "",
        SP_4: "",
        SP_5: "",
        SP_6: "",
        SP_7: "",
        SP_8: "",
        SP_9: "",
        SP_10: "",
        SP_11: "",
        SP_12: "",
        SP_13: "",
        SP_14: "",
        SP_15: "",
        SP_16: "",
        SP_17: "",
        SP_18: "",

        SP_R_1: "",
        SP_R_2: "",
        SP_R_3: "",
        SP_R_4: "",
        SP_R_5: "",
        SP_R_6: "",




        MISC: "",
        PAComment: "",

        PerceivedWidth: "",
        PerceivedDepth: "",
        PerceivedHeight: "",
    })




    const handleSubmit = async (formValues) => {

        setShowLoad(true);

        const body = new URLSearchParams();

        for (const key of keyOrder) {
            const value = formValues[key];
            // console.log(value);
            body.append(key, value);
        }


        const link = "https://script.google.com/macros/s/AKfycbwwoBAt931EBVO0upEgyCzAd2zD_mV-9KIX0tAbbLjFX8HjyHRwIyCVvCP_MxWOIz3v/exec";
        const response = await fetch(link, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: body,
        });

        const data = await response.text();

        console.log(data);
        if (data === "Success") {
            document.getElementById("TabDone").click();
            setShowLoad(false);
        }
        else {
            setShowLoad(false);
        }
    };

    function formatCurrentTime() {
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        const ampm = hours >= 12 ? '오후' : '오전';

        const formattedDate = `${year}. ${month}. ${day}.`;
        let formattedHours = hours % 12;
        formattedHours = formattedHours ? formattedHours : 12;
        const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
        const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

        const formattedTime = `${ampm} ${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
        const formattedDateTime = `${formattedDate} ${formattedTime}`;

        return formattedDateTime;
    }


    useEffect(() => {
        console.log(formData);
    }, [formData]);

    const handleQuestionChange = (question, answer) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [question]: answer,
        }));
    };


    const shuffleContents = () => {
        // const t_ipq = [...contentIPQ].sort(() => Math.random() - 0.5);
        // setContentIPQ(t_ipq);

        // const shuffledContentsSUS = [...SUSContents].sort(() => Math.random() - 0.5);
        // SetSUSContents(shuffledContentsSUS);

        const t_ssq = [...SSQContents].sort(() => Math.random() - 0.5);
        SetSSQContents(t_ssq);

        const t_tlx = [...TLXContents].sort(() => Math.random() - 0.5);
        SetTLXContents(t_tlx);

        const t_sp = [...SPContents].sort(() => Math.random() - 0.5);
        SetSPContents(t_sp);


    };

    useEffect(() => {
        shuffleContents();
    }, []);


    function CheckValidate(requiredKeys) {
        for (var key of requiredKeys) {
            if (formData[key] === "") {
                console.log(key);
                return false;
            }
        }
        return true;
    }




    function calculateSSQ() {
        handleQuestionChange("NAUSEA", (
            parseFloat(formData['SSQ_1'])
            + parseFloat(formData['SSQ_6'])
            + parseFloat(formData['SSQ_7'])
            + parseFloat(formData['SSQ_8'])
            + parseFloat(formData['SSQ_9'])
            + parseFloat(formData['SSQ_15'])
            + parseFloat(formData['SSQ_16'])
        )
            * 9.54);

        handleQuestionChange("Oculomotor",
            (
                parseFloat(formData['SSQ_1'])
                + parseFloat(formData['SSQ_2'])
                + parseFloat(formData['SSQ_3'])
                + parseFloat(formData['SSQ_4'])
                + parseFloat(formData['SSQ_5'])
                + parseFloat(formData['SSQ_9'])
                + parseFloat(formData['SSQ_11']))
            * 7.58);

        handleQuestionChange("Disorientation", (parseFloat(formData['SSQ_5'])
            + parseFloat(formData['SSQ_8'])
            + parseFloat(formData['SSQ_10'])
            + parseFloat(formData['SSQ_11'])
            + parseFloat(formData['SSQ_12'])
            + parseFloat(formData['SSQ_13'])
            + parseFloat(formData['SSQ_14']))
            * 13.92);

        handleQuestionChange("SSQTotal", ((parseFloat(formData['SSQ_1'])
            + parseFloat(formData['SSQ_6'])
            + parseFloat(formData['SSQ_7'])
            + parseFloat(formData['SSQ_8'])
            + parseFloat(formData['SSQ_9'])
            + parseFloat(formData['SSQ_15'])
            + parseFloat(formData['SSQ_16'])) + (parseFloat(formData['SSQ_1'])
                + parseFloat(formData['SSQ_2'])
                + parseFloat(formData['SSQ_3'])
                + parseFloat(formData['SSQ_4'])
                + parseFloat(formData['SSQ_5'])
                + parseFloat(formData['SSQ_9'])
                + parseFloat(formData['SSQ_11'])) + (parseFloat(formData['SSQ_5'])
                    + parseFloat(formData['SSQ_8'])
                    + parseFloat(formData['SSQ_10'])
                    + parseFloat(formData['SSQ_11'])
                    + parseFloat(formData['SSQ_12'])
                    + parseFloat(formData['SSQ_13'])
                    + parseFloat(formData['SSQ_14']))) * 3.74);


        handleQuestionChange("XRSQ_Oculomotor",
            (
                (parseFloat(formData['SSQ_1'])
                    + parseFloat(formData['SSQ_2'])
                    + parseFloat(formData['SSQ_4'])
                    + parseFloat(formData['SSQ_5'])) / 12) * 100
        )

        handleQuestionChange("XRSQ_Disorientation",
            ((parseFloat(formData['SSQ_3'])
                + parseFloat(formData['SSQ_11'])
                + parseFloat(formData['XRSQ_7'])) / 9) * 100
        )

        handleQuestionChange("XRSQ_Autonomic",
            ((parseFloat(formData['XRSQ_8'])
                + parseFloat(formData['XRSQ_9'])
                + parseFloat(formData['SSQ_8'])) / 9) * 100
        )

        handleQuestionChange("XRSQ_Total",

            (
                (((parseFloat(formData['SSQ_1'])
                    + parseFloat(formData['SSQ_2'])
                    + parseFloat(formData['SSQ_4'])
                    + parseFloat(formData['SSQ_5'])) / 12) * 100)
                +
                (((parseFloat(formData['SSQ_3'])
                    + parseFloat(formData['SSQ_11'])
                    + parseFloat(formData['XRSQ_7'])) / 9) * 100)
                +
                (((parseFloat(formData['XRSQ_8'])
                    + parseFloat(formData['XRSQ_9'])
                    + parseFloat(formData['SSQ_8'])) / 9) * 100)
            ) / 3

        )

    }


    function calculateSP() {



        handleQuestionChange("SP_R_1", (
            (
                parseFloat(formData['SP_3'])
                + parseFloat(formData['SP_5'])
                + parseFloat(formData['SP_7'])
                + parseFloat(formData['SP_9'])
            ) / 4
        ))

        handleQuestionChange("SP_R_2", (

            (parseFloat(formData['SP_11'])
                + parseFloat(formData['SP_12'])
                + parseFloat(formData['SP_14'])
                + parseFloat(formData['SP_16'])) / 4
        ))

        handleQuestionChange("SP_R_3", (
            (parseFloat(formData['SP_1'])
                + parseFloat(formData['SP_2'])
                + parseFloat(formData['SP_6'])) / 3
        ))

        handleQuestionChange("SP_R_4", (
            (parseFloat(formData['SP_10'])
                + parseFloat(formData['SP_15'])
                + parseFloat(formData['SP_17'])) / 3
        ))

        handleQuestionChange("SP_R_5", (
            (parseFloat(formData['SP_8'])
                + parseFloat(formData['SP_13'])) / 2
        ))

        handleQuestionChange("SP_R_6", (
            (parseFloat(formData['SP_4'])
                + parseFloat(formData['SP_18'])) / 2
        ))


    }


    const CustomContent = [
        {
            "key": 1,
            "query": "작업 수행 중 나는 시간을 잊어버렸다.",
            "saveId": "CS_1",
            "optionLabels": [
                { value: 1, label: '전혀 아님' },
                { value: 2, label: '' },
                { value: 3, label: '' },
                { value: 4, label: '보통' },
                { value: 5, label: '' },
                { value: 6, label: '' },
                { value: 7, label: '매우 그렇다' },
            ]

        },
        {
            "key": 2,
            "query": "나는 VR 작업이 끝났을 때, 너무 빨리 끝나버려서 놀랐다.",
            "saveId": "CS_2",
            "optionLabels": [
                { value: 1, label: '전혀 아님' },
                { value: 2, label: '' },
                { value: 3, label: '' },
                { value: 4, label: '보통' },
                { value: 5, label: '' },
                { value: 6, label: '' },
                { value: 7, label: '매우 그렇다' },
            ]
        },
        {
            "key": 3,
            "query": "나는 VR 시스템이 지루하게 혹은 질질끌고 있다고 생각했다.",
            "saveId": "CS_3",
            "optionLabels": [
                { value: 1, label: '전혀 아님' },
                { value: 2, label: '' },
                { value: 3, label: '' },
                { value: 4, label: '보통' },
                { value: 5, label: '' },
                { value: 6, label: '' },
                { value: 7, label: '매우 그렇다' },
            ]
        },
        {
            "key": 4,
            "query": "VR 체험 중 나는 내가 실험중이라는 사실을 완전히 잊어버렀다.",
            "saveId": "CS_4",
            "optionLabels": [
                { value: 1, label: '전혀 아님' },
                { value: 2, label: '' },
                { value: 3, label: '' },
                { value: 4, label: '보통' },
                { value: 5, label: '' },
                { value: 6, label: '' },
                { value: 7, label: '매우 그렇다' },
            ]
        },
        {
            "key": 5,
            "query": "VR 체험 중 나는 내 자신의 문제와 걱정을 잊어버렸다.",
            "saveId": "CS_5",
            "optionLabels": [
                { value: 1, label: '전혀 아님' },
                { value: 2, label: '' },
                { value: 3, label: '' },
                { value: 4, label: '보통' },
                { value: 5, label: '' },
                { value: 6, label: '' },
                { value: 7, label: '매우 그렇다' },
            ]
        },
        {
            "key": 6,
            "query": "VR을 보면서 제가 실험 전에 무엇을 했는지, 아니면 실험 후에 무엇을 할지 생각하고 있었다.",
            "saveId": "CS_6",
            "optionLabels": [
                { value: 1, label: '전혀 아님' },
                { value: 2, label: '' },
                { value: 3, label: '' },
                { value: 4, label: '보통' },
                { value: 5, label: '' },
                { value: 6, label: '' },
                { value: 7, label: '매우 그렇다' },
            ]
        }
    ]

 

    const SpatialPresenceForm = [
        {
            "key": 1,
            "query": "나는 실험을 계속했으면 좋겠다",
            // "query": "I wish the experiment had continued",
            "saveId": "SP_1",
        },
        {
            "key": 2,
            // "query": "The content of the environment captivated me",
            "query": "체험 환경이 내 마음을 사로잡았다",
            "saveId": "SP_2",
        },
        {
            "key": 3,
            // "query": "My sensory experiences (vision, hearing, etc.) in the environment resembled my experiences in daily life",
            "query": "체험 환경 속에서 나의 감각(시각, 청각 등)은 일상 생활에서의 경험과 유사했다",
            "saveId": "SP_3",
        },
        {
            "key": 4,
            "query": "나는 체험하는 동안 방향 감각을 잃었다. ",
            "saveId": "SP_4",
        },
        {
            "key": 5,
            "query": "마치 내가 실제로 체험 환경 속을 이동하는 것 같았다.",
            // It was as if I had actually moved through the environment",
            "saveId": "SP_5",
        },
        {
            "key": 6,
            "query": "체험하는 동안 즐거웠다",
            // "I had fun during the experience.",
            "saveId": "SP_6",
        },
        {
            "key": 7,
            "query": "나는 그 체험 환경 속에서 물리적으로 존재하고 있는 것 같은 느낌이 들었다",
            // "I felt like I was physically present in the environment",
            "saveId": "SP_7",
        },
        {
            "key": 8,
            "query": "나는 나의 개인적인 생각(고민, 꿈 등) 보다 체험 환경에 더 많은 관심을 기울었다",
            // "I paid more attention to the environment than to my thoughts (personal converns, daydreams, etc.)",
            "saveId": "SP_8",
        },
        {
            "key": 9,
            "query": "나는 체험 환경에 둘러싸여 있는 듯한 느낌을 받았다",
            // I felt surrounded by the environment",
            "saveId": "SP_9",
        },
        {
            "key": 10,
            "query": "나는 체험 환경 속에서 연기(act)를 할 수 있다고 느꼈다",
            // I felt I could act in the environment",
            "saveId": "SP_10",
        },
        {
            "key": 11,
            "query": "나는 체험 환경의 내용을 쉽게 살펴볼 수 있었다",
            // "I could easily examine the contents of the environment",
            "saveId": "SP_11",
        },
        {
            "key": 12,
            "query": "내가 수행한 행동에 따라 체험 환경이 올바르게 반응하고 있다고 느꼈다",
            // "I felt that the environment responded correctly to the actions I performed",
            "saveId": "SP_12",
        },
        {
            "key": 13,
            "query": "실험 중 내가 생각한 것은 오직 체험 환경 속에서 어떻게 활동할 것인지에 대한 것뿐이었다.",
            // 에서의 나의 활동이었다. 체험 환경 속에서 내가 생각하고 있는 유일한 것은 체험 환경에서의 나의 활동(Activity)이었다.
            // "The only thing I thought about was my activity within the environment",
            "saveId": "SP_13",
        },
        {
            "key": 14,
            "query": "나는 주변 환경과 상호작용하고 이동하는데 능숙하다고 느꼈다.",
            // "I felt competent in terms of interacting and moving around the environment",
            "saveId": "SP_14",
        },
        {
            "key": 15,
            "query": "나는 내가 관찰한 환경이 단순한 그림이 아니라 실제 공간인 것처럼 느껴졌다.",
            // "I felt that the environment wasn't just something I observed.",
            "saveId": "SP_15",
        },
        {
            "key": 16,
            "query": "나는 내 움직임의 결과를 예측할 수 있었다.",
            // "I was able to anticipate the consequences of my movements.",
            "saveId": "SP_16",
        },
        {
            "key": 17,
            "query": "나는 체험 환경 속에서의 나의 움직임이 실질적인 결과를 가져온다고 느꼈다.",
            // "I felt that my actions in the environment had real consequences.",
            "saveId": "SP_17",
        },
        {
            "key": 18,
            "query": "나는 체험하는 동안 메스꺼움을 느꼈다.",
            // " I felt nauseous during the experience.",
            "saveId": "SP_18",
        }

    ]


    const SSQShortForm = [
        {
            "key": 1,
            "query": "VR을 체험하는 동안 불편함을 느꼈다. (Discomfort)",
            "saveId": "SSQ_1",
            "leftLable": "전혀 없음",
            "rightLable": "매우 심각함"
        },
        {
            "key": 2,
            "query": "VR을 체험하는 동안 피로감을 느꼈다. (Fatigue)",
            "saveId": "SSQ_2",
            "leftLable": "전혀 없음",
            "rightLable": "매우 심각함"
        },
        {
            "key": 3,
            "query": "VR을 체험하는 동안 두통을 느꼈다. (Headache)",
            "saveId": "SSQ_3",
            "leftLable": "전혀 없음",
            "rightLable": "매우 심각함"
        },
        {
            "key": 4,
            "query": "VR을 체험하는 동안 눈의 피로감을 느꼈다. (Eye strain)",
            "saveId": "SSQ_4",
            "leftLable": "전혀 없음",
            "rightLable": "매우 심각함"
        },
        {
            "key": 5,
            "query": "VR을 체험하는 동안 눈의 초점을 맞추기가 힘들었다고 느꼈다. (Difficulty Focusing)",
            "saveId": "SSQ_5",
            "leftLable": "전혀 없음",
            "rightLable": "매우 심각함"
        },
        {
            "key": 6,
            "query": "VR을 체험하는 동안 침의 분비량이 증가했다고 느꼈다. (Increased Salivation)",
            "saveId": "SSQ_6",
            "leftLable": "전혀 없음",
            "rightLable": "매우 심각함"
        },
        {
            "key": 7,
            "query": "VR을 체험하는 동안 몸에서 식은 땀이 났다고 느꼈다. (Sweating)",
            "saveId": "SSQ_7",
            "leftLable": "전혀 없음",
            "rightLable": "매우 심각함"
        },
        {
            "key": 8,
            "query": "VR을 체험하는 동안 속이 메스껍다고 느꼈다. (Nausea)",
            "saveId": "SSQ_8",
            "leftLable": "전혀 없음",
            "rightLable": "매우 심각함"
        },
        {
            "key": 9,
            "query": "VR을 체험하는 동안 집중하는 것이 어렵다고 느꼈다. (Difficulty Concentrating)",
            "saveId": "SSQ_9",
            "leftLable": "전혀 없음",
            "rightLable": "매우 심각함"
        },
        {
            "key": 10,
            "query": "VR을 체험하는 동안 머리가 꽉찬 듯한 느낌을 경험하였다. (Fullness of Head)",
            "saveId": "SSQ_10",
            "leftLable": "전혀 없음",
            "rightLable": "매우 심각함"
        },
        {
            "key": 11,
            "query": "VR을 체험하는 동안 시야가 흐려지는 듯한 느낌을 경험였다.  (Blurred Vision)",
            "saveId": "SSQ_11",
            "leftLable": "전혀 없음",
            "rightLable": "매우 심각함"
        },
        {
            "key": 12,
            "query": "VR을 체험하는 동안 눈을 떴을 때, 현기증이 났다. (Open Eyes)",
            "saveId": "SSQ_12",
            "leftLable": "전혀 없음",
            "rightLable": "매우 심각함"
        },
        {
            "key": 13,
            "query": "VR을 체험하는 동안 눈을 감았을 때, 현기증이 났다. (Close Eyes)",
            "saveId": "SSQ_13",
            "leftLable": "전혀 없음",
            "rightLable": "매우 심각함"
        },
        {
            "key": 14,
            "query": "VR을 체험하는 동안 빙빙 도는 듯한 어지러움을 느꼈다 (Vertigo)",
            "saveId": "SSQ_14",
            "leftLable": "전혀 없음",
            "rightLable": "매우 심각함"
        },
        {
            "key": 15,
            "query": "VR을 체험하는 동안 위에 부담을 느꼈다. (Stomach Awarenes)",
            "saveId": "SSQ_15",
            "leftLable": "전혀 없음",
            "rightLable": "매우 심각함"
        },
        {
            "key": 16,
            "query": "VR을 체험하는 동안 트림을 경험했다. (Burping)",
            "saveId": "SSQ_16",
            "leftLable": "전혀 없음",
            "rightLable": "매우 심각함"
        },
        {
            "key": 17,
            "query": "VR을 체험하는 동안 현기증을 경험했다. (Dizzy)",
            "saveId": "XRSQ_7",
            "leftLable": "전혀 없음",
            "rightLable": "매우 심각함"
        },
        {
            "key": 18,
            "query": "VR을 체험하는 동안 불안을 경험했다. (Anxiety)",
            "saveId": "XRSQ_8",
            "leftLable": "전혀 없음",
            "rightLable": "매우 심각함"
        },
        {
            "key": 19,
            "query": "VR을 체험하는 동안 두근거림, 심장 박동이 빠르게 뛰는 듯한 불편감을 느꼈다. (Palpitation)",
            "saveId": "XRSQ_9",
            "leftLable": "전혀 없음",
            "rightLable": "매우 심각함"
        },
    ]


    const NASATLXForm = [
        {
            "key": 1,
            "query": "VR 체험이 정신적으로 얼마나 힘들었습니까?",
            "saveId": "TLX_1",
            "leftLable": "전혀 없음",
            "rightLable": "매우 힘듬"
        },
        {
            "key": 2,
            "query": "VR 체험이 신체적으로 얼마나 힘들었습니까?",
            "saveId": "TLX_2",
            "leftLable": "전혀 없음",
            "rightLable": "매우 힘듬"
        },
        {
            "key": 3,
            "query": "VR 체험 중에 얼마나 서두르거나 서두르는 느낌을 받았습니까?",
            "saveId": "TLX_3",
            "leftLable": "전혀 없음",
            "rightLable": "매우 심함"
        },
        {
            "key": 4,
            "query": "얼마나 불안하고, 낙담하고, 짜증나고, 스트레스를 받았습니까?",
            "saveId": "TLX_4",
            "leftLable": "전혀 없음",
            "rightLable": "매우 심함"
        },
        {
            "key": 5,
            "query": "VR 작업이 얼마나 복잡했습니까?",
            "saveId": "TLX_5",
            "leftLable": "매우 간단함",
            "rightLable": "매우 복잡함"
        },
        {
            "key": 6,
            "query": "VR 작업을 수행하는 동안 얼마나 스트레스를 받았습니까?",
            "saveId": "TLX_6",
            "leftLable": "전혀 없음",
            "rightLable": "매우 많음"
        },
        {
            "key": 7,
            "query": "VR 속 환경이 작업을 방해하거나 얼마나 산만했습니까?",
            "saveId": "TLX_7",
            "leftLable": "전혀 없음",
            "rightLable": "매우 방해됨"
        },
        {
            "key": 8,
            "query": "작업 수행 측면에서 시각적 혹은 청각적으로 불편하거나 짜증이 났습니까?",
            "saveId": "TLX_8",
            "leftLable": "전혀 없음",
            "rightLable": "매우 짜증남"
        },
        {
            "key": 9,
            "query": "VR 작업을 통제하거나 조작하는 것이 얼마나 어려웠습니까?",
            "saveId": "TLX_9",
            "leftLable": "매우 쉬움",
            "rightLable": "매우 어려움"
        },
        {
            "key": 10,
            "query": "VR 작업에 얼마나 몰임갑/현장감을 느꼈습니까? ",
            "saveId": "TLX_10",
            "leftLable": "전혀 없음",
            "rightLable": "매우 많음"
        }
    ]


    const [SSQContents, SetSSQContents] = useState(SSQShortForm
        .map((q) => (
            <SliderQuestionMoreOptions
                key={q.key}
                question={q.query}
                saveId={q.saveId}
                min={0}
                max={3}
                step={1}
                marks={[
                    { value: 0, label: '전혀 없음' },

                    { value: 1, label: '약간' },

                    { value: 2, label: '보통' },

                    { value: 3, label: '심각' },
                ]}
                onChange={(v) => handleQuestionChange(q.saveId, v)}
            />
        )))

    const [SPContents, SetSPContents] = useState(SpatialPresenceForm
        .map((q) => (
            <SliderQuestionMoreOptions
                key={q.key}
                question={q.query}
                saveId={q.saveId}
                min={1}
                max={5}
                step={1}
                marks={[
                    { value: 1, label: '매우 동의 하지 않음' },

                    { value: 2, label: '동의 하지 않음' },

                    { value: 3, label: '보통' },

                    { value: 4, label: '동의함' },

                    { value: 5, label: '매우 동의함' },
                ]}
                onChange={(v) => handleQuestionChange(q.saveId, v)}
            />
        )))


    const [TLXContents, SetTLXContents] = useState(NASATLXForm
        .map((q) => (
            <SliderQuesiton
                key={q.key}
                question={q.query}
                saveId={q.saveId}
                leftLabel={q.leftLable}
                rightLabel={q.rightLable}
                min={0}
                max={100}
                step={5}
                onChange={(v) => handleQuestionChange(q.saveId, v)}
            />
        )))

    const [contentCS, setContentCS] = useState(CustomContent.map((q) => (
        <SliderQuestionMoreOptions
            key={q.key}
            question={q.query}
            saveId={q.saveId}
            min={1}
            max={7}
            step={1}
            marks={q.optionLabels}
            onChange={(v) => handleQuestionChange(q.saveId, v)}
        />
    )));

   
   

   
    
    return (
        <>

            <CustomLoading
                message={"설문을 저장하고 있는 중입니다. 잠시만 기다려주세요."}
                show={showLoad}
                handleClose={() => { setShowLoad(false) }}
                action={() => { }}
            />

            <HEADER
                title={"실험 후 설문"}
                contents={"모든 설문을 꼼꼼히 읽고 답변 부탁드리겠습니다"}
            />

            <div className="container-xl px-12">
                <div className="row justify-content-center">
                    <div className="col-xl-10">
                        <div className="card-header border-bottom invisible">
                            <ul className="nav nav-tabs card-header-tabs" id="cardTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link fw-900 active text-lg"
                                        id="TabSetup" href="#SetupView"
                                        data-bs-toggle="tab" role="tab"
                                        aria-controls="SetupView" aria-selected="true">Setup View</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link fw-900 text-lg"
                                        id="TabNeck" href="#NeckView"
                                        data-bs-toggle="tab" role="tab"
                                        aria-controls="NeckView" aria-selected="false">NECK</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link fw-900 text-lg"
                                        id="TabSSQ" href="#SSQView"
                                        data-bs-toggle="tab" role="tab"
                                        aria-controls="SSQView" aria-selected="false">SSQ</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link fw-900 text-lg"
                                        id="TabTime" href="#TimeView"
                                        data-bs-toggle="tab" role="tab"
                                        aria-controls="TimeView" aria-selected="false">Time</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link fw-900 text-lg"
                                        id="TabIPQ" href="#IPQView"
                                        data-bs-toggle="tab" role="tab"
                                        aria-controls="IPQView" aria-selected="false">IPQ</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link fw-900 text-lg"
                                        id="TabSUS" href="#SUSView"
                                        data-bs-toggle="tab" role="tab"
                                        aria-controls="SUSView" aria-selected="false">SUS</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link fw-900 text-lg"
                                        id="TabTLX" href="#TLXView"
                                        data-bs-toggle="tab" role="tab"
                                        aria-controls="TLXView" aria-selected="false">TLX</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link fw-900 text-lg"
                                        id="TabSP" href="#SPView"
                                        data-bs-toggle="tab" role="tab"
                                        aria-controls="SPView" aria-selected="false">SP</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link fw-900 text-lg"
                                        id="TabDone" href="#DoneView"
                                        data-bs-toggle="tab" role="tab"
                                        aria-controls="DoneView" aria-selected="false">Done</a>
                                </li>
                            </ul>
                        </div>


                        <div className="card-body py-1 px-2" >
                            <div className="tab-content" id="cardTabContent">
                                <div className="tab-pane fade show active" id="SetupView" role="tabpanel" aria-labelledby="TabSetup">

                                    <div className="text-lg d-flex mt-n6 mb-4 justify-content-evenly text-danger fw-500">
                                        * 첫 페이지는 반드시 실험 진행자가 작성 *
                                    </div>

                                    <ShortTextAnswer
                                        SaveId={"PAName"}
                                        question={"실험 참가자 번호 * "}
                                        hint={"사전에 정해놓은 번호를 입력하세요..."}
                                        onChange={(answer) => handleQuestionChange("PAName", answer)}
                                    />

                                    <RadioSelection
                                        SaveId={"RadioForPACondition"}
                                        question={"해당 참가자가 체험하는 조건은?"}
                                        radioName={"RadioForPACondition"}
                                        optionNames={[
                                            "Static_RED",
                                            "Static_BLUE",
                                            "Dynamic_RED",
                                            "Dynamic_BLUE",
                                        ]}
                                        onChange={(answer) => handleQuestionChange("RadioForPACondition", answer)}
                                    />


                                    <div className="rightaline">
                                        <button
                                            className="btn btn-primary fw-500"
                                            type="button"
                                            onClick={() => {
                                                if (CheckValidate([
                                                    "RadioForPACondition",
                                                    "PAName",
                                                ])) {
                                                    // handleSubmit(formData);
                                                    scrollToTop();
                                                    document.getElementById("TabTime").click();
                                                } else {
                                                    alert.show('답변되지 않은 질문이 있습니다. ', { type: types.ERROR }) //alert will be shown in bottom left
                                                    console.log("is not a validate. Check all quesitons");
                                                }
                                            }}
                                        >
                                            <span style={{ marginRight: "0.5rem" }}>다음 페이지</span>
                                            <i className="fas fa-forward text-white"></i>
                                        </button>
                                    </div>


                                </div>

                                <div className="tab-pane fade show" id="TimeView" role="tabpanel" aria-labelledby="TabTime">
                                    {/* 설문 시작 시간 체크 validation */}

                                    <ShortTextAnswer
                                        SaveId={"MISC"}
                                        question={"MISC 점수"}
                                        hint={"Verbal로 응답받은 MISC 점수 입력"}
                                        onChange={(answer) => handleQuestionChange("MISC", answer)}
                                    />

                                    <div className="d-flex" style={{ justifyContent: "space-around" }}>
                                        <button
                                            className="btn btn-primary fw-500 rowBT"
                                            type="button"
                                            onClick={() => {

                                                if (CheckValidate([
                                                    "MISC",
                                                ])) {
                                                    scrollToTop();
                                                    handleQuestionChange("SurveyStartTime", formatCurrentTime());
                                                    document.getElementById("TabNeck").click();

                                                } else {
                                                    alert.show('답변되지 않은 질문이 있습니다. ', { type: types.ERROR }) //alert will be shown in bottom left
                                                    console.log("is not a validate. Check all quesitons");
                                                }
                                            }}
                                        >
                                            <span style={{ marginRight: "0.5rem" }}>설문 시작 하기</span>
                                            <i className="fas fa-forward text-white"></i>
                                        </button>
                                    </div>
                                </div>

                                <div className="tab-pane fade show" id="NeckView" role="tabpanel" aria-labelledby="TabNeck">
                                    <div className="text-lg d-flex mt-n6 mb-4 justify-content-evenly text-danger fw-500">
                                        * 파란 점을 클릭해서 끌면서 선택한다면, 편하게 선택할 수 있습니다  SSQ *
                                    </div>

                                    {SSQContents}

                                    <div className="rightaline">
                                        <button
                                            className="btn btn-primary fw-500"
                                            type="button"
                                            onClick={() => {
                                                if (CheckValidate([
                                                    "SSQ_1",
                                                    "SSQ_2",
                                                    "SSQ_3",
                                                    "SSQ_4",
                                                    "SSQ_5",
                                                    "SSQ_6",
                                                    "SSQ_7",
                                                    "SSQ_8",
                                                    "SSQ_9",
                                                    "SSQ_10",
                                                    "SSQ_11",
                                                    "SSQ_12",
                                                    "SSQ_13",
                                                    "SSQ_14",
                                                    "SSQ_15",
                                                    "SSQ_16",
                                                    "XRSQ_7",
                                                    "XRSQ_8",
                                                    "XRSQ_9"
                                                ])) {
                                                    calculateSSQ();
                                                    scrollToTop();
                                                    document.getElementById("TabSSQ").click();
                                                } else {
                                                    alert.show('답변되지 않은 질문이 있습니다.', { type: types.ERROR }) //alert will be shown in bottom left
                                                    console.log("is not a validate. Check all quesitons");
                                                }

                                            }}
                                        >
                                            <span style={{ marginRight: "0.5rem" }}>다음 페이지</span>
                                            <i className="fas fa-forward text-white"></i>
                                            {/* https://fontawesome.com/search?q=next&o=r&m=free */}
                                        </button>
                                    </div>
                                </div>

                                <div className="tab-pane fade show" id="SSQView" role="tabpanel" aria-labelledby="TabSSQ">
                                    <div className="text-lg d-flex mt-n6 mb-4 justify-content-evenly text-danger fw-500">
                                        * 파란 점을 클릭해서 끌면서 선택한다면, 편하게 선택할 수 있습니다 Loss of time (3) / Engagement (3) / Emotion (3) *
                                    </div>

                                    {contentCS}

                               

                                    <div className="rightaline">
                                        <button
                                            className="btn btn-primary fw-500"
                                            type="button"
                                            onClick={() => {
                                                if (CheckValidate([
                                                    "CS_1",
                                                    "CS_2",
                                                    "CS_3",
                                                    "CS_4",
                                                    "CS_5",
                                                    "CS_6",
                                                    
                                                ])) {
                                                    scrollToTop();
                                                    // calculateIPQ();
                                                    document.getElementById("TabSP").click();
                                                } else {
                                                    alert.show('답변되지 않은 질문이 있습니다.', { type: types.ERROR }) //alert will be shown in bottom left
                                                    console.log("is not a validate. Check all quesitons");
                                                }

                                            }}
                                        >
                                            <span style={{ marginRight: "0.5rem" }}>다음 페이지</span>
                                            <i className="fas fa-forward text-white"></i>
                                            {/* https://fontawesome.com/search?q=next&o=r&m=free */}
                                        </button>
                                    </div>
                                </div>

                                <div className="tab-pane fade show" id="SPView" role="tabpanel" aria-labelledby="TabSP">
                                    <div className="text-lg d-flex mt-n6 mb-4 justify-content-evenly text-danger fw-500">
                                        * 파란 점을 클릭해서 끌면서 선택한다면, 편하게 선택할 수 있습니다 Spatial Presence *
                                    </div>

                                    {/* {SPContents} */}

                                  

                                    <div className="rightaline">
                                        <button
                                            className="btn btn-primary fw-500"
                                            type="button"
                                            onClick={() => {
                                                if (CheckValidate([
                                                
                                                ])) {
                                                    scrollToTop();
                                                    document.getElementById("TabSUS").click();
                                                } else {
                                                    alert.show('답변되지 않은 질문이 있습니다.', { type: types.ERROR }) //alert will be shown in bottom left
                                                    console.log("is not a validate. Check all quesitons");
                                                }

                                            }}
                                        >
                                            <span style={{ marginRight: "0.5rem" }}>다음 페이지</span>
                                            <i className="fas fa-forward text-white"></i>
                                            {/* https://fontawesome.com/search?q=next&o=r&m=free */}
                                        </button>
                                    </div>
                                </div>

                                <div className="tab-pane fade show" id="SUSView" role="tabpanel" aria-labelledby="TabSUS">

                                    <div className="text-lg d-flex mt-n6 mb-4 justify-content-evenly text-danger fw-500">
                                        * 파란 점을 클릭해서 끌면서 선택한다면, 편하게 선택할 수 있습니다 SIM-TLX *
                                    </div>

                                    {TLXContents}

                                    <div className="rightaline">
                                        <button
                                            className="btn btn-primary fw-500"
                                            type="button"
                                            onClick={() => {
                                                if (CheckValidate([
                                                    "TLX_1",
                                                    "TLX_2",
                                                    "TLX_3",
                                                    "TLX_4",
                                                    "TLX_5",
                                                    "TLX_6",
                                                    "TLX_7",
                                                    "TLX_8",
                                                    "TLX_9",
                                                    "TLX_10",
                                                ])) {
                                                    scrollToTop();
                                                    document.getElementById("TabTLX").click();
                                                } else {
                                                    alert.show('답변되지 않은 질문이 있습니다.', { type: types.ERROR }) //alert will be shown in bottom left
                                                    console.log("is not a validate. Check all quesitons");
                                                }
                                            }}
                                        >
                                            <span style={{ marginRight: "0.5rem" }}>다음 페이지</span>
                                            <i className="fas fa-forward text-white"></i>
                                            {/* https://fontawesome.com/search?q=next&o=r&m=free */}
                                        </button>
                                    </div>
                                </div>


                                <div className="tab-pane fade show" id="TLXView" role="tabpanel" aria-labelledby="TabTLX">


                                    <LargeTextAnswer
                                        SaveId={"PAComment"}
                                        question={"체험간 느꼈던 경험을 자유롭게 서술해주세요."}
                                        hint={"입력..."}
                                        onChange={(answer) => handleQuestionChange("PAComment", answer)}
                                    />

                                    <div className="rightaline">
                                        <button
                                            className="btn btn-secondary fw-500"
                                            type="button"
                                            onClick={() => {
                                                if (CheckValidate([
                                                    "PAComment"
                                                ])) {
                                                    handleSubmit(formData);
                                                }
                                                else {
                                                    alert.show('답변되지 않은 질문이 있습니다.', { type: types.ERROR }) //alert will be shown in bottom left
                                                    console.log("is not a validate. Check all quesitons");
                                                }
                                            }}
                                        >
                                            <span style={{ marginRight: "0.5rem" }}>설문 제출</span>
                                            <i className="fas fa-forward text-white"></i>
                                        </button>
                                    </div>
                                </div>

                                <div className="tab-pane fade show" id="DoneView" role="tabpanel" aria-labelledby="TabDone">
                                    <div className="customLastPage">
                                        <div className="text-lg d-flex mt-n6 mb-4 justify-content-evenly fw-500">
                                            설문 제출이 완료되었습니다. 실험 진행자에게 설문이 완료되었음을 말씀해주세요.
                                        </div>

                                        <Link className="btn btn-primary mt-4"
                                            type="button" to="/">
                                            메인 페이지로 이동
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PostCD;
