
import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

import HEADER from '../../components/Header';
import {
    ShortTextAnswer,
    RadioSelection,
    RadioLikertSSQ,
    RadioLikertSSQBT,
    SliderQuesiton,
    LargeTextAnswer,
    NASATLX
} from '../../components/questionforms';

import { useAlert, types } from 'react-alert'


import CustomLoading from "../../components/CustomLoading";

import BTSSQList from "./BTSSQList"

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "instant" // 부드러운 스크롤을 위해 behavior 속성을 사용
    });
}

const keyOrder = [
    "PAName",
    "PADays",
    "PATodayNumbers",
    "RadioForPACondition",

    "RadioForSSQ_1",
    "RadioForSSQ_2",
    "RadioForSSQ_3",
    "RadioForSSQ_4",
    "RadioForSSQ_5",
    "RadioForSSQ_6",
    "RadioForSSQ_7",
    "RadioForSSQ_8",
    "RadioForSSQ_9",
    "RadioForSSQ_10",
    "RadioForSSQ_11",
    "RadioForSSQ_12",
    "RadioForSSQ_13",
    "RadioForSSQ_14",
    "RadioForSSQ_15",
    "RadioForSSQ_16",

    "RadioForSSQ_1_v",
    "RadioForSSQ_2_v",
    "RadioForSSQ_3_v",
    "RadioForSSQ_4_v",
    "RadioForSSQ_5_v",
    "RadioForSSQ_6_v",
    "RadioForSSQ_7_v",
    "RadioForSSQ_8_v",
    "RadioForSSQ_9_v",
    "RadioForSSQ_10_v",
    "RadioForSSQ_11_v",
    "RadioForSSQ_12_v",
    "RadioForSSQ_13_v",
    "RadioForSSQ_14_v",
    "RadioForSSQ_15_v",
    "RadioForSSQ_16_v",

    "RadioForSSQ_1_b",
    "RadioForSSQ_2_b",
    "RadioForSSQ_3_b",
    "RadioForSSQ_4_b",
    "RadioForSSQ_5_b",
    "RadioForSSQ_6_b",
    "RadioForSSQ_7_b",
    "RadioForSSQ_8_b",
    "RadioForSSQ_9_b",
    "RadioForSSQ_10_b",
    "RadioForSSQ_11_b",
    "RadioForSSQ_12_b",
    "RadioForSSQ_13_b",
    "RadioForSSQ_14_b",
    "RadioForSSQ_15_b",
    "RadioForSSQ_16_b",


    "NAUSEA",
    "Oculomotor",
    "Disorientation",
    "SSQTotal",

    "NAUSEA_v",
    "Oculomotor_v",
    "Disorientation_v",
    "SSQTotal_v",

    "NAUSEA_b",
    "Oculomotor_b",
    "Disorientation_b",
    "SSQTotal_b",

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

function BTMain() {
    const alert = useAlert()

    const [showLoad, setShowLoad] = useState(false);

    const [formData, setFormData] = useState({
        PAName: "",
        PADays: "",
        PATodayNumbers: "",
        RadioForPACondition: "",
        RadioForPAWeather: "",

        RadioForSSQ_1: "",
        RadioForSSQ_2: "",
        RadioForSSQ_3: "",
        RadioForSSQ_4: "",
        RadioForSSQ_5: "",
        RadioForSSQ_6: "",
        RadioForSSQ_7: "",
        RadioForSSQ_8: "",
        RadioForSSQ_9: "",
        RadioForSSQ_10: "",
        RadioForSSQ_11: "",
        RadioForSSQ_12: "",
        RadioForSSQ_13: "",
        RadioForSSQ_14: "",
        RadioForSSQ_15: "",
        RadioForSSQ_16: "",

        RadioForSSQ_1_v: "",
        RadioForSSQ_2_v: "",
        RadioForSSQ_3_v: "",
        RadioForSSQ_4_v: "",
        RadioForSSQ_5_v: "",
        RadioForSSQ_6_v: "",
        RadioForSSQ_7_v: "",
        RadioForSSQ_8_v: "",
        RadioForSSQ_9_v: "",
        RadioForSSQ_10_v: "",
        RadioForSSQ_11_v: "",
        RadioForSSQ_12_v: "",
        RadioForSSQ_13_v: "",
        RadioForSSQ_14_v: "",
        RadioForSSQ_15_v: "",
        RadioForSSQ_16_v: "",
        RadioForSSQ_1_b: "",
        RadioForSSQ_2_b: "",
        RadioForSSQ_3_b: "",
        RadioForSSQ_4_b: "",
        RadioForSSQ_5_b: "",
        RadioForSSQ_6_b: "",
        RadioForSSQ_7_b: "",
        RadioForSSQ_8_b: "",
        RadioForSSQ_9_b: "",
        RadioForSSQ_10_b: "",
        RadioForSSQ_11_b: "",
        RadioForSSQ_12_b: "",
        RadioForSSQ_13_b: "",
        RadioForSSQ_14_b: "",
        RadioForSSQ_15_b: "",
        RadioForSSQ_16_b: "",


        NAUSEA: "",
        Oculomotor: "",
        Disorientation: "",
        SSQTotal: "",


        NAUSEA_v: "",
        Oculomotor_v: "",
        Disorientation_v: "",
        SSQTotal_v: "",


        NAUSEA_b: "",
        Oculomotor_b: "",
        Disorientation_b: "",
        SSQTotal_b: "",

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

        PAComment: ""
    })

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
            parseFloat(formData['RadioForSSQ_1'])
            + parseFloat(formData['RadioForSSQ_6'])
            + parseFloat(formData['RadioForSSQ_7'])
            + parseFloat(formData['RadioForSSQ_8'])
            + parseFloat(formData['RadioForSSQ_9'])
            + parseFloat(formData['RadioForSSQ_15'])
            + parseFloat(formData['RadioForSSQ_16'])
        )
            * 9.54);

        handleQuestionChange("Oculomotor",
            (
                parseFloat(formData['RadioForSSQ_1'])
                + parseFloat(formData['RadioForSSQ_2'])
                + parseFloat(formData['RadioForSSQ_3'])
                + parseFloat(formData['RadioForSSQ_4'])
                + parseFloat(formData['RadioForSSQ_5'])
                + parseFloat(formData['RadioForSSQ_9'])
                + parseFloat(formData['RadioForSSQ_11']))
            * 7.58);

        handleQuestionChange("Disorientation", (
            parseFloat(formData['RadioForSSQ_5'])
            + parseFloat(formData['RadioForSSQ_8'])
            + parseFloat(formData['RadioForSSQ_10'])
            + parseFloat(formData['RadioForSSQ_11'])
            + parseFloat(formData['RadioForSSQ_12'])
            + parseFloat(formData['RadioForSSQ_13'])
            + parseFloat(formData['RadioForSSQ_14']))
            * 13.92);

        handleQuestionChange("SSQTotal", (
            (parseFloat(formData['RadioForSSQ_1'])
                + parseFloat(formData['RadioForSSQ_6'])
                + parseFloat(formData['RadioForSSQ_7'])
                + parseFloat(formData['RadioForSSQ_8'])
                + parseFloat(formData['RadioForSSQ_9'])
                + parseFloat(formData['RadioForSSQ_15'])
                + parseFloat(formData['RadioForSSQ_16'])) + (
                parseFloat(formData['RadioForSSQ_1'])
                + parseFloat(formData['RadioForSSQ_2'])
                + parseFloat(formData['RadioForSSQ_3'])
                + parseFloat(formData['RadioForSSQ_4'])
                + parseFloat(formData['RadioForSSQ_5'])
                + parseFloat(formData['RadioForSSQ_9'])
                + parseFloat(formData['RadioForSSQ_11'])) + 
                    (parseFloat(formData['RadioForSSQ_5'])
                    + parseFloat(formData['RadioForSSQ_8'])
                    + parseFloat(formData['RadioForSSQ_10'])
                    + parseFloat(formData['RadioForSSQ_11'])
                    + parseFloat(formData['RadioForSSQ_12'])
                    + parseFloat(formData['RadioForSSQ_13'])
                    + parseFloat(formData['RadioForSSQ_14']))) * 3.74);


        handleQuestionChange("NAUSEA_v", (
            parseFloat(formData['RadioForSSQ_1_v'])
            + parseFloat(formData['RadioForSSQ_6_v'])
            + parseFloat(formData['RadioForSSQ_7_v'])
            + parseFloat(formData['RadioForSSQ_8_v'])
            + parseFloat(formData['RadioForSSQ_9_v'])
            + parseFloat(formData['RadioForSSQ_15_v'])
            + parseFloat(formData['RadioForSSQ_16_v'])
        )
            * 9.54);

        handleQuestionChange("Oculomotor_v",
            (
                parseFloat(formData['RadioForSSQ_1_v'])
                + parseFloat(formData['RadioForSSQ_2_v'])
                + parseFloat(formData['RadioForSSQ_3_v'])
                + parseFloat(formData['RadioForSSQ_4_v'])
                + parseFloat(formData['RadioForSSQ_5_v'])
                + parseFloat(formData['RadioForSSQ_9_v'])
                + parseFloat(formData['RadioForSSQ_11_v']))
            * 7.58);

        handleQuestionChange("Disorientation_v", (
            parseFloat(formData['RadioForSSQ_5_v'])
            + parseFloat(formData['RadioForSSQ_8_v'])
            + parseFloat(formData['RadioForSSQ_10_v'])
            + parseFloat(formData['RadioForSSQ_11_v'])
            + parseFloat(formData['RadioForSSQ_12_v'])
            + parseFloat(formData['RadioForSSQ_13_v'])
            + parseFloat(formData['RadioForSSQ_14_v']))
            * 13.92);

        handleQuestionChange("SSQTotal_v", (
            (parseFloat(formData['RadioForSSQ_1_v'])
                + parseFloat(formData['RadioForSSQ_6_v'])
                + parseFloat(formData['RadioForSSQ_7_v'])
                + parseFloat(formData['RadioForSSQ_8_v'])
                + parseFloat(formData['RadioForSSQ_9_v'])
                + parseFloat(formData['RadioForSSQ_15_v'])
                + parseFloat(formData['RadioForSSQ_16_v'])) + (
                parseFloat(formData['RadioForSSQ_1_v'])
                + parseFloat(formData['RadioForSSQ_2_v'])
                + parseFloat(formData['RadioForSSQ_3_v'])
                + parseFloat(formData['RadioForSSQ_4_v'])
                + parseFloat(formData['RadioForSSQ_5_v'])
                + parseFloat(formData['RadioForSSQ_9_v'])
                + parseFloat(formData['RadioForSSQ_11_v'])) + (parseFloat(formData['RadioForSSQ_5_v'])
                    + parseFloat(formData['RadioForSSQ_8_v'])
                    + parseFloat(formData['RadioForSSQ_10_v'])
                    + parseFloat(formData['RadioForSSQ_11_v'])
                    + parseFloat(formData['RadioForSSQ_12_v'])
                    + parseFloat(formData['RadioForSSQ_13_v'])
                    + parseFloat(formData['RadioForSSQ_14_v']))) * 3.74);

                    handleQuestionChange("NAUSEA_b", (
                        parseFloat(formData['RadioForSSQ_1_b'])
                        + parseFloat(formData['RadioForSSQ_6_b'])
                        + parseFloat(formData['RadioForSSQ_7_b'])
                        + parseFloat(formData['RadioForSSQ_8_b'])
                        + parseFloat(formData['RadioForSSQ_9_b'])
                        + parseFloat(formData['RadioForSSQ_15_b'])
                        + parseFloat(formData['RadioForSSQ_16_b'])
                    )
                        * 9.54);
            
                    handleQuestionChange("Oculomotor_b",
                        (
                            parseFloat(formData['RadioForSSQ_1_b'])
                            + parseFloat(formData['RadioForSSQ_2_b'])
                            + parseFloat(formData['RadioForSSQ_3_b'])
                            + parseFloat(formData['RadioForSSQ_4_b'])
                            + parseFloat(formData['RadioForSSQ_5_b'])
                            + parseFloat(formData['RadioForSSQ_9_b'])
                            + parseFloat(formData['RadioForSSQ_11_b']))
                        * 7.58);
            
                    handleQuestionChange("Disorientation_b", (
                        parseFloat(formData['RadioForSSQ_5_b'])
                        + parseFloat(formData['RadioForSSQ_8_b'])
                        + parseFloat(formData['RadioForSSQ_10_b'])
                        + parseFloat(formData['RadioForSSQ_11_b'])
                        + parseFloat(formData['RadioForSSQ_12_b'])
                        + parseFloat(formData['RadioForSSQ_13_b'])
                        + parseFloat(formData['RadioForSSQ_14_b']))
                        * 13.92);
            
                    handleQuestionChange("SSQTotal_b", (
                        (parseFloat(formData['RadioForSSQ_1_b'])
                            + parseFloat(formData['RadioForSSQ_6_b'])
                            + parseFloat(formData['RadioForSSQ_7_b'])
                            + parseFloat(formData['RadioForSSQ_8_b'])
                            + parseFloat(formData['RadioForSSQ_9_b'])
                            + parseFloat(formData['RadioForSSQ_15_b'])
                            + parseFloat(formData['RadioForSSQ_16_b'])) + (
                            parseFloat(formData['RadioForSSQ_1_b'])
                            + parseFloat(formData['RadioForSSQ_2_b'])
                            + parseFloat(formData['RadioForSSQ_3_b'])
                            + parseFloat(formData['RadioForSSQ_4_b'])
                            + parseFloat(formData['RadioForSSQ_5_b'])
                            + parseFloat(formData['RadioForSSQ_9_b'])
                            + parseFloat(formData['RadioForSSQ_11_b'])) + (parseFloat(formData['RadioForSSQ_5_b'])
                                + parseFloat(formData['RadioForSSQ_8_b'])
                                + parseFloat(formData['RadioForSSQ_10_b'])
                                + parseFloat(formData['RadioForSSQ_11_b'])
                                + parseFloat(formData['RadioForSSQ_12_b'])
                                + parseFloat(formData['RadioForSSQ_13_b'])
                                + parseFloat(formData['RadioForSSQ_14_b']))) * 3.74);
    }


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

    const handleSubmit = async (formValues) => {

        setShowLoad(true);

        const body = new URLSearchParams();

        for (const key of keyOrder) {
            const value = formValues[key];
            // console.log(value);
            body.append(key, value);
        }

        const response = await fetch(
            "https://script.google.com/macros/s/AKfycbwbikN_Or1Me-7u5UV_D-Kx7lO3RIttOUi_p_yAC5XSCO_pUnDlBUVZYf71j_29Uz8jjw/exec", {
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
        const shuffledContents = [...contentBT].sort(() => Math.random() - 0.5);
        setContentBT(shuffledContents);
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



    const optionNamesDefault = [
        { label: "없음", value: 0 },
        { label: "약간", value: 1 },
        { label: "중간", value: 2 },
        { label: "매우", value: 3 }
    ]

    const [contentBT, setContentBT] = useState([
        <RadioLikertSSQBT
            key={0}
            contents={BTSSQList[0]}
            optionNames={optionNamesDefault}
            onChange={(answer) => handleQuestionChange(
                BTSSQList[0].RadioIndex, answer
            )}
            onChange_v={(answer) => handleQuestionChange(
                BTSSQList[0].AdditionalQ[0].AdditionalRadioIndex, answer
            )}
            onChange_b={(answer) => handleQuestionChange(
                BTSSQList[0].AdditionalQ[1].AdditionalRadioIndex, answer
            )}
        />,

        <RadioLikertSSQBT
            key={1}
            contents={BTSSQList[1]}
            optionNames={optionNamesDefault}
            onChange={(answer) => handleQuestionChange(
                BTSSQList[1].RadioIndex, answer
            )}
            onChange_v={(answer) => handleQuestionChange(
                BTSSQList[1].AdditionalQ[0].AdditionalRadioIndex, answer
            )}
            onChange_b={(answer) => handleQuestionChange(
                BTSSQList[1].AdditionalQ[1].AdditionalRadioIndex, answer
            )}
        />,

        <RadioLikertSSQBT
            key={2}
            contents={BTSSQList[2]}
            optionNames={optionNamesDefault}
            onChange={(answer) => handleQuestionChange(
                BTSSQList[2].RadioIndex, answer
            )}
            onChange_v={(answer) => handleQuestionChange(
                BTSSQList[2].AdditionalQ[0].AdditionalRadioIndex, answer
            )}
            onChange_b={(answer) => handleQuestionChange(
                BTSSQList[2].AdditionalQ[1].AdditionalRadioIndex, answer
            )}
        />,

        <RadioLikertSSQBT
            key={3}
            contents={BTSSQList[3]}
            optionNames={optionNamesDefault}
            onChange={(answer) => handleQuestionChange(
                BTSSQList[3].RadioIndex, answer
            )}
            onChange_v={(answer) => handleQuestionChange(
                BTSSQList[3].AdditionalQ[0].AdditionalRadioIndex, answer
            )}
            onChange_b={(answer) => handleQuestionChange(
                BTSSQList[3].AdditionalQ[1].AdditionalRadioIndex, answer
            )}
        />,

        <RadioLikertSSQBT
            key={4}
            contents={BTSSQList[4]}
            optionNames={optionNamesDefault}
            onChange={(answer) => handleQuestionChange(
                BTSSQList[4].RadioIndex, answer
            )}
            onChange_v={(answer) => handleQuestionChange(
                BTSSQList[4].AdditionalQ[0].AdditionalRadioIndex, answer
            )}
            onChange_b={(answer) => handleQuestionChange(
                BTSSQList[4].AdditionalQ[1].AdditionalRadioIndex, answer
            )}
        />,

        <RadioLikertSSQBT
            key={5}
            contents={BTSSQList[5]}
            optionNames={optionNamesDefault}
            onChange={(answer) => handleQuestionChange(
                BTSSQList[5].RadioIndex, answer
            )}
            onChange_v={(answer) => handleQuestionChange(
                BTSSQList[5].AdditionalQ[0].AdditionalRadioIndex, answer
            )}
            onChange_b={(answer) => handleQuestionChange(
                BTSSQList[5].AdditionalQ[1].AdditionalRadioIndex, answer
            )}
        />,

        <RadioLikertSSQBT
            key={6}
            contents={BTSSQList[6]}
            optionNames={optionNamesDefault}
            onChange={(answer) => handleQuestionChange(
                BTSSQList[6].RadioIndex, answer
            )}
            onChange_v={(answer) => handleQuestionChange(
                BTSSQList[6].AdditionalQ[0].AdditionalRadioIndex, answer
            )}
            onChange_b={(answer) => handleQuestionChange(
                BTSSQList[6].AdditionalQ[1].AdditionalRadioIndex, answer
            )}
        />,

        <RadioLikertSSQBT
            key={7}
            contents={BTSSQList[7]}
            optionNames={optionNamesDefault}
            onChange={(answer) => handleQuestionChange(
                BTSSQList[7].RadioIndex, answer
            )}
            onChange_v={(answer) => handleQuestionChange(
                BTSSQList[7].AdditionalQ[0].AdditionalRadioIndex, answer
            )}
            onChange_b={(answer) => handleQuestionChange(
                BTSSQList[7].AdditionalQ[1].AdditionalRadioIndex, answer
            )}
        />,

        <RadioLikertSSQBT
            key={8}
            contents={BTSSQList[8]}
            optionNames={optionNamesDefault}
            onChange={(answer) => handleQuestionChange(
                BTSSQList[8].RadioIndex, answer
            )}
            onChange_v={(answer) => handleQuestionChange(
                BTSSQList[8].AdditionalQ[0].AdditionalRadioIndex, answer
            )}
            onChange_b={(answer) => handleQuestionChange(
                BTSSQList[8].AdditionalQ[1].AdditionalRadioIndex, answer
            )}
        />,

        <RadioLikertSSQBT
            key={9}
            contents={BTSSQList[9]}
            optionNames={optionNamesDefault}
            onChange={(answer) => handleQuestionChange(
                BTSSQList[9].RadioIndex, answer
            )}
            onChange_v={(answer) => handleQuestionChange(
                BTSSQList[9].AdditionalQ[0].AdditionalRadioIndex, answer
            )}
            onChange_b={(answer) => handleQuestionChange(
                BTSSQList[9].AdditionalQ[1].AdditionalRadioIndex, answer
            )}
        />,

        <RadioLikertSSQBT
            key={10}
            contents={BTSSQList[10]}
            optionNames={optionNamesDefault}
            onChange={(answer) => handleQuestionChange(
                BTSSQList[10].RadioIndex, answer
            )}
            onChange_v={(answer) => handleQuestionChange(
                BTSSQList[10].AdditionalQ[0].AdditionalRadioIndex, answer
            )}
            onChange_b={(answer) => handleQuestionChange(
                BTSSQList[10].AdditionalQ[1].AdditionalRadioIndex, answer
            )}
        />,

        <RadioLikertSSQBT
            key={11}
            contents={BTSSQList[11]}
            optionNames={optionNamesDefault}
            onChange={(answer) => handleQuestionChange(
                BTSSQList[11].RadioIndex, answer
            )}
            onChange_v={(answer) => handleQuestionChange(
                BTSSQList[11].AdditionalQ[0].AdditionalRadioIndex, answer
            )}
            onChange_b={(answer) => handleQuestionChange(
                BTSSQList[11].AdditionalQ[1].AdditionalRadioIndex, answer
            )}
        />,

        <RadioLikertSSQBT
            key={12}
            contents={BTSSQList[12]}
            optionNames={optionNamesDefault}
            onChange={(answer) => handleQuestionChange(
                BTSSQList[12].RadioIndex, answer
            )}
            onChange_v={(answer) => handleQuestionChange(
                BTSSQList[12].AdditionalQ[0].AdditionalRadioIndex, answer
            )}
            onChange_b={(answer) => handleQuestionChange(
                BTSSQList[12].AdditionalQ[1].AdditionalRadioIndex, answer
            )}
        />,

        <RadioLikertSSQBT
            key={13}
            contents={BTSSQList[13]}
            optionNames={optionNamesDefault}
            onChange={(answer) => handleQuestionChange(
                BTSSQList[13].RadioIndex, answer
            )}
            onChange_v={(answer) => handleQuestionChange(
                BTSSQList[13].AdditionalQ[0].AdditionalRadioIndex, answer
            )}
            onChange_b={(answer) => handleQuestionChange(
                BTSSQList[13].AdditionalQ[1].AdditionalRadioIndex, answer
            )}
        />,


        <RadioLikertSSQBT
            key={14}
            contents={BTSSQList[14]}
            optionNames={optionNamesDefault}
            onChange={(answer) => handleQuestionChange(
                BTSSQList[14].RadioIndex, answer
            )}
            onChange_v={(answer) => handleQuestionChange(
                BTSSQList[14].AdditionalQ[0].AdditionalRadioIndex, answer
            )}
            onChange_b={(answer) => handleQuestionChange(
                BTSSQList[14].AdditionalQ[1].AdditionalRadioIndex, answer
            )}
        />,

        <RadioLikertSSQBT
            key={15}
            contents={BTSSQList[15]}
            optionNames={optionNamesDefault}
            onChange={(answer) => handleQuestionChange(
                BTSSQList[15].RadioIndex, answer
            )}
            onChange_v={(answer) => handleQuestionChange(
                BTSSQList[15].AdditionalQ[0].AdditionalRadioIndex, answer
            )}
            onChange_b={(answer) => handleQuestionChange(
                BTSSQList[15].AdditionalQ[1].AdditionalRadioIndex, answer
            )}
        />
    ])



    return (
        <>

            <CustomLoading
                message={"설문을 저장하고 있는 중입니다. 잠시만 기다려주세요."}
                show={showLoad}
                handleClose={() => { setShowLoad(false) }}
                action={() => { }}
            />

            <HEADER
                title={"BT 설문지"}
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
                                        *첫 페이지는 반드시 실험 진행자가 작성, 이후 뒷 페이지는 SSQ / NASA TLX 로 구성되어 있음*
                                    </div>

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
                                        question={"실험 참가자 번호 * "}
                                        hint={"사전에 정해놓은 번호를 입력하세요..."}
                                        onChange={(answer) => handleQuestionChange("PAName", answer)}
                                    />

                                    <RadioSelection
                                        SaveId={"PADays"}
                                        question={"몇일차인지 (예를 들면, 1일차, ...., 7일차) *"}
                                        radioName={"RadioForPADays"}
                                        optionNames={[
                                            "1일차",
                                            "2일차",
                                            "3일차",
                                            "4일차",
                                            "5일차",
                                        ]}
                                        onChange={(answer) => handleQuestionChange("PADays", answer)}
                                    />

                                    <RadioSelection
                                        SaveId={"PATodayNumbers"}
                                        question={"당일의 1회차 혹은 2회차?"}
                                        radioName={"RadioForPATodayNumbers"}
                                        optionNames={[
                                            "1회차",
                                            "2회차",
                                        ]}
                                        onChange={(answer) => handleQuestionChange("PATodayNumbers", answer)}
                                    />

                                  
                               

                                    <div className="rightaline">
                                        <button
                                            className="btn btn-primary fw-500"
                                            type="button"
                                            onClick={() => {
                                                if (CheckValidate(["PAWeather", "PACondition", "PATodayNumbers", "PADays", "PAName"])) {
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

                                <div className="tab-pane fade show" id="SSQView" role="tabpanel" aria-labelledby="TabSSQ">


                                    {contentBT.map((contentBT, index) => {
                                        return contentBT;
                                    })}

                                    <div className="rightaline">
                                        <button
                                            className="btn btn-primary fw-500"
                                            type="button"
                                            onClick={() => {
                                                if (CheckValidate([
                                                    "RadioForSSQ_1",
                                                    "RadioForSSQ_2",
                                                    "RadioForSSQ_3",
                                                    "RadioForSSQ_4",
                                                    "RadioForSSQ_5",
                                                    "RadioForSSQ_6",
                                                    "RadioForSSQ_7",
                                                    "RadioForSSQ_8",
                                                    "RadioForSSQ_9",
                                                    "RadioForSSQ_10",
                                                    "RadioForSSQ_11",
                                                    "RadioForSSQ_12",
                                                    "RadioForSSQ_13",
                                                    "RadioForSSQ_14",
                                                    "RadioForSSQ_15",
                                                    "RadioForSSQ_16",
                                                    "RadioForSSQ_1_v",
                                                    "RadioForSSQ_2_v",
                                                    "RadioForSSQ_3_v",
                                                    "RadioForSSQ_4_v",
                                                    "RadioForSSQ_5_v",
                                                    "RadioForSSQ_6_v",
                                                    "RadioForSSQ_7_v",
                                                    "RadioForSSQ_8_v",
                                                    "RadioForSSQ_9_v",
                                                    "RadioForSSQ_10_v",
                                                    "RadioForSSQ_11_v",
                                                    "RadioForSSQ_12_v",
                                                    "RadioForSSQ_13_v",
                                                    "RadioForSSQ_14_v",
                                                    "RadioForSSQ_15_v",
                                                    "RadioForSSQ_16_v",
                                                    "RadioForSSQ_1_b",
                                                    "RadioForSSQ_2_b",
                                                    "RadioForSSQ_3_b",
                                                    "RadioForSSQ_4_b",
                                                    "RadioForSSQ_5_b",
                                                    "RadioForSSQ_6_b",
                                                    "RadioForSSQ_7_b",
                                                    "RadioForSSQ_8_b",
                                                    "RadioForSSQ_9_b",
                                                    "RadioForSSQ_10_b",
                                                    "RadioForSSQ_11_b",
                                                    "RadioForSSQ_12_b",
                                                    "RadioForSSQ_13_b",
                                                    "RadioForSSQ_14_b",
                                                    "RadioForSSQ_15_b",
                                                    "RadioForSSQ_16_b"
                                                ])) {
                                                    calculateSSQ();
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

                                <div className="tab-pane face show" id="TLXView" role="tabpanel" aria-labelledby="TabTLX">

                                    <div className="text-lg d-flex mt-n6 mb-4 justify-content-evenly text-danger fw-500">
                                        * 파란 점을 클릭해서 끌면서 선택한다면, 편하게 선택할 수 있습니다 SIM-TLX *
                                    </div>

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
                                                    handleSubmit(formData);
                                                }
                                                else {
                                                    scrollToTop();
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

export default BTMain;
