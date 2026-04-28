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




    const handleSubmit = async (formValues) => {

        setShowLoad(true);

        const body = new URLSearchParams();

        for (const key of keyOrder) {
            const value = formValues[key];
            body.append(key, value);
        }

        const link = "https://script.google.com/macros/s/AKfycbwfHgOp4Jbp1SoR7rR2Gr_j8JJ8aGKj6TC-bLCux5BxoKFx5Fdu5rp45jTajceKBIar/exec"
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

    };

    useEffect(() => {
        shuffleContents();
    }, []);

    useEffect(() => {
        console.log(formData);
    }, [formData]);

   
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
                                                if (
                                                    CheckValidateMSSQ()
                                                    ) 
                                                {
                                                   
                                                    CalculateMSSQ()
                                                    // document.getElementById("Tab_PANAS").click();
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