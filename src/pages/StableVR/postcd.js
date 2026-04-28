
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
    EmotionModel
} from '../../components/questionforms';

import { useAlert, types } from 'react-alert'

import SSQquestionnaire from "../../Questionnaire/SSQ";
import IPQQuestionnaire from "../../Questionnaire/IPQ";
import SUSquesitonnaire from "../../Questionnaire/SUS";


import CustomLoading from "../../components/CustomLoading";

const keyOrder = [
    "PAName",
    "RadioForPACondition",
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
    "PleasantScore",
    "ActivationScore"
];



function PostCD() {
    const alert = useAlert()

    const [showLoad, setShowLoad] = useState(false);

    const [formData, setFormData] = useState({
        PAName: "",
        RadioForPACondition: "",
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
        PleasantScore: "",
        ActivationScore: ""
    })

    const handleSubmit = async (formValues) => {

        setShowLoad(true);

        const body = new URLSearchParams();

        for (const key of keyOrder) {
            const value = formValues[key];
            // console.log(value);
            body.append(key, value);
        }

        const link = "https://script.google.com/macros/s/AKfycbwkS29B0bnlJAz3ad_tDyGBBqNACG2AOgxsauUv_aggqtlNCXI2q4_n4hmRfPtDSM0m/exec";
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


    function calculateSSQ() {
        handleQuestionChange("NAUSEA", (parseInt(formData['SSQ_1'])
        + parseInt(formData['SSQ_6'])
        + parseInt(formData['SSQ_7'])
        + parseInt(formData['SSQ_8'])
        + parseInt(formData['SSQ_9'])
        + parseInt(formData['SSQ_15'])
        + parseInt(formData['SSQ_16']))
        * 9.54);

    handleQuestionChange("Oculomotor", (parseInt(formData['SSQ_1'])
        + parseInt(formData['SSQ_2'])
        + parseInt(formData['SSQ_3'])
        + parseInt(formData['SSQ_4'])
        + parseInt(formData['SSQ_5'])
        + parseInt(formData['SSQ_9'])
        + parseInt(formData['SSQ_11']))
        * 7.58);

    handleQuestionChange("Disorientation", (parseInt(formData['SSQ_5'])
        + parseInt(formData['SSQ_8'])
        + parseInt(formData['SSQ_10'])
        + parseInt(formData['SSQ_11'])
        + parseInt(formData['SSQ_12'])
        + parseInt(formData['SSQ_13'])
        + parseInt(formData['SSQ_14']))
        * 13.92);

    handleQuestionChange("SSQTotal", ((parseInt(formData['SSQ_1'])
        + parseInt(formData['SSQ_6'])
        + parseInt(formData['SSQ_7'])
        + parseInt(formData['SSQ_8'])
        + parseInt(formData['SSQ_9'])
        + parseInt(formData['SSQ_15'])
        + parseInt(formData['SSQ_16'])) + (parseInt(formData['SSQ_1'])
            + parseInt(formData['SSQ_2'])
            + parseInt(formData['SSQ_3'])
            + parseInt(formData['SSQ_4'])
            + parseInt(formData['SSQ_5'])
            + parseInt(formData['SSQ_9'])
            + parseInt(formData['SSQ_11'])) + (parseInt(formData['SSQ_5'])
                + parseInt(formData['SSQ_8'])
                + parseInt(formData['SSQ_10'])
                + parseInt(formData['SSQ_11'])
                + parseInt(formData['SSQ_12'])
                + parseInt(formData['SSQ_13'])
                + parseInt(formData['SSQ_14']))) * 3.74);
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
        const shuffledContents = [...contentSSQ].sort(() => Math.random() - 0.5);
        setContentSSQ(shuffledContents);

        const shuffledContentsSUS = [...contentSUS].sort(() => Math.random() - 0.5);
        setContentSUS(shuffledContentsSUS);

        const shuffledContentsIPQ = [...contentIPQ].sort(() => Math.random() - 0.5);
        setContentIPQ(shuffledContentsIPQ);
    };

    useEffect(() => {
        shuffleContents();
    }, []);



    function CheckValidate(requiredKeys) {
        for (var key of requiredKeys) {
            if (formData[key] === "") {
                return false;
            }
        }
        return true;
    }



    const optionNamesForSSQ = [
        { label: "없음", value: 0 },
        { label: "약간", value: 1 },
        { label: "중간", value: 2 },
        { label: "매우", value: 3 }
    ]

    const optionNamesForSUS = [
        { label: "1", value: 0 },
        { label: "2", value: 1 },
        { label: "3", value: 2 },
        { label: "4", value: 3 },
        { label: "5", value: 4 }
    ]

    const [contentSSQ, setContentSSQ] = useState(SSQquestionnaire.map((questionnaire) => (
        <RadioLikertScale
            key={questionnaire.key}
            optionNames={optionNamesForSSQ}
            saveId={questionnaire.saveId}
            question={questionnaire.question}
            radioName={questionnaire.saveId}
            onChange={(v) => handleQuestionChange(questionnaire.saveId, v)}
        />
    )));


    const [contentSUS, setContentSUS] = useState(SUSquesitonnaire.map((questionnaire) => (
        <RadioLikertScaleEndPoint
            key={questionnaire.key}
            optionNames={optionNamesForSUS}
            saveId={questionnaire.saveId}
            question={questionnaire.question}
            radioName={questionnaire.saveId}
            optionLabels={[
                { label: "매우 동의하지 않음" },
                { label: "매우 동의함" }
            ]}
            onChange={(v) => handleQuestionChange(questionnaire.saveId, v)}
        />
    )));


    const [contentIPQ, setContentIPQ] = useState(IPQQuestionnaire.map((questionnaire) => (
        <RadioLikertScaleEndPoint
            key={questionnaire.key}
            optionNames={questionnaire.options}
            saveId={questionnaire.saveId}
            question={questionnaire.question}
            optionLabels={questionnaire.optionLabels}
            radioName={questionnaire.saveId}
            onChange={(v) => handleQuestionChange(questionnaire.saveId, v)}
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
                title={"Stable VR / Post Condition 설문"}
                contents={"모든 설문을 꼼꼼히 읽고 답변 부탁드리겠습니다"}
            />

            <div className="container-xl px-12">
                <div className="row justify-content-center">
                    <div className="col-xl-8">
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
                                        id="TabSSQ" href="#SSQView"
                                        data-bs-toggle="tab" role="tab"
                                        aria-controls="SSQView" aria-selected="false">SSQ</a>
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
                                    <a className="nav-link fw-900 text-lg "
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
                                        *첫 페이지는 반드시 실험 진행자가 작성 *
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
                                            "C1 : None (Real Heart Rate)",
                                            "C2 : False Heart Rate (청각)",
                                            "C3 : False Heart Rate (진동)",
                                            "C4 : Ensemble (나중에)",
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
                                                    document.getElementById("TabSSQ").click();
                                                } else {
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

                                <div className="tab-pane fade" id="SSQView" role="tabpanel" aria-labelledby="TabSSQ">
                                    {contentSSQ}

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

                                <div className="tab-pane fade" id="SUSView" role="tabpanel" aria-labelledby="TabSUS">
                                    {contentSUS}

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
                                                    calculateSUS();
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

                                <div className="tab-pane fade" id="IPQView" role="tabpanel" aria-labelledby="TabIPQ">
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
                                                    document.getElementById("TabTLX").click();
                                                    // handleSubmit(formData);
                                                    console.log("click!!");
                                                } else {
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

                                <div className="tab-pane fade" id="TLXView" role="tabpanel" aria-labelledby="TabTLX">




                                    <EmotionModel
                                        question={"해당 가상 환경을 체험하는 동안 긍정적인 감정을 느꼈나요? 부정적인 감정을 느꼈나요? 긍정 (오른쪽), 부정 (왼쪽) 방향"}
                                        imageUrl={'/assets/img/valance.png'}
                                        onChange={(answer) => handleQuestionChange("PleasantScore", answer)}
                                    />

                                    <EmotionModel
                                        question={"해당 가상 환경을 체험하는 동안 감정이 흥분되었나요? 지루한 기분이었나요? 흥분 (오른쪽), 지루함 (왼쪽) 방향 "}
                                        imageUrl={'/assets/img/arousal.png'}
                                        onChange={(answer) => handleQuestionChange("ActivationScore", answer)}
                                    />

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
                                                    "PleasantScore",
                                                    "ActivationScore",
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

                                <div className="tab-pane fade " id="DoneView" role="tabpanel" aria-labelledby="TabDone">
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
