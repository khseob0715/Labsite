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
    "PAAges",
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
    "Extraversion",
    "Agreeableness",
    "Conscientiousness",
    "Neuroticism",
    "Openness",
    "MSSQ",
    "VIMSSQ"
];


function PreQuesiton() {

    const alert = useAlert()

    const [showLoad, setShowLoad] = useState(false);

    const [formData, setFormData] = useState({
        PAName: "",
        PAAges: "",
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


        Extraversion: "",
        Agreeableness: "",
        Conscientiousness: "",
        Neuroticism: "",
        Openness: "",
        MSSQ: "",
        VIMSSQ: "",
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


    const Options = [
        { id: 'childoption1', label: '탑승한 경험이 없다', score: null },
        { id: 'childoption2', label: '전혀 느끼지 못 했다 ', score: 0 },
        { id: 'childoption3', label: '가끔 느끼곤 한다', score: 1 },
        { id: 'childoption4', label: '보통 느끼곤 한다', score: 2 },
        { id: 'childoption5', label: '빈번하게 느낀다', score: 3 }
    ];


    const AdultOptions = [
        { id: 'Adultoption1', label: '탑승한 경험이 없다', score: null },
        { id: 'Adultoption2', label: '전혀 느끼지 못 했다 ', score: 0 },
        { id: 'Adultoption3', label: '가끔 느끼곤 한다', score: 1 },
        { id: 'Adultoption4', label: '보통 느끼곤 한다', score: 2 },
        { id: 'Adultoption5', label: '빈번하게 느낀다', score: 3 }
    ];

    const Types = [
        { id: '1', label: '승용차' },
        { id: '2', label: '버스' },
        { id: '3', label: '기차' },
        { id: '4', label: '비행기' },
        { id: '5', label: '보트' },
        { id: '6', label: '배' },
        { id: '7', label: '그네' },
        { id: '8', label: '회전목마' },
        { id: '9', label: '롤러코스터' },

    ]



    const OptionsVIMSSQ = [
        { id: 'VIMSSQoption1', label: '전혀 없음', score: 0 },
        { id: 'VIMSSQoption2', label: '드물게/거의 없음 (Rarely)', score: 1 },
        { id: 'VIMSSQoption3', label: '가끔 (Sometimes)', score: 2 },
        { id: 'VIMSSQoption4', label: '자주 (Often)', score: 3 },

    ];

    const TypesVIMSSQ = [
        { id: '1', label: '매스꺼움' },
        { id: '2', label: '두통' },
        { id: '3', label: '어지러움' },
        { id: '4', label: '피곤함' },
        { id: '5', label: '눈의 피로' },
        { id: '6', label: '중단한 경험' },

    ]



    const [selectedOptionsVIMSSQ, setSelectedOptionsVIMSSQ] = useState({});

    
    const [selectedOptions, setSelectedOptions] = useState({});

    const [option1Count, setOption1Count] = useState(0);

    const [totalScore, setTotalScore] = useState(0);


    const [selectedOptionsAdult, setSelectedOptionsAdult] = useState({});

    const [option1CountAdult, setOption1CountAdult] = useState(0);

    const [totalScoreAdult, setTotalScoreAdult] = useState(0);


    

    const [MSSQScore, SetMSSQScore] = useState(0);

    const [VIMSSQScore, SetVIMSSQScore] = useState(0);


    const handleOptionChange = (typeId, selectedOption) => {
        setSelectedOptions(prev => ({
            ...prev,
            [typeId]: selectedOption
        }));

    };

    const handleOptionChangeAdult = (typeId, selectedOption) => {
        setSelectedOptionsAdult(prev => ({
            ...prev,
            [typeId]: selectedOption
        }));

    };

    const handleOptionChangeVIMSSQ = (typeId, selectedOption) => {
        setSelectedOptionsVIMSSQ(prev => ({
            ...prev,
            [typeId]: selectedOption
        }));

    };


    function CalculateMSSQ() {


        SetMSSQScore(
            (
                (totalScore * 9) /
                (9 - option1Count)
            )
            +
            (totalScoreAdult * 9) /
            (9 - option1CountAdult)

        )

        handleQuestionChange("MSSQ",
            (
                (totalScore * 9) /
                (9 - option1Count)
            )
            +
            (totalScoreAdult * 9) /
            (9 - option1CountAdult)
        )



        var scoresVIMSSQ = Object.values(selectedOptionsVIMSSQ).map(optionId => {
            const option = OptionsVIMSSQ.find(o => o.id === optionId);
            return option.score; // 점수를 반환
        });


        SetVIMSSQScore(
            scoresVIMSSQ.reduce((acc, score) => acc + score, 0)
        )

        handleQuestionChange("VIMSSQ", scoresVIMSSQ.reduce((acc, score) => acc + score, 0))
    }




    useEffect(() => {
        // 옵션 1번 선택 횟수 계산
        const newOption1Count = Object.values(selectedOptions).filter(option => option === 'childoption1').length;

        // console.log(newOption1Count + " ???? ");
        setOption1Count(newOption1Count);

        // 옵션 2, 3, 4, 5의 점수 총합 계산
        const scores = Object.values(selectedOptions).map(optionId => {

            const option = Options.find(o => o.id === optionId);

            return option.score; // 점수를 반환
        });

        const newTotalScore = scores.reduce((acc, score) => acc + score, 0);
        setTotalScore(newTotalScore);


        const newOption1CountAdult = Object.values(selectedOptionsAdult).filter(option => option === 'Adultoption1').length;

        // console.log(newOption1CountAdult + " ???? ");
        setOption1CountAdult(newOption1CountAdult);

        // 옵션 2, 3, 4, 5의 점수 총합 계산
        const scoresAdult = Object.values(selectedOptionsAdult).map(optionId => {
            const option = AdultOptions.find(o => o.id === optionId);
            return option.score; // 점수를 반환
        });

        const newTotalScoreAdult = scoresAdult.reduce((acc, score) => acc + score, 0);
        setTotalScoreAdult(newTotalScoreAdult);


    }, [selectedOptions, selectedOptionsAdult]);


    function CheckValidateMSSQ() {

        for (let i = 1; i <= 9; i++) {
            // 객체에 키가 존재하는지 확인합니다.
            if (!(i in selectedOptions)) {
                // 키가 없는 경우, 즉시 함수에서 false를 반환합니다.
                console.log(`Key ${i} is missing.`);
                return false;
            }
        }

        for (let i = 1; i <= 9; i++) {
            // 객체에 키가 존재하는지 확인합니다.
            if (!(i in selectedOptionsAdult)) {
                // 키가 없는 경우, 즉시 함수에서 false를 반환합니다.
                console.log(`Key ${i} is missing.`);
                return false;
            }
        }


        for (let i = 1; i <= 6; i++) {
            // 객체에 키가 존재하는지 확인합니다.
            if (!(i in selectedOptionsVIMSSQ)) {
                // 키가 없는 경우, 즉시 함수에서 false를 반환합니다.
                console.log(`Key ${i} is missing.`);
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

        const link = "https://script.google.com/macros/s/AKfycbzRG7iAnPQP0rLDB-Y3SMCt-hbD_3eNCIJORKgl6jvUGm3uh4Wojw17Obg5Zxre0LzMAw/exec"
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


        const shuffledContentsPANAS = [...PANASContents].sort(() => Math.random() - 0.5);
        SetPANASContents(shuffledContentsPANAS);
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
                title={"사전 설문지"}
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
                                        question={"눈과 관련된 질환 (근시 혹은 난시 이외의 추가적인 증상이 있을 경우, 해당 증상을 우선적으로 선택해주세요)"}
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



                                    <div className="rightaline">
                                        <button
                                            className="btn btn-primary fw-500"
                                            type="button"
                                            onClick={() => {
                                                if (CheckValidate([
                                                    "PAName",
                                                    "PAAges",
                                                    "RadioForPAEyes",
                                                    "RadioForPADisease",
                                                    "RadioForGender",
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
                                <div className="tab-pane fade" id="TabView_2" role="tabpanel" aria-labelledby="Tab_2">
                                    {BFIContents}


                                    <div className="card mb-4">
                                        <div className='card-header d-flex justify-content-between'>
                                            <div className="fw-500">어렸을 당시 다음 이동 수단에 탑승했을 때 얼마나 멀미/구토/어지러움을 느꼈나요?</div>
                                        </div>

                                        <fieldset className="form-check-label 
                                            form-radio-container 
                                            justify-content-evenly
                                            flex-column
                                            d-flex m-2">

                                            {Types.map((type) => (
                                                <div key={type.id} className="d-flex flex-row border-bottom">

                                                    <div className="fw-500 m-2" style={{ width: "100px" }}>{type.label}</div>

                                                    {Options.map((option) => (
                                                        <label className='form-check-label m-2
                                                            me-3 mb-3 ' key={option.id}>

                                                            <input
                                                                className="form-check-input mx-2"
                                                                type="radio"
                                                                name={`$childoption${type.id}`}
                                                                value={option.id}
                                                                checked={selectedOptions[type.id] === option.id}
                                                                onChange={() => handleOptionChange(type.id, option.id)}
                                                            />

                                                            {option.label}
                                                        </label>
                                                    ))}
                                                </div>
                                            ))}

                                        </fieldset>

                                    </div>


                                    <div className="card mb-4">
                                        <div className='card-header d-flex justify-content-between'>
                                            <div className="fw-500">최근 10년 동안 다음 이동 수단에 탑승했을 때 얼마나 멀미/구토/어지러움을 느꼈나요?</div>
                                        </div>

                                        <fieldset className="form-check-label 
                                            form-radio-container 
                                            justify-content-evenly
                                            flex-column
                                            d-flex m-2">

                                            {Types.map((type) => (
                                                <div key={type.id} className="d-flex flex-row border-bottom">

                                                    <div className="fw-500 m-2" style={{ width: "100px" }}>{type.label}</div>

                                                    {AdultOptions.map((option) => (
                                                        <label className='form-check-label m-2
                                                            me-3 mb-3 ' key={option.id}>

                                                            <input
                                                                className="form-check-input mx-2"
                                                                type="radio"
                                                                name={`$Adultoption${type.id}`}
                                                                value={option.id}
                                                                checked={selectedOptionsAdult[type.id] === option.id}
                                                                onChange={() => handleOptionChangeAdult(type.id, option.id)}
                                                            />

                                                            {option.label}
                                                        </label>
                                                    ))}
                                                </div>
                                            ))}

                                        </fieldset>

                                    </div>



                                    <div className="card mb-4">
                                        <div className='card-header d-flex justify-content-between'>
                                            <div className="fw-500">
                                                시각 디스플레이(스마트폰, 태블릿, 극장, 컴퓨터, 게임, 가상현실, TV 등)를
                                                사용할 때 다음과 같은 `증상'을 느끼거나, 사용을 `중단' 혹은 `피한 적'이 있으신가요?</div>
                                        </div>

                                        <fieldset className="form-check-label 
                                            form-radio-container 
                                            justify-content-evenly
                                            flex-column
                                            d-flex m-2">

                                            {TypesVIMSSQ.map((type) => (
                                                <div key={type.id} className="d-flex flex-row border-bottom">

                                                    <div className="fw-500 m-2" style={{ width: "100px" }}>{type.label}</div>

                                                    {OptionsVIMSSQ.map((option) => (
                                                        <label className='form-check-label m-2
                                                            me-3 mb-3 ' key={option.id}>

                                                            <input
                                                                className="form-check-input mx-2"
                                                                type="radio"
                                                                name={`$vimssqoption${type.id}`}
                                                                value={option.id}
                                                                checked={selectedOptionsVIMSSQ[type.id] === option.id}
                                                                onChange={() => handleOptionChangeVIMSSQ(type.id, option.id)}
                                                            />

                                                            {option.label}
                                                        </label>
                                                    ))}
                                                </div>
                                            ))}

                                        </fieldset>

                                    </div>


                                    <div className="rightaline">
                                        <button
                                            className="btn btn-primary fw-500"
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
                                                ])
                                                    && CheckValidateMSSQ()
                                                ) {
                                                    calculateBFI();
                                                    CalculateMSSQ()
                                                    document.getElementById("Tab_PANAS").click();
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


                                <div className="tab-pane fade" id="TabView_PANAS" role="tabpanel" aria-labelledby="Tab_PANAS">

                                    <div className="text-lg d-flex mb-4 justify-content-evenly  fw-500">
                                        지난 일주일 동안 다음과 느낀 정도를 표시하세요.
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

                                    <div className="text-lg d-flex mb-4 justify-content-evenly  fw-500">
                                        "VR 기술 친숙도 : VR을 체험하거나 용어를 접하는 횟수"
                                        <br />
                                        * 기본적인 인식 (1점): VR/AR 기술이 무엇인지 기본적으로 알고 있으나, 이에 대해 자세한 정보나 경험이 전혀 없음.
                                        <br />
                                        * 간접적 경험 (2점): VR/AR 기술을 박람회, 전시관 등에서 다른 사람이 사용하는 것을 보거나 한두 차례 직접 체험해봄.
                                        <br />
                                        * 제한적 경험 (3점): VR/AR 기기를 세차례 이상 직접 사용해본 적이 있으나 매우 제한적이며, 기술에 대한 이해도가 낮음.
                                        <br />
                                        * 중간 정도의 친숙도 (4점): 사용자 입장에서 VR/AR 기술을 여러 차례 사용해보았으며, 기본적인 작동 방식과 용도에 대해 이해하고 있음.
                                        <br />
                                        * 상당한 경험 및 이해 (5점): 사용자 입장에서 VR/AR 기술을 자주 사용하며, 다양한 애플리케이션과 기능에 대해 잘 알고 있음.
                                        <br />
                                        * 전문적 지식 및 경험 (6점): 전문가 입장에서 VR/AR 기술 분야에서 개발 경험이나 기초적인 정도의 연구를 수행함.
                                        <br />
                                        * 많은 전문적 지식 및 경험 (7점): 전문가 입장에서 VR/AR 기술에 대해 깊은 지식을 가지고 가르칠 수 있으며, 전문적인 연구를 수행하고 이끌 수 있음.
                                        <br />
                                    </div>

                                    <SevenPointLikert
                                        question={"VR 기술에 얼마나 친숙하신가요?"}
                                        optionLabels={[
                                            { label: "적음" },
                                            { label: "많음" }
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
                                            className="btn btn-secondary fw-500"
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

export default PreQuesiton;