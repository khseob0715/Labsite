import React, { useEffect, useState } from "react";
import HEADER from '../../components/Header';
import { Link } from "react-router-dom";

import {
    ShortTextAnswer,
    RadioSelection,
    SevenPointLikert,
    RadioLikertScale
} from '../../components/questionforms';

import { useAlert, types } from 'react-alert'

import CustomLoading from "../../components/CustomLoading";

const keyOrder = [
    "PAName",
    "RadioForPAEyes",
    "RadioForPADisease",
    "RadioForFamiliar",
    "RadioForGender",
    "PAAges",
    "BFI_1",
    "BFI_2",
    "BFI_3",
    "BFI_4",
    "BFI_5",
    "BFI_6",
    "BFI_7",
    "BFI_8",
    "BFI_9",
    "BFI_10",
    "BFI_11",
    "BFI_12",
    "BFI_13",
    "BFI_14",
    "BFI_15",
    "BFI_16",
    "BFI_17",
    "BFI_18",
    "BFI_19",
    "BFI_20",
    "BFI_21",
    "BFI_22",
    "BFI_23",
    "BFI_24",
    "BFI_25",
    "BFI_26",
    "BFI_27",
    "BFI_28",
    "BFI_29",
    "BFI_30",
    "BFI_31",
    "BFI_32",
    "BFI_33",
    "BFI_34",
    "BFI_35",
    "BFI_36",
    "BFI_37",
    "BFI_38",
    "BFI_39",
    "BFI_40",
    "BFI_41",
    "BFI_42",
    "BFI_43",
    "BFI_44",
    "Extraversion",
    "Agreeableness",
    "Conscientiousness",
    "Neuroticism",
    "Openness"
];


