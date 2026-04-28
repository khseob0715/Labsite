import React, { useEffect, useState } from "react";
import HEADER from '../../components/Header';
import { Link } from "react-router-dom";

import {
    ShortTextAnswer,
    RadioSelection,
    SevenPointLikert,
    RadioLikertScale,
    SliderQuesiton
} from '../../components/questionforms';

import { useAlert, types } from 'react-alert'

import CustomLoading from "../../components/CustomLoading";

const keyOrder = [
    "PAName",
    "PAAges",
    "PAHeight",
    "PAWeight",
    "RadioForPAEyes",
    "RadioForPADisease",
    "RadioForGender",
    "RadioForFamiliar",
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
    "NeckPain_1",
    "NeckPain_2",
    "NeckPain_3",
    "NeckPain_4",
    "NeckPain_5",
    "NeckPain_6",
    "NeckPain_7",
    "Extraversion",
    "Agreeableness",
    "Conscientiousness",
    "Neuroticism",
    "Openness"
];


function PreQuesiton() {

    const alert = useAlert()

    const [showLoad, setShowLoad] = useState(false);

    const [formData, setFormData] = useState({
        PAName: "",
        PAAges: "",
        PAHeight: "",
        PAWeight: "",
        RadioForPAEyes: "",
        RadioForPADisease: "",
        RadioForGender: "",
        RadioForFamiliar: "",
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
        NeckPain_1: "",
        NeckPain_2: "",
        NeckPain_3: "",
        NeckPain_4: "",
        NeckPain_5: "",
        NeckPain_6: "",
        NeckPain_7: "",
        Extraversion: "",
        Agreeableness: "",
        Conscientiousness: "",
        Neuroticism: "",
        Openness: "",
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
            if (formData[key] == null || formData[key] === "") {
                return false;
            }
        }
        return true;
    }

    

    function calculateBFI() {
        handleQuestionChange("Extraversion",
            (
                (
                    parseInt(formData['BFI_6'])
                    + (6 - parseInt(formData['BFI_1']))
                ) / 2
            )
        );
        handleQuestionChange("Agreeableness",
            (
                (
                    parseInt(formData['BFI_2'])
                    + (6 - parseInt(formData['BFI_7']))
                ) / 2
            )
        );

        handleQuestionChange("Conscientiousness",
            (
                (
                    parseInt(formData['BFI_8'])
                    + (6 - parseInt(formData['BFI_3']))
                ) / 2
            )
        );
        handleQuestionChange("Neuroticism",
            (
                (
                    parseInt(formData['BFI_9'])
                    + (6 - parseInt(formData['BFI_4']))
                ) / 2
            )
        );
        handleQuestionChange("Openness",
            (
                (
                    parseInt(formData['BFI_10'])
                    + (6 - parseInt(formData['BFI_5']))
                ) / 2
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

        const link = "https://script.google.com/macros/s/AKfycbyhsKZ1Qe3XinqYiNweiGXRZRUUzmNZCzEWGqeJVY3BmVleG5gSRp_bNjo9j8snWrQ/exec"
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

        const NeckShuffle = [...NeckPainContents].sort(() => Math.random() - 0.5);
        SetNeckPainContents(NeckShuffle);
    };

    useEffect(() => {
        shuffleContents();
    }, []);

    useEffect(() => {
        console.log(formData);
    }, [formData]);

    const BFIQuestionnaire_short = [
        {
            "key": 1,
            "question": "나는 보수적인 편이다.",
            "saveId": "BFI_1"
        },
        {
            "key": 2,
            "question": "나는 믿음직스러운 편이다.",
            "saveId": "BFI_2"
        },
        {
            "key": 3,
            "question": "나는 게으른 편이다.",
            "saveId": "BFI_3"
        },
        {
            "key": 4,
            "question": "나는 느긋한 편이고, 스트레스를 잘 해소하는 편이다.",
            "saveId": "BFI_4"
        },
        {
            "key": 5,
            "question": "나는 예술에 대한 관심이 별로 없는 편이다.",
            "saveId": "BFI_5"
        },
        {
            "key": 6,
            "question": "나는 어울리기를 좋아하고 사교적인 편이다.",
            "saveId": "BFI_6"
        },
        {
            "key": 7,
            "question": "나는 다른 사람의 흠을 잘 잡는 편이다.",
            "saveId": "BFI_7"
        },
        {
            "key": 8,
            "question": "나는 맡은 일을 철저히 하는 편이다.",
            "saveId": "BFI_8"
        },
        {
            "key": 9,
            "question": "나는 쉽게 신경질을 내는 편이다.",
            "saveId": "BFI_9"
        },
        {
            "key": 10,
            "question": "나는 상상력이 풍부한 편이다.",
            "saveId": "BFI_10"
        },
    ]

    const [BFIContents, SetBFIContents] = useState(BFIQuestionnaire_short
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

    const NeckPainQuestion = [
        {
            "key": 1,
            "query": "현재 목에 있는 불편함은 어느정도인가요?",
            "saveId": "NeckPain_1",
            "leftLable": "전혀 없음",
            "rightLable": "매우 심각하게 불편함"
        },
        {
            "key": 2,
            "query": "현재 목이 얼마나 뻣뻣하신가요?",
            "saveId": "NeckPain_2",
            "leftLable": "전혀 뻣뻣하지 않음",
            "rightLable": "목을 움직일 수가 없음"
        },
        {
            "key": 3,
            "query": "서있거나 걸을 때, 느껴지는 목의 불편함은 어느정도인가요?",
            "saveId": "NeckPain_3",
            "leftLable": "전혀 없음",
            "rightLable": "매우 심각하게 불편함"
        },
        {
            "key": 4,
            "query": "현재의 목의 불편함은 내 감정과 기분에 영향을 미치고 있나요?",
            "saveId": "NeckPain_4",
            "leftLable": "전혀 없음",
            "rightLable": "완전히 영향을 줌"
        },
        {
            "key": 5,
            "query": "현재의 목의 불편함은 생각하는 것과 집중하는 것에 영향을 미치고 있나요?",
            "saveId": "NeckPain_5",
            "leftLable": "전혀 없음",
            "rightLable": "완전히 영향을 줌"
        },
        {
            "key": 6,
            "query": "현재 목을 옆으로 움직일 때, 문제가 있거나 불편함이 있나요?",
            "saveId": "NeckPain_6",
            "leftLable": "전혀 없음",
            "rightLable": "움직일 수 없음"
        },
        {
            "key": 7,
            "query": "현재 목을 위 아래 움직일 때, 문제가 있거나 불편함이 있나요?",
            "saveId": "NeckPain_7",
            "leftLable": "전혀 없음",
            "rightLable": "움직일 수 없음"
        },
    ]

    const [NeckPainContents, SetNeckPainContents] = useState(NeckPainQuestion
        .map((q) => (
            <SliderQuesiton
                key={q.key}
                question={q.query}
                saveId={q.saveId}
                leftLabel={q.leftLable}
                rightLabel={q.rightLable}
                min={0}
                max={10}
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
                title={"사전 설문지"}
                contents={"모든 설문을 꼼꼼히 읽고 답변 부탁드리겠습니다"}
            />

            <div className="container-xl px-12">
                <div className="row justify-content-center">
                    <div className="col-xl-8">
                        <div className="card-header border-bottom invisible">
                            <ul className="nav nav-tabs card-header-tabs" id="cardTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link fw-900 active text-lg"
                                        id="Tab_1" href="#TabView_1"
                                        data-bs-toggle="tab" role="tab"
                                        aria-controls="View_1" aria-selected="true">TabView 1</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link fw-900 text-lg"
                                        id="Tab_2" href="#TabView_2"
                                        data-bs-toggle="tab" role="tab"
                                        aria-controls="TabView_2" aria-selected="false">TabView 2</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link fw-900 text-lg"
                                        id="Tab_3" href="#TabView_3"
                                        data-bs-toggle="tab" role="tab"
                                        aria-controls="TabView_3" aria-selected="false">TabView 3</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link fw-900 text-lg"
                                        id="TabDone" href="#TabView_Done"
                                        data-bs-toggle="tab" role="tab"
                                        aria-controls="TabView_Done" aria-selected="false">TabDone</a>
                                </li>
                            </ul>
                        </div>


                        <div className="card-body py-1 px-2" >
                            <div className="tab-content" id="cardTabContent">
                                <div className="tab-pane fade show active" id="TabView_1" role="tabpanel" aria-labelledby="Tab_1">
                                    <div className="text-lg d-flex mt-n6 mb-4 justify-content-evenly text-danger fw-500">
                                        * 사전 설문지 *
                                    </div>

                                    <ShortTextAnswer
                                        SaveId={"PAName"}
                                        question={"참가자 번호를 입력해주세요. 실험 진행자에게 물어보세요!"}
                                        hint={"텍스트 입력해주세요"}
                                        onChange={(answer) => handleQuestionChange("PAName", answer)}
                                    />

                                    <ShortTextAnswer
                                        SaveId={"PAAges"}
                                        question={"만 나이를 입력해주세요"}
                                        hint={"텍스트 입력해주세요"}
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

                                    <ShortTextAnswer
                                        SaveId={"PAHeight"}
                                        question={"키를 입력해주세요"}
                                        hint={"숫자만 입력해주세요"}
                                        onChange={(answer) => handleQuestionChange("PAHeight", answer)}
                                    />

                                    <ShortTextAnswer
                                        SaveId={"PAWeight"}
                                        question={"몸무게를 입력해주세요"}
                                        hint={"숫자만 입력해주세요"}
                                        onChange={(answer) => handleQuestionChange("PAWeight", answer)}
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
                                            "근시&난시",
                                            "색맹",
                                            "야맹증",
                                            "적록색약",
                                            "안구우위",
                                            "기타"
                                        ]}
                                        onChange={(answer) => handleQuestionChange("RadioForPADisease", answer)}
                                    />

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
                                                    "PAName",
                                                    "PAAges",
                                                    "PAHeight",
                                                    "PAWeight",
                                                    "RadioForPAEyes",
                                                    "RadioForPADisease",
                                                    "RadioForGender",
                                                    "RadioForFamiliar"
                                                ])) {
                                                    document.getElementById("Tab_2").click();
                                                    // scrollToTop();
                                                } else {
                                                    // handleSubmit(formData);
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
                                <div className="tab-pane fade show" id="TabView_2" role="tabpanel" aria-labelledby="Tab_2">
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
                                                ])) {
                                                    calculateBFI();
                                                    document.getElementById("Tab_3").click();
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
                                <div className="tab-pane fade show" id="TabView_3" role="tabpanel" aria-labelledby="Tab_3">

                                    <div className="text-lg d-flex mt-n6 mb-4 justify-content-evenly text-danger fw-500">
                                        * 파란 점을 클릭해서 끌면 편하게 선택할 수 있습니다 *
                                    </div>

                                    {NeckPainContents}

                                    <div className="rightaline">
                                        <button
                                            className="btn btn-primary fw-500"
                                            type="button"
                                            onClick={() => {
                                                if (CheckValidate([
                                                    "NeckPain_1",
                                                    "NeckPain_2",
                                                    "NeckPain_3",
                                                    "NeckPain_4",
                                                    "NeckPain_5",
                                                    "NeckPain_6",
                                                    "NeckPain_7",
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
                                <div className="tab-pane fade show" id="TabView_Done" role="tabpanel" aria-labelledby="TabDone">
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

export default PreQuesiton;