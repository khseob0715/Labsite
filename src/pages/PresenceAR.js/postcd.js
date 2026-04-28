
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
    RadioLikertScale,
} from '../../components/questionforms';

import { useAlert, types } from 'react-alert'


import {
    Slider,
} from "@mui/material";


import CustomLoading from "../../components/CustomLoading";

const keyOrder = [
    "SurveyStartTime",
    "PAName",
    "RadioForPACondition",
    "SUDS",
    "PerceivedWalkingPath",
    "PANAS_1",
    "PANAS_2",
    "PANAS_3",
    "PANAS_4",
    "PANAS_5",
    "PANAS_6",
    "PANAS_7",
    "PANAS_8",
    "PANAS_9",
    "PANAS_10",
    "PANAS_11",
    "PANAS_12",
    "PANAS_13",
    "PANAS_14",
    "PANAS_15",
    "PANAS_16",
    "PANAS_17",
    "PANAS_18",
    "PANAS_19",
    "PANAS_20",
    "PANAS_Positive",
    "PANAS_Negative",
    "PH1",
    "PH2",
    "PH3",
    "PH4",
    "PH5",
    "PH6",
    "PH7",
    "PH8",
    "RE1",
    "RE2",
    "RE3",
    "RE4",
    "RE5",
    "RE6",
    "RE7",
    "SA1",
    "SA2",
    "SA3",
    "SA4",
    "SA5",
    "CP1",
    "CP2",
    "CP3",
    "CP4",
    "CP5",
    "PH1_rm",
    "PH2_rm",
    "PH3_rm",
    "PH4_rm",
    "PH5_rm",
    "PH6_rm",
    "PH7_rm",
    "PH8_rm",
    "RE1_rm",
    "RE2_rm",
    "RE3_rm",
    "RE4_rm",
    "RE6_rm",
    "SA1_rm",
    "SA2_rm",
    "SA3_rm",
    "SA4_rm",
    "SA5_rm",
    "CP1_rm",
    "CP2_rm",
    "CP3_rm",
    "CP4_rm",
    "TLX_1",
    "TLX_2",
    "TLX_3",
    "TLX_4",
    "TLX_5",
    "TLX_6",
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
    "IPQ_SP",
    "IPQ_INV",
    "IPQ_REAL",
    "SUS_1",
    "SUS_2",
    "SUS_3",
    "SUS_4",
    "SUS_5",
    "SUS_6",
    "SUS_7",
    "SUS_8",
    "SUS_9",
    "SUS_10",
    "SUSTotal",
    "SSQ_5",
    "SSQ_8",
    "SSQ_10",
    "SSQ_11",
    "SSQ_12",
    "SSQ_13",
    "SSQ_14",
    "Disorientation",
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

        SUS_1: "",
        SUS_2: "",
        SUS_3: "",
        SUS_4: "",
        SUS_5: "",
        SUS_6: "",
        SUS_7: "",
        SUS_8: "",
        SUS_9: "",
        SUS_10: "",
        SUSTotal: "",
    })


    function calculatPANAS() {

        handleQuestionChange("PANAS_Positive",
            (
                (
                    parseInt(formData['PANAS_1'])
                    + parseInt(formData['PANAS_3'])
                    + parseInt(formData['PANAS_5'])
                    + parseInt(formData['PANAS_9'])
                    + parseInt(formData['PANAS_10'])
                    + parseInt(formData['PANAS_12'])
                    + parseInt(formData['PANAS_14'])
                    + parseInt(formData['PANAS_16'])
                    + parseInt(formData['PANAS_17'])
                    + parseInt(formData['PANAS_19'])
                )
            )
        );

        handleQuestionChange("PANAS_Negative",
            (
                (
                    parseInt(formData['PANAS_2'])
                    + parseInt(formData['PANAS_4'])
                    + parseInt(formData['PANAS_6'])
                    + parseInt(formData['PANAS_7'])
                    + parseInt(formData['PANAS_8'])
                    + parseInt(formData['PANAS_11'])
                    + parseInt(formData['PANAS_13'])
                    + parseInt(formData['PANAS_15'])
                    + parseInt(formData['PANAS_18'])
                    + parseInt(formData['PANAS_20'])
                )
            )
        );
    }

    const PANASquesstions = [
        {
            "key": 1,
            "question": "흥미로운 (Interested)",
            "saveId": "PANAS_1"
        },
        {
            "key": 2,
            "question": "고민스러운 (Distressed)",
            "saveId": "PANAS_2"
        },
        {
            "key": 3,
            "question": "흥분된 (Excited)",
            "saveId": "PANAS_3"
        },
        {
            "key": 4,
            "question": "화난 (Upset)",
            "saveId": "PANAS_4"
        },
        {
            "key": 5,
            "question": "심신이 강인한 (Strong)",
            "saveId": "PANAS_5"
        },
        {
            "key": 6,
            "question": "죄책감이 드는 (Guilty)",
            "saveId": "PANAS_6"
        },
        {
            "key": 7,
            "question": "무서운 (Scared)",
            "saveId": "PANAS_7"
        },
        {
            "key": 8,
            "question": "적대적인 (Hostile)",
            "saveId": "PANAS_8"
        },
        {
            "key": 9,
            "question": "열정적인 (Enthusiastic)",
            "saveId": "PANAS_9"
        },
        {
            "key": 10,
            "question": "자랑스러운 (Proud)",
            "saveId": "PANAS_10"
        },
        {
            "key": 11,
            "question": "짜증난 (Irritable)",
            "saveId": "PANAS_11"
        },
        {
            "key": 12,
            "question": "경계하는 (Alert)",
            "saveId": "PANAS_12"
        },
        {
            "key": 13,
            "question": "부끄러운 (Ashamed)",
            "saveId": "PANAS_13"
        },
        {
            "key": 14,
            "question": "탁월한 (Inspired)",
            "saveId": "PANAS_14"
        },
        {
            "key": 15,
            "question": "불안한/신경질적인 (Nervous)",
            "saveId": "PANAS_15"
        },
        {
            "key": 16,
            "question": "단호한 (Determined)",
            "saveId": "PANAS_16"
        },
        {
            "key": 17,
            "question": "주의를 기울이는 (Attentive)",
            "saveId": "PANAS_17"
        },
        {
            "key": 18,
            "question": "초조한 (Jittery)",
            "saveId": "PANAS_18"
        },
        {
            "key": 19,
            "question": "활동적인 (Active)",
            "saveId": "PANAS_19"
        },
        {
            "key": 20,
            "question": "걱정하는 (Afraid)",
            "saveId": "PANAS_20"
        },
    ]

    function calculateIPQ() {
        // IPQ_GENERAL: "",
        // IPQ_SP: "",
        // IPQ_INV: "",
        // IPQ_REAL: "",


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


    const BFIoptionNames = [
        { label: "1 (전혀 그렇지 않음)", value: 1 },
        { label: "2 (그렇지 않은 편)", value: 2 },
        { label: "3 (보통)", value: 3 },
        { label: "4 (그런 편)", value: 4 },
        { label: "5 (항상 그런 편)", value: 5 },
    ]

    function calculateSUS() {
        handleQuestionChange("SUSTotal",
            (
                (
                    ((
                        (parseInt(formData['SUS_1'])
                            + parseInt(formData['SUS_3'])
                            + parseInt(formData['SUS_5'])
                            + parseInt(formData['SUS_7'])
                            + parseInt(formData['SUS_9'])) - 5
                    )
                        +
                        (
                            (5 - (parseInt(formData['SUS_2'])))
                            + (5 - (parseInt(formData['SUS_4'])))
                            + (5 - (parseInt(formData['SUS_6'])))
                            + (5 - (parseInt(formData['SUS_8'])))
                            + (5 - (parseInt(formData['SUS_10'])))
                        ))
                    *
                    2.5
                )
            )
        );
    }

    const IPQContnetForm = [
        {
            "key": 1,
            "query": "나는 가상 세계에 나의 몸과 마음이 `그곳에 있다`는 느낌을 받았다. (몰입감 / 현장감)",
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
            "key": 3,
            "query": "나는 가상 세계가 아닌 단순히 그림을 바라보고 있는 듯한 느낌을 받았다",
            "saveId": "IPQ_3",
            "optionLabels": [
                { value: 0, label: '전혀 아님 (가상 세계)' },
                { value: 1, label: '' },
                { value: 2, label: '' },
                { value: 3, label: '보통' },
                { value: 4, label: '' },
                { value: 5, label: '' },
                { value: 6, label: '매우 그렇다 (그저 그림)' },
            ]
        },
        {
            "key": 4,
            "query": "나는 내가 가상 세계에 있다는 느낌을 받지 않았다.",
            "saveId": "IPQ_4",
            "optionLabels": [
                { value: 0, label: '그저 가상 세계일뿐이다.' },
                { value: 1, label: '' },
                { value: 2, label: '' },
                { value: 3, label: '보통' },
                { value: 4, label: '' },
                { value: 5, label: '' },
                { value: 6, label: '가상 세계가 현실처럼 느껴졌다.' },
            ]
        },
        {
            "key": 5,
            "query": "나의 행동은 현실에서 행동하는 것이 아닌, 가상 세계에서 행동하고 있는 것 같다는 느낌이 들었다.",
            "saveId": "IPQ_5",
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
            "key": 6,
            "query": "나는 가상 공간에 있는 듯한 느낌이 들었다.",
            "saveId": "IPQ_6",
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
            "key": 7,
            "query": "가상 세계를 체험하는 동안 주변 환경을 얼마나 신경 쓰고 있었나요 (예: 주변 소음, 실내 온도, 다른 사람 등)",
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
            "query": "나는 가상 환경을 체험하는 동안, 실제 주변 환경을 신경쓰지 않았다.",
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
            "query": "나는 가상 환경을 체험하는 동안, 실제 주변 환경을 신경쓰고 있었다.",
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
            "query": "나는 가상 환경에 내 관심을 완전히 쏟았다.",
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
            "optionLabels": [
                { value: 0, label: '완전히 현실 같았다' },
                { value: 1, label: '' },
                { value: 2, label: '' },
                { value: 3, label: '보통' },
                { value: 4, label: '' },
                { value: 5, label: '' },
                { value: 6, label: '완전히 허구 같았다' },
            ]
        },
        {
            "key": 12,
            "query": "가상 세계에서의 경험이 얼마나 현실 세계의 경험과 일치되는 것 같나요?",
            "saveId": "IPQ_12",
            "optionLabels": [
                { value: 0, label: '전혀 일치하지 않는다' },
                { value: 1, label: '' },
                { value: 2, label: '' },
                { value: 3, label: '보통' },
                { value: 4, label: '' },
                { value: 5, label: '' },
                { value: 6, label: '매우 일치한다' },
            ]
        },
        {
            "key": 13,
            "query": "가상 세계가 얼마나 상상 혹은 현실처럼 느껴졌나요?",
            "saveId": "IPQ_13",
            "optionLabels": [
                { value: 0, label: '상상 속 세계 같았다' },
                { value: 1, label: '' },
                { value: 2, label: '' },
                { value: 3, label: '보통' },
                { value: 4, label: '' },
                { value: 5, label: '' },
                { value: 6, label: '현실 속 세계 같았다' },
            ]
        },
        {
            "key": 14,
            "query": "가상 세계가 실제 세계보다 더 현실적으로 느껴졌나요?",
            "saveId": "IPQ_14",
            "optionLabels": [
                { value: 0, label: '전혀 아니다 (허구 같다)' },
                { value: 1, label: '' },
                { value: 2, label: '' },
                { value: 3, label: '보통' },
                { value: 4, label: '' },
                { value: 5, label: '' },
                { value: 6, label: '매우 그렇다 (현실 같다)' },
            ]
        },
        {
            "key": 15,
            "query": "실험 진행자를 제외하고, 가상 세계를 체험하는 동안 주변 환경을 얼마나 신경쓰고 있었나요?",
            "saveId": "IPQ_15",
            "optionLabels": [
                { value: 0, label: '매우 신경쓰고 있었다' },
                { value: 1, label: '' },
                { value: 2, label: '' },
                { value: 3, label: '보통' },
                { value: 4, label: '' },
                { value: 5, label: '' },
                { value: 6, label: '전혀 신경 쓰지 않았다' },
            ]
        }
    ]

    const SUSShortForm = [
        {
            "key": 1,
            "query": "나는 이 시스템을 자주 사용하고 싶다고 생각한다. ",
            "saveId": "SUS_1",
        },
        {
            "key": 2,
            "query": "나는 이 시스템이 불필요하게 복잡하다고 생각한다. ",
            "saveId": "SUS_2",
        },
        {
            "key": 3,
            "query": "나는 이 시스템이 사용하기 쉽다고 생각했다.",
            "saveId": "SUS_3",
        },
        {
            "key": 4,
            "query": "나는 이 시스템을 사용하려면 기술자의 지원이 필요하다고 생각한다.",
            "saveId": "SUS_4",
        },
        {
            "key": 5,
            "query": "나는 이 시스템의 다양한 기능들이 잘 통합되어 있다는 것을 알 수 있었다.",
            "saveId": "SUS_5",
        },
        {
            "key": 6,
            "query": "나는 이 시스템에 모순이 너무 많다고 생각한다.",
            "saveId": "SUS_6",
        },
        {
            "key": 7,
            "query": "나는 대부분의 사람이 이 시스템을 빠르게 사용할 수 있을 것이라고 생각한다.",
            "saveId": "SUS_7",
        },
        {
            "key": 8,
            "query": "나는 이 시스템을 사용하는 것이 매우 번거럽다고 생각한다.",
            "saveId": "SUS_8",
        },
        {
            "key": 9,
            "query": "나는 이 시스템을 자신감있게 잘 사용할 수 있다고 느꼈다.",
            "saveId": "SUS_9",
        },
        {
            "key": 10,
            "query": "나는 이 시스템을 사용하기 전에 많은 것을 배워야 한다고 생각했다.",
            "saveId": "SUS_10",
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


    const [PANASContents, SetPANASContents] = useState(PANASquesstions
        .map((questionnaire) => (
            <RadioLikertScale
                key={questionnaire.key}
                optionNames={BFIoptionNames}
                saveId={questionnaire.saveId}
                question={questionnaire.question}
                radioName={questionnaire.saveId}
                onChange={(v) => handleQuestionChange(questionnaire.saveId, v)}
            />
        )));

    const handleSubmit = async (formValues) => {

        setShowLoad(true);

        const body = new URLSearchParams();

        for (const key of keyOrder) {
            const value = formValues[key];
            // console.log(value);
            body.append(key, value);
        }


        const link = "https://script.google.com/macros/s/AKfycbwfAGinmK696U198LkvkCEgZC0PmOaYU9PsQzySNqZlhKbMf8KaMScfk4R4ngAgLJCP/exec";
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

    const [SUSContents, SetSUSContents] = useState(SUSShortForm
        .map((q) => (
            <SliderQuestionMoreOptions
                key={q.key}
                question={q.query}
                saveId={q.saveId}
                min={1}
                max={5}
                step={1}
                marks={[
                    { value: 1, label: '매우 동의 안 함' },
                    { value: 2, label: '약간 동의 안 함' },
                    { value: 3, label: '중간' },
                    { value: 4, label: '약간 동의함' },
                    { value: 5, label: '매우 동의함' },
                ]}
                onChange={(v) => handleQuestionChange(q.saveId, v)}
            />
        )))


    const shuffleContents = () => {
        const t_ipq = [...contentIPQ].sort(() => Math.random() - 0.5);
        setContentIPQ(t_ipq);

        const shuffledContentsSUS = [...SUSContents].sort(() => Math.random() - 0.5);
        SetSUSContents(shuffledContentsSUS);

        const t_ssq = [...SSQContents].sort(() => Math.random() - 0.5);
        SetSSQContents(t_ssq);

        const t_tlx = [...TLXContents].sort(() => Math.random() - 0.5);
        SetTLXContents(t_tlx);

        const shuffledContentsPANAS = [...PANASContents].sort(() => Math.random() - 0.5);
        SetPANASContents(shuffledContentsPANAS);

        const t_avatar = [...AvatarContents].sort(() => Math.random() - 0.5);
        SetAvatarContents(t_avatar);
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


        handleQuestionChange("Disorientation", (parseFloat(formData['SSQ_5'])
            + parseFloat(formData['SSQ_8'])
            + parseFloat(formData['SSQ_10'])
            + parseFloat(formData['SSQ_11'])
            + parseFloat(formData['SSQ_12'])
            + parseFloat(formData['SSQ_13'])
            + parseFloat(formData['SSQ_14']))
            * 13.92);
    }



    const SSQShortForm = [
        {
            "key": 5,
            "query": "VR을 체험하는 동안 눈의 초점을 맞추기가 힘들었다고 느꼈다. (Difficulty Focusing)",
            "saveId": "SSQ_5",
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
        }
    ]


    const NASATLXForm = [
        {
            "key": 1,
            "query": "체험이 정신적으로 얼마나 힘들었습니까?",
            "saveId": "TLX_1",
            "leftLable": "전혀 없음",
            "rightLable": "매우 힘듬"
        },
        {
            "key": 2,
            "query": "체험이 신체적으로 얼마나 힘들었습니까?",
            "saveId": "TLX_2",
            "leftLable": "전혀 없음",
            "rightLable": "매우 힘듬"
        },
        {
            "key": 3,
            "query": "체험 중에 얼마나 서두르거나 서두르는 느낌을 받았습니까?",
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
            "query": "체험을 수행하는데 얼마나 많은 노력이 필요했습니까? ",
            "saveId": "TLX_5",
            "leftLable": "전혀 없음",
            "rightLable": "많은 노력이 필요"
        },
        {
            "key": 6,
            "query": "체험 수행을 얼마나 잘 수행했다고 생각하나요?",
            "saveId": "TLX_6",
            "leftLable": "매우 못 함",
            "rightLable": "매우 잘 함"
        }
    ]


    const AvatarForm = [
        {
            "key": 1,
            "query": "실험이 종료된 후에도 ''나랑 같이 행동한 교관''과 가상 객체가 여전히 방에 있다고 느꼈습니까?",
            "saveId": "PH1",
            "leftLable": "더 이상 방에 없었다",
            "rightLable": "방에 있었다"
        },
        {
            "key": 2,
            "query": "나는 ''나랑 같이 행동한 교관''과 가상 객체가 가상 세계나 다른 차원의 공간에 있다고 인식했다",
            "saveId": "PH2",
            "leftLable": "전혀 아니다",
            "rightLable": "매우 그렇다"
        },
        {
            "key": 3,
            "query": "나는 ''나랑 같이 행동한 교관''이 ____ 공간에 있다고 느꼈다.",
            "saveId": "PH3",
            "leftLable": "가상",
            "rightLable": "현실"
        },
        {
            "key": 4,
            "query": "나는 ''나랑 같이 행동한 교관''이 물리적 환경을 인지하고 있다고 느꼈다.",
            "saveId": "PH4",
            "leftLable": "전혀 아니다",
            "rightLable": "매우 그렇다"
        },
        {
            "key": 5,
            "query": "나는 ''나랑 같이 행동한 교관''이 물리적 환경에 영향을 미칠 수 있다고 느꼈다.",
            "saveId": "PH5",
            "leftLable": "전혀 아니다",
            "rightLable": "매우 그렇다"
        },
        {
            "key": 6,
            "query": "나는 ''나랑 같이 행동한 교관''을 걸어서 통과할 수 있다고 느꼈다.",
            "saveId": "PH6",
            "leftLable": "전혀 아니다",
            "rightLable": "매우 그렇다"
        },
        {
            "key": 7,
            "query": "나는 ''나랑 같이 행동한 교관''이 나를 걸어서 통과할 수 있다고 느꼈다.",
            "saveId": "PH7",
            "leftLable": "전혀 아니다",
            "rightLable": "매우 그렇다"
        },
        {
            "key": 8,
            "query": "''나랑 같이 행동한 교관''이 물리적인 몸을 가지고 있는 것 같았다.",
            "saveId": "PH8",
            "leftLable": "전혀 아니다",
            "rightLable": "매우 그렇다"
        },
        {
            "key": 9,
            "query": "나는 ''나랑 같이 행동한 교관''이 나와 같은 방에 있다는 존재감을 느꼈다 ",
            "saveId": "CP1",
            "leftLable": "전혀 아니다",
            "rightLable": "매우 그렇다"
        },
        {
            "key": 10,
            "query": "나는 ''나랑 같이 행동한 교관''이 나를 지켜보고, 나의 존재를 인지하고 있다고 느꼈다 ",
            "saveId": "CP2",
            "leftLable": "전혀 아니다",
            "rightLable": "매우 그렇다"
        },
        {
            "key": 12,
            "query": "나는 ''나랑 같이 행동한 교관''과 함께 있다는 느낌을 받았다 ",
            "saveId": "CP3",
            "leftLable": "전혀 아니다",
            "rightLable": "매우 그렇다"
        },
        {
            "key": 13,
            "query": "나는 ''나랑 같이 행동한 교관''과 동일 공간에 있다고 느꼈다 ",
            "saveId": "CP4",
            "leftLable": "전혀 아니다",
            "rightLable": "매우 그렇다"
        },
        {
            "key": 14,
            "query": "나는 나 자신이 ____ 공간에 있다고 느꼈다.",
            "saveId": "CP5",
            "leftLable": "가상",
            "rightLable": "현실"
        },
        {
            "key": 15,
            "query": "나는 ''나랑 같이 행동한 교관''이 화재 경보를 들을 수 있다고 느낀다.",
            "saveId": "SA1",
            "leftLable": "전혀 아니다",
            "rightLable": "매우 그렇다"
        },
        {
            "key": 16,
            "query": "나는 ''나랑 같이 행동한 교관''이 내가 빵을 구울 때, 냄새를 맡을 수 있다고 느낀다. ",
            "saveId": "SA2",
            "leftLable": "전혀 아니다",
            "rightLable": "매우 그렇다"
        },
        {
            "key": 17,
            "query": "나는 ''나랑 같이 행동한 교관''이 내가 가족사진을 보여줄 때, 볼 수 있다고 느낀다. ",
            "saveId": "SA3",
            "leftLable": "전혀 아니다",
            "rightLable": "매우 그렇다"
        },
        {
            "key": 18,
            "query": "나는 ''나랑 같이 행동한 교관''이 내 전화기를 줄 때, 만질 수 있다고 느낀다. ",
            "saveId": "SA4",
            "leftLable": "전혀 아니다",
            "rightLable": "매우 그렇다"
        },
        {
            "key": 19,
            "query": "나는 ''나랑 같이 행동한 교관''이 내가 샌드위치를 가져다 줄 때, 맛 볼 수 있다고 느낀다. ",
            "saveId": "SA5",
            "leftLable": "전혀 아니다",
            "rightLable": "매우 그렇다"
        },
        
        {
            "key": 20,
            "query": "''나랑 같이 행동한 교관''이 얼마나 ''실제''처럼 보였습니까?",
            "saveId": "RE1",
            "leftLable": "전혀 실제 같지 않다",
            "rightLable": "매우 실제 같다"
        },
        {
            "key": 21,
            "query": "나는 ''나랑 같이 행동한 교관''이 실제 사람이 아니라고 생각이 들었다. ",
            "saveId": "RE2",
            "leftLable": "전혀 아니다",
            "rightLable": "매우 그렇다"
        },
        {
            "key": 22,
            "query": "나는 ''나랑 같이 행동한 교관''이 감각이 있고, 의식이 있으며, 살아 있다고 느껴졌다. ",
            "saveId": "RE3",
            "leftLable": "전혀 아니다",
            "rightLable": "매우 그렇다"
        },
        {
            "key": 23,
            "query": "나는 ''나랑 같이 행동한 교관''을 실제 사람이라기 보다는, 단순히 컴퓨터화된 이미지로 인식한다. ",
            "saveId": "RE4",
            "leftLable": "전혀 아니다",
            "rightLable": "매우 그렇다"
        },
        {
            "key": 24,
            "query": "오늘 경험을 돌아볼 때, 단순히 컴퓨터와 활동하는 것과 실제 사람과 활동하는 것 중 어느 쪽에 더 가까웠습니까?",
            "saveId": "RE5",
            "leftLable": "컴퓨터",
            "rightLable": "실제 사람"
        },
        {
            "key": 25,
            "query": "오늘 ''나랑 같이 행동한 교관''과의 경험이 과거에 다른 사람과 협력하여 일했던 실제 경험과 어느 정도 유사했습니까?",
            "saveId": "RE6",
            "leftLable": "전혀 유사하지 않음",
            "rightLable": "매우 유사함"
        },
        {
            "key": 26,
            "query": "컴퓨터 인터페이스가 사라지고, 실제 사람과 직접 활동하고 있다고 느꼈던 순간이 있었습니까?",
            "saveId": "RE7",
            "leftLable": "항상 컴퓨터 인터페이스를 느꼈다",
            "rightLable": "실제 사람과 직접 상호작용하고 있었다"
        },
    ]


    const RemoteInstructorForm = [
        {
            "key": 1,
            "query": "실험이 종료된 후에도 ''나를 (원격 혹은 직접) 관찰하고 있는 교관''과 가상 객체가 여전히 방에 있다고 느꼈습니까?",
            "saveId": "PH1_rm",
            "leftLable": "더 이상 방에 없었다",
            "rightLable": "방에 있었다"
        },
        {
            "key": 2,
            "query": "나는 ''나를 (원격 혹은 직접) 관찰하고 있는 교관''과 가상 객체가 가상 세계나 다른 차원의 공간에 있다고 인식했다",
            "saveId": "PH2_rm",
            "leftLable": "전혀 아니다",
            "rightLable": "매우 그렇다"
        },
        {
            "key": 3,
            "query": "나는 ''나를 (원격 혹은 직접) 관찰하고 있는 교관''이 ____ 공간에 있다고 느꼈다.",
            "saveId": "PH3_rm",
            "leftLable": "가상",
            "rightLable": "현실"
        },
        {
            "key": 4,
            "query": "나는 ''나를 (원격 혹은 직접) 관찰하고 있는 교관''이 물리적 환경을 인지하고 있다고 느꼈다.",
            "saveId": "PH4_rm",
            "leftLable": "전혀 아니다",
            "rightLable": "매우 그렇다"
        },
        {
            "key": 5,
            "query": "나는 ''나를 (원격 혹은 직접) 관찰하고 있는 교관''이 물리적 환경에 영향을 미칠 수 있다고 느꼈다.",
            "saveId": "PH5_rm",
            "leftLable": "전혀 아니다",
            "rightLable": "매우 그렇다"
        },
        {
            "key": 6,
            "query": "나는 ''나를 (원격 혹은 직접) 관찰하고 있는 교관''을 걸어서 통과할 수 있다고 느꼈다.",
            "saveId": "PH6_rm",
            "leftLable": "전혀 아니다",
            "rightLable": "매우 그렇다"
        },
        {
            "key": 7,
            "query": "나는 ''나를 (원격 혹은 직접) 관찰하고 있는 교관''이 나를 걸어서 통과할 수 있다고 느꼈다.",
            "saveId": "PH7_rm",
            "leftLable": "전혀 아니다",
            "rightLable": "매우 그렇다"
        },
        {
            "key": 8,
            "query": "''나를 (원격 혹은 직접) 관찰하고 있는 교관''이 물리적인 몸을 가지고 있는 것 같았다.",
            "saveId": "PH8_rm",
            "leftLable": "전혀 아니다",
            "rightLable": "매우 그렇다"
        },
        {
            "key": 9,
            "query": "나는 ''나를 (원격 혹은 직접) 관찰하고 있는 교관''이 나와 같은 방에 있다는 존재감을 느꼈다 ",
            "saveId": "CP1_rm",
            "leftLable": "전혀 아니다",
            "rightLable": "매우 그렇다"
        },
        {
            "key": 10,
            "query": "나는 ''나를 (원격 혹은 직접) 관찰하고 있는 교관''이 나를 지켜보고, 나의 존재를 인지하고 있다고 느꼈다 ",
            "saveId": "CP2_rm",
            "leftLable": "전혀 아니다",
            "rightLable": "매우 그렇다"
        },
        {
            "key": 12,
            "query": "나는 ''나를 (원격 혹은 직접) 관찰하고 있는 교관''과 함께 있다는 느낌을 받았다 ",
            "saveId": "CP3_rm",
            "leftLable": "전혀 아니다",
            "rightLable": "매우 그렇다"
        },
        {
            "key": 13,
            "query": "나는 ''나를 (원격 혹은 직접) 관찰하고 있는 교관''과 동일 공간에 있다고 느꼈다 ",
            "saveId": "CP4_rm",
            "leftLable": "전혀 아니다",
            "rightLable": "매우 그렇다"
        },
        {
            "key": 15,
            "query": "나는 ''나를 (원격 혹은 직접) 관찰하고 있는 교관''이 화재 경보를 들을 수 있다고 느낀다.",
            "saveId": "SA1_rm",
            "leftLable": "전혀 아니다",
            "rightLable": "매우 그렇다"
        },
        {
            "key": 16,
            "query": "나는 ''나를 (원격 혹은 직접) 관찰하고 있는 교관''이 내가 빵을 구울 때, 냄새를 맡을 수 있다고 느낀다. ",
            "saveId": "SA2_rm",
            "leftLable": "전혀 아니다",
            "rightLable": "매우 그렇다"
        },
        {
            "key": 17,
            "query": "나는 ''나를 (원격 혹은 직접) 관찰하고 있는 교관''이 내가 가족사진을 보여줄 때, 볼 수 있다고 느낀다. ",
            "saveId": "SA3_rm",
            "leftLable": "전혀 아니다",
            "rightLable": "매우 그렇다"
        },
        {
            "key": 18,
            "query": "나는 ''나를 (원격 혹은 직접) 관찰하고 있는 교관''이 내 전화기를 줄 때, 만질 수 있다고 느낀다. ",
            "saveId": "SA4_rm",
            "leftLable": "전혀 아니다",
            "rightLable": "매우 그렇다"
        },
        {
            "key": 19,
            "query": "나는 ''나를 (원격 혹은 직접) 관찰하고 있는 교관''이 내가 샌드위치를 가져다 줄 때, 맛 볼 수 있다고 느낀다. ",
            "saveId": "SA5_rm",
            "leftLable": "전혀 아니다",
            "rightLable": "매우 그렇다"
        },
        {
            "key": 20,
            "query": "''나를 (원격 혹은 직접) 관찰하고 있는 교관''이 얼마나 ''실제''처럼 보였습니까?",
            "saveId": "RE1_rm",
            "leftLable": "전혀 실제 같지 않다",
            "rightLable": "매우 실제 같다"
        },
        {
            "key": 21,
            "query": "나는 ''나를 (원격 혹은 직접) 관찰하고 있는 교관''이 실제 사람이 아니라고 생각이 들었다. ",
            "saveId": "RE2_rm",
            "leftLable": "전혀 아니다",
            "rightLable": "매우 그렇다"
        },
        {
            "key": 22,
            "query": "나는 ''나를 (원격 혹은 직접) 관찰하고 있는 교관''이 감각이 있고, 의식이 있으며, 살아 있다고 느껴졌다. ",
            "saveId": "RE3_rm",
            "leftLable": "전혀 아니다",
            "rightLable": "매우 그렇다"
        },
        {
            "key": 23,
            "query": "나는 ''나를 (원격 혹은 직접) 관찰하고 있는 교관''을 실제 사람이라기 보다는, 단순히 컴퓨터화된 이미지로 인식한다. ",
            "saveId": "RE4_rm",
            "leftLable": "전혀 아니다",
            "rightLable": "매우 그렇다"
        },
        {
            "key": 25,
            "query": "오늘 ''나를 (원격 혹은 직접) 관찰하고 있는 교관''과의 경험이 과거에 다른 사람과 협력하여 일했던 실제 경험과 어느 정도 유사했습니까?",
            "saveId": "RE6_rm",
            "leftLable": "전혀 유사하지 않음",
            "rightLable": "매우 유사함"
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


    const [AvatarContents, SetAvatarContents] = useState(AvatarForm
        .map((q) => (
            <SliderQuesiton
                key={q.key}
                question={q.query}
                saveId={q.saveId}
                leftLabel={q.leftLable}
                rightLabel={q.rightLable}
                min={1}
                max={7}
                step={1}
                onChange={(v) => handleQuestionChange(q.saveId, v)}
            />
        )))

   
        const [RemoteInstructorContents, SetRemoteInstructor] = useState(RemoteInstructorForm
            .map((q) => (
                <SliderQuesiton
                    key={q.key}
                    question={q.query}
                    saveId={q.saveId}
                    leftLabel={q.leftLable}
                    rightLabel={q.rightLable}
                    min={1}
                    max={7}
                    step={1}
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
                                        id="TabSP" href="#SPView"
                                        data-bs-toggle="tab" role="tab"
                                        aria-controls="SPView" aria-selected="false">SP</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link fw-900 text-lg"
                                        id="TabRMS" href="#RMSView"
                                        data-bs-toggle="tab" role="tab"
                                        aria-controls="RMSiew" aria-selected="false">SP</a>
                                </li>


                                <li className="nav-item">
                                    <a className="nav-link fw-900 text-lg"
                                        id="TabRTS1" href="#RTS1View"
                                        data-bs-toggle="tab" role="tab"
                                        aria-controls="RTS1View" aria-selected="false">SP</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link fw-900 text-lg"
                                        id="TabRTS2" href="#RTS2View"
                                        data-bs-toggle="tab" role="tab"
                                        aria-controls="RTS2View" aria-selected="false">SP</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link fw-900 text-lg"
                                        id="TabRTS3" href="#RTS3View"
                                        data-bs-toggle="tab" role="tab"
                                        aria-controls="RTS3View" aria-selected="false">SP</a>
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
                                            "No_Observer",
                                            "With_Human_Observer",
                                            "With_Virtual_Observer"
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
                                        SaveId={"SUDS"}
                                        question={"SUDS Score"}
                                        hint={"실험 진행자 입력"}
                                        onChange={(answer) => handleQuestionChange("SUDS", answer)}
                                    />

                                    <ShortTextAnswer
                                        SaveId={"PerceivedWalkingPath"}
                                        question={"주관적 이동 거리"}
                                        hint={"m 단위"}
                                        onChange={(answer) => handleQuestionChange("PerceivedWalkingPath", answer)}
                                    />


                                    <div className="d-flex" style={{ justifyContent: "space-around" }}>
                                        <button
                                            className="btn btn-primary fw-500 rowBT"
                                            type="button"
                                            onClick={() => {

                                                if (CheckValidate([
                                                    "SUDS",
                                                    "PerceivedWalkingPath",
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
                                    {/* <div className="text-lg d-flex mt-n6 mb-4 justify-content-evenly text-danger fw-500">
                                        * 파란 점을 클릭해서 끌면서 선택한다면, 편하게 선택할 수 있습니다  SSQ *
                                    </div> */}

                                    {PANASContents}


                                    <div className="rightaline">
                                        <button
                                            className="btn btn-primary fw-500"
                                            type="button"
                                            onClick={() => {
                                                if (CheckValidate([
                                                    "PANAS_1",
                                                    "PANAS_2",
                                                    "PANAS_3",
                                                    "PANAS_4",
                                                    "PANAS_5",
                                                    "PANAS_6",
                                                    "PANAS_7",
                                                    "PANAS_8",
                                                    "PANAS_9",
                                                    "PANAS_10",
                                                    "PANAS_11",
                                                    "PANAS_12",
                                                    "PANAS_13",
                                                    "PANAS_14",
                                                    "PANAS_15",
                                                    "PANAS_16",
                                                    "PANAS_17",
                                                    "PANAS_18",
                                                    "PANAS_19",
                                                    "PANAS_20",
                                                ])) {

                                                    calculatPANAS();
                                                    scrollToTop();
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
                                    <div className="text-xl d-flex mt-n6 mb-4 justify-content-evenly text-danger fw-500">
                                        * 나와 같이 훈련했던 교관에 대해서 평가해주세요 *
                                    </div>

                                    {AvatarContents}

                                    <div className="rightaline">
                                        <button
                                            className="btn btn-primary fw-500"
                                            type="button"
                                            onClick={() => {
                                                if (CheckValidate([
                                                    "PH1",
                                                    "PH2",
                                                    "PH3",
                                                    "PH4",
                                                    "PH5",
                                                    "PH6",
                                                    "PH7",
                                                    "PH8",
                                                    "RE1",
                                                    "RE2",
                                                    "RE3",
                                                    "RE4",
                                                    "RE5",
                                                    "RE6",
                                                    "RE7",
                                                    "SA1",
                                                    "SA2",
                                                    "SA3",
                                                    "SA4",
                                                    "SA5",
                                                    "CP1",
                                                    "CP2",
                                                    "CP3",
                                                    "CP4",
                                                    "CP5",
                                                ])) {
                                                    scrollToTop();
                                                    document.getElementById("TabRMS").click();
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

                                <div className="tab-pane fade show" id="RMSView" role="tabpanel" aria-labelledby="TabRMS">
                                    <div className="text-xl d-flex mt-n6 mb-4 justify-content-evenly text-danger fw-500">
                                        * 나를 훈련장 밖에서 관찰하고 있던 교관에 대해서 평가해주세요 *
                                    </div>

                                    {RemoteInstructorContents}

                                    <div className="rightaline">
                                        <button
                                            className="btn btn-primary fw-500"
                                            type="button"
                                            onClick={() => {
                                                if (CheckValidate([
                                                    "PH1_rm",
                                                    "PH2_rm",
                                                    "PH3_rm",
                                                    "PH4_rm",
                                                    "PH5_rm",
                                                    "PH6_rm",
                                                    "PH7_rm",
                                                    "PH8_rm",
                                                    "RE1_rm",
                                                    "RE2_rm",
                                                    "RE3_rm",
                                                    "RE4_rm",
                                                    "RE6_rm",
                                                    "SA1_rm",
                                                    "SA2_rm",
                                                    "SA3_rm",
                                                    "SA4_rm",
                                                    "SA5_rm",
                                                    "CP1_rm",
                                                    "CP2_rm",
                                                    "CP3_rm",
                                                    "CP4_rm",
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
                                        * 파란 점을 클릭해서 끌면서 선택한다면, 편하게 선택할 수 있습니다*
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
                                                    document.getElementById("TabRTS1").click();
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



                                <div className="tab-pane fade show" id="RTS1View" role="tabpanel" aria-labelledby="TabRTS1">

                                    {contentIPQ}

                                    <div className="rightaline">
                                        <button
                                            className="btn btn-secondary fw-500"
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
                                                    scrollToTop();
                                                    calculateIPQ()
                                                    document.getElementById("TabRTS2").click();
                                                }
                                                else {
                                                    alert.show('답변되지 않은 질문이 있습니다.', { type: types.ERROR }) //alert will be shown in bottom left
                                                    console.log("is not a validate. Check all quesitons");
                                                }
                                            }}
                                        >
                                            <span style={{ marginRight: "0.5rem" }}>다음 페이지</span>
                                            <i className="fas fa-forward text-white"></i>
                                        </button>
                                    </div>
                                </div>

                                <div className="tab-pane fade show" id="RTS2View" role="tabpanel" aria-labelledby="TabRTS2">


                                    {SUSContents}


                                    <div className="rightaline">
                                        <button
                                            className="btn btn-secondary fw-500"
                                            type="button"
                                            onClick={() => {
                                                if (CheckValidate([
                                                    "SUS_1",
                                                    "SUS_2",
                                                    "SUS_3",
                                                    "SUS_4",
                                                    "SUS_5",
                                                    "SUS_6",
                                                    "SUS_7",
                                                    "SUS_8",
                                                    "SUS_9",
                                                    "SUS_10",
                                                ])) {

                                                    scrollToTop();
                                                    calculateSUS();
                                                    document.getElementById("TabRTS3").click();
                                                }
                                                else {
                                                    alert.show('답변되지 않은 질문이 있습니다.', { type: types.ERROR }) //alert will be shown in bottom left
                                                    console.log("is not a validate. Check all quesitons");
                                                }
                                            }}
                                        >
                                            <span style={{ marginRight: "0.5rem" }}>다음 페이지</span>
                                            <i className="fas fa-forward text-white"></i>
                                        </button>
                                    </div>
                                </div>

                                <div className="tab-pane fade show" id="RTS3View" role="tabpanel" aria-labelledby="TabRTS3">


                                    {SSQContents}



                                    <div className="rightaline">
                                        <button
                                            className="btn btn-secondary fw-500"
                                            type="button"
                                            onClick={() => {
                                                if (CheckValidate([
                                                    "SSQ_5",
                                                    "SSQ_8",
                                                    "SSQ_10",
                                                    "SSQ_11",
                                                    "SSQ_12",
                                                    "SSQ_13",
                                                    "SSQ_14",
                                                ])) {
                                                    scrollToTop();
                                                    calculateSSQ();
                                                    document.getElementById("TabTLX").click();
                                                }
                                                else {
                                                    alert.show('답변되지 않은 질문이 있습니다.', { type: types.ERROR }) //alert will be shown in bottom left
                                                    console.log("is not a validate. Check all quesitons");
                                                }
                                            }}
                                        >
                                            <span style={{ marginRight: "0.5rem" }}>다음 페이지</span>
                                            <i className="fas fa-forward text-white"></i>
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