function Pre() {

    const alert = useAlert()

    const [showLoad, setShowLoad] = useState(false);

    const [formData, setFormData] = useState({
        PAName: "",
        RadioForPAEyes: "",
        RadioForPADisease: "",
        RadioForFamiliar: "",
        RadioForGender: "",
        PAAges: "",
        BFI_1: "",
        BFI_2: "",
        BFI_3: "",
        BFI_4: "",
        BFI_5: "",
        BFI_6: "",
        BFI_7: "",
        BFI_8: "",
        BFI_9: "",
        BFI_10: "",
        BFI_11: "",
        BFI_12: "",
        BFI_13: "",
        BFI_14: "",
        BFI_15: "",
        BFI_16: "",
        BFI_17: "",
        BFI_18: "",
        BFI_19: "",
        BFI_20: "",
        BFI_21: "",
        BFI_22: "",
        BFI_23: "",
        BFI_24: "",
        BFI_25: "",
        BFI_26: "",
        BFI_27: "",
        BFI_28: "",
        BFI_29: "",
        BFI_30: "",
        BFI_31: "",
        BFI_32: "",
        BFI_33: "",
        BFI_34: "",
        BFI_35: "",
        BFI_36: "",
        BFI_37: "",
        BFI_38: "",
        BFI_39: "",
        BFI_40: "",
        BFI_41: "",
        BFI_42: "",
        BFI_43: "",
        BFI_44: "",
        Extraversion: "",
        Agreeableness: "",
        Conscientiousness: "",
        Neuroticism: "",
        Openness: ""
    });

    const BFIoptionNames = [
        { label: "1 (전혀 그렇지 않음)", value: 1 },
        { label: "2 (그렇지 않은 편)", value: 2 },
        { label: "3 (보통)", value: 3 },
        { label: "4 (그런 편)", value: 4 },
        { label: "5 (항상 그런 편)", value: 5 },
    ]

    function CheckValidate(requiredKeys) {
        for (var key of requiredKeys) {
            if (formData[key] === "") {
                return false;
            }
        }
        return true;
    }

    function calculateBFI() {
        handleQuestionChange("Extraversion",
            (
                (
                    parseInt(formData['BFI_1'])
                    + parseInt(formData['BFI_11'])
                    + parseInt(formData['BFI_16'])
                    + parseInt(formData['BFI_26'])
                    + parseInt(formData['BFI_36'])
                    + (6 - parseInt(formData['BFI_6']))
                    + (6 - parseInt(formData['BFI_21']))
                    + (6 - parseInt(formData['BFI_31']))
                ) / 8
            )
        );
        handleQuestionChange("Agreeableness",
            (
                (
                    parseInt(formData['BFI_7'])
                    + parseInt(formData['BFI_17'])
                    + parseInt(formData['BFI_22'])
                    + parseInt(formData['BFI_32'])
                    + parseInt(formData['BFI_42'])
                    + (6 - parseInt(formData['BFI_2']))
                    + (6 - parseInt(formData['BFI_12']))
                    + (6 - parseInt(formData['BFI_27']))
                    + (6 - parseInt(formData['BFI_37']))
                ) / 9
            )
        );

        handleQuestionChange("Conscientiousness",
            (
                (
                    parseInt(formData['BFI_3'])
                    + parseInt(formData['BFI_13'])
                    + parseInt(formData['BFI_28'])
                    + parseInt(formData['BFI_33'])
                    + parseInt(formData['BFI_38'])
                    + (6 - parseInt(formData['BFI_8']))
                    + (6 - parseInt(formData['BFI_18']))
                    + (6 - parseInt(formData['BFI_23']))
                    + (6 - parseInt(formData['BFI_43']))
                ) / 9
            )
        );
        handleQuestionChange("Neuroticism",
            (
                (
                    parseInt(formData['BFI_4'])
                    + parseInt(formData['BFI_14'])
                    + parseInt(formData['BFI_19'])
                    + parseInt(formData['BFI_29'])
                    + parseInt(formData['BFI_39'])
                    + (6 - parseInt(formData['BFI_9']))
                    + (6 - parseInt(formData['BFI_24']))
                    + (6 - parseInt(formData['BFI_34']))
                ) / 8
            )
        );
        handleQuestionChange("Openness",
            (
                (
                    parseInt(formData['BFI_5'])
                    + parseInt(formData['BFI_10'])
                    + parseInt(formData['BFI_15'])
                    + parseInt(formData['BFI_20'])
                    + parseInt(formData['BFI_25'])
                    + parseInt(formData['BFI_30'])
                    + parseInt(formData['BFI_40'])
                    + parseInt(formData['BFI_44'])
                    + (6 - parseInt(formData['BFI_35']))
                    + (6 - parseInt(formData['BFI_41']))
                ) / 10
            )
        );
    }

    const handleSubmit = async (formValues) => {

        setShowLoad(true);

        const body = new URLSearchParams();

        for (const key of keyOrder) {
            const value = formValues[key];
            body.append(key, value);
        }

        const link = "https://script.google.com/macros/s/AKfycbw2dbg9IVIBvCJajWfWlcXWvQo1lTyPifSs1aBAKy3THh45x9WOj10noRhPfvpduCEO/exec"
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
        } else {
            setShowLoad(false);
        }
    };

    const handleQuestionChange = (question, answer) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [question]: answer,
        }));
    };

    const shuffleContents = () => {
        const shuffledContents = [...BFIContents].sort(() => Math.random() - 0.5);
        SetBFIContents(shuffledContents);
    };

    useEffect(() => {
        shuffleContents();
    }, []);

    useEffect(() => {
        console.log(formData);
    }, [formData]);



    const BFIQuestionnaire = [
        {
            "key": 1,
            "question": "나는 내가 말이 많다고 생각한다.",
            "saveId": "BFI_1"
        },
        {
            "key": 2,
            "question": "나는 다른 사람의 흠을 잘 잡는다.",
            "saveId": "BFI_2"
        },
        {
            "key": 3,
            "question": "나는 맡은 일을 철저히 한다. ",
            "saveId": "BFI_3"
        },
        {
            "key": 4,
            "question": "나는 마음이 우울하고 가라 앉는 편이다.",
            "saveId": "BFI_4"
        },
        {
            "key": 5,
            "question": "나는 독창적이고 새로운 아이디어를 생각해내는 편이다. ",
            "saveId": "BFI_5"
        },
        {
            "key": 6,
            "question": "나는 보수적인 편이다. ",
            "saveId": "BFI_6"
        },
        {
            "key": 7,
            "question": "나는 다른 사람을 잘 도와주는 편이다.",
            "saveId": "BFI_7"
        },
        {
            "key": 8,
            "question": "나는 경솔할 때가 있는 편이다.",
            "saveId": "BFI_8"
        },
        {
            "key": 9,
            "question": "나는 느긋한 편이고, 스트레스를 잘 해소하는 편이다. ",
            "saveId": "BFI_9"
        },
        {
            "key": 10,
            "question": "나는 여러가지에 대해서 호기심이 많은 편이다. ",
            "saveId": "BFI_10"
        },
        {
            "key": 11,
            "question": "나는 활기가 넘치는 편이다.",
            "saveId": "BFI_11"
        },
        {
            "key": 12,
            "question": "나는 다름 사람과 자주 다투는 편이다. ",
            "saveId": "BFI_12"
        },
        {
            "key": 13,
            "question": "나는 믿음직한 일꾼이다. ",
            "saveId": "BFI_13"
        },
        {
            "key": 14,
            "question": "나는 긴장을 하는 편이다.",
            "saveId": "BFI_14"
        },
        {
            "key": 15,
            "question": "나는 머리가 좋은 편이다.",
            "saveId": "BFI_15"
        },
        {
            "key": 16,
            "question": "나는 매사에 매우 열심이다.",
            "saveId": "BFI_16"
        },
        {
            "key": 17,
            "question": "나는 너그러운 편이다.",
            "saveId": "BFI_17"
        },
        {
            "key": 18,
            "question": "나는 무질서한 경향이 있다.",
            "saveId": "BFI_18"
        },
        {
            "key": 19,
            "question": "나는 걱정이 많은 편이다. ",
            "saveId": "BFI_19"
        },
        {
            "key": 20,
            "question": "나는 상상력이 풍부하다.",
            "saveId": "BFI_20"
        },
        {
            "key": 21,
            "question": "나는 말수가 적은 편이다.",
            "saveId": "BFI_21"
        },
        {
            "key": 22,
            "question": "나는 믿음직스러운 편이다.",
            "saveId": "BFI_22"
        },
        {
            "key": 23,
            "question": "나는 게으른 편이다.",
            "saveId": "BFI_23"
        },
        {
            "key": 24,
            "question": "나는 차분하고 쉽게 화를 내지 않는 편이다.",
            "saveId": "BFI_24"
        },
        {
            "key": 25,
            "question": "나는 창의적인 편이다.",
            "saveId": "BFI_25"
        },
        {
            "key": 26,
            "question": "나는 자기 주장이 강한 편이다.",
            "saveId": "BFI_26"
        },
        {
            "key": 27,
            "question": "나는 차갑고 냉담한 성격인 편이다.",
            "saveId": "BFI_27"
        },
        {
            "key": 28,
            "question": "나는 일을 끝까지 마치는 편이다.",
            "saveId": "BFI_28"
        },
        {
            "key": 29,
            "question": "나는 변덕스러운 편이다.",
            "saveId": "BFI_29"
        },
        {
            "key": 30,
            "question": "나는 예술적, 미적 경험을 중요시 하는 편이다.",
            "saveId": "BFI_30"
        },
        {
            "key": 31,
            "question": "나는 가끔 부끄러움을 타고 감정을 숨기는 편이다.",
            "saveId": "BFI_31"
        },
        {
            "key": 32,
            "question": "나는 사려 깊고 거의 모든 사람에게 친절한 편이다.",
            "saveId": "BFI_32"
        },
        {
            "key": 33,
            "question": "나는 능률적으로 일을 처리하는 편이다.",
            "saveId": "BFI_33"
        },
        {
            "key": 34,
            "question": "나는 긴장된 상황에서도 침착한 편이다.",
            "saveId": "BFI_34"
        },
        {
            "key": 35,
            "question": "나는 규칙적인 생활을 좋아하는 편이다.",
            "saveId": "BFI_35"
        },
        {
            "key": 36,
            "question": "나는 어울리기를 좋아하고 사교적인 편이다.",
            "saveId": "BFI_36"
        },
        {
            "key": 37,
            "question": "나는 때때로 다른 사람에게 무레한 편이다.",
            "saveId": "BFI_37"
        },
        {
            "key": 38,
            "question": "나는 계획을 세워 일을 처리하는 편이다.",
            "saveId": "BFI_38"
        },
        {
            "key": 39,
            "question": "나는 쉽게 신경질을 내는 편이다.",
            "saveId": "BFI_39"
        },
        {
            "key": 40,
            "question": "나는 생각하기를 즐긴다.",
            "saveId": "BFI_40"
        },
        {
            "key": 41,
            "question": "나는 예술에 대한 관심이 별로 없는 편이다.",
            "saveId": "BFI_41"
        },
        {
            "key": 42,
            "question": "나는 다른 사람과 협력하기를 좋아하는 편이다.",
            "saveId": "BFI_42"
        },
        {
            "key": 43,
            "question": "나는 쉽게 주의가 산만해지는 편이다.",
            "saveId": "BFI_43"
        },
        {
            "key": 44,
            "question": "나는 미술, 음악, 문학에 대해 세련된 감각이 있는 편이다.",
            "saveId": "BFI_44"
        },
    ]

    const [BFIContents, SetBFIContents] = useState(BFIQuestionnaire.map((questionnaire) => (
        <RadioLikertScale
            key={questionnaire.key}
            optionNames={BFIoptionNames}
            saveId={questionnaire.saveId}
            question={questionnaire.question}
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
                title={"ST VR BFI & 사전 설문지"}
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
                                        aria-controls="SetupView" aria-selected="true">Prequestion</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link fw-900 text-lg"
                                        id="TabBFI" href="#BFIView"
                                        data-bs-toggle="tab" role="tab"
                                        aria-controls="BFIView" aria-selected="false">BFI</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link fw-900 text-lg"
                                        id="TabPost" href="#PostView"
                                        data-bs-toggle="tab" role="tab"
                                        aria-controls="PostView" aria-selected="false">BFI</a>
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
                                        * 사전 설문지 및 BFI 설문지 *
                                    </div>

                                    <ShortTextAnswer
                                        SaveId={"PAName"}
                                        question={"성함을 기입해주세요"}
                                        hint={"텍스트 입력해주세요"}
                                        onChange={(answer) => handleQuestionChange("PAName", answer)}
                                    />

                                    <ShortTextAnswer
                                        SaveId={"PAAges"}
                                        question={"나이를 입력해주세요"}
                                        hint={"숫자만 입력해주세요"}
                                        onChange={(answer) => handleQuestionChange("PAAges", answer)}
                                    />

                                    <RadioSelection
                                        SaveId={"RadioForGender"}
                                        question={"성별을 선택해주세요"}
                                        radioName={"RadioForGender"}
                                        optionNames={[
                                            "남성",
                                            "여성",
                                            "응답안함"
                                        ]}
                                        onChange={(answer) => handleQuestionChange("RadioForGender", answer)}
                                    />

                                    <RadioSelection
                                        SaveId={"RadioForPAEyes"}
                                        question={"안경 혹은 렌즈 착용 여부"}
                                        radioName={"RadioForPAEyes"}
                                        optionNames={[
                                            "아니오",
                                            "안경",
                                            "렌즈"
                                        ]}
                                        onChange={(answer) => handleQuestionChange("RadioForPAEyes", answer)}
                                    />

                                    <RadioSelection
                                        SaveId={"RadioForPADisease"}
                                        question={"눈과 관련된 질환"}
                                        radioName={"RadioForPADisease"}
                                        optionNames={[
                                            "없다",
                                            "근시",
                                            "난시",
                                            "색맹",
                                            "야맹증",
                                            "적록색약",
                                            "안구우위",
                                            "기타"
                                        ]}
                                        onChange={(answer) => handleQuestionChange("RadioForPADisease", answer)}
                                    />


                                    <div className="rightaline">
                                        <button
                                            className="btn btn-primary fw-500"
                                            type="button"
                                            onClick={() => {
                                                if (CheckValidate([
                                                    "PAName",
                                                    "PAEyes",
                                                    "PADisease",
                                                    "RadioForGender",
                                                    "PAAges"
                                                ])) {
                                                    // handleSubmit(formData); // for test
                                                    document.getElementById("TabBFI").click();
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
                                <div className="tab-pane fade show" id="BFIView" role="tabpanel" aria-labelledby="TabBFI">
                                    {BFIContents}

                                    <div className="rightaline">
                                        <button
                                            className="btn btn-secondary fw-500"
                                            type="button"
                                            onClick={() => {
                                                if (CheckValidate([
                                                    "BFI_1",
                                                    "BFI_2",
                                                    "BFI_3",
                                                    "BFI_4",
                                                    "BFI_5",
                                                    "BFI_6",
                                                    "BFI_7",
                                                    "BFI_8",
                                                    "BFI_9",
                                                    "BFI_10",
                                                    "BFI_11",
                                                    "BFI_12",
                                                    "BFI_13",
                                                    "BFI_14",
                                                    "BFI_15",
                                                    "BFI_16",
                                                    "BFI_17",
                                                    "BFI_18",
                                                    "BFI_19",
                                                    "BFI_20",
                                                    "BFI_21",
                                                    "BFI_22",
                                                    "BFI_23",
                                                    "BFI_24",
                                                    "BFI_25",
                                                    "BFI_26",
                                                    "BFI_27",
                                                    "BFI_28",
                                                    "BFI_29",
                                                    "BFI_30",
                                                    "BFI_31",
                                                    "BFI_32",
                                                    "BFI_33",
                                                    "BFI_34",
                                                    "BFI_35",
                                                    "BFI_36",
                                                    "BFI_37",
                                                    "BFI_38",
                                                    "BFI_39",
                                                    "BFI_40",
                                                    "BFI_41",
                                                    "BFI_42",
                                                    "BFI_43",
                                                    "BFI_44",
                                                ])) {
                                                    calculateBFI();
                                                    document.getElementById("TabPost").click();
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

                                <div className="tab-pane fade show" id="PostView" role="tabpanel" aria-labelledby="TabPost">
                                    <SevenPointLikert
                                        question={"VR 기술에 얼마나 친숙하신가요?"}
                                        optionLabels={[
                                            { label: "전혀 아니다" },
                                            { label: "매우 그렇다" }
                                        ]}
                                        SaveId={"RadioForFamiliar"}
                                        radioName={"Familiar"}
                                        RadioIndex={"RadioForFamiliar"}
                                        optionNames={[
                                            { label: "1", value: 1 },
                                            { label: "2", value: 2 },
                                            { label: "3", value: 3 },
                                            { label: "4", value: 4 },
                                            { label: "5", value: 5 },
                                            { label: "6", value: 6 },
                                            { label: "7", value: 7 }
                                        ]}
                                        onChange={(answer) => handleQuestionChange("RadioForFamiliar", answer)}
                                    />
                                    <div className="rightaline">
                                        <button
                                            className="btn btn-primary fw-500"
                                            type="button"
                                            onClick={() => {
                                                if (CheckValidate([
                                                    "RadioForFamiliar"
                                                ])) {
                                                    handleSubmit(formData);
                                                } else {
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
                                <div className="tab-pane fade show" id="DoneView" role="tabpanel" aria-labelledby="DoneSetup">
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
    )
}

export default Pre;