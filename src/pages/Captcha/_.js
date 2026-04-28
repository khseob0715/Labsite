
import React, { useEffect, useState, useRef, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";

import HEADER from '../../components/Header';
import {
    ShortTextAnswer,
    RadioSelection,
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
        SET_1_Item_1: "",
        SET_1_Item_2: "",
        SET_1_Item_3: "",
        SET_1_Item_4: "",
        SET_1_Item_5: "",
        SET_1_Item_6: "",
        SET_1_Item_7: "",
        SET_1_Item_8: "",
        SET_1_Item_9: "",
        SET_1_Item_10: "",
        SET_1_Item_11: "",
        SET_1_Item_12: "",
        SET_1_Item_13: "",
        SET_1_Item_14: "",
        SET_1_Item_15: "",
        SET_1_Item_16: "",
        SET_2_Item_1: "",
        SET_2_Item_2: "",
        SET_2_Item_3: "",
        SET_2_Item_4: "",
        SET_2_Item_5: "",
        SET_2_Item_6: "",
        SET_2_Item_7: "",
        SET_2_Item_8: "",
        SET_2_Item_9: "",
        SET_2_Item_10: "",
        SET_2_Item_11: "",
        SET_2_Item_12: "",
        SET_2_Item_13: "",
        SET_2_Item_14: "",
        SET_2_Item_15: "",
        SET_2_Item_16: "",
        SET_3_Item_1: "",
        SET_3_Item_2: "",
        SET_3_Item_3: "",
        SET_3_Item_4: "",
        SET_3_Item_5: "",
        SET_3_Item_6: "",
        SET_3_Item_7: "",
        SET_3_Item_8: "",
        SET_3_Item_9: "",
        SET_3_Item_10: "",
        SET_3_Item_11: "",
        SET_3_Item_12: "",
        SET_3_Item_13: "",
        SET_3_Item_14: "",
        SET_3_Item_15: "",
        SET_3_Item_16: "",
        SET_4_Item_1: "",
        SET_4_Item_2: "",
        SET_4_Item_3: "",
        SET_4_Item_4: "",
        SET_4_Item_5: "",
        SET_4_Item_6: "",
        SET_4_Item_7: "",
        SET_4_Item_8: "",
        SET_4_Item_9: "",
        SET_4_Item_10: "",
        SET_4_Item_11: "",
        SET_4_Item_12: "",
        SET_4_Item_13: "",
        SET_4_Item_14: "",
        SET_4_Item_15: "",
        SET_4_Item_16: "",
        SET_5_Item_1: "",
        SET_5_Item_2: "",
        SET_5_Item_3: "",
        SET_5_Item_4: "",
        SET_5_Item_5: "",
        SET_5_Item_6: "",
        SET_5_Item_7: "",
        SET_5_Item_8: "",
        SET_5_Item_9: "",
        SET_5_Item_10: "",
        SET_5_Item_11: "",
        SET_5_Item_12: "",
        SET_5_Item_13: "",
        SET_5_Item_14: "",
        SET_5_Item_15: "",
        SET_5_Item_16: "",
        SET_6_Item_1: "",
        SET_6_Item_2: "",
        SET_6_Item_3: "",
        SET_6_Item_4: "",
        SET_6_Item_5: "",
        SET_6_Item_6: "",
        SET_6_Item_7: "",
        SET_6_Item_8: "",
        SET_6_Item_9: "",
        SET_6_Item_10: "",
        SET_6_Item_11: "",
        SET_6_Item_12: "",
        SET_6_Item_13: "",
        SET_6_Item_14: "",
        SET_6_Item_15: "",
        SET_6_Item_16: "",
    })

    const [sliderData, setSliderData] = useState({});

    const handleSliderChange = useCallback((name, value) => {
        setSliderData(prev => ({
            ...prev,
            [name]: value
        }));
    }, []);


    const updateFormData = (newData) => {
        setFormData(prevFormData => ({
            ...prevFormData,
            ...newData
        }));
    };

    

    const handleSubmit = async (formValues) => {

        setShowLoad(true);

        const body = new URLSearchParams();

        for (const key of keyOrder) {
            const value = formValues[key];
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
                console.log(key);

                console.log(formData[key]);
                return false;
            }
        }
        return true;
    }

    function GenerateShapeQuestionContent(props) {
        const [sliderValues, setSliderValues] = useState(props.shuffledList.map(q => q.defaultValue || 1));

        const [showValues, setShowValues] = useState(props.shuffledList.map(q => q.show || false));


        const handleMouseDown = (index) => {
            const newShowValues = [...showValues];
            newShowValues[index] = true;
            setShowValues(newShowValues);

            console.log(showValues);
        };


        const handleSliderChange = (index, newValue) => {
            const newSliderValues = [...sliderValues];
            newSliderValues[index] = newValue;
            setSliderValues(newSliderValues);
            props.onSliderChange(props.shuffledList[index].checkName, newValue); // 상위 컴포넌트로 슬라이더 값 전달
        };

        return (
            props.shuffledList.map((q, index) => {
                if (q.default) {
                    return null;
                }

                return (
                    <div className="col-lg-4 mb-3"
                        key={q.index}
                        style={{ position: 'relative', border: 'dashed' }}>
                        <iframe key={q.key} allow="camera" src={q.url} />
                        <Slider
                            className="overlay-slider"
                            size="small step"
                            min={1}
                            max={7}
                            step={1}
                            marks
                            sx={{ padding: "0px" }}
                            valueLabelDisplay={showValues[index] ? "on" : "off"}
                            onMouseDown={() => handleMouseDown(index)}
                            onChange={(e, value) => handleSliderChange(index, value)}
                            aria-label="Small"
                        />
                        <div className="overlay-checkbox-text">{q.key} </div>
                    </div>
                );
            })
        );
    }


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

    const SimliartiyShpaeList_1st = [
        {
            "key": 0,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F1174125146630249%2F1174125146630249.glb&autorotate=true&json-data=1720541678935&decrypt=1&tv=165",
            "checkName": "SET_1_Item_0",
            "default": true,
            "show": true
        },
        {
            "key": 1,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F2790028820599560%2F2790028820599560.glb&autorotate=true&json-data=1720543044157&decrypt=1&tv=165",
            "checkName": "SET_1_Item_1",
            "default": false,
            "show": false
        },
        {
            "key": 2,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F1183442186583248%2F1183442186583248.glb&autorotate=true&json-data=1720543017088&decrypt=1&tv=165",
            "checkName": "SET_1_Item_2",
            "default": false,
            "show": false
        },
        {
            "key": 3,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240710%2F3807688970330268%2F3807688970330268.glb&autorotate=true&json-data=1720591788160&decrypt=1&tv=165",
            "checkName": "SET_1_Item_3",
            "default": false,
            "show": false
        },
        {
            "key": 4,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F1674418342313724%2F1674418342313724.glb&autorotate=true&json-data=1720542955646&decrypt=1&tv=165",
            "checkName": "SET_1_Item_4",
            "default": false,
            "show": false
        },
        {
            "key": 5,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F886672442290717%2F886672442290717.glb&autorotate=true&json-data=1720542913254&decrypt=1&tv=165",
            "checkName": "SET_1_Item_5",
            "default": false,
            "show": false
        },
        {
            "key": 6,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F2178680121358249%2F2178680121358249.glb&autorotate=true&json-data=1720542886309&decrypt=1&tv=165",
            "checkName": "SET_1_Item_6",
            "default": false,
            "show": false
        },
        {
            "key": 7,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F155224984253708%2F155224984253708.glb&autorotate=true&json-data=1720542854618&decrypt=1&tv=165",
            "checkName": "SET_1_Item_7",
            "default": false,
            "show": false
        },
        {
            "key": 8,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F3803879586873989%2F3803879586873989.glb&autorotate=true&json-data=1720542239946&decrypt=1&tv=165",
            "checkName": "SET_1_Item_8",
            "default": false,
            "show": false
        },
        {
            "key": 9,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F1184134683626427%2F1184134683626427.glb&autorotate=true&json-data=1720542141847&decrypt=1&tv=165",
            "checkName": "SET_1_Item_9",
            "default": false,
            "show": false
        },
        {
            "key": 10,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F894469862828181%2F894469862828181.glb&autorotate=true&json-data=1720541900363&decrypt=1&tv=165",
            "checkName": "SET_1_Item_10",
            "default": false,
            "show": false
        },
        {
            "key": 11,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F155249021069321%2F155249021069321.glb&autorotate=true&json-data=1720541870187&decrypt=1&tv=165",
            "checkName": "SET_1_Item_11",
            "default": false,
            "show": false
        },
        {
            "key": 12,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F2163509191261098%2F2163509191261098.glb&autorotate=true&json-data=1720541826636&decrypt=1&tv=165",
            "checkName": "SET_1_Item_12",
            "default": false,
            "show": false
        },
        // {
        //     "key": 13,
        //     "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F898246468965562%2F898246468965562.glb&autorotate=true&json-data=1720541796049&decrypt=1&tv=165",
        //     "checkName": "SET_1_Item_13",
        //     "default": false
        // },
        {
            "key": 14,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F152491960019299%2F152491960019299.glb&autorotate=true&json-data=1720541756115&decrypt=1&tv=165",
            "checkName": "SET_1_Item_14",
            "default": false,
            "show": false
        },
        {
            "key": 15,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F2224921150571088%2F2224921150571088.glb&autorotate=true&json-data=1720541725455&decrypt=1&tv=165",
            "checkName": "SET_1_Item_15",
            "default": false,
            "show": false
        },
        {
            "key": 16,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F1174125146630249%2F1174125146630249.glb&autorotate=true&json-data=1720541678935&decrypt=1&tv=165",
            "checkName": "SET_1_Item_16",
            "default": false,
            "show": false
        }
    ]

    const SimliartiyShpaeList_2nd = [
        {
            "key": 0,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F894469862828181%2F894469862828181.glb&autorotate=true&json-data=1720541900363&decrypt=1&tv=165",
            "checkName": "SET_2_Item_0",
            "default": true
        },
        {
            "key": 1,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F2790028820599560%2F2790028820599560.glb&autorotate=true&json-data=1720543044157&decrypt=1&tv=165",
            "checkName": "SET_2_Item_1",
            "default": false
        },
        {
            "key": 2,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F1183442186583248%2F1183442186583248.glb&autorotate=true&json-data=1720543017088&decrypt=1&tv=165",
            "checkName": "SET_2_Item_2",
            "default": false
        },
        {
            "key": 3,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240710%2F3807688970330268%2F3807688970330268.glb&autorotate=true&json-data=1720591788160&decrypt=1&tv=165",
            "checkName": "SET_2_Item_3",
            "default": false
        },
        {
            "key": 4,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F1674418342313724%2F1674418342313724.glb&autorotate=true&json-data=1720542955646&decrypt=1&tv=165",
            "checkName": "SET_2_Item_4",
            "default": false
        },
        {
            "key": 5,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F886672442290717%2F886672442290717.glb&autorotate=true&json-data=1720542913254&decrypt=1&tv=165",
            "checkName": "SET_2_Item_5",
            "default": false
        },
        {
            "key": 6,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F2178680121358249%2F2178680121358249.glb&autorotate=true&json-data=1720542886309&decrypt=1&tv=165",
            "checkName": "SET_2_Item_6",
            "default": false
        },
        {
            "key": 7,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F155224984253708%2F155224984253708.glb&autorotate=true&json-data=1720542854618&decrypt=1&tv=165",
            "checkName": "SET_2_Item_7",
            "default": false
        },
        {
            "key": 8,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F3803879586873989%2F3803879586873989.glb&autorotate=true&json-data=1720542239946&decrypt=1&tv=165",
            "checkName": "SET_2_Item_8",
            "default": false
        },
        {
            "key": 9,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F1184134683626427%2F1184134683626427.glb&autorotate=true&json-data=1720542141847&decrypt=1&tv=165",
            "checkName": "SET_2_Item_9",
            "default": false
        },
        {
            "key": 10,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F894469862828181%2F894469862828181.glb&autorotate=true&json-data=1720541900363&decrypt=1&tv=165",
            "checkName": "SET_2_Item_10",
            "default": false
        },
        {
            "key": 11,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F155249021069321%2F155249021069321.glb&autorotate=true&json-data=1720541870187&decrypt=1&tv=165",
            "checkName": "SET_2_Item_11",
            "default": false
        },
        {
            "key": 12,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F2163509191261098%2F2163509191261098.glb&autorotate=true&json-data=1720541826636&decrypt=1&tv=165",
            "checkName": "SET_2_Item_12",
            "default": false
        },
        // {
        //     "key": 13,
        //     "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F898246468965562%2F898246468965562.glb&autorotate=true&json-data=1720541796049&decrypt=1&tv=165",
        //     "checkName": "SET_2_Item_13",
        //     "default": false
        // },
        {
            "key": 14,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F152491960019299%2F152491960019299.glb&autorotate=true&json-data=1720541756115&decrypt=1&tv=165",
            "checkName": "SET_2_Item_14",
            "default": false
        },
        {
            "key": 15,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F2224921150571088%2F2224921150571088.glb&autorotate=true&json-data=1720541725455&decrypt=1&tv=165",
            "checkName": "SET_2_Item_15",
            "default": false
        },
        {
            "key": 16,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F1174125146630249%2F1174125146630249.glb&autorotate=true&json-data=1720541678935&decrypt=1&tv=165",
            "checkName": "SET_2_Item_16",
            "default": false
        }
    ]

    const SimliartiyShpaeList_3rd = [
        {
            "key": 0,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F894469862828181%2F894469862828181.glb&autorotate=true&json-data=1720541900363&decrypt=1&tv=165",
            "checkName": "SET_3_Item_0",
            "default": true
        },
        {
            "key": 1,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F2167463064977204%2F2167463064977204.glb&autorotate=true&json-data=1720543112383&decrypt=1&tv=165",
            "checkName": "SET_3_Item_1",
            "default": false
        },
        {
            "key": 2,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F1947264308284541%2F1947264308284541.glb&autorotate=true&json-data=1720543148036&decrypt=1&tv=165",
            "checkName": "SET_3_Item_2",
            "default": false
        },
        {
            "key": 3,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F4221519302411587%2F4221519302411587.glb&autorotate=true&json-data=1720543173764&decrypt=1&tv=165",
            "checkName": "SET_3_Item_3",
            "default": false
        },
        {
            "key": 4,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F3803749125260343%2F3803749125260343.glb&autorotate=true&json-data=1720543215297&decrypt=1&tv=165",
            "checkName": "SET_3_Item_4",
            "default": false
        },
        {
            "key": 5,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F2945446567702314%2F2945446567702314.glb&autorotate=true&json-data=1720543240646&decrypt=1&tv=165",
            "checkName": "SET_3_Item_5",
            "default": false
        },
        {
            "key": 6,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F2171337489269344%2F2171337489269344.glb&autorotate=true&json-data=1720543278571&decrypt=1&tv=165",
            "checkName": "SET_3_Item_6",
            "default": false
        },
        // {
        //     "key": 7,
        //     "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F2950671296647722%2F2950671296647722.glb&autorotate=true&json-data=1720543304934&decrypt=1&tv=165",
        //     "checkName": "SET_3_Item_7",
        //     "default": false
        // },
        {
            "key": 8,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F3791057735693691%2F3791057735693691.glb&autorotate=true&json-data=1720543329750&decrypt=1&tv=165",
            "checkName": "SET_3_Item_8",
            "default": false
        },
        {
            "key": 9,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F3807711878877621%2F3807711878877621.glb&autorotate=true&json-data=1720543352781&decrypt=1&tv=165",
            "checkName": "SET_3_Item_9",
            "default": false
        },
        {
            "key": 10,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F1173254747503406%2F1173254747503406.glb&autorotate=true&json-data=1720543397389&decrypt=1&tv=165",
            "checkName": "SET_3_Item_10",
            "default": false
        },
        {
            "key": 11,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F887162846372476%2F887162846372476.glb&autorotate=true&json-data=1720543420694&decrypt=1&tv=165",
            "checkName": "SET_3_Item_11",
            "default": false
        },
        {
            "key": 12,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F2219812541644526%2F2219812541644526.glb&autorotate=true&json-data=1720543451995&decrypt=1&tv=165",
            "checkName": "SET_3_Item_12",
            "default": false
        },
        {
            "key": 13,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F2914745892517764%2F2914745892517764.glb&autorotate=true&json-data=1720543478439&decrypt=1&tv=165",
            "checkName": "SET_3_Item_13",
            "default": false
        },
        {
            "key": 14,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F3813848654290958%2F3813848654290958.glb&autorotate=true&json-data=1720543504180&decrypt=1&tv=165",
            "checkName": "SET_3_Item_14",
            "default": false
        },
        {
            "key": 15,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F2179404183533927%2F2179404183533927.glb&autorotate=true&json-data=1720543560995&decrypt=1&tv=165",
            "checkName": "SET_3_Item_15",
            "default": false
        },
        {
            "key": 16,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F2219365987764098%2F2219365987764098.glb&autorotate=true&json-data=1720543593555&decrypt=1&tv=165",
            "checkName": "SET_3_Item_16",
            "default": false
        }
    ]

    const SimliartiyShpaeList_4th = [
        {
            "key": 0,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F887162846372476%2F887162846372476.glb&autorotate=true&json-data=1720543420694&decrypt=1&tv=165",
            "checkName": "SET_4_Item_0",
            "default": true
        },
        {
            "key": 1,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F2167463064977204%2F2167463064977204.glb&autorotate=true&json-data=1720543112383&decrypt=1&tv=165",
            "checkName": "SET_4_Item_1",
            "default": false
        },
        {
            "key": 2,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F1947264308284541%2F1947264308284541.glb&autorotate=true&json-data=1720543148036&decrypt=1&tv=165",
            "checkName": "SET_4_Item_2",
            "default": false
        },
        {
            "key": 3,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F4221519302411587%2F4221519302411587.glb&autorotate=true&json-data=1720543173764&decrypt=1&tv=165",
            "checkName": "SET_4_Item_3",
            "default": false
        },
        {
            "key": 4,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F3803749125260343%2F3803749125260343.glb&autorotate=true&json-data=1720543215297&decrypt=1&tv=165",
            "checkName": "SET_4_Item_4",
            "default": false
        },
        {
            "key": 5,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F2945446567702314%2F2945446567702314.glb&autorotate=true&json-data=1720543240646&decrypt=1&tv=165",
            "checkName": "SET_4_Item_5",
            "default": false
        },
        {
            "key": 6,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F2171337489269344%2F2171337489269344.glb&autorotate=true&json-data=1720543278571&decrypt=1&tv=165",
            "checkName": "SET_4_Item_6",
            "default": false
        },
        // {
        //     "key": 7,
        //     "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F2950671296647722%2F2950671296647722.glb&autorotate=true&json-data=1720543304934&decrypt=1&tv=165",
        //     "checkName": "SET_4_Item_7",
        //     "default": false
        // },
        {
            "key": 8,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F3791057735693691%2F3791057735693691.glb&autorotate=true&json-data=1720543329750&decrypt=1&tv=165",
            "checkName": "SET_4_Item_8",
            "default": false
        },
        {
            "key": 9,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F3807711878877621%2F3807711878877621.glb&autorotate=true&json-data=1720543352781&decrypt=1&tv=165",
            "checkName": "SET_4_Item_9",
            "default": false
        },
        {
            "key": 10,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F1173254747503406%2F1173254747503406.glb&autorotate=true&json-data=1720543397389&decrypt=1&tv=165",
            "checkName": "SET_4_Item_10",
            "default": false
        },
        {
            "key": 11,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F887162846372476%2F887162846372476.glb&autorotate=true&json-data=1720543420694&decrypt=1&tv=165",
            "checkName": "SET_4_Item_11",
            "default": false
        },
        {
            "key": 12,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F2219812541644526%2F2219812541644526.glb&autorotate=true&json-data=1720543451995&decrypt=1&tv=165",
            "checkName": "SET_4_Item_12",
            "default": false
        },
        {
            "key": 13,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F2914745892517764%2F2914745892517764.glb&autorotate=true&json-data=1720543478439&decrypt=1&tv=165",
            "checkName": "SET_4_Item_13",
            "default": false
        },
        {
            "key": 14,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F3813848654290958%2F3813848654290958.glb&autorotate=true&json-data=1720543504180&decrypt=1&tv=165",
            "checkName": "SET_4_Item_14",
            "default": false
        },
        {
            "key": 15,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F2179404183533927%2F2179404183533927.glb&autorotate=true&json-data=1720543560995&decrypt=1&tv=165",
            "checkName": "SET_4_Item_15",
            "default": false
        },
        {
            "key": 16,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F2219365987764098%2F2219365987764098.glb&autorotate=true&json-data=1720543593555&decrypt=1&tv=165",
            "checkName": "SET_4_Item_16",
            "default": false
        }
    ]

    const SimliartiyShpaeList_5th = [
        {
            "key": 0,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F2184182556141694%2F2184182556141694.glb&autorotate=true&json-data=1720543627402&decrypt=1&tv=165",
            "checkName": "SET_5_Item_0",
            "default": true
        },
        {
            "key": 1,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F2184182556141694%2F2184182556141694.glb&autorotate=true&json-data=1720543627402&decrypt=1&tv=165",
            "checkName": "SET_5_Item_1",
            "default": false
        },
        {
            "key": 2,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F2782269353045508%2F2782269353045508.glb&autorotate=true&json-data=1720543654036&decrypt=1&tv=165",
            "checkName": "SET_5_Item_2",
            "default": false
        },
        {
            "key": 3,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F2227298142847836%2F2227298142847836.glb&autorotate=true&json-data=1720543780164&decrypt=1&tv=165",
            "checkName": "SET_5_Item_3",
            "default": false
        },
        {
            "key": 4,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F2797792618310969%2F2797792618310969.glb&autorotate=true&json-data=1720543815714&decrypt=1&tv=165",
            "checkName": "SET_5_Item_4",
            "default": false
        },
        {
            "key": 5,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F2938468276703654%2F2938468276703654.glb&autorotate=true&json-data=1720543844312&decrypt=1&tv=165",
            "checkName": "SET_5_Item_5",
            "default": false
        },
        {
            "key": 6,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F2229968330823491%2F2229968330823491.glb&autorotate=true&json-data=1720543939673&decrypt=1&tv=165",
            "checkName": "SET_5_Item_6",
            "default": false
        },
        {
            "key": 7,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F894445070155168%2F894445070155168.glb&autorotate=true&json-data=1720543967936&decrypt=1&tv=165",
            "checkName": "SET_5_Item_7",
            "default": false
        },
        {
            "key": 8,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F198987479306783%2F198987479306783.glb&autorotate=true&json-data=1720544010438&decrypt=1&tv=165",
            "checkName": "SET_5_Item_8",
            "default": false
        },
        {
            "key": 9,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F487372275851968%2F487372275851968.glb&autorotate=true&json-data=1720544057278&decrypt=1&tv=165",
            "checkName": "SET_5_Item_9",
            "default": false
        },
        {
            "key": 10,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F3417914243167419%2F3417914243167419.glb&autorotate=true&json-data=1720544089055&decrypt=1&tv=165",
            "checkName": "SET_5_Item_10",
            "default": false
        },
        {
            "key": 11,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F3760075947963199%2F3760075947963199.glb&autorotate=true&json-data=1720544111862&decrypt=1&tv=165",
            "checkName": "SET_5_Item_11",
            "default": false
        },
        {
            "key": 12,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F4232830700870858%2F4232830700870858.glb&autorotate=true&json-data=1720544133868&decrypt=1&tv=165",
            "checkName": "SET_5_Item_12",
            "default": false
        },
        {
            "key": 13,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F2223164198855253%2F2223164198855253.glb&autorotate=true&json-data=1720544171846&decrypt=1&tv=165",
            "checkName": "SET_5_Item_13",
            "default": false
        },
        // {
        //     "key": 14,
        //     "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F155225127975742%2F155225127975742.glb&autorotate=true&json-data=1720544195434&decrypt=1&tv=165",
        //     "checkName": "SET_5_Item_14",
        //     "default": false
        // },
        {
            "key": 15,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F4233246387217084%2F4233246387217084.glb&autorotate=true&json-data=1720544236685&decrypt=1&tv=165",
            "checkName": "SET_5_Item_15",
            "default": false
        },
        {
            "key": 16,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F4225320587311379%2F4225320587311379.glb&autorotate=true&json-data=1720544263043&decrypt=1&tv=165",
            "checkName": "SET_5_Item_16",
            "default": false
        }
    ]

    const SimliartiyShpaeList_6th = [
        {
            "key": 0,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F4225320587311379%2F4225320587311379.glb&autorotate=true&json-data=1720544263043&decrypt=1&tv=165",
            "checkName": "SET_6_Item_0",
            "default": true
        },
        {
            "key": 1,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F2184182556141694%2F2184182556141694.glb&autorotate=true&json-data=1720543627402&decrypt=1&tv=165",
            "checkName": "SET_6_Item_1",
            "default": false
        },
        {
            "key": 2,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F2782269353045508%2F2782269353045508.glb&autorotate=true&json-data=1720543654036&decrypt=1&tv=165",
            "checkName": "SET_6_Item_2",
            "default": false
        },
        {
            "key": 3,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F2227298142847836%2F2227298142847836.glb&autorotate=true&json-data=1720543780164&decrypt=1&tv=165",
            "checkName": "SET_6_Item_3",
            "default": false
        },
        {
            "key": 4,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F2797792618310969%2F2797792618310969.glb&autorotate=true&json-data=1720543815714&decrypt=1&tv=165",
            "checkName": "SET_6_Item_4",
            "default": false
        },
        {
            "key": 5,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F2938468276703654%2F2938468276703654.glb&autorotate=true&json-data=1720543844312&decrypt=1&tv=165",
            "checkName": "SET_6_Item_5",
            "default": false
        },
        {
            "key": 6,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F2229968330823491%2F2229968330823491.glb&autorotate=true&json-data=1720543939673&decrypt=1&tv=165",
            "checkName": "SET_6_Item_6",
            "default": false
        },
        {
            "key": 7,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F894445070155168%2F894445070155168.glb&autorotate=true&json-data=1720543967936&decrypt=1&tv=165",
            "checkName": "SET_6_Item_7",
            "default": false
        },
        {
            "key": 8,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F198987479306783%2F198987479306783.glb&autorotate=true&json-data=1720544010438&decrypt=1&tv=165",
            "checkName": "SET_6_Item_8",
            "default": false
        },
        {
            "key": 9,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F487372275851968%2F487372275851968.glb&autorotate=true&json-data=1720544057278&decrypt=1&tv=165",
            "checkName": "SET_6_Item_9",
            "default": false
        },
        {
            "key": 10,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F3417914243167419%2F3417914243167419.glb&autorotate=true&json-data=1720544089055&decrypt=1&tv=165",
            "checkName": "SET_6_Item_10",
            "default": false
        },
        {
            "key": 11,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F3760075947963199%2F3760075947963199.glb&autorotate=true&json-data=1720544111862&decrypt=1&tv=165",
            "checkName": "SET_6_Item_11",
            "default": false
        },
        {
            "key": 12,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F4232830700870858%2F4232830700870858.glb&autorotate=true&json-data=1720544133868&decrypt=1&tv=165",
            "checkName": "SET_6_Item_12",
            "default": false
        },
        {
            "key": 13,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F2223164198855253%2F2223164198855253.glb&autorotate=true&json-data=1720544171846&decrypt=1&tv=165",
            "checkName": "SET_6_Item_13",
            "default": false
        },
        // {
        //     "key": 14,
        //     "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F155225127975742%2F155225127975742.glb&autorotate=true&json-data=1720544195434&decrypt=1&tv=165",
        //     "checkName": "SET_6_Item_14",
        //     "default": false
        // },
        {
            "key": 15,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F4233246387217084%2F4233246387217084.glb&autorotate=true&json-data=1720544236685&decrypt=1&tv=165",
            "checkName": "SET_6_Item_15",
            "default": false
        },
        {
            "key": 16,
            "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F4225320587311379%2F4225320587311379.glb&autorotate=true&json-data=1720544263043&decrypt=1&tv=165",
            "checkName": "SET_6_Item_16",
            "default": false
        }
    ]

    const shuffledSimliartiyShpaeList_1st = useMemo(() =>
        shuffleArray([...SimliartiyShpaeList_1st]), []);

    const shuffledSimliartiyShpaeList_2nd = useMemo(() =>
        shuffleArray([...SimliartiyShpaeList_2nd]), []);

    const shuffledSimliartiyShpaeList_3nd = useMemo(() =>
        shuffleArray([...SimliartiyShpaeList_3rd]), []);

    const shuffledSimliartiyShpaeList_4th = useMemo(() =>
        shuffleArray([...SimliartiyShpaeList_4th]), []);

    const shuffledSimliartiyShpaeList_5th = useMemo(() =>
        shuffleArray([...SimliartiyShpaeList_5th]), []);

    const shuffledSimliartiyShpaeList_6th = useMemo(() =>
        shuffleArray([...SimliartiyShpaeList_6th]), []);


    const CaptchaSilimartiyContent = React.memo((props) => {
        const handleSave = () => {
            props.updateFormData(sliderData);
        };
    
        return (
            <div className="row col-12 m-1 d-flex justify-content-evenly ">
                <div className="card mb-4 container-xl">
                    <div className='card-header d-flex justify-content-between'>
                        <div className="fw-700">선택 가이드</div>
                    </div>
                    <div className="card-body d-flex justify-content-around">
                        See the example shape and Evaluate the similiarty level of each shape on 7-point. <br />
                        1 point indicates "Not at all", whereas 7 point means "Very much". <br /> <br />
    
                        [How to observe shapes using mouse] <br />
                        - Left-mouse click and drag: Rotate Object <br />
                        - Right-mouse click and drag: Rotate Space <br />
                        - Scroll Up: Zoom In<br />
                        - Scroll Down: Zoom Out <br />
                    </div>
                </div>
    
                <div className="d-flex col-2" style={{ position: 'relative' }}>
                    <div className="overlay-checkbox">보기</div>
                    <div className="overlay-checkbox-text">{props.title}</div>
                    <iframe allow="camera" src={props.default} />
                </div>
    
                <div className="d-flex row col-8">
                    <GenerateShapeQuestionContent
                        shuffledList={props.shuffledList}
                        onSliderChange={handleSliderChange}
                    />
                </div>
    
                <div className="d-flex justify-content-evenly">
                    <button
                        className="btn btn-primary fw-500"
                        type="button"
                        onClick={handleSave}
                    >
                        <span style={{ marginRight: "0.5rem" }}>Save</span>
                        <i className="fas fa-forward text-white"></i>
                    </button>
                </div>
            </div>
        );
    });



    

    const SimilarityComponents = useMemo(() => [
        <CaptchaSilimartiyContent
            default={"https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F1174125146630249%2F1174125146630249.glb&autorotate=true&json-data=1720541678935&decrypt=1&tv=165"}
            shuffledList={shuffledSimliartiyShpaeList_1st}
            title="set1"
            key="component1"
            updateFormData={updateFormData}
        />,
        // <CaptchaSilimartiyContent
        //     default={"https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F894469862828181%2F894469862828181.glb&autorotate=true&json-data=1720541900363&decrypt=1&tv=165"}
        //     questions={<GenerateShapeQuestionContent shuffledList={shuffledSimliartiyShpaeList_2nd} 
        //     onSendFunc={handleQuestionChange}/>}
        //     title="set2"
        //     key="component2"
        // />,
        // <CaptchaSilimartiyContent
        //     default={"https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F2167463064977204%2F2167463064977204.glb&autorotate=true&json-data=1720543112383&decrypt=1&tv=165"}
        //     questions={<GenerateShapeQuestionContent shuffledList={shuffledSimliartiyShpaeList_3nd} 
        //     onSendFunc={handleQuestionChange}/>}
        //     title="set3"
        //     key="component3"
        // />,

        // <CaptchaSilimartiyContent
        //     default={"https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F887162846372476%2F887162846372476.glb&autorotate=true&json-data=1720543420694&decrypt=1&tv=165"}
        //     questions={<GenerateShapeQuestionContent shuffledList={shuffledSimliartiyShpaeList_4th} 
        //     onSendFunc={handleQuestionChange}/>}
        //     title="set4"
        //     key="component4"
        // />,

        // <CaptchaSilimartiyContent
        //     default={"https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F2184182556141694%2F2184182556141694.glb&autorotate=true&json-data=1720543627402&decrypt=1&tv=165"}
        //     questions={<GenerateShapeQuestionContent shuffledList={shuffledSimliartiyShpaeList_5th} 
        //     onSendFunc={handleQuestionChange}/>}
        //     title="set5"
        //     key="component5"
        // />,

        // <CaptchaSilimartiyContent
        //     default={"https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F4225320587311379%2F4225320587311379.glb&autorotate=true&json-data=1720544263043&decrypt=1&tv=165"}
        //     questions={<GenerateShapeQuestionContent shuffledList={shuffledSimliartiyShpaeList_6th} 
        //       onSendFunc={handleQuestionChange}/>}
        //     title="set6"
        //     key="component6"
        // />
        // ... 다른 컴포넌트들
    ], [updateFormData]);

   
    const shuffleArraySimliarity = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    const shuffledComponentsSimliarity = shuffleArraySimliarity(SimilarityComponents);



    const [activeTabKey, setActiveTabKey] = useState(0);

    const handleTabChange = (key) => {
        setActiveTabKey(key); // 활성화될 탭의 key를 설정
    };

    useEffect(() => {
        console.log("activeTabKey : " + activeTabKey);

        if (activeTabKey == 16) {
            handleSubmit(formData);
            document.getElementById("TabDone").click();
        }

    }, [activeTabKey])







    return (
        <>
            <CustomLoading
                message={"Saving the survey. Please wait a moment."}
                show={showLoad}
                handleClose={() => { setShowLoad(false) }}
                action={() => { }}
            />

            <HEADER
                title={"Similiarity Shape"}
                contents={"Select shapes that are similar to the example shape"}
            />

            <div className="container" style={{ maxWidth: "100%" }}>
                <div className="row justify-content-center">
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

                            <div className="tab-pane fade show active container-xl" id="SetupView" role="tabpanel" aria-labelledby="TabSetup">

                                <RadioSelection
                                    SaveId={"PADeviceFilter"}
                                    question={"설문 응당에 사용한 기기를 선택해주세요 "}
                                    radioName={"PADeviceFilter"}
                                    optionNames={[
                                        "PC",
                                        "노트북",
                                        "스마트폰 (설문 참여가 불가능합니다)",
                                        "태블릿 (설문 참여가 불가능합니다)"
                                    ]}
                                    onChange={(answer) => handleQuestionChange("PADeviceFilter", answer)}
                                />

                                <RadioSelection
                                    SaveId={"PADevice"}
                                    question={"Select size of the screen you are using for this survey "}
                                    radioName={"PADevice"}
                                    optionNames={[
                                        "노트북 (14인치 이하 모니터)",
                                        "노트북 (16인치)",
                                        "노트북 (18인치)",
                                        "PC (27인치 이하 모니터)",
                                        "PC (28인치 모니터)",
                                        "PC (30인치 모니터)",
                                        "PC (32인치 모니터)",
                                        "PC (34인치 모니터)",
                                        "PC (36인치 이상 모니터)"
                                    ]}
                                    onChange={(answer) => handleQuestionChange("PADevice", answer)}
                                />

                                <ShortTextAnswer
                                    SaveId={"PAName"}
                                    question={"이름"}
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
                                        "No",
                                        "Yes (Not available to participat in this survey)",
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
                                                "PADeviceFilter",
                                                "PADevice",
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

                            <div className="tab-pane fade show active container-xl" id="NeckView" role="tabpanel" aria-labelledby="TabNeck">

                                {shuffledComponentsSimliarity.map((component) => component)}

                                <div className="d-flex justify-content-evenly">
                                    <button
                                        className="btn btn-primary fw-500"
                                        type="button"
                                        onClick={() => {
                                            if (CheckValidate([

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



                            <div className="tab-pane fade show active" id="DoneView" role="tabpanel" aria-labelledby="TabDone">
                                <div className="customLastPage">
                                    <div className="text-lg d-flex m-4 justify-content-evenly fw-500">
                                        Complete Survey!
                                    </div>

                                    <Link className="btn btn-primary mt-4"
                                        type="button" to="/pilot">
                                        Go to Main Page
                                    </Link>
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
