
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
    "CS_1",
    "CS_2",
    "CS_3",
    "CS_4",
    "CS_5",
    "CS_6",
    "CS_7",
    "CS_8",
    "CS_9",
    "CS_10",
    "CS_11",
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

        TLX_1: "",
        TLX_2: "",
        TLX_3: "",
        TLX_4: "",
        TLX_5: "",
        TLX_6: "",
       
        CS_1: "",
        CS_2: "",
        CS_3: "",
        CS_4: "",
        CS_5: "",
        CS_6: "",
        CS_7: "",
        CS_8: "",
        CS_9: "",
        CS_10: "",
        CS_11: "",

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

        const link = "https://script.google.com/macros/s/AKfycbyT48N-NvRRsXli_qo-czhWXm_AQJdD3C5t8fzF5fsDP-8MVQpO3cNVkVVjx277VHDz/exec";
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
        const t_sus = [...SUSContents].sort(() => Math.random() - 0.5);
        SetSUSContents(t_sus);

        const t_cs = [...contentCS].sort(() => Math.random() - 0.5);
        setContentCS(t_cs);

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


    const CustomContent = [
        {
            "key": 1,
            "query": "자신이 아바타 내부에 위치해 있다고 느낀 정도는 어느정도였나요?(To what extent did you feel that you were located inside the virtual avatar?)",
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
            "query": "아바타를 마치 다른 사람을 보고 있는 것처럼 아바타로부터 일정한 거리에 위치해 있다고 느낀 정도는 어느정도 였나요?(To what extent did you feel that you were located at a certain distance from the virtual avatar, as if you were looking at someone else?",
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
            "query": "아바타가 당신의 의지에 따라 움직이는 것처럼 원하는대로 움직인다고 느낀 정도는 어느정도 인가요?(To what extent did you feel that the virtual avatar moved just like you wanted it to, as if it was obeying your will?)",
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
            "query": " 아바타를 통해 가상 환경과 원하는 방식으로 상호 작용 할 수 있다고 느낀 정도는 어느정도 인가요?(To what extent did you feel that you were able to interact with the virtual environment the way you wanted to through the Virtual avatar?)",
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
            "query": "아바타를 마치 자신의 신체처럼 제어한다고 느낀 정도는 어느정도 인가요?(To what extent did you feel that you controlled the virtual body as if it was your own body?)",
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
            "query": "아바타가 자신의 신체라고 느낀 정도는 어느정도인가요?(To what extent did you feel that the virtual avatar was your own body?)",
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
        },
        {
            "key": 7,
            "query": "아바타가 다른 사람의 신체라고 느낀 정도는 어느정도인가요?(To what extent did you feel that the virtual avatar was someone else?)",
            "saveId": "CS_7",
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
            "key": 8,
            "query": "아바타에 어떤 동작이 영향을 미쳤을 때 자신의 신체에도 영향을 받는다고 느낀 정도는 어느 정도인가요?(To what extent did you have the impression that when something affected the virtual avatar, your actual body was affected too?)",
            "saveId": "CS_8",
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
            "key": 9,
            "query": "자신의 신체를 잊고 아바타에 집중한 정도는 어느 정도인가요?(To what extent did you forget your actual body in favor of the virtual avatar?)",
            "saveId": "CS_9",
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
            "key": 10,
            "query": "체험한 가상 환경 속 주변 환경 소리 (대화, 바람 소리 등)는 Task를 수행함에 있어 방해가 되었나요? (Distraction)",
            "saveId": "CS_10",
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
            "key": 11,
            "query": "체험한 가상 환경 속 주변 환경 소리 (대화, 바람 소리 등)는 Task를 수행함에 있어 몰입감을 높이는데 도움이 되었나요? (Immersion)",
            "saveId": "CS_11",
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
            "query": "시스템 체험 중 주어진 임무를 수행하는 동안, 신체적으로 얼마나 힘들었는지?",
            "saveId": "TLX_1",
            "leftLable": "전혀 없음",
            "rightLable": "매우 힘듬"
        },
        {
            "key": 2,
            "query": "시스템 체험 중 주어진 임무를 수행하는 동안, 정신적으로 얼마나 힘들었는지?",
            "saveId": "TLX_2",
            "leftLable": "전혀 없음",
            "rightLable": "매우 힘듬"
        },
        {
            "key": 3,
            "query": "시스템 체험 중 주어진 임무를 수행하는데 느껴지는 시간적 압박 수준은 어느정도였는지?",
            "saveId": "TLX_3",
            "leftLable": "전혀 없음",
            "rightLable": "매우 심함"
        },
        {
            "key": 4,
            "query": "시스템 체험 중 주어진 임무를 수행하는데 낙담하고, 좌절하는 등의 심리적 부담감은 어느정도인지?",
            "saveId": "TLX_4",
            "leftLable": "전혀 없음",
            "rightLable": "매우 심함"
        },
        {
            "key": 6,
            "query": "시스템 체험 중 주어진 임무를 수행하는데 필요로 하는 노력의 수준은 어느정도인지?",
            "saveId": "TLX_6",
            "leftLable": "전혀 없음",
            "rightLable": "매우 많음"
        },
    ]

    const NASATLXFormR = [
        {
            "key": 5,
            "query": "주어진 시스템 체험을 본인이 얼마나 잘 수행하였는지를 점수로 표현한다면 어느정도인지?",
            "saveId": "TLX_5",
            "leftLable": "100점",
            "rightLable": "0점"
        }
    ]

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
                                        id="TabCS" href="#CSView"
                                        data-bs-toggle="tab" role="tab"
                                        aria-controls="CSView" aria-selected="false">CS</a>
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
                                            "keyboard",
                                            "voice",
                                            "hand",
                                            "mixed"
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

                                    <div className="d-flex" style={{ justifyContent: "space-around" }}>
                                        <button
                                            className="btn btn-primary fw-500 rowBT"
                                            type="button"
                                            onClick={() => {
                                                handleQuestionChange("SurveyStartTime", formatCurrentTime());
                                                document.getElementById("TabSSQ").click();
                                            }}
                                        >
                                            <span style={{ marginRight: "0.5rem" }}>설문 시작 하기</span>
                                            <i className="fas fa-forward text-white"></i>
                                        </button>
                                    </div>
                                    {/* </div> */}
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
                                                    document.getElementById("TabCS").click();
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

                                <div className="tab-pane fade show" id="CSView" role="tabpanel" aria-labelledby="TabCS">
                                    <div className="text-lg d-flex mt-n6 mb-4 justify-content-evenly text-danger fw-500">
                                        * 파란 점을 클릭해서 끌면서 선택한다면, 편하게 선택할 수 있습니다 *
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
                                                    "CS_7",
                                                ])) {
                                                    scrollToTop();
                                                    // calculateIPQ();
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
