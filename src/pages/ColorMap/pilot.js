
import React, { useEffect, useState, useRef, useMemo } from "react";
import { Link } from "react-router-dom";


import HEADER from '../../components/Header';
import {
    ShortTextAnswer,
    RadioSelection,
    ColorRoomImage,
} from '../../components/questionforms';

import { useAlert, types } from 'react-alert'


import {
    Slider,
} from "@mui/material";


import CustomLoading from "../../components/CustomLoading";

const keyOrder = [
    "SurveyStartTime",
    "PAName",
    "PAAges",
    "PAEmail",
    "RadioForGender",
    "RadioForPADisease",
    "A_0",
    "V_0",
    "A_30",
    "V_30",
    "A_31",
    "V_31",
    "A_32",
    "V_32",
    "A_33",
    "V_33",
    "A_34",
    "V_34",
    "A_35",
    "V_35",
    "A_36",
    "V_36",
    "A_37",
    "V_37",
    "A_50",
    "V_50",
    "A_51",
    "V_51",
    "A_52",
    "V_52",
    "A_53",
    "V_53",
    "A_54",
    "V_54",
    "A_55",
    "V_55",
    "A_56",
    "V_56",
    "A_57",
    "V_57"
];



function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "instant" // 부드러운 스크롤을 위해 behavior 속성을 사용
    });
}


