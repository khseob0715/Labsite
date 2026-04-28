
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
    "TLX_1",
    "TLX_2",
    "TLX_3",
    "TLX_4",
    "TLX_5",
    "TLX_6",
    "VF_1",
    "VF_2",
    "VF_3",
    "VF_4",
    "VF_5",
    "VF_6",
    "VF_7",
    "VF_8",
    "VF_9",
    "VF_10",
    "VF_11",
    "VF_12",
    "VF_13",
    "VF_14",
    "VF_15",
    "VF_Vision",
    "VF_Eyestrain",
    "VF_Surface",
    "VF_Sickness",
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
        NAUSEA: "",
        Oculomotor: "",
        Disorientation: "",
        SSQTotal: "",
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
        TLX_1: "",
        TLX_2: "",
        TLX_3: "",
        TLX_4: "",
        TLX_5: "",
        TLX_6: "",
        VF_1: "",
        VF_2: "",
        VF_3: "",
        VF_4: "",
        VF_5: "",
        VF_6: "",
        VF_7: "",
        VF_8: "",
        VF_9: "",
        VF_10: "",
        VF_11: "",
        VF_12: "",
        VF_13: "",
        VF_14: "",
        VF_15: "",
        VF_Vision: "",
        VF_Eyestrain: "",
        VF_Surface: "",
        VF_Sickness: "",
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

        const link = "https://script.google.com/macros/s/AKfycbzcdyg4KPc3P3QD5NGQpgfuWfEcba73ZqYqV7IhARiO9npWP4kmp2p_FUjwYwgBL16dsQ/exec";
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

        const t_sus = [...SUSContents].sort(() => Math.random() - 0.5);
        SetSUSContents(t_sus);

        const t_vf = [...VFContents].sort(() => Math.random() - 0.5);
        SetContentVisualFatigue(t_vf);
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
    }

    function calculateVF(){
        handleQuestionChange("VF_Eyestrain", 
            (
                (
                    parseInt(formData['VF_1'])
                    + parseInt(formData['VF_4'])
                    + parseInt(formData['VF_11'])
                    + parseInt(formData['VF_14'])
                ) / 4
            )
        );

        handleQuestionChange("VF_Vision",
            (
                (
                    parseInt(formData['VF_7'])
                    + parseInt(formData['VF_8'])
                    + parseInt(formData['VF_12'])
                    + parseInt(formData['VF_13'])
                    + parseInt(formData['VF_15'])
                ) / 5
            )
        );

        handleQuestionChange("VF_Surface",
            (
                (
                    parseInt(formData['VF_2'])
                    + parseInt(formData['VF_3'])
                    + parseInt(formData['VF_5'])
                ) / 3
            )
        );

        handleQuestionChange("VF_Sickness",
            (
                (
                    parseInt(formData['VF_6'])
                    + parseInt(formData['VF_9'])
                    + parseInt(formData['VF_10'])
                ) / 3
            )
        );
    }

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

    const NASATLXForm = [
        {
            "key": 1,
            "query": "VR 체험 중 주어진 임무를 수행하는 동안, 신체적으로 얼마나 힘들었는지?",
            "saveId": "TLX_1",
            "leftLable": "전혀 없음",
            "rightLable": "매우 힘듬"
        },
        {
            "key": 2,
            "query": "VR 체험 중 주어진 임무를 수행하는 동안, 정신적으로 얼마나 힘들었는지?",
            "saveId": "TLX_2",
            "leftLable": "전혀 없음",
            "rightLable": "매우 힘듬"
        },
        {
            "key": 3,
            "query": "VR 체험 중 주어진 임무를 수행하는데 느껴지는 시간적 압박 수준은 어느정도였는지?",
            "saveId": "TLX_3",
            "leftLable": "전혀 없음",
            "rightLable": "매우 심함"
        },
        {
            "key": 4,
            "query": "VR 체험 중 주어진 임무를 수행하는데 낙담하고, 좌절하는 등의 심리적 부담감은 어느정도인지?",
            "saveId": "TLX_4",
            "leftLable": "전혀 없음",
            "rightLable": "매우 심함"
        },
        {
            "key": 6,
            "query": "VR 체험 중 주어진 임무를 수행하는데 필요로 하는 노력의 수준은 어느정도인지?",
            "saveId": "TLX_6",
            "leftLable": "전혀 없음",
            "rightLable": "매우 많음"
        },
    ]

    const NASATLXFormR = [
        {
            "key": 5,
            "query": "주어진 VR 체험을 본인이 얼마나 잘 수행하였는지를 점수로 표현한다면 어느정도인지?",
            "saveId": "TLX_5",
            "leftLable": "100점",
            "rightLable": "0점"
        }
    ]

    const VisualFatigueForm = [
        {
            "key": 1,
            "query": "눈 주위의 압박감",
            "saveId": "VF_1",
        },
        {
            "key": 2,
            "query": "눈이 건조한 듯한 느낌",
            "saveId": "VF_2",
        },
        {
            "key": 3,
            "query": "눈이 타는 듯한 느낌",
            "saveId": "VF_3",
        },
        {
            "key": 4,
            "query": "눈꺼풀이 무거워진 느낌",
            "saveId": "VF_4",
        },
        {
            "key": 5,
            "query": "눈물이 나는 듯한 느낌",
            "saveId": "VF_5",
        },
        {
            "key": 6,
            "query": "VR 화면을 보고 있을 때, 어지러움을 느낀 정도",
            "saveId": "VF_6",
        },
        {
            "key": 7,
            "query": "VR 화면을 보고 있을 때, 화면이 흐려진 정도",
            "saveId": "VF_7",
        },
        {
            "key": 8,
            "query": "VR 화면을 보고 있을 때, 단어/모양이 중복되어 보이는 정도",
            "saveId": "VF_8",
        },
        {
            "key": 9,
            "query": "VR 화면을 보고 있을 때, 두통을 느끼는 정도",
            "saveId": "VF_9",
        },
        {
            "key": 10,
            "query": "VR 화면을 보고 있을 때, 졸린 듯한 느낌의 정도",
            "saveId": "VF_10",
        },
        {
            "key": 11,
            "query": "눈이 불편한 정도",
            "saveId": "VF_11",
        },
        {
            "key": 12,
            "query": "가까운 물체가 선명하게 보이지 않는 정도",
            "saveId": "VF_12",
        },
        {
            "key": 13,
            "query": "멀리 있는 물체가 선명하게 보이지 않는 정도",
            "saveId": "VF_13",
        },
        {
            "key": 14,
            "query": "눈을 문지르거나 마사지가 필요하다고 생각하는 정도",
            "saveId": "VF_14",
        },
        {
            "key": 15,
            "query": "VR 화면을 보고 있을 때, 단어나 모양이 겹쳐 보이는 정도",
            "saveId": "VF_15",
        },
    ]


    const [VFContents, SetContentVisualFatigue] = useState(VisualFatigueForm
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

    const [TLXContentsR, SetTLXContentsR] = useState(NASATLXFormR
        .map((q) => (
            <SliderQuesitonReverse
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
                                            "random_controller",
                                            "random_gaze",
                                            "systematic_controller",
                                            "systematic_gaze"
                                        ]}
                                        onChange={(answer) => handleQuestionChange("RadioForPACondition", answer)}
                                    />

                                    <ShortTextAnswer
                                        SaveId={"MISC"}
                                        question={"MISC 점수"}
                                        hint={"Verbal로 응답받은 MISC 점수 입력"}
                                        onChange={(answer) => handleQuestionChange("MISC", answer)}
                                    />

                                    <div className="rightaline">
                                        <button
                                            className="btn btn-primary fw-500"
                                            type="button"
                                            onClick={() => {
                                                if (CheckValidate([
                                                    "RadioForPACondition",
                                                    "PAName",
                                                    "MISC"
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

                                    {SUSContents}

                                    <div className="rightaline">
                                        <button
                                            className="btn btn-primary fw-500"
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

                                    {TLXContents}
                                    {TLXContentsR}

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
                                                ])) {
                                                    scrollToTop();
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

                                    {VFContents}
                                    <div className="rightaline">
                                        <button
                                            className="btn btn-primary fw-500"
                                            type="button"
                                            onClick={() => {
                                                if (CheckValidate([
                                                    "VF_1",
                                                    "VF_2",
                                                    "VF_3",
                                                    "VF_4",
                                                    "VF_5",
                                                    "VF_6",
                                                    "VF_7",
                                                    "VF_8",
                                                    "VF_9",
                                                    "VF_10",
                                                    "VF_11",
                                                    "VF_12",
                                                    "VF_13",
                                                    "VF_14",
                                                    "VF_15",
                                                ])) {
                                                    scrollToTop();
                                                    calculateVF();
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
