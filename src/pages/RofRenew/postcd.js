
import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

import HEADER from '../../components/Header';
import {
    ShortTextAnswer,
    RadioSelection,
    LargeTextAnswer,
    SliderQuesiton,
    SliderQuestionMoreOptions,
    SliderQuesitonReverse
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
    "MISC",
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
    "IPQ_GENERAL",
    "IPQ_SP",
    "IPQ_INV",
    "IPQ_REAL",
    "PAComment",
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

        MISC: "",

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
        IPQ_GENERAL: "",
        IPQ_SP: "",
        IPQ_INV: "",
        IPQ_REAL: "",

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

        const link = "https://script.google.com/macros/s/AKfycbyOI0f-RbrUsbHFIFjXLjoW6MeX_xpAFvz_Lyc-FYbXCs7p4hh19P5JnBT3T-BraSr9/exec";
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
        const t_ssq = [...SSQContents].sort(() => Math.random() - 0.5);
        SetSSQContents(t_ssq);

        const t_ipq = [...contentIPQ].sort(() => Math.random() - 0.5);
        setContentIPQ(t_ipq);
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

    function calculateSSQ() {

        handleQuestionChange("NAUSEA", (
            (parseFloat(formData['SSQ_1']))
            + parseFloat(formData['SSQ_6'])
            + parseFloat(formData['SSQ_7'])
            + parseFloat(formData['SSQ_8'])
            + parseFloat(formData['SSQ_9'])
            + parseFloat(formData['SSQ_15'])
            + parseFloat(formData['SSQ_16'])
        )
            * 9.54);

        handleQuestionChange("Oculomotor", (parseFloat(formData['SSQ_1'])
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
            ((parseFloat(formData['SSQ_1'])
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

    const IPQContnetForm = [
        {
            "key": 1,
            "query": "나는 가상 세계에 나의 몸과 마음이 `그곳에 있다`는 느낌을 받았다. ",
            "saveId": "IPQ_1",
            "optionLabels": [
                { value: 0, label: '전혀 아님' },
                { value: 1, label: '' },
                { value: 2, label: '' },
                { value: 3, label: '보통' },
                { value: 4, label: '' },
                { value: 5, label: '' },
                { value: 6, label: '매우 그렇다' },
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
            "query": "가상 세계를 체험하는 동안, 주변 환경을 얼마나 신경 쓰고 있었나요 (예: 주변 소음, 실내 온도, 다른 사람 등)",
            "saveId": "IPQ_7",
            "optionLabels": [
                { value: 0, label: '매우 신경쓰고 있었다' },
                { value: 1, label: '' },
                { value: 2, label: '' },
                { value: 3, label: '보통' },
                { value: 4, label: '' },
                { value: 5, label: '' },
                { value: 6, label: '전혀 신경 쓰지 않았다' },
            ]
        },
        {
            "key": 8,
            "query": "가상 환경을 체험하는 동안, 실제 환경을 인식하거나 신경쓰지 않았다. (신경 안 씀)",
            "saveId": "IPQ_8",
            "optionLabels": [
                { value: 0, label: '주변 환경을 신경 썼다' },
                { value: 1, label: '' },
                { value: 2, label: '' },
                { value: 3, label: '보통' },
                { value: 4, label: '' },
                { value: 5, label: '' },
                { value: 6, label: '주변 환경을 신경쓰지 않았다' },
            ]
        },
        {
            "key": 9,
            "query": "가상 환경을 체험하는 동안, 실제 환경에 주의를 기울이거나 신경쓰고 있었다. (신경 씀)",
            "saveId": "IPQ_9",
            "optionLabels": [
                { value: 0, label: '주변 환경을 신경 쓰지 않았다' },
                { value: 1, label: '' },
                { value: 2, label: '' },
                { value: 3, label: '보통' },
                { value: 4, label: '' },
                { value: 5, label: '' },
                { value: 6, label: '주변 환경을 신경 썼다' },
            ]
        },
        {
            "key": 10,
            "query": "내 관심은 가상 환경에 완전히 사로잡혔다.",
            "saveId": "IPQ_10",
            "optionLabels": [
                { value: 0, label: '전혀 아님' },
                { value: 1, label: '' },
                { value: 2, label: '' },
                { value: 3, label: '보통' },
                { value: 4, label: '' },
                { value: 5, label: '' },
                { value: 6, label: '매우 그렇다' },
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
        }
    ]

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
            "query": "VR을 체험하는 동안 시야가 흐려지는 듯한 느낌을 경험하였나요?  (Blurred Vision)",
            "saveId": "SSQ_11",
            "leftLable": "전혀 없음",
            "rightLable": "매우 심각함"
        },
        {
            "key": 12,
            "query": "VR을 체험하는 동안 눈을 떴을 때, 현기증이 났다.",
            "saveId": "SSQ_12",
            "leftLable": "전혀 없음",
            "rightLable": "매우 심각함"
        },
        {
            "key": 13,
            "query": "VR을 체험하는 동안 눈을 감았을 때, 현기증이 났다.",
            "saveId": "SSQ_13",
            "leftLable": "전혀 없음",
            "rightLable": "매우 심각함"
        },
        {
            "key": 14,
            "query": "VR을 체험하는 동안 빙빙 도는 듯한 어지러움을 느꼈다",
            "saveId": "SSQ_14",
            "leftLable": "전혀 없음",
            "rightLable": "매우 심각함"
        },
        {
            "key": 15,
            "query": "VR을 체험하는 동안 위에 부담을 느꼈다.",
            "saveId": "SSQ_15",
            "leftLable": "전혀 없음",
            "rightLable": "매우 심각함"
        },
        {
            "key": 16,
            "query": "VR을 체험하는 동안 트림을 경험했다.",
            "saveId": "SSQ_16",
            "leftLable": "전혀 없음",
            "rightLable": "매우 심각함"
        },
        {
            "key": 17,
            "query": "VR을 체험하는 동안 현기증을 경험했다.",
            "saveId": "XRSQ_7",
            "leftLable": "전혀 없음",
            "rightLable": "매우 심각함"
        },
        {
            "key": 18,
            "query": "VR을 체험하는 동안 불안을 경험했다.",
            "saveId": "XRSQ_8",
            "leftLable": "전혀 없음",
            "rightLable": "매우 심각함"
        },
        {
            "key": 19,
            "query": "VR을 체험하는 동안 두근거림, 심장 박동이 빠르게 뛰는 듯한 불편감을 느꼈다.",
            "saveId": "XRSQ_9",
            "leftLable": "전혀 없음",
            "rightLable": "매우 심각함"
        },
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
                                            "Control",
                                            "Rof",
                                            "Noise"
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
                                    {/* </div> */}
                                </div>

                                <div className="tab-pane fade show" id="NeckView" role="tabpanel" aria-labelledby="TabNeck">
                                    <div className="text-lg d-flex mt-n6 mb-4 justify-content-evenly text-danger fw-500">
                                        * 파란 점을 클릭해서 끌면서 선택한다면, 편하게 선택할 수 있습니다 *
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
                                        * 파란 점을 클릭해서 끌면서 선택한다면, 편하게 선택할 수 있습니다 *
                                    </div>

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
                                                ])) {
                                                    calculateIPQ();
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