function Pilot() {
    const alert = useAlert()

    const [showLoad, setShowLoad] = useState(false);

    const [formData, setFormData] = useState({
        PAName: "",
        SurveyStartTime: "",
        PAAges: "",
        PAEmail: "",
        RadioForGender: "",
        RadioForPADisease: "",
        A_0: "",
        V_0: "",
        A_30: "",
        V_30: "",
        A_31: "",
        V_31: "",
        A_32: "",
        V_32: "",
        A_33: "",
        V_33: "",
        A_34: "",
        V_34: "",
        A_35: "",
        V_35: "",
        A_36: "",
        V_36: "",
        A_37: "",
        V_37: "",
        A_50: "",
        V_50: "",
        A_51: "",
        V_51: "",
        A_52: "",
        V_52: "",
        A_53: "",
        V_53: "",
        A_54: "",
        V_54: "",
        A_55: "",
        V_55: "",
        A_56: "",
        V_56: "",
        A_57: "",
        V_57: "",
    })

    const handleSubmit = async (formValues) => {

        setShowLoad(true);

        const body = new URLSearchParams();

        for (const key of keyOrder) {
            const value = formValues[key];
            // console.log(value);
            body.append(key, value);
        }


        const link = "https://script.google.com/macros/s/AKfycbyrS5Rghmzbkejk6boKsaQeavPLwBLbkzoaYVYUQlg6igLCEfENHYU74QYrnEL1mlwR/exec";
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


    // useEffect(() => {
    //     console.log(formData);
    // }, [formData]);

    const handleQuestionChange = (question, answer) => {

        console.log(question + " " + answer);

        setFormData((prevFormData) => ({
            ...prevFormData,
            [question]: answer,
        }));
    };


    function CheckValidate(requiredKeys) {

        console.log(formData);


        for (var key of requiredKeys) {

            if (formData[key] === "") {
                console.log(key );

                console.log(formData[key]);
                return false;
            }
        }
        return true;
    }



    const ColorRoomForm = [
        {
            "key": 0,
            "query": "Room - 30",
            "saveId_A": "A_30",
            "saveId_V": "V_30",
            "squareImage": "/assets/img/colormap/square/s30.jpg",
            "vrImage": '/assets/img/colormap/vr/vr30.jpg',
        },
        {
            "key": 1,
            "query": "Room - 31",
            "saveId_A": "A_31",
            "saveId_V": "V_31",
            "squareImage": "/assets/img/colormap/square/s31.jpg",
            "vrImage": '/assets/img/colormap/vr/vr31.jpg',
        },
        {
            "key": 2,
            "query": "Room - 32",
            "saveId_A": "A_32",
            "saveId_V": "V_32",
            "squareImage": "/assets/img/colormap/square/s32.jpg",
            "vrImage": '/assets/img/colormap/vr/vr32.jpg',
        },
        {
            "key": 3,
            "query": "Room - 33",
            "saveId_A": "A_33",
            "saveId_V": "V_33",
            "squareImage": "/assets/img/colormap/square/s33.jpg",
            "vrImage": '/assets/img/colormap/vr/vr33.jpg',
        },
        {
            "key": 4,
            "query": "Room - 34",
            "saveId_A": "A_34",
            "saveId_V": "V_34",
            "squareImage": "/assets/img/colormap/square/s34.jpg",
            "vrImage": '/assets/img/colormap/vr/vr34.jpg',
        },
        {
            "key": 5,
            "query": "Room - 35",
            "saveId_A": "A_35",
            "saveId_V": "V_35",
            "squareImage": "/assets/img/colormap/square/s35.jpg",
            "vrImage": '/assets/img/colormap/vr/vr35.jpg',
        },
        {
            "key": 6,
            "query": "Room - 36",
            "saveId_A": "A_36",
            "saveId_V": "V_36",
            "squareImage": "/assets/img/colormap/square/s36.jpg",
            "vrImage": '/assets/img/colormap/vr/vr36.jpg',
        },
        {
            "key": 7,
            "query": "Room - 37",
            "saveId_A": "A_37",
            "saveId_V": "V_37",
            "squareImage": "/assets/img/colormap/square/s37.jpg",
            "vrImage": '/assets/img/colormap/vr/vr37.jpg',
        },
        {
            "key": 8,
            "query": "Room - 50",
            "saveId_A": "A_50",
            "saveId_V": "V_50",
            "squareImage": "/assets/img/colormap/square/s50.jpg",
            "vrImage": '/assets/img/colormap/vr/vr50.jpg',
        },
        {
            "key": 9,
            "query": "Room - 51",
            "saveId_A": "A_51",
            "saveId_V": "V_51",
            "squareImage": "/assets/img/colormap/square/s51.jpg",
            "vrImage": '/assets/img/colormap/vr/vr51.jpg',
        },
        {
            "key": 10,
            "query": "Room - 52",
            "saveId_A": "A_52",
            "saveId_V": "V_52",
            "squareImage": "/assets/img/colormap/square/s52.jpg",
            "vrImage": '/assets/img/colormap/vr/vr52.jpg',
        },
        {
            "key": 11,
            "query": "Room - 53",
            "saveId_A": "A_53",
            "saveId_V": "V_53",
            "squareImage": "/assets/img/colormap/square/s53.jpg",
            "vrImage": '/assets/img/colormap/vr/vr53.jpg',
        },
        {
            "key": 12,
            "query": "Room - 54",
            "saveId_A": "A_54",
            "saveId_V": "V_54",
            "squareImage": "/assets/img/colormap/square/s54.jpg",
            "vrImage": '/assets/img/colormap/vr/vr54.jpg',
        },
        {
            "key": 13,
            "query": "Room - 55",
            "saveId_A": "A_55",
            "saveId_V": "V_55",
            "squareImage": "/assets/img/colormap/square/s55.jpg",
            "vrImage": '/assets/img/colormap/vr/vr55.jpg',
        },
        {
            "key": 14,
            "query": "Room - 56",
            "saveId_A": "A_56",
            "saveId_V": "V_56",
            "squareImage": "/assets/img/colormap/square/s56.jpg",
            "vrImage": '/assets/img/colormap/vr/vr56.jpg',
        },
        {
            "key": 15,
            "query": "Room - 57",
            "saveId_A": "A_57",
            "saveId_V": "V_57",
            "squareImage": "/assets/img/colormap/square/s57.jpg",
            "vrImage": '/assets/img/colormap/vr/vr57.jpg',
        }
    ]


    const shuffleArray = (array) => {
        let currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    };

    const [activeTabKey, setActiveTabKey] = useState(0);

    const handleTabChange = (key) => {
        
        // console.log(key);

        setActiveTabKey(key); // 활성화될 탭의 key를 설정
    };

    useEffect(()=>{
        console.log("activeTabKey : " + activeTabKey);

        if(activeTabKey == 16) {
            handleSubmit(formData);
            document.getElementById("TabDone").click();
        }

    }, [activeTabKey])


    const shuffledColorRoomForm = useMemo(() => 
                                   shuffleArray([...ColorRoomForm]), []);


    // const ColorRoomContent = useMemo(() => shuffledColorRoomForm.map((q, index) => (

    //         <div
    //             key={q.key}
    //             className={`tab-pane ${index} ${index === activeTabKey? "show" : "fade d-none"}`}
    //         >

    //             <ColorRoomImage
    //                 question={q.query}
    //                 imageUrl={q.squareImage}
    //                 imageUrlVR={q.vrImage}
                    
    //                 imageUrlArousal={'/assets/img/arousal.png'}
    //                 imageUrlValance={'/assets/img/valance.png'}

    //                 onChangeArousal={(answer) => handleQuestionChange(q.saveId_A, answer)}
                    
    //                 onChangeValance={(answer) => handleQuestionChange(q.saveId_V, answer)}

    //             />

    //             <div className="rightaline">
    //                 <button
    //                     className="btn btn-primary fw-500"
    //                     type="button"
    //                     onClick={() => {
    //                         if (CheckValidate([
    //                             q.saveId_V,
    //                             q.saveId_A
    //                         ])) {
    //                             handleTabChange(index + 1); 
    //                         } else {
    //                             alert.show('Check all quesitons', { type: types.ERROR }) //alert will be shown in bottom left
    //                             console.log("is not a validate. Check all quesitons");
    //                         }
    //                     }}
    //                 >
    //                     <span style={{ marginRight: "0.5rem" }}>{activeTabKey + 1} / 16 Next</span>
    //                     <i className="fas fa-forward text-white"></i>
    //                 </button>
    //             </div>
    //         </div>

    //     )), [activeTabKey]);



        const ColorRoomContent = shuffledColorRoomForm.map((q, index) => (

            <div
                key={q.key}
                className={`tab-pane ${index} ${index === activeTabKey? "show" : "fade d-none"}`}
            >

                <ColorRoomImage
                    question={q.query}
                    imageUrl={q.squareImage}
                    imageUrlVR={q.vrImage}
                    
                    imageUrlArousal={'/assets/img/arousal.png'}
                    imageUrlValance={'/assets/img/valance.png'}

                    onChangeArousal={(answer) => handleQuestionChange(q.saveId_A, answer)}
                    
                    onChangeValance={(answer) => handleQuestionChange(q.saveId_V, answer)}

                />

                <div className="rightaline">
                    <button
                        className="btn btn-primary fw-500"
                        type="button"
                        onClick={() => {
                            if (CheckValidate([
                                q.saveId_V,
                                q.saveId_A
                            ])) {
                                handleTabChange(index + 1); 
                            } else {
                                alert.show('Check all quesitons', { type: types.ERROR }) //alert will be shown in bottom left
                                console.log("is not a validate. Check all quesitons");
                            }
                        }}
                    >
                        <span style={{ marginRight: "0.5rem" }}>{activeTabKey + 1} / 16 Next</span>
                        <i className="fas fa-forward text-white"></i>
                    </button>
                </div>
            </div>

        ))



    return (
        <>

            <CustomLoading
                message={"설문을 저장하고 있는 중입니다. 잠시만 기다려주세요."}
                show={showLoad}
                handleClose={() => { setShowLoad(false) }}
                action={() => { }}
            />

            <HEADER
                title={"Color and Emotion Test"}
                contents={"주어진 방을 관찰하고 느껴지는 감정의 정도를 평가해주세요"}
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
                                        id="TabSUS" href="#SUSView"
                                        data-bs-toggle="tab" role="tab"
                                        aria-controls="SUSView" aria-selected="false">SUS</a>
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

                                    {/* <ShortTextAnswer
                                        SaveId={"PAName"}
                                        question={"이름"}
                                        onChange={(answer) => handleQuestionChange("PAName", answer)}
                                    /> */}

                                    <RadioSelection
                                        SaveId={"PAName"}
                                        question={"설문 응답에 사용한 기기를 선택해주세요"}
                                        radioName={"PAName"}
                                        optionNames={[
                                            "PC (27인치 이하 모니터)",
                                            "PC (28인치 이상 모니터)",
                                            "노트북 (13인치 이하)",
                                            "노트북 (14인치 이상)",
                                            "태블릿 (10인치 이하)",
                                            "태블릿 (11인치 이상)",
                                            "스마트폰"
                                        ]}
                                        onChange={(answer) => handleQuestionChange("PAName", answer)}
                                    />

                                    <ShortTextAnswer
                                        SaveId={"PAEmail"}
                                        question={"E-mail"}
                                        onChange={(answer) => handleQuestionChange("PAEmail", answer)}
                                    />


                                    <ShortTextAnswer
                                        SaveId={"PAAges"}
                                        question={"나이"}
                                        onChange={(answer) => handleQuestionChange("PAAges", answer)}
                                    />

                                    <RadioSelection
                                        SaveId={"RadioForGender"}
                                        question={"성별을 선택해주세요"}
                                        radioName={"RadioForGender"}
                                        optionNames={[
                                            "남성",
                                            "여성",
                                            "응답 안 함"
                                        ]}
                                        onChange={(answer) => handleQuestionChange("RadioForGender", answer)}
                                    />

                                    <RadioSelection
                                        SaveId={"RadioForPADisease"}
                                        question={"색맹, 색상 우위 등의 색상을 보는 것에 문제가 있으신가요?"}
                                        radioName={"RadioForPADisease"}
                                        optionNames={[
                                            "없음",
                                            "있음 (실험 참여가 불가능합니다)",
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
                                                    "PAEmail",
                                                    "RadioForGender",
                                                    "RadioForPADisease"
                                                ])) {
                                                    // 
                                                    scrollToTop();
                                                    handleQuestionChange("SurveyStartTime", formatCurrentTime());
                                                    document.getElementById("TabNeck").click();
                                                } else {
                                                    alert.show('Please enter all field ', { type: types.ERROR }) //alert will be shown in bottom left
                                                    console.log("is not a validate. Check all quesitons");
                                                }
                                            }}
                                        >
                                            <span style={{ marginRight: "0.5rem" }}>Next Page</span>
                                            <i className="fas fa-forward text-white"></i>
                                        </button>
                                    </div>


                                </div>

                                <div className="tab-pane fade show" id="NeckView" role="tabpanel" aria-labelledby="TabNeck">


                                    <ColorRoomImage
                                        question={"Room - A"}
                                        imageUrl={'/assets/img/colormap/square/s0.jpg'}
                                        imageUrlVR={'/assets/img/colormap/vr/vr0.jpg'}
                                        imageUrlArousal={'/assets/img/arousal.png'}
                                        imageUrlValance={'/assets/img/valance.png'}
                                        onChangeArousal={(answer) => handleQuestionChange("A_0", answer)}
                                        onChangeValance={(answer) => handleQuestionChange("V_0", answer)}
                                    />

                                    <div className="rightaline">
                                        <button
                                            className="btn btn-primary fw-500"
                                            type="button"
                                            onClick={() => {
                                                if (CheckValidate([
                                                    "A_0",
                                                    "V_0"
                                                ])) {
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

                                    {ColorRoomContent}

                                </div>


                                <div className="tab-pane fade show" id="DoneView" role="tabpanel" aria-labelledby="TabDone">
                                    <div className="customLastPage">
                                        <div className="text-lg d-flex mt-n6 mb-4 justify-content-evenly fw-500">
                                            설문 제출이 완료되었습니다. 실험 진행자에게 설문이 완료되었음을 말씀해주세요.
                                        </div>

                                        <Link className="btn btn-primary mt-4"
                                            type="button" to="/pilot">
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

export default Pilot;
