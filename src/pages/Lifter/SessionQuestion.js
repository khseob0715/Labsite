import React, { useEffect, useState } from "react";
import HEADER from '../../components/Header';
import { Link } from "react-router-dom";

import {
    ShortTextAnswer,
    RadioSelection,
    SevenPointLikert,
    RadioLikertScale,
    SliderQuesiton,
    SliderAndScore
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


function SessionQuestion() {

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
            "saveId": "Level_1"
        },
        {
            "key": 2,
            "question": "나는 믿음직스러운 편이다.",
            "saveId": "Level_2"
        },
        {
            "key": 3,
            "question": "나는 게으른 편이다.",
            "saveId": "Level_3"
        },
        {
            "key": 4,
            "question": "나는 느긋한 편이고, 스트레스를 잘 해소하는 편이다.",
            "saveId": "Level_4"
        },
        {
            "key": 5,
            "question": "나는 예술에 대한 관심이 별로 없는 편이다.",
            "saveId": "Level_5"
        },
        {
            "key": 6,
            "question": "나는 어울리기를 좋아하고 사교적인 편이다.",
            "saveId": "Level_6"
        },
        {
            "key": 7,
            "question": "나는 다른 사람의 흠을 잘 잡는 편이다.",
            "saveId": "Level_7"
        },
        {
            "key": 8,
            "question": "나는 맡은 일을 철저히 하는 편이다.",
            "saveId": "Level_8"
        },
        {
            "key": 9,
            "question": "나는 쉽게 신경질을 내는 편이다.",
            "saveId": "Level_9"
        },
        {
            "key": 10,
            "question": "나는 상상력이 풍부한 편이다.",
            "saveId": "Level_10"
        },
        {
            "key": 11,
            "question": "나는 상상력이 풍부한 편이다.",
            "saveId": "Level_11"
        },
        {
            "key": 12,
            "question": "나는 상상력이 풍부한 편이다.",
            "saveId": "Level_12"
        },
        {
            "key": 13,
            "question": "나는 상상력이 풍부한 편이다.",
            "saveId": "Level_13"
        },
        {
            "key": 14,
            "question": "나는 상상력이 풍부한 편이다.",
            "saveId": "Level_14"
        },
        {
            "key": 15,
            "question": "나는 상상력이 풍부한 편이다.",
            "saveId": "Level_15"
        },
        {
            "key": 16,
            "question": "나는 상상력이 풍부한 편이다.",
            "saveId": "Level_16"
        },
        {
            "key": 17,
            "question": "나는 상상력이 풍부한 편이다.",
            "saveId": "Level_17"
        },
        {
            "key": 18,
            "question": "나는 상상력이 풍부한 편이다.",
            "saveId": "Level_18"
        },
        {
            "key": 19,
            "question": "나는 상상력이 풍부한 편이다.",
            "saveId": "Level_19"
        },
        {
            "key": 20,
            "question": "나는 상상력이 풍부한 편이다.",
            "saveId": "Level_20"
        },
        {
            "key": 21,
            "question": "나는 상상력이 풍부한 편이다.",
            "saveId": "Level_21"
        },
        {
            "key": 22,
            "question": "나는 상상력이 풍부한 편이다.",
            "saveId": "Level_22"
        },
        {
            "key": 23,
            "question": "나는 상상력이 풍부한 편이다.",
            "saveId": "Level_23"
        },
        {
            "key": 24,
            "question": "나는 상상력이 풍부한 편이다.",
            "saveId": "Level_24"
        },
        {
            "key": 25,
            "question": "나는 상상력이 풍부한 편이다.",
            "saveId": "Level_24"
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

                                    <SliderAndScore
                                        question = {"Level 1"}
                                        onChange={(answer) => handleQuestionChange("Level_1", answer)}
                                        marks = {[
                                            { value: 1, label: '1회' },
                                            { value: 2, label: '2회' },
                                            { value: 3, label: '3회' },
                                            { value: 4, label: '4회' },
                                            { value: 5, label: '5회' }
                                        ]}
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

export default SessionQuestion;