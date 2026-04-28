import React, { useEffect, useState } from "react";
import HEADER from '../../components/Header';
import { Link } from "react-router-dom";

import {
    ShortTextAnswer,
    RadioSelection,
    SevenPointLikert,
    RadioLikertScale,
} from '../../components/questionforms';

import { useAlert, types } from 'react-alert'

import CustomLoading from "../../components/CustomLoading";

const keyOrder = [
    "PAName",

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
];


function OnlyPANASPage() {

    const alert = useAlert()

    const [showLoad, setShowLoad] = useState(false);

    const [formData, setFormData] = useState({
        PAName: "",

        PANAS_1: "",
        PANAS_2: "",
        PANAS_3: "",
        PANAS_4: "",
        PANAS_5: "",
        PANAS_6: "",
        PANAS_7: "",
        PANAS_8: "",
        PANAS_9: "",
        PANAS_10: "",
        PANAS_11: "",
        PANAS_12: "",
        PANAS_13: "",
        PANAS_14: "",
        PANAS_15: "",
        PANAS_16: "",
        PANAS_17: "",
        PANAS_18: "",
        PANAS_19: "",
        PANAS_20: "",

        PANAS_Positive: "",
        PANAS_Negative: "",

    });



    function CheckValidate(requiredKeys) {
        for (var key of requiredKeys) {
            if (formData[key] == null || formData[key] === "") {
                return false;
            }
        }
        return true;
    }


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

    const handleSubmit = async (formValues) => {

        setShowLoad(true);

        const body = new URLSearchParams();

        for (const key of keyOrder) {
            const value = formValues[key];
            body.append(key, value);
        }

        const link = "https://script.google.com/macros/s/AKfycbxRPMhfYX_LF3nq4VtMotiGiR1RQpl6nciHDUSUhdmqBQpm8uobi39yDoSSo5N6zrHB/exec"
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
     
        const shuffledContentsPANAS = [...PANASContents].sort(() => Math.random() - 0.5);
        SetPANASContents(shuffledContentsPANAS);
    };

    useEffect(() => {
        shuffleContents();
    }, []);

    useEffect(() => {
        console.log(formData);
    }, [formData]);

   

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

    


    const BFIoptionNames = [
        { label: "1 (전혀 그렇지 않음)", value: 1 },
        { label: "2 (그렇지 않은 편)", value: 2 },
        { label: "3 (보통)", value: 3 },
        { label: "4 (그런 편)", value: 4 },
        { label: "5 (항상 그런 편)", value: 5 },
    ]


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

    return (
        <>
            <CustomLoading
                message={"설문을 저장하고 있는 중입니다. 잠시만 기다려주세요."}
                show={showLoad}
                handleClose={() => { setShowLoad(false) }}
                action={() => { }}
            />

            <HEADER
                title={"실험 전 PANAS 설문지"}
                contents={"모든 설문을 꼼꼼히 읽고 답변 부탁드리겠습니다"}
            />

            <div className="container-xl px-12">
                <div className="row justify-content-center">
                    <div className="col-xl-10">
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
                                        id="Tab_PANAS" href="#TabView_PANAS"
                                        data-bs-toggle="tab" role="tab"
                                        aria-controls="TabView_PANAS" aria-selected="false">TabView PANAS</a>
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
                              
                                <div className="tab-pane fade show active" id="TabView_PANAS" role="tabpanel" aria-labelledby="Tab_PANAS">

                                    <div className="text-lg d-flex mb-4 justify-content-evenly  fw-500">
                                        현재 느끼고 있는 감정의 정도를 표시하세요 
                                        <br />
                                    </div>

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

                                <div className="tab-pane fade" id="TabView_3" role="tabpanel" aria-labelledby="Tab_3">

                                <ShortTextAnswer
                                        SaveId={"PAName"}
                                        question={"참가자 성함을 입력해주세요."}
                                        hint={"텍스트 입력해주세요"}
                                        onChange={(answer) => handleQuestionChange("PAName", answer)}
                                    />

                                    <div className="rightaline">
                                        <button
                                            className="btn btn-secondary fw-500"
                                            type="button"
                                            onClick={() => {
                                                if (CheckValidate([
                                                    "PAName"
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
                                <div className="tab-pane fade" id="TabView_Done" role="tabpanel" aria-labelledby="TabDone">
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

export default OnlyPANASPage;