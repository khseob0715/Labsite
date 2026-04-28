
import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

import HEADER from '../../components/Header';
import {
    ShortTextAnswer,
    RadioSelection,
    LargeTextAnswer,
    SliderQuesiton,
    SliderQuestionMoreOptions
} from '../../components/questionforms';

import { useAlert, types } from 'react-alert'



import CustomLoading from "../../components/CustomLoading";

const keyOrder = [
    "PAName",
    "RadioForPACondition",
    "SurveyStartTime",
    "MISC",
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
    "Reusability",
    "Complexity",
    "Integration",
    "Consistency",
    "Leanability",
    "Confidence",
    "SSQ_1",
    "SSQ_2",
    "SSQ_3",
    "SSQ_4",
    "FW_1",
    "FW_2",
    "FW_3",
    "FW_4",
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
        Reusability: "",
        Complexity: "",
        Integration: "",
        Consistency: "",
        Leanability: "",
        Confidence: "",
        SSQ_1: "",
        SSQ_2: "",
        SSQ_3: "",
        SSQ_4: "",
        FW_1: "",
        FW_2: "",
        FW_3: "",
        FW_4: "",
        PAComment: ""
    })



    
    const handleSubmit = async (formValues) => {

        setShowLoad(true);

        const body = new URLSearchParams();

        for (const key of keyOrder) {
            const value = formValues[key];
            // console.log(value);
            body.append(key, value);
        }


        const link = "https://script.google.com/macros/s/AKfycbwy5nuTnI5A2zTaSNeBh5UquSopF4ETeLvLjfBLeOUZhB6rN0SfaPFZ2fHvKd8GKo_j7Q/exec";
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
        

        const shuffledContentsSUS = [...SUSContents].sort(() => Math.random() - 0.5);
        SetSUSContents(shuffledContentsSUS);

        // const t_ssq = [...SSQContents].sort(() => Math.random() - 0.5);
        // SetSSQContents(t_ssq);

        const t_tlx = [...TLXContents].sort(() => Math.random() - 0.5);
        SetTLXContents(t_tlx);

        const shuffledContentsCS = [...contentCS].sort(() => Math.random() - 0.5);
        setContentCS(shuffledContentsCS);



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

        handleQuestionChange("Reusability",
            parseInt(formData['SUS_1'])
        )

        handleQuestionChange("Complexity",
            ((5 - (parseInt(formData['SUS_2'])))
                + (5 - (parseInt(formData['SUS_4'])))
                + parseInt(formData['SUS_3'])) / 3
        )

        handleQuestionChange("Integration",
            parseInt(formData['SUS_5'])
        )

        handleQuestionChange("Consistency",
            (5 - (parseInt(formData['SUS_6'])))
        )

        handleQuestionChange("Leanability",
            (parseInt(formData['SUS_7'])
                + (5 - (parseInt(formData['SUS_10'])))) / 2
        )

        handleQuestionChange("Confidence",
            ((5 - (parseInt(formData['SUS_8']))) +
                parseInt(formData['SUS_9'])) / 2
        )

    }

    const CustomContent = [
        {
            "key": 1,
            "query": "사람은 이 문제를 해결 할 수 있지만, 로봇이나 컴퓨터는 이 문제를 해결할 수 없다고 생각한다. (Robustness)",
            "saveId": "CS_1",
            "optionLabels": [
                { value: 1, label: '전혀 아니다' },
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
            "query": "이 문제는 직관적이고, 조작이 쉬우며, 간단하게 해결할 수 있다. (Usability)",
            "saveId": "CS_2",
            "optionLabels": [
                { value: 1, label: '전혀 아니다' },
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
            "query": "사람은 이 문제를 간단하다고 생각할 수 있지만, 로봇이나 컴퓨터는 이 문제를 복잡하다고 생각할 것이다.",
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
            "query": "이 문제와 정답은 모호하지 않고 분명하다고 생각한다.",
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
            "query": "이 문제와 정답은 로봇이나 컴퓨터가 유추하지 못 하도록, 여러 형태나 무작위로 변화될 수 있다고 생각한다. ",
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
            "query": "이 문제는 다양한 유형의 요소들을 포함하고 있다고 생각합니다.",
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
            "query": "이 문제는 연령, 신체적 장애에 영향을 받지 않고 모든 사람이 '사용'할 수 있다고 생각합니다 (문제 해결은 논외)",
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
            "query": "이 문제는 사람이 해결할 수 없다고 신호를 보냈을 때, 문제의 유형이 변화된 대안이 제시될 수 있다고 생각한다. (난이도 조정 아님)",
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
            "query": "이 문제는 시스템의 성능을 저하 시키지 않는다고 생각한다.",
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
            "query": "이 문제에 제한 시간과 제한 횟수가 없다면, 문제는 언젠가 풀릴 수 있다고 생각한다.",
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
        }
    ]


    const FlowContent = [
        {
            "key": 1,
            "query": "이 문제는 이전에 경험하던 가상 현실 경험을 방해할 것이다.",
            "saveId": "FW_1",
            "optionLabels": [
                { value: 1, label: '전혀 아니다' },
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
            "query": "이 문제를 해결하고 나면, 이전에 하던 작업을 잊게 될 것이다. ",
            "saveId": "FW_2",
            "optionLabels": [
                { value: 1, label: '전혀 아니다' },
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
            "query": "이 문제를 해결하고 나면, 시간이 얼마나 흘렀는지 모를 것이다.",
            "saveId": "FW_3",
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
            "query": "이 문제를 해결하고 나면, 주의가 산만해질 것이다.",
            "saveId": "FW_4",
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


    const SSQShortForm = [
        {
            "key": 1,
            "query": "VR을 체험하는 동안 불편함을 느꼈다. ",
            "saveId": "SSQ_1",
            "optionLabels" : [
                { value: 1, label: '전혀 아님'},
                { value: 2, label: ''},
                { value: 3, label: ''},
                { value: 4, label: '보통'},
                { value: 5, label: ''},
                { value: 6, label: ''},
                { value: 7, label: '매우 그렇다'},
            ]
        },
        {
            "key": 2,
            "query": "VR을 체험하는 동안 방향감을 상실하였다. ",
            "saveId": "SSQ_2",
            "optionLabels" : [
                { value: 1, label: '전혀 아님'},
                { value: 2, label: ''},
                { value: 3, label: ''},
                { value: 4, label: '보통'},
                { value: 5, label: ''},
                { value: 6, label: ''},
                { value: 7, label: '매우 그렇다'},
            ]
        },
        {
            "key": 3,
            "query": "VR을 체험하는 동안 눈이 빙빙 돌거나 피로감을 느꼈다. ",
            "saveId": "SSQ_3",
            "optionLabels" : [
                { value: 1, label: '전혀 아님'},
                { value: 2, label: ''},
                { value: 3, label: ''},
                { value: 4, label: '보통'},
                { value: 5, label: ''},
                { value: 6, label: ''},
                { value: 7, label: '매우 그렇다'},
            ]
        },
        {
            "key": 4,
            "query": "VR을 체험하는 동안 속이 울렁거리거나 메스껍다고 느꼈다.",
            "saveId": "SSQ_4",
            "optionLabels" : [
                { value: 1, label: '전혀 아님'},
                { value: 2, label: ''},
                { value: 3, label: ''},
                { value: 4, label: '보통'},
                { value: 5, label: ''},
                { value: 6, label: ''},
                { value: 7, label: '매우 그렇다'},
            ]
        }
    ]


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
            "query": "VR 작업에 얼마나 몰임갑을 느꼈습니까? ",
            "saveId": "TLX_10",
            "leftLable": "전혀 없음",
            "rightLable": "매우 많음"
        }
    ]


    const [SSQContents, SetSSQContents] = useState(SSQShortForm
        .map((q) => (
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
        )))


    const [FlowContents, SetFlowContents] = useState(FlowContent
        .map((q) => (
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
                                            "Puzzle",
                                            "Driving",
                                            "SpatialSound",
                                            "BlockDrop",
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
                                                    scrollToTop();
                                                    handleQuestionChange("SurveyStartTime", formatCurrentTime());
                                                    document.getElementById("TabNeck").click();
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
                                        SaveId={"MISC"}
                                        question={"연습 시간을 제외하고, 캡챠 시스템을 사용한 체감 시간은 어느정도인가요? "}
                                        hint={"분, 초 형태로 작성할 것"}
                                        onChange={(answer) => handleQuestionChange("MISC", answer)}
                                    />

                                    <div className="d-flex" style={{ justifyContent: "space-around" }}>
                                        <button
                                            className="btn btn-primary fw-500 rowBT"
                                            type="button"
                                            onClick={() => {

                                                if (CheckValidate([
                                                    "MISC",
                                                ])) {
                                                    scrollToTop();
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
                                    <div className="text-lg d-flex mt-n6 mb-4 justify-content-evenly text-danger fw-500">
                                        * 파란 점을 클릭해서 끌면서 선택한다면, 편하게 선택할 수 있습니다  *
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
                                        * 파란 점을 클릭해서 끌면서 선택한다면, 편하게 선택할 수 있습니다  *
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
                                                    "CS_8",
                                                    "CS_9",
                                                    "CS_10",
                                                ])) {
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
                                    <div className="text-lg d-flex mt-n6 mb-4 justify-content-evenly text-danger fw-500">
                                        * 파란 점을 클릭해서 끌면서 선택한다면, 편하게 선택할 수 있습니다 *
                                    </div>

                                    {SUSContents}

                                    {SSQContents}

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
                                                    "SSQ_1",
                                                    "SSQ_2",
                                                    "SSQ_3",
                                                    "SSQ_4",
                                                ])) {
                                                    calculateSUS();
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

                                    <div className="text-xl d-flex mt-n6 mb-4 justify-content-evenly text-danger fw-500">
                                        * 소셜 가상 현실을 체험하던 도중 물건을 사려고 시도하였더니, 화면이 전환되면서 캡챠 시스템이 등장하였다. 체험한 캡챠 시스템을 해결한 이후를 상상하여 답변해주세요 *
                                    </div>
                                    
                                    {FlowContents}


                                    <div className="rightaline">
                                        <button
                                            className="btn btn-primary fw-500"
                                            type="button"
                                            onClick={() => {
                                                if (CheckValidate([
                                                    "FW_1",
                                                    "FW_2",
                                                    "FW_3",
                                                    "FW_4",
                                                ])) {
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

