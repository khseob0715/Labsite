
import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

import HEADER from '../../components/Header';
import {
    ShortTextAnswer,
    RadioSelection,
    RadioLikertScale,
    NASATLX,
    RadioLikertScaleEndPoint,
    LargeTextAnswer,
    SliderQuesiton,
    SliderQuestionMoreOptions
} from '../../components/questionforms';

import { useAlert, types } from 'react-alert'

// import SSQquestionnaire from "../../Questionnaire/SSQ";
import IPQQuestionnaire from "../../Questionnaire/IPQ";
// import SUSquesitonnaire from "../../Questionnaire/SUS";


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
    "SUS_1",
    "SUS_2",
    "SUS_3",
    "SUS_4",
    "IPQ_1",
    "IPQ_2",
    "IPQ_3",
    "IPQ_4",
    "IPQ_5",
    "IPQ_6",
    "IPQ_7",
    "IPQ_8",
    "IPQ_9",
    "IPQ_10",
    "IPQ_11",
    "IPQ_12",
    "IPQ_13",
    "IPQ_14",
    "IPQ_15",
    "IPQ_GENERAL",
    "IPQ_SP",
    "IPQ_INV",
    "IPQ_REAL",
    "GEQ_1",
    "GEQ_2",
    "GEQ_3",
    "GEQ_4",
    "GEQ_5",
    "GEQ_6",
    "GEQ_7",
    "GEQ_8",
    "GEQ_9",
    "USE_1",
    "USE_2",
    "USE_3",
    "USE_4",
    "USE_5",
    "USE_6",
    "USE_7",
    "USE_8",
    "USE_9",
    "USE_10",
    "TLX_1",
    "TLX_2",
    "TLX_3",
    "TLX_4",
    "TLX_5",
    "TLX_6",
    "NeckPain_1",
    "NeckPain_2",
    "NeckPain_3",
    "NeckPain_4",
    "NeckPain_5",
    "NeckPain_6",
    "NeckPain_7",
    "NeckPain_8",
    "HeadPain_1",
    "HeadPain_2",
    "HeadPain_3",
    "HeadPain_4",
    "HeadPain_5",
    "HeadPain_6",
    "HeadPain_7",
    "HeadPain_8",
    "HeadPain_9",
    "PAComment",
];


function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "instant" // 부드러운 스크롤을 위해 behavior 속성을 사용
    });
  }

