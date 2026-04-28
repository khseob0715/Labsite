import React, { useEffect, useState } from "react";
import HEADER from '../../components/Header';
import { Link } from "react-router-dom";

import {
    ShortTextAnswer,
    RadioSelection,
    SevenPointLikert,
    LargeTextAnswer,
    SliderQuesiton,
    SliderQuestionMoreOptions
} from '../../components/questionforms';
import CustomLoading from "../../components/CustomLoading";

import { useAlert, types } from 'react-alert'

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "instant" // 부드러운 스크롤을 위해 behavior 속성을 사용
    });
}


const keyOrder = [
    "RadioForPACondition",
    "PAName",
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
    "PAComment"
];


function BTLast() {

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

        TLX_1: "",
        TLX_2: "",
        TLX_3: "",
        TLX_4: "",
        TLX_5: "",
        TLX_6: "",
        TLX_7: "",
        TLX_8: "",
        TLX_9: "",
        TLX_10: "",

        PAComment: "",
    });

    function CheckValidate(requiredKeys) {
        for (var key of requiredKeys) {
            if (formData[key] === "") {
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

        const link = "https://script.google.com/macros/s/AKfycbyCVOhjAjhKGvk-70bdrnsMDvK5qTFu4PMzGdkb5c0Kgju7PcE0UXZdw2JQrS3v5o3t/exec";
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
    };

    const handleQuestionChange = (question, answer) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [question]: answer,
        }));
    };

    const shuffleContents = () => {
        const t_ssq = [...SSQContents].sort(() => Math.random() - 0.5);
        SetSSQContents(t_ssq);

    };

    useEffect(() => {
        shuffleContents();
    }, []);

    useEffect(() => {
        console.log(formData);
    }, [formData]);

    const NASATLXForm = [
        {
            "key": 1,
            "query": "VR 체험이 정신적으로 얼마나 힘들었습니까?",
            "saveId": "TLX_1",
            "leftLable": "전혀 없음",
            "rightLable": "매우 힘듬"
        },
        {
            "key": 2,
            "query": "VR 체험이 신체적으로 얼마나 힘들었습니까?",
            "saveId": "TLX_2",
            "leftLable": "전혀 없음",
            "rightLable": "매우 힘듬"
        },
        {
            "key": 3,
            "query": "VR 체험 중에 얼마나 서두르거나 서두르는 느낌을 받았습니까?",
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
            "query": "VR 작업이 얼마나 복잡했습니까?",
            "saveId": "TLX_5",
            "leftLable": "매우 간단함",
            "rightLable": "매우 복잡함"
        },
        {
            "key": 6,
            "query": "VR 작업을 수행하는 동안 얼마나 스트레스를 받았습니까?",
            "saveId": "TLX_6",
            "leftLable": "전혀 없음",
            "rightLable": "매우 많음"
        },
        {
            "key": 7,
            "query": "VR 속 환경이 작업을 방해하거나 얼마나 산만했습니까?",
            "saveId": "TLX_7",
            "leftLable": "전혀 없음",
            "rightLable": "매우 방해됨"
        },
        {
            "key": 8,
            "query": "작업 수행 측면에서 시각적 혹은 청각적으로 불편하거나 짜증이 났습니까?",
            "saveId": "TLX_8",
            "leftLable": "전혀 없음",
            "rightLable": "매우 짜증남"
        },
        {
            "key": 9,
            "query": "VR 작업을 통제하거나 조작하는 것이 얼마나 어려웠습니까?",
            "saveId": "TLX_9",
            "leftLable": "매우 쉬움",
            "rightLable": "매우 어려움"
        },
        {
            "key": 10,
            "query": "VR 작업에 얼마나 몰임갑/현장감을 느꼈습니까? ",
            "saveId": "TLX_10",
            "leftLable": "전혀 없음",
            "rightLable": "매우 많음"
        }
    ]



   
    function calculateSSQ() {
        handleQuestionChange("NAUSEA", (
            parseFloat(formData['SSQ_1'])
            + parseFloat(formData['SSQ_6'])
            + parseFloat(formData['SSQ_7'])
            + parseFloat(formData['SSQ_8'])
            + parseFloat(formData['SSQ_9'])
            + parseFloat(formData['SSQ_15'])
            + parseFloat(formData['SSQ_16'])
        )
            * 9.54);

        handleQuestionChange("Oculomotor",
            (
                parseFloat(formData['SSQ_1'])
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
        },
        {
            "key": 15,
            "query": "VR을 체험하는 동안 위에 부담을 느꼈다. (Stomach Awarenes)",
            "saveId": "SSQ_15",
            "leftLable": "전혀 없음",
            "rightLable": "매우 심각함"
        },
        {
            "key": 16,
            "query": "VR을 체험하는 동안 트림을 경험했다. (Burping)",
            "saveId": "SSQ_16",
            "leftLable": "전혀 없음",
            "rightLable": "매우 심각함"
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

    return (
        <>

            <CustomLoading
                message={"설문을 저장하고 있는 중입니다. 잠시만 기다려주세요."}
                show={showLoad}
                handleClose={() => { setShowLoad(false) }}
                action={() => { }}
            />

            <HEADER
                title={"마지막날 롤러코스터 설문지"}
                contents={"모든 설문을 꼼꼼히 읽고 답변 부탁드리겠습니다"}
            />

            <div className="container-xl px-12">
                <div className="row justify-content-center">
                    <div className="col-xl-10">
                        <div className="card-header border-bottom invisible">
                            <ul className="nav nav-tabs card-header-tabs" id="cardTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link fw-500 active text-lg"
                                        id="TabSetup" href="#SetupView"
                                        data-bs-toggle="tab" role="tab"
                                        aria-controls="SetupView" aria-selected="true">Setup View</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link fw-500 text-lg"
                                        id="TabTLX" href="#TLXView"
                                        data-bs-toggle="tab" role="tab"
                                        aria-controls="TLXView" aria-selected="false">TLX</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link fw-500 text-lg"
                                        id="TabDone" href="#DoneView"
                                        data-bs-toggle="tab" role="tab"
                                        aria-controls="DoneView" aria-selected="false">Done</a>
                                </li>
                            </ul>
                        </div>

                        <div className="card-body py-1 px-2" >
                            <div className="tab-content" id="cardTabContent">
                                <div className="tab-pane fade show active" id="SetupView" role="tabpanel" aria-labelledby="TabSetup">

                                    <RadioSelection
                                            SaveId={"PACondition"}
                                            question={"해당 참가자가 체험하는 조건은?"}
                                            radioName={"RadioForPACondition"}
                                            optionNames={[
                                                "VRT",
                                                "VRO"
                                                // "C3 : Monitor + Training"
                                            ]}
                                            onChange={(answer) => handleQuestionChange("RadioForPACondition", answer)}
                                        />
                                        
                                    <ShortTextAnswer
                                        SaveId={"PAName"}
                                        question={"성함을 기입해주세요"}
                                        hint={"텍스트 입력해주세요"}
                                        onChange={(answer) => handleQuestionChange("PAName", answer)}
                                    />

                                    {SSQContents}

                                   

                                    <div className="rightaline">
                                        <button
                                            className="btn btn-secondary fw-500"
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
                                                    document.getElementById("TabTLX").click();
                                                    scrollToTop();
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
                                    {TLXContents}

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
                                                    "PAComment"
                                                ])) {
                                                    scrollToTop();
                                                    handleSubmit(formData);
                                                }
                                                else {
                                                    alert.show('답변되지 않은 질문이 있습니다.', { type: types.ERROR }) 
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
}

export default BTLast;