function PostQuestion() {
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
        SUS_1: "",
        SUS_2: "",
        SUS_3: "",
        SUS_4: "",
        IPQ_1: "",
        IPQ_2: "",
        IPQ_3: "",
        IPQ_4: "",
        IPQ_5: "",
        IPQ_6: "",
        IPQ_7: "",
        IPQ_8: "",
        IPQ_9: "",
        IPQ_10: "",
        IPQ_11: "",
        IPQ_12: "",
        IPQ_13: "",
        IPQ_14: "",
        IPQ_15: "",
        IPQ_GENERAL: "",
        IPQ_SP: "",
        IPQ_INV: "",
        IPQ_REAL: "",
        GEQ_1: "",
        GEQ_2: "",
        GEQ_3: "",
        GEQ_4: "",
        GEQ_5: "",
        GEQ_6: "",
        GEQ_7: "",
        GEQ_8: "",
        GEQ_9: "",
        USE_1: "",
        USE_2: "",
        USE_3: "",
        USE_4: "",
        USE_5: "",
        USE_6: "",
        USE_7: "",
        USE_8: "",
        USE_9: "",
        USE_10: "",
        TLX_1: "",
        TLX_2: "",
        TLX_3: "",
        TLX_4: "",
        TLX_5: "",
        TLX_6: "",
        NeckPain_1: "",
        NeckPain_2: "",
        NeckPain_3: "",
        NeckPain_4: "",
        NeckPain_5: "",
        NeckPain_6: "",
        NeckPain_7: "",
        NeckPain_8: "",
        HeadPain_1: "",
        HeadPain_2: "",
        HeadPain_3: "",
        HeadPain_4: "",
        HeadPain_5: "",
        HeadPain_6: "",
        HeadPain_7: "",
        HeadPain_8: "",
        HeadPain_9: "",
        PAComment: "",
    })

    const handleSubmit = async (formValues) => {

        setShowLoad(true);

        const body = new URLSearchParams();

        for (const key of keyOrder) {
            const value = formValues[key];
            // console.log(value);
            body.append(key, value);
        }

        const link = "https://script.google.com/macros/s/AKfycbwJiJFihVcv2dGZrt9f7LQBmYSQjI6PESGmcY0pK-QBwXZXCl_Xqk4GN9UsW0A1w1hOTw/exec";
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


    function calculateIPQ() {
        // IPQ_GENERAL: "",
        // IPQ_SP: "",
        // IPQ_INV: "",
        // IPQ_REAL: "",

        handleQuestionChange("IPQ_GENERAL", formData['IPQ_1']);

        handleQuestionChange("IPQ_SP",
            (
                parseInt(formData['IPQ_2'])
                + (-1 * parseInt(formData['IPQ_3']) + 6)
                + parseInt(formData['IPQ_4'])
                + parseInt(formData['IPQ_5'])
                + parseInt(formData['IPQ_6'])
            ) / 5
        );

        handleQuestionChange("IPQ_INV",
            (
                parseInt(formData['IPQ_7'])
                + parseInt(formData['IPQ_8'])
                + (-1 * parseInt(formData['IPQ_9']) + 6)
                + parseInt(formData['IPQ_10'])
            ) / 4
        );

        handleQuestionChange("IPQ_REAL", (
            (-1 * parseInt(formData['IPQ_11']) + 6)
            + parseInt(formData['IPQ_12'])
            + parseInt(formData['IPQ_13'])
            + parseInt(formData['IPQ_14'])) / 4
        );
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
        const shuffledContentsIPQ = [...contentIPQ].sort(() => Math.random() - 0.5);
        setContentIPQ(shuffledContentsIPQ);

        const NeckShuffle = [...NeckPainContents].sort(() => Math.random() - 0.5);
        SetNeckPainContents(NeckShuffle);

        const t_ssq = [...SSQContents].sort(() => Math.random() - 0.5);
        SetSSQContents(t_ssq);

        const t_sus = [...SUSContents].sort(() => Math.random() - 0.5);
        SetSUSContents(t_sus);

        const t_head = [...contentHeadRegions].sort(() => Math.random() - 0.5);
        SetContentHeadRegions(t_head)

        const t_qeq = [...contentGEQForm].sort(() => Math.random() - 0.5);
        SetGEQForm(t_qeq)

        const t_use = [...contentUSEForm].sort(() => Math.random() - 0.5);
        SetUSEForm(t_use)
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

    const IPQContnetForm = [
        {
            "key": 1,
            "query": "나는 컴퓨터로 만들어진 세계 속에서 나의 몸과 마음이 `그곳에 있다`는 느낌을 받았다.",
            "saveId": "IPQ_1",
            "optionLabels" : [
                { value: 0, label: '전혀 아님'},
                { value: 1, label: ''},
                { value: 2, label: ''},
                { value: 3, label: '보통'},
                { value: 4, label: ''},
                { value: 5, label: ''},
                { value: 6, label: '매우 그렇다'},
            ]
            
        },
        {
            "key": 2,
            "query": "나는 가상 세계가 나를 둘러 싸고 있는 듯한 느낌을 받았다.",
            "saveId": "IPQ_2",
            "optionLabels" : [
                { value: 0, label: '전혀 아님'},
                { value: 1, label: ''},
                { value: 2, label: ''},
                { value: 3, label: '보통'},
                { value: 4, label: ''},
                { value: 5, label: ''},
                { value: 6, label: '매우 그렇다'},
            ]
        },
        {
            "key": 3,
            "query": "나는 가상 세계가 아닌 단순히 그림을 바라보고 있는 듯한 느낌을 받았다",
            "saveId": "IPQ_3",
            "optionLabels" : [
                { value: 0, label: '전혀 아님 (가상 세계)'},
                { value: 1, label: ''},
                { value: 2, label: ''},
                { value: 3, label: '보통'},
                { value: 4, label: ''},
                { value: 5, label: ''},
                { value: 6, label: '매우 그렇다 (그저 그림)'},
            ]
        },
        {
            "key": 4,
            "query": "나는 내가 가상 세계에 있다는 느낌을 받지 않았다.",
            "saveId": "IPQ_4",
            "optionLabels" : [
                { value: 0, label: '그저 가상 세계일뿐이다.'},
                { value: 1, label: ''},
                { value: 2, label: ''},
                { value: 3, label: '보통'},
                { value: 4, label: ''},
                { value: 5, label: ''},
                { value: 6, label: '가상 세계가 현실처럼 느껴졌다.'},
            ]
        },
        {
            "key": 5,
            "query": "나의 행동은 현실에서 행동하는 것이 아닌, 가상 세계에서 행동하고 있는 것 같다는 느낌이 들었다.",
            "saveId": "IPQ_5",
            "optionLabels" : [
                { value: 0, label: '전혀 아님'},
                { value: 1, label: ''},
                { value: 2, label: ''},
                { value: 3, label: '보통'},
                { value: 4, label: ''},
                { value: 5, label: ''},
                { value: 6, label: '매우 그렇다'},
            ]
        },
        {
            "key": 6,
            "query": "나는 가상 공간에 있는 듯한 느낌이 들었다.",
            "saveId": "IPQ_6",
            "optionLabels" : [
                { value: 0, label: '전혀 아님'},
                { value: 1, label: ''},
                { value: 2, label: ''},
                { value: 3, label: '보통'},
                { value: 4, label: ''},
                { value: 5, label: ''},
                { value: 6, label: '매우 그렇다'},
            ]
        },
        {
            "key": 7,
            "query": "가상 세계를 체험하는 동안 주변 환경을 얼마나 신경 쓰고 있었나요 (예: 주변 소음, 실내 온도, 다른 사람 등)",
            "saveId": "IPQ_7",
            "optionLabels" : [
                { value: 0, label: '매우 신경쓰고 있었다'},
                { value: 1, label: ''},
                { value: 2, label: ''},
                { value: 3, label: '보통'},
                { value: 4, label: ''},
                { value: 5, label: ''},
                { value: 6, label: '전혀 신경 쓰지 않았다'},
            ]
        },
        {
            "key": 8,
            "query": "나는 가상 환경을 체험하는 동안, 실제 주변 환경을 신경쓰지 않았다.",
            "saveId": "IPQ_8",
            "optionLabels" : [
                { value: 0, label: '주변 환경을 신경 썼다'},
                { value: 1, label: ''},
                { value: 2, label: ''},
                { value: 3, label: '보통'},
                { value: 4, label: ''},
                { value: 5, label: ''},
                { value: 6, label: '주변 환경을 신경쓰지 않았다'},
            ]
        },
        {
            "key": 9,
            "query": "나는 가상 환경을 체험하는 동안, 실제 주변 환경을 신경쓰고 있었다.",
            "saveId": "IPQ_9",
            "optionLabels" : [
                { value: 0, label: '주변 환경을 신경 쓰지 않았다'},
                { value: 1, label: ''},
                { value: 2, label: ''},
                { value: 3, label: '보통'},
                { value: 4, label: ''},
                { value: 5, label: ''},
                { value: 6, label: '주변 환경을 신경 썼다'},
            ]
        },
        {
            "key": 10,
            "query": "나는 가상 환경에 내 관심을 완전히 쏟았다.",
            "saveId": "IPQ_10",
            "optionLabels" : [
                { value: 0, label: '전혀 아님'},
                { value: 1, label: ''},
                { value: 2, label: ''},
                { value: 3, label: '보통'},
                { value: 4, label: ''},
                { value: 5, label: ''},
                { value: 6, label: '매우 그렇다'},
            ]
        },
        {
            "key": 11,
            "query": "가상 세계가 얼마나 현실적 혹은 허구처럼 느껴졌나요?",
            "saveId": "IPQ_11",
            "optionLabels" : [
                { value: 0, label: '완전히 현실 같았다'},
                { value: 1, label: ''},
                { value: 2, label: ''},
                { value: 3, label: '보통'},
                { value: 4, label: ''},
                { value: 5, label: ''},
                { value: 6, label: '완전히 허구 같았다'},
            ]
        },
        {
            "key": 12,
            "query": "가상 세계에서의 경험이 얼마나 현실 세계의 경험과 일치되는 것 같나요?",
            "saveId": "IPQ_12",
            "optionLabels" : [
                { value: 0, label: '전혀 일치하지 않는다'},
                { value: 1, label: ''},
                { value: 2, label: ''},
                { value: 3, label: '보통'},
                { value: 4, label: ''},
                { value: 5, label: ''},
                { value: 6, label: '매우 일치한다'},
            ]
        },
        {
            "key": 13,
            "query": "가상 세계가 얼마나 상상 혹은 현실처럼 느껴졌나요?",
            "saveId": "IPQ_13",
            "optionLabels" : [
                { value: 0, label: '상상 속 세계 같았다'},
                { value: 1, label: ''},
                { value: 2, label: ''},
                { value: 3, label: '보통'},
                { value: 4, label: ''},
                { value: 5, label: ''},
                { value: 6, label: '현실 속 세계 같았다'},
            ]
        },
        {
            "key": 14,
            "query": "가상 세계가 실제 세계보다 더 현실적으로 느껴졌나요?",
            "saveId": "IPQ_14",
            "optionLabels" : [
                { value: 0, label: '전혀 아니다 (허구 같다)'},
                { value: 1, label: ''},
                { value: 2, label: ''},
                { value: 3, label: '보통'},
                { value: 4, label: ''},
                { value: 5, label: ''},
                { value: 6, label: '매우 그렇다 (현실 같다)'},
            ]
        },
        {
            "key": 15,
            "query": "실험 진행자를 제외하고, 가상 세계를 체험하는 동안 주변 환경을 얼마나 신경쓰고 있었나요?",
            "saveId": "IPQ_15",
            "optionLabels" : [
                { value: 0, label: '매우 신경쓰고 있었다'},
                { value: 1, label: ''},
                { value: 2, label: ''},
                { value: 3, label: '보통'},
                { value: 4, label: ''},
                { value: 5, label: ''},
                { value: 6, label: '전혀 신경 쓰지 않았다'},
            ]
        }
    ]

    const SSQShortForm = [
        {
            "key": 1,
            "query": "VR을 체험하는 동안 불편함을 느꼈다.",
            "saveId": "SSQ_1",
            "leftLable": "전혀 없음",
            "rightLable": "매우 심각함"
        },
        {
            "key": 2,
            "query": "VR을 체험하는 동안 피로감을 느꼈다.",
            "saveId": "SSQ_2",
            "leftLable": "전혀 없음",
            "rightLable": "매우 심각함"
        },
        {
            "key": 3,
            "query": "VR을 체험하는 동안 두통을 느꼈다.",
            "saveId": "SSQ_3",
            "leftLable": "전혀 없음",
            "rightLable": "매우 심각함"
        },
        {
            "key": 4,
            "query": "VR을 체험하는 동안 눈의 피로감을 느꼈다.",
            "saveId": "SSQ_4",
            "leftLable": "전혀 없음",
            "rightLable": "매우 심각함"
        },
        {
            "key": 5,
            "query": "VR을 체험하는 동안 땀이 났다고 느꼈다.",
            "saveId": "SSQ_5",
            "leftLable": "전혀 없음",
            "rightLable": "매우 심각함"
        },
        {
            "key": 6,
            "query": "VR을 체험하는 동안 속이 메스꺼웠다.",
            "saveId": "SSQ_6",
            "leftLable": "전혀 없음",
            "rightLable": "매우 심각함"
        },
        {
            "key": 7,
            "query": "VR을 체험하는 동안 집중하는 것이 어렵다고 느껴졌다.",
            "saveId": "SSQ_7",
            "leftLable": "전혀 없음",
            "rightLable": "매우 어려움"
        },
        {
            "key": 8,
            "query": "VR을 체험하는 동안 눈을 감았다가 떴을 때 현기증을 느꼈다.",
            "saveId": "SSQ_8",
            "leftLable": "전혀 없음",
            "rightLable": "매우 심각함"
        },
    ]

    const SUSShortForm = [
        {
            "key": 1,
            "query": "오늘 사용한 VR 장비를 미래에도 자주 사용하고 싶다고 생각한다. ",
            "saveId": "SUS_1",
        },
        {
            "key": 2,
            "query": "오늘 사용한 VR 장비는 `기능적으로` 잘 통합되고, 잘 만들어졌다고 생각한다. ",
            "saveId": "SUS_2",
        },
        {
            "key": 3,
            "query": "오늘 사용한 VR 장비를 활용한다면, VR 체험이 매우 쉬워질 것이라고 생각한다.",
            "saveId": "SUS_3",
        },
        {
            "key": 4,
            "query": "오늘 사용한 VR 장비를 활용한다면, VR 체험을 자신감있게 잘 할 수 있을 것이라고 생각한다.",
            "saveId": "SUS_4",
        },
    ]

    // 5 point   from 0
    const GEQForm = [
        {
            "key": 1,
            "query": "게임에 완전히 몰두했다 ",
            "saveId": "GEQ_1",
            "leftLable": "전혀 아님",
            "rightLable": "매우 그렇다"
        },
        {
            "key": 2,
            "query": "주변의 모든 것을 잊었다.",
            "saveId": "GEQ_2",
            "leftLable": "전혀 아님",
            "rightLable": "매우 그렇다"
        },
        {
            "key": 3,
            "query": "시간 감각을 잃었다.",
            "saveId": "GEQ_3",
            "leftLable": "전혀 아님",
            "rightLable": "매우 그렇다"
        },
        {
            "key": 4,
            "query": "기분이 나빴다.",
            "saveId": "GEQ_4",
            "leftLable": "전혀 아님",
            "rightLable": "매우 그렇다"
        },
        {
            "key": 5,
            "query": "다른 생각을 했다.",
            "saveId": "GEQ_5",
            "leftLable": "전혀 아님",
            "rightLable": "매우 그렇다"
        },
        {
            "key": 6,
            "query": "지겹다고 느껴졌다.",
            "saveId": "GEQ_6",
            "leftLable": "전혀 아님",
            "rightLable": "매우 그렇다"
        },
        {
            "key": 7,
            "query": "기분이 상쾌했다.",
            "saveId": "GEQ_7",
            "leftLable": "전혀 아님",
            "rightLable": "매우 그렇다"
        },
        {
            "key": 8,
            "query": "에너지가 넘친다",
            "saveId": "GEQ_8",
            "leftLable": "전혀 아님",
            "rightLable": "매우 그렇다"
        },
        {
            "key": 9,
            "query": "만족스러웠다.",
            "saveId": "GEQ_9",
            "leftLable": "전혀 아님",
            "rightLable": "매우 그렇다"
        },
    ]

    // 7 point scale
    const USEForm = [
        {
            "key": 1,
            "query": "오늘 체험한 VR 기기와 주변장치는, VR 콘텐츠 속 경험과 주어진 작업을 더 효과적으로 할 수 있도록 도와줍니다.",
            "saveId": "USE_1",
            "leftLable": "전혀 아님",
            "rightLable": "매우 그렇다"
        },
        {
            "key": 2,
            "query": "오늘 체험한 VR 기기와 주변장치는, 대체로 유용합니다.",
            "saveId": "USE_2",
            "leftLable": "전혀 아님",
            "rightLable": "매우 그렇다"
        },
        {
            "key": 3,
            "query": "오늘 체험한 VR 기기와 주변장치를 사용하면 VR 에서의 활동을 더 잘 통제할 수 있을 것입니다. ",
            "saveId": "USE_3",
            "leftLable": "전혀 아님",
            "rightLable": "매우 그렇다"
        },
        {
            "key": 4,
            "query": "오늘 체험한 VR 기기와 주변장치는, VR 콘텐츠 속 내가 하고 싶은 일을 더 쉽게 만들어주는데 도움을 줍니다.",
            "saveId": "USE_4",
            "leftLable": "전혀 아님",
            "rightLable": "매우 그렇다"
        },
        {
            "key": 5,
            "query": "오늘 체험한 VR 기기와 주변장치를 사용할 때, 시간이 절약 될 수 있습니다. ",
            "saveId": "USE_5",
            "leftLable": "전혀 아님",
            "rightLable": "매우 그렇다"
        },
        {
            "key": 6,
            "query": "오늘 체험한 VR 기기와 주변장치는, 내가 VR 기기 사용에 대한 요구사항과 기대를 충족합니다.",
            "saveId": "USE_6",
            "leftLable": "전혀 아님",
            "rightLable": "매우 그렇다"
        },
        {
            "key": 7,
            "query": "나는 오늘 체험한 VR 기기와 주변장치에 대해 만족한다.",
            "saveId": "USE_7",
            "leftLable": "전혀 아님",
            "rightLable": "매우 그렇다"
        },
        {
            "key": 8,
            "query": "나는 오늘 체험한 VR 기기와 주변 장치를 친구들에게 추천할 것이다.",
            "saveId": "USE_8",
            "leftLable": "전혀 아님",
            "rightLable": "매우 그렇다"
        },
        {
            "key": 9,
            "query": "오늘 체험한 VR 기기와 주변 장치는, 내가 원하는 방식으로 작동했습니다.",
            "saveId": "USE_9",
            "leftLable": "전혀 아님",
            "rightLable": "매우 그렇다"
        },
        {
            "key": 10,
            "query": "나는 오늘 체험한 VR 기기와 주변 장치를 가지고 싶다고 생각했습니다.",
            "saveId": "USE_10",
            "leftLable": "전혀 아님",
            "rightLable": "매우 그렇다"
        },
    ]

    const NASATLXForm = [
        {
            "key": 1,
            "query": "주어진 VR 체험을 하는 동안 신체적으로 얼마나 힘들었는지?",
            "saveId": "TLX_1",
            "leftLable": "전혀 없음",
            "rightLable": "매우 힘듬"
        },
        {
            "key": 2,
            "query": "주어진 VR 체험을 하는 동안 정신적으로 얼마나 힘들었는지?",
            "saveId": "TLX_2",
            "leftLable": "전혀 없음",
            "rightLable": "매우 힘듬"
        },
        {
            "key": 3,
            "query": "주어진 VR 체험을 하는 동안 시간적인 압박감은 어느정도였는지?",
            "saveId": "TLX_3",
            "leftLable": "전혀 없음",
            "rightLable": "매우 심함"
        },
        {
            "key": 4,
            "query": "주어진 VR 체험을 하는 동안 낙담하고, 좌절하는 정도는 어느정도였는지?",
            "saveId": "TLX_4",
            "leftLable": "전혀 없음",
            "rightLable": "매우 심함"
        },
        {
            "key": 5,
            "query": "주어진 VR 체험을 본인이 얼마나 잘 수행하였는지를 점수로 표현한다면 어느정도인지?",
            "saveId": "TLX_5",
            "leftLable": "0점",
            "rightLable": "100점"
        },
        {
            "key": 6,
            "query": "해당 점수를 얻기 위해서 요구되는 신체적이고 정신적인 노력의 수준은 어느정도였는지?",
            "saveId": "TLX_6",
            "leftLable": "전혀 없음",
            "rightLable": "매우 많음"
        },
    ]

    const NeckPainQuestion = [
        {
            "key": 1,
            "query": "VR 체험 이후, 목에 있는 불편함은 어느정도인가요?",
            "saveId": "NeckPain_1",
            "marks": [
                { value: 0, label: '전혀 불편하지 않음' },
                { value: 1, label: '' },
                { value: 2, label: '아주 약간 불편함' },
                { value: 3, label: '' },
                { value: 4, label: '약간 불편함' },
                { value: 5, label: '' },
                { value: 6, label: '불편함' },
                { value: 7, label: '' },
                { value: 8, label: '매우 불편함' },
                { value: 9, label: '' },
                { value: 10, label: '심각하게 불편함' },
            ]
        },
        {
            "key": 2,
            "query": "VR 체험 이후, 목이 얼마나 뻣뻣하신가요?",
            "saveId": "NeckPain_2",
            "marks": [
                { value: 0, label: '전혀 뻣뻣하지 않음' },
                { value: 1, label: '' },
                { value: 2, label: '아주 약간 불편함' },
                { value: 3, label: '' },
                { value: 4, label: '약간 불편함' },
                { value: 5, label: '' },
                { value: 6, label: '불편함' },
                { value: 7, label: '' },
                { value: 8, label: '매우 불편함' },
                { value: 9, label: '' },
                { value: 10, label: '목을 움직일 수가 없음' },
            ]
        },
        {
            "key": 3,
            "query": "VR 체험 이후, 서있거나 걸을 때, 느껴지는 목의 피로감은 어느정도인가요?",
            "saveId": "NeckPain_3",
            "marks": [
                { value: 0, label: '전혀 불편하지 않음' },
                { value: 1, label: '' },
                { value: 2, label: '아주 약간 불편함' },
                { value: 3, label: '' },
                { value: 4, label: '약간 불편함' },
                { value: 5, label: '' },
                { value: 6, label: '불편함' },
                { value: 7, label: '' },
                { value: 8, label: '매우 불편함' },
                { value: 9, label: '' },
                { value: 10, label: '심각하게 불편함' },
            ]
        },
        {
            "key": 4,
            "query": "VR 체험 이후, 현재 목의 불편함이 내 감정과 기분에 영향을 미치고 있나요?",
            "saveId": "NeckPain_4",
            "marks": [
                { value: 0, label: '전혀 없음' },
                { value: 1, label: '' },
                { value: 2, label: '아주 약간 영향을 줌' },
                { value: 3, label: '' },
                { value: 4, label: '약간 영향을 줌' },
                { value: 5, label: '' },
                { value: 6, label: '영향을 줌' },
                { value: 7, label: '' },
                { value: 8, label: '매우 영향을 줌' },
                { value: 9, label: '' },
                { value: 10, label: '완전히 영향을 줌' },
            ]
        },
        {
            "key": 5,
            "query": "VR 체험 이후, 현재 목의 불편함이 생각하는 것과 집중하는 것에 영향을 미치고 있나요?",
            "saveId": "NeckPain_5",
            "marks": [
                { value: 0, label: '전혀 없음' },
                { value: 1, label: '' },
                { value: 2, label: '아주 약간 영향을 줌' },
                { value: 3, label: '' },
                { value: 4, label: '약간 영향을 줌' },
                { value: 5, label: '' },
                { value: 6, label: '영향을 줌' },
                { value: 7, label: '' },
                { value: 8, label: '매우 영향을 줌' },
                { value: 9, label: '' },
                { value: 10, label: '완전히 영향을 줌' },
            ]
        },
        {
            "key": 6,
            "query": "VR 체험 이후, 목을 옆으로 움직일 때, 문제가 있거나 불편함이 있나요?",
            "saveId": "NeckPain_6",
            "marks": [
                { value: 0, label: '전혀 불편하지 않음' },
                { value: 1, label: '' },
                { value: 2, label: '아주 약간 불편함' },
                { value: 3, label: '' },
                { value: 4, label: '약간 불편함' },
                { value: 5, label: '' },
                { value: 6, label: '불편함' },
                { value: 7, label: '' },
                { value: 8, label: '매우 불편함' },
                { value: 9, label: '' },
                { value: 10, label: '심각하게 불편함' },
            ]
        },
        {
            "key": 7,
            "query": "VR 체험 이후, 목을 위 아래 움직일 때, 문제가 있거나 불편함이 있나요?",
            "saveId": "NeckPain_7",
            "marks": [
                { value: 0, label: '전혀 불편하지 않음' },
                { value: 1, label: '' },
                { value: 2, label: '아주 약간 불편함' },
                { value: 3, label: '' },
                { value: 4, label: '약간 불편함' },
                { value: 5, label: '' },
                { value: 6, label: '불편함' },
                { value: 7, label: '' },
                { value: 8, label: '매우 불편함' },
                { value: 9, label: '' },
                { value: 10, label: '심각하게 불편함' },
            ]
        },
        {
            "key": 8,
            "query": "목의 불편함이 가상 환경에 몰입하는 것 혹은 내가 가상 세계에 있다는 느낌이 드는 것을 방해했나요?",
            "saveId": "NeckPain_8",
            "marks": [
                { value: 0, label: '전혀 없음' },
                { value: 1, label: '' },
                { value: 2, label: '아주 약간 방해함' },
                { value: 3, label: '' },
                { value: 4, label: '약간 방해함' },
                { value: 5, label: '' },
                { value: 6, label: '방해함' },
                { value: 7, label: '' },
                { value: 8, label: '매우 방해함' },
                { value: 9, label: '' },
                { value: 10, label: '완전히 방해했음' },
            ]
        },
    ]

    const HeadRegionPainQuestion = [
        {
            "key": 9,
            "query": "목에 불편함이 있나요?",
            "saveId": "HeadPain_9",
        },
        {
            "key": 8,
            "query": "압박에 의해 눈에 불편함이 있나요?",
            "saveId": "HeadPain_8",
        },
        {
            "key": 7,
            "query": "뒤통수에 불편함이 있나요?",
            "saveId": "HeadPain_7",
        },
        {
            "key": 1,
            "query": "콧대에 불편함이 있나요?",
            "saveId": "HeadPain_1",
        },
        {
            "key": 2,
            "query": "광대에 불편함이 있나요?",
            "saveId": "HeadPain_2",
        },
        {
            "key": 3,
            "query": "눈썹에 불편함이 있나요?",
            "saveId": "HeadPain_3",
        },
        {
            "key": 4,
            "query": "이마에 불편함이 있나요?",
            "saveId": "HeadPain_4",
        },
        {
            "key": 5,
            "query": "관자놀이에 불편함이 있나요?",
            "saveId": "HeadPain_5",
        },
        {
            "key": 6,
            "query": "정수리에 불편함이 있나요?",
            "saveId": "HeadPain_6",
        },
    ]

    const [contentGEQForm, SetGEQForm] = useState(GEQForm
        .map((q) => (
            <SliderQuestionMoreOptions
                key={q.key}
                question={q.query}
                saveId={q.saveId}
                min={0}
                max={4}
                step={1}
                marks={[
                    { value: 0, label: '전혀 아님' },
                    { value: 1, label: '약간' },
                    { value: 2, label: '보통' },
                    { value: 3, label: '아주' },
                    { value: 4, label: '매우' },
                ]}
                onChange={(v) => handleQuestionChange(q.saveId, v)}
            />
        )))

    const [contentUSEForm, SetUSEForm] = useState(USEForm
        .map((q) => (
            <SliderQuestionMoreOptions
                key={q.key}
                question={q.query}
                saveId={q.saveId}
                min={1}
                max={7}
                step={1}
                marks={[
                    { value: 1, label: '매우 동의 안 함' },
                    { value: 2, label: '동의 안 함' },
                    { value: 3, label: '약간 동의 안 함' },
                    { value: 4, label: '중간' },
                    { value: 5, label: '약간 동의함' },
                    { value: 6, label: '동의함' },
                    { value: 7, label: '매우 동의함' },
                ]}
                onChange={(v) => handleQuestionChange(q.saveId, v)}
            />
        )))

    const [contentHeadRegions, SetContentHeadRegions] = useState(HeadRegionPainQuestion
        .map((q) => (
            <SliderQuestionMoreOptions
                key={q.key}
                question={q.query}
                saveId={q.saveId}
                min={0}
                max={10}
                step={1}
                marks={[
                    { value: 0, label: '전혀 불편하지 않음' },
                    { value: 1, label: '' },
                    { value: 2, label: '아주 약간 불편함' },
                    { value: 3, label: '' },
                    { value: 4, label: '약간 불편함' },
                    { value: 5, label: '' },
                    { value: 6, label: '불편함' },
                    { value: 7, label: '' },
                    { value: 8, label: '매우 불편함' },
                    { value: 9, label: '' },
                    { value: 10, label: '심각하게 불편함' },
                ]}
                onChange={(v) => handleQuestionChange(q.saveId, v)}
            />
        )));

    const [contentIPQ, setContentIPQ] = useState(IPQContnetForm.map((q) => (
        <SliderQuestionMoreOptions
                key={q.key}
                question={q.query}
                saveId={q.saveId}
                min={0}
                max={6}
                step={1}
                marks={q.optionLabels}
                onChange={(v) => handleQuestionChange(q.saveId, v)}
            />
    )));


    const [NeckPainContents, SetNeckPainContents] = useState(NeckPainQuestion
        .map((q) => (
            <SliderQuestionMoreOptions
                key={q.key}
                question={q.query}
                saveId={q.saveId}
                min={0}
                max={10}
                step={1}
                marks={q.marks}
                onChange={(v) => handleQuestionChange(q.saveId, v)}
            />
        )))

    const [SUSContents, SetSUSContents] = useState(SUSShortForm
        .map((q) => (
            <SliderQuestionMoreOptions
                key={q.key}
                question={q.query}
                saveId={q.saveId}
                min={1}
                max={7}
                step={1}
                marks={[
                    { value: 1, label: '매우 동의 안 함' },
                    { value: 2, label: '동의 안 함' },
                    { value: 3, label: '약간 동의 안 함' },
                    { value: 4, label: '중간' },
                    { value: 5, label: '약간 동의함' },
                    { value: 6, label: '동의함' },
                    { value: 7, label: '매우 동의함' },
                ]}
                onChange={(v) => handleQuestionChange(q.saveId, v)}
            />
        )))

    const [SSQContents, SetSSQContents] = useState(SSQShortForm
        .map((q) => (
            <SliderQuestionMoreOptions
                key={q.key}
                question={q.query}
                saveId={q.saveId}
                min={1}
                max={7}
                step={1}
                marks={[
                    { value: 1, label: '전혀 없음' },
                    { value: 2, label: '' },
                    { value: 3, label: '약간' },
                    { value: 4, label: '' },
                    { value: 5, label: '보통' },
                    { value: 6, label: '' },
                    { value: 7, label: '심각' },
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
                                            "Lifter",
                                            "None"
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
                                    {/* <div className="rightaline"> */}
                                    <div className="d-flex" style={{ justifyContent: "space-around" }}>
                                        <button
                                            className="btn btn-primary fw-500 rowBT"
                                            type="button"
                                            onClick={() => {
                                                handleQuestionChange("SurveyStartTime", formatCurrentTime());
                                                document.getElementById("TabNeck").click();
                                            }}
                                        >
                                            <span style={{ marginRight: "0.5rem" }}>설문 시작 하기</span>
                                            <i className="fas fa-forward text-white"></i>
                                        </button>
                                    </div>
                                    {/* </div> */}
                                </div>

                                <div className="tab-pane fade show" id="NeckView" role="tabpanel" aria-labelledby="TabNeck">
                                    <div className="text-lg d-flex mt-n6 mb-4 justify-content-evenly text-danger fw-500">
                                        * 파란 점을 클릭해서 끌면 편하게 선택할 수 있습니다 *
                                    </div>
                                    {NeckPainContents}

                                    {contentHeadRegions}
                                    <div className="rightaline">
                                        <button
                                            className="btn btn-primary fw-500"
                                            type="button"
                                            onClick={() => {
                                                if (CheckValidate([
                                                    "HeadPain_1",
                                                    "HeadPain_2",
                                                    "HeadPain_3",
                                                    "HeadPain_4",
                                                    "HeadPain_5",
                                                    "HeadPain_6",
                                                    "HeadPain_7",
                                                    "HeadPain_8",
                                                    "HeadPain_9",
                                                    "NeckPain_1",
                                                    "NeckPain_2",
                                                    "NeckPain_3",
                                                    "NeckPain_4",
                                                    "NeckPain_5",
                                                    "NeckPain_6",
                                                    "NeckPain_7",
                                                ])) {
                                                    // calculateSSQ();
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
                                        * 파란 점을 클릭해서 끌면 편하게 선택할 수 있습니다 *
                                    </div>

                                    {SUSContents}

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
                                                    "SUS_1",
                                                    "SUS_2",
                                                    "SUS_3",
                                                    "SUS_4",
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
                                    {contentGEQForm}

                                    {contentUSEForm}
                                    <div className="rightaline">
                                        <button
                                            className="btn btn-primary fw-500"
                                            type="button"
                                            onClick={() => {
                                                if (CheckValidate([
                                                    "GEQ_1",
                                                    "GEQ_2",
                                                    "GEQ_3",
                                                    "GEQ_4",
                                                    "GEQ_5",
                                                    "GEQ_6",
                                                    "GEQ_7",
                                                    "GEQ_8",
                                                    "GEQ_9",
                                                    "USE_1",
                                                    "USE_2",
                                                    "USE_3",
                                                    "USE_4",
                                                    "USE_5",
                                                    "USE_6",
                                                    "USE_7",
                                                    "USE_8",
                                                    "USE_9",
                                                    "USE_10",
                                                ])) {
                                                    scrollToTop();
                                                    // calculateSUS();
                                                    document.getElementById("TabIPQ").click();
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

                                <div className="tab-pane fade show" id="IPQView" role="tabpanel" aria-labelledby="TabIPQ">
                                    {contentIPQ}
                                    <div className="rightaline">
                                        <button
                                            className="btn btn-primary fw-500"
                                            type="button"
                                            onClick={() => {
                                                if (CheckValidate([
                                                    "IPQ_1",
                                                    "IPQ_2",
                                                    "IPQ_3",
                                                    "IPQ_4",
                                                    "IPQ_5",
                                                    "IPQ_6",
                                                    "IPQ_7",
                                                    "IPQ_8",
                                                    "IPQ_9",
                                                    "IPQ_10",
                                                    "IPQ_11",
                                                    "IPQ_12",
                                                    "IPQ_13",
                                                    "IPQ_14",
                                                    "IPQ_15",
                                                ])) {
                                                    scrollToTop();
                                                    calculateIPQ();
                                                    document.getElementById("TabTLX").click();
                                                    // handleSubmit(formData);
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

                                    {TLXContents}

                                    <LargeTextAnswer
                                        SaveId={"PAComment"}
                                        question={"체험간 느꼈던 경험을 자유롭게 서술해주세요..."}
                                        hint={"입력..."}
                                        onChange={(answer) => handleQuestionChange("PAComment", answer)}
                                    />

                                    <div className="rightaline">
                                        <button
                                            className="btn btn-secondary fw-500"
                                            type="button"
                                            onClick={() => {
                                                if (CheckValidate([
                                                    "TLX_1",
                                                    "TLX_2",
                                                    "TLX_3",
                                                    "TLX_4",
                                                    "TLX_5",
                                                    "TLX_6",
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

export default PostQuestion;
