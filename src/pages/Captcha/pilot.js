
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
    "PADeviceFilter",
    "PADevice",
    "PAAges",
    "PAEmail",
    "RadioForGender",
    "RadioForPADiseas",
    "SET_1_Item_1",
    "SET_1_Item_2",
    "SET_1_Item_3",
    "SET_1_Item_4",
    "SET_1_Item_5",
    "SET_1_Item_6",
    "SET_1_Item_7",
    "SET_1_Item_8",
    "SET_1_Item_9",
    "SET_1_Item_10",
    "SET_1_Item_11",
    "SET_1_Item_12",
    "SET_1_Item_13",
    "SET_1_Item_14",
    "SET_1_Item_15",
    "SET_2_Item_1",
    "SET_2_Item_2",
    "SET_2_Item_3",
    "SET_2_Item_4",
    "SET_2_Item_5",
    "SET_2_Item_6",
    "SET_2_Item_7",
    "SET_2_Item_8",
    "SET_2_Item_9",
    "SET_2_Item_10",
    "SET_2_Item_11",
    "SET_2_Item_12",
    "SET_2_Item_13",
    "SET_2_Item_14",
    "SET_2_Item_15",
    "SET_3_Item_1",
    "SET_3_Item_2",
    "SET_3_Item_3",
    "SET_3_Item_4",
    "SET_3_Item_5",
    "SET_3_Item_6",
    "SET_3_Item_7",
    "SET_3_Item_8",
    "SET_3_Item_9",
    "SET_3_Item_10",
    "SET_3_Item_11",
    "SET_3_Item_12",
    "SET_3_Item_13",
    "SET_3_Item_14",
    "SET_3_Item_15",
    "SET_4_Item_1",
    "SET_4_Item_2",
    "SET_4_Item_3",
    "SET_4_Item_4",
    "SET_4_Item_5",
    "SET_4_Item_6",
    "SET_4_Item_7",
    "SET_4_Item_8",
    "SET_4_Item_9",
    "SET_4_Item_10",
    "SET_4_Item_11",
    "SET_4_Item_12",
    "SET_4_Item_13",
    "SET_4_Item_14",
    "SET_4_Item_15",
    "SET_5_Item_1",
    "SET_5_Item_2",
    "SET_5_Item_3",
    "SET_5_Item_4",
    "SET_5_Item_5",
    "SET_5_Item_6",
    "SET_5_Item_7",
    "SET_5_Item_8",
    "SET_5_Item_9",
    "SET_5_Item_10",
    "SET_5_Item_11",
    "SET_5_Item_12",
    "SET_5_Item_13",
    "SET_5_Item_14",
    "SET_5_Item_15",
    "SET_6_Item_1",
    "SET_6_Item_2",
    "SET_6_Item_3",
    "SET_6_Item_4",
    "SET_6_Item_5",
    "SET_6_Item_6",
    "SET_6_Item_7",
    "SET_6_Item_8",
    "SET_6_Item_9",
    "SET_6_Item_10",
    "SET_6_Item_11",
    "SET_6_Item_12",
    "SET_6_Item_13",
    "SET_6_Item_14",
    "SET_6_Item_15"
];



function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "instant" // 부드러운 스크롤을 위해 behavior 속성을 사용
    });
}

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

// 배열을 랜덤하게 셔플하는 함수
function shuffleArrayNew(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// 1차원 및 2차원 셔플 함수
function shuffleShapeSet(shapeSet) {
    // 1차원 배열 셔플
    let shuffled1D = shuffleArrayNew(shapeSet);

    // 각 2차원 배열 셔플
    for (let i = 0; i < shuffled1D.length; i++) {
        shuffled1D[i] = shuffleArrayNew(shuffled1D[i]);
    }

    return shuffled1D;
}


function Pilot() {


    const alert = useAlert()

    const [showLoad, setShowLoad] = useState(false);

    const [formData, setFormData] = useState({
        SurveyStartTime: "",

        PAName: "",
        PADeviceFilter: "",
        PADevice: "",
        PAAges: "",
        PAEmail: "",
        RadioForGender: "",
        RadioForPADiseas: "",

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
    })

    const initialShapeSet = [
        [ // 1set
            {
                "index": 0,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F1174125146630249%2F1174125146630249.glb&autorotate=true&json-data=1720541678935&decrypt=1&tv=165",
                "checkName": "SET_1_Item_0",
            },
            {
                "index": 1,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F2790028820599560%2F2790028820599560.glb&autorotate=true&json-data=1720543044157&decrypt=1&tv=165",
                "checkName": "SET_1_Item_1",
            },
            {
                "index": 2,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F1183442186583248%2F1183442186583248.glb&autorotate=true&json-data=1720543017088&decrypt=1&tv=165",
                "checkName": "SET_1_Item_2",
            },
            {
                "index": 3,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240710%2F3807688970330268%2F3807688970330268.glb&autorotate=true&json-data=1720591788160&decrypt=1&tv=165",
                "checkName": "SET_1_Item_3",
            },
            {
                "index": 4,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F1674418342313724%2F1674418342313724.glb&autorotate=true&json-data=1720542955646&decrypt=1&tv=165",
                "checkName": "SET_1_Item_4",
            },
            {
                "index": 5,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F886672442290717%2F886672442290717.glb&autorotate=true&json-data=1720542913254&decrypt=1&tv=165",
                "checkName": "SET_1_Item_5",
            },
            {
                "index": 6,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F2178680121358249%2F2178680121358249.glb&autorotate=true&json-data=1720542886309&decrypt=1&tv=165",
                "checkName": "SET_1_Item_6",
            },
            {
                "index": 7,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F155224984253708%2F155224984253708.glb&autorotate=true&json-data=1720542854618&decrypt=1&tv=165",
                "checkName": "SET_1_Item_7",
            },
            {
                "index": 8,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F3803879586873989%2F3803879586873989.glb&autorotate=true&json-data=1720542239946&decrypt=1&tv=165",
                "checkName": "SET_1_Item_8",
            },
            {
                "index": 9,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F1184134683626427%2F1184134683626427.glb&autorotate=true&json-data=1720542141847&decrypt=1&tv=165",
                "checkName": "SET_1_Item_9",
            },
            {
                "index": 10,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F894469862828181%2F894469862828181.glb&autorotate=true&json-data=1720541900363&decrypt=1&tv=165",
                "checkName": "SET_1_Item_10",
            },
            {
                "index": 11,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F155249021069321%2F155249021069321.glb&autorotate=true&json-data=1720541870187&decrypt=1&tv=165",
                "checkName": "SET_1_Item_11",
            },
            {
                "index": 12,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F2163509191261098%2F2163509191261098.glb&autorotate=true&json-data=1720541826636&decrypt=1&tv=165",
                "checkName": "SET_1_Item_12",
            },
            {
                "index": 13,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F152491960019299%2F152491960019299.glb&autorotate=true&json-data=1720541756115&decrypt=1&tv=165",
                "checkName": "SET_1_Item_13",
            },
            {
                "index": 14,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F2224921150571088%2F2224921150571088.glb&autorotate=true&json-data=1720541725455&decrypt=1&tv=165",
                "checkName": "SET_1_Item_14",
            },
            {
                "index": 15,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F1174125146630249%2F1174125146630249.glb&autorotate=true&json-data=1720541678935&decrypt=1&tv=165",
                "checkName": "SET_1_Item_15",
            }
        ],
        [ // set 2
            {
                "index": 0,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F894469862828181%2F894469862828181.glb&autorotate=true&json-data=1720541900363&decrypt=1&tv=165",
                "checkName": "SET_2_Item_0",
            },
            {
                "index": 1,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F2790028820599560%2F2790028820599560.glb&autorotate=true&json-data=1720543044157&decrypt=1&tv=165",
                "checkName": "SET_2_Item_1",
            },
            {
                "index": 2,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F1183442186583248%2F1183442186583248.glb&autorotate=true&json-data=1720543017088&decrypt=1&tv=165",
                "checkName": "SET_2_Item_2",
            },
            {
                "index": 3,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240710%2F3807688970330268%2F3807688970330268.glb&autorotate=true&json-data=1720591788160&decrypt=1&tv=165",
                "checkName": "SET_2_Item_3",
            },
            {
                "index": 4,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F1674418342313724%2F1674418342313724.glb&autorotate=true&json-data=1720542955646&decrypt=1&tv=165",
                "checkName": "SET_2_Item_4",
            },
            {
                "index": 5,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F886672442290717%2F886672442290717.glb&autorotate=true&json-data=1720542913254&decrypt=1&tv=165",
                "checkName": "SET_2_Item_5",
            },
            {
                "index": 6,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F2178680121358249%2F2178680121358249.glb&autorotate=true&json-data=1720542886309&decrypt=1&tv=165",
                "checkName": "SET_2_Item_6",
            },
            {
                "index": 7,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F155224984253708%2F155224984253708.glb&autorotate=true&json-data=1720542854618&decrypt=1&tv=165",
                "checkName": "SET_2_Item_7",
            },
            {
                "index": 8,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F3803879586873989%2F3803879586873989.glb&autorotate=true&json-data=1720542239946&decrypt=1&tv=165",
                "checkName": "SET_2_Item_8",
            },
            {
                "index": 9,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F1184134683626427%2F1184134683626427.glb&autorotate=true&json-data=1720542141847&decrypt=1&tv=165",
                "checkName": "SET_2_Item_9",
            },
            {
                "index": 10,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F894469862828181%2F894469862828181.glb&autorotate=true&json-data=1720541900363&decrypt=1&tv=165",
                "checkName": "SET_2_Item_10",
            },
            {
                "index": 11,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F155249021069321%2F155249021069321.glb&autorotate=true&json-data=1720541870187&decrypt=1&tv=165",
                "checkName": "SET_2_Item_11",
            },
            {
                "index": 12,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F2163509191261098%2F2163509191261098.glb&autorotate=true&json-data=1720541826636&decrypt=1&tv=165",
                "checkName": "SET_2_Item_12",
            },
            {
                "index": 13,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F152491960019299%2F152491960019299.glb&autorotate=true&json-data=1720541756115&decrypt=1&tv=165",
                "checkName": "SET_2_Item_13",
            },
            {
                "index": 14,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F2224921150571088%2F2224921150571088.glb&autorotate=true&json-data=1720541725455&decrypt=1&tv=165",
                "checkName": "SET_2_Item_14",
            },
            {
                "index": 15,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F1174125146630249%2F1174125146630249.glb&autorotate=true&json-data=1720541678935&decrypt=1&tv=165",
                "checkName": "SET_2_Item_15",
            }
        ],
        [ // set 3
            {
                "index": 0,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F2167463064977204%2F2167463064977204.glb&autorotate=true&json-data=1720543112383&decrypt=1&tv=165",
                "checkName": "SET_3_Item_0",
                "default": true
            },
            {
                "index": 1,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F2167463064977204%2F2167463064977204.glb&autorotate=true&json-data=1720543112383&decrypt=1&tv=165",
                "checkName": "SET_3_Item_1",
                "default": false
            },
            {
                "index": 2,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F1947264308284541%2F1947264308284541.glb&autorotate=true&json-data=1720543148036&decrypt=1&tv=165",
                "checkName": "SET_3_Item_2",
                "default": false
            },
            {
                "index": 3,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F4221519302411587%2F4221519302411587.glb&autorotate=true&json-data=1720543173764&decrypt=1&tv=165",
                "checkName": "SET_3_Item_3",
                "default": false
            },
            {
                "index": 4,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F3803749125260343%2F3803749125260343.glb&autorotate=true&json-data=1720543215297&decrypt=1&tv=165",
                "checkName": "SET_3_Item_4",
                "default": false
            },
            {
                "index": 5,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F2945446567702314%2F2945446567702314.glb&autorotate=true&json-data=1720543240646&decrypt=1&tv=165",
                "checkName": "SET_3_Item_5",
                "default": false
            },
            {
                "index": 6,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F2171337489269344%2F2171337489269344.glb&autorotate=true&json-data=1720543278571&decrypt=1&tv=165",
                "checkName": "SET_3_Item_6",
                "default": false
            },
            {
                "index": 7,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F3791057735693691%2F3791057735693691.glb&autorotate=true&json-data=1720543329750&decrypt=1&tv=165",
                "checkName": "SET_3_Item_7",
                "default": false
            },
            {
                "index": 8,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F3807711878877621%2F3807711878877621.glb&autorotate=true&json-data=1720543352781&decrypt=1&tv=165",
                "checkName": "SET_3_Item_8",
                "default": false
            },
            {
                "index": 9,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F1173254747503406%2F1173254747503406.glb&autorotate=true&json-data=1720543397389&decrypt=1&tv=165",
                "checkName": "SET_3_Item_9",
                "default": false
            },
            {
                "index": 10,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F887162846372476%2F887162846372476.glb&autorotate=true&json-data=1720543420694&decrypt=1&tv=165",
                "checkName": "SET_3_Item_10",
                "default": false
            },
            {
                "index": 11,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F2219812541644526%2F2219812541644526.glb&autorotate=true&json-data=1720543451995&decrypt=1&tv=165",
                "checkName": "SET_3_Item_11",
                "default": false
            },
            {
                "index": 12,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F2914745892517764%2F2914745892517764.glb&autorotate=true&json-data=1720543478439&decrypt=1&tv=165",
                "checkName": "SET_3_Item_12",
            },
            {
                "index": 13,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F3813848654290958%2F3813848654290958.glb&autorotate=true&json-data=1720543504180&decrypt=1&tv=165",
                "checkName": "SET_3_Item_13",
            },
            {
                "index": 14,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F2179404183533927%2F2179404183533927.glb&autorotate=true&json-data=1720543560995&decrypt=1&tv=165",
                "checkName": "SET_3_Item_14",
            },
            {
                "index": 15,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F2219365987764098%2F2219365987764098.glb&autorotate=true&json-data=1720543593555&decrypt=1&tv=165",
                "checkName": "SET_3_Item_15",
            }
        ],
        [ // set 4
            {
                "index": 0,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F887162846372476%2F887162846372476.glb&autorotate=true&json-data=1720543420694&decrypt=1&tv=165",
                "checkName": "SET_4_Item_0"
            },
            {
                "index": 1,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F2167463064977204%2F2167463064977204.glb&autorotate=true&json-data=1720543112383&decrypt=1&tv=165",
                "checkName": "SET_4_Item_1"
            },
            {
                "index": 2,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F1947264308284541%2F1947264308284541.glb&autorotate=true&json-data=1720543148036&decrypt=1&tv=165",
                "checkName": "SET_4_Item_2"
            },
            {
                "index": 3,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F4221519302411587%2F4221519302411587.glb&autorotate=true&json-data=1720543173764&decrypt=1&tv=165",
                "checkName": "SET_4_Item_3"
            },
            {
                "index": 4,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F3803749125260343%2F3803749125260343.glb&autorotate=true&json-data=1720543215297&decrypt=1&tv=165",
                "checkName": "SET_4_Item_4"
            },
            {
                "index": 5,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F2945446567702314%2F2945446567702314.glb&autorotate=true&json-data=1720543240646&decrypt=1&tv=165",
                "checkName": "SET_4_Item_5"
            },
            {
                "index": 6,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F2171337489269344%2F2171337489269344.glb&autorotate=true&json-data=1720543278571&decrypt=1&tv=165",
                "checkName": "SET_4_Item_6"
            },
            {
                "index": 7,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F3791057735693691%2F3791057735693691.glb&autorotate=true&json-data=1720543329750&decrypt=1&tv=165",
                "checkName": "SET_4_Item_7"
            },
            {
                "index": 8,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F3807711878877621%2F3807711878877621.glb&autorotate=true&json-data=1720543352781&decrypt=1&tv=165",
                "checkName": "SET_4_Item_8"
            },
            {
                "index": 9,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F1173254747503406%2F1173254747503406.glb&autorotate=true&json-data=1720543397389&decrypt=1&tv=165",
                "checkName": "SET_4_Item_9"
            },
            {
                "index": 10,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F887162846372476%2F887162846372476.glb&autorotate=true&json-data=1720543420694&decrypt=1&tv=165",
                "checkName": "SET_4_Item_10"
            },
            {
                "index": 11,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F2219812541644526%2F2219812541644526.glb&autorotate=true&json-data=1720543451995&decrypt=1&tv=165",
                "checkName": "SET_4_Item_11"
            },
            {
                "index": 12,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F2914745892517764%2F2914745892517764.glb&autorotate=true&json-data=1720543478439&decrypt=1&tv=165",
                "checkName": "SET_4_Item_12"
            },
            {
                "index": 13,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F3813848654290958%2F3813848654290958.glb&autorotate=true&json-data=1720543504180&decrypt=1&tv=165",
                "checkName": "SET_4_Item_13"
            },
            {
                "index": 14,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F2179404183533927%2F2179404183533927.glb&autorotate=true&json-data=1720543560995&decrypt=1&tv=165",
                "checkName": "SET_4_Item_14"
            },
            {
                "index": 15,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F2219365987764098%2F2219365987764098.glb&autorotate=true&json-data=1720543593555&decrypt=1&tv=165",
                "checkName": "SET_4_Item_15"
            }
        ],
        [ // set 5
            {
                "index": 0,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F2184182556141694%2F2184182556141694.glb&autorotate=true&json-data=1720543627402&decrypt=1&tv=165",
                "checkName": "SET_5_Item_0"
            },
            {
                "index": 1,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F2184182556141694%2F2184182556141694.glb&autorotate=true&json-data=1720543627402&decrypt=1&tv=165",
                "checkName": "SET_5_Item_1"
            },
            {
                "index": 2,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F2782269353045508%2F2782269353045508.glb&autorotate=true&json-data=1720543654036&decrypt=1&tv=165",
                "checkName": "SET_5_Item_2"
            },
            {
                "index": 3,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F2227298142847836%2F2227298142847836.glb&autorotate=true&json-data=1720543780164&decrypt=1&tv=165",
                "checkName": "SET_5_Item_3"
            },
            {
                "index": 4,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F2797792618310969%2F2797792618310969.glb&autorotate=true&json-data=1720543815714&decrypt=1&tv=165",
                "checkName": "SET_5_Item_4"
            },
            {
                "index": 5,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F2938468276703654%2F2938468276703654.glb&autorotate=true&json-data=1720543844312&decrypt=1&tv=165",
                "checkName": "SET_5_Item_5"
            },
            {
                "index": 6,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F2229968330823491%2F2229968330823491.glb&autorotate=true&json-data=1720543939673&decrypt=1&tv=165",
                "checkName": "SET_5_Item_6"
            },
            {
                "index": 7,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F894445070155168%2F894445070155168.glb&autorotate=true&json-data=1720543967936&decrypt=1&tv=165",
                "checkName": "SET_5_Item_7"
            },
            {
                "index": 8,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F198987479306783%2F198987479306783.glb&autorotate=true&json-data=1720544010438&decrypt=1&tv=165",
                "checkName": "SET_5_Item_8"
            },
            {
                "index": 9,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F487372275851968%2F487372275851968.glb&autorotate=true&json-data=1720544057278&decrypt=1&tv=165",
                "checkName": "SET_5_Item_9"
            },
            {
                "index": 10,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F3417914243167419%2F3417914243167419.glb&autorotate=true&json-data=1720544089055&decrypt=1&tv=165",
                "checkName": "SET_5_Item_10"
            },
            {
                "index": 11,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F3760075947963199%2F3760075947963199.glb&autorotate=true&json-data=1720544111862&decrypt=1&tv=165",
                "checkName": "SET_5_Item_11"
            },
            {
                "index": 12,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F4232830700870858%2F4232830700870858.glb&autorotate=true&json-data=1720544133868&decrypt=1&tv=165",
                "checkName": "SET_5_Item_12"
            },
            {
                "index": 13,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F2223164198855253%2F2223164198855253.glb&autorotate=true&json-data=1720544171846&decrypt=1&tv=165",
                "checkName": "SET_5_Item_13"
            },
            {
                "index": 14,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F4233246387217084%2F4233246387217084.glb&autorotate=true&json-data=1720544236685&decrypt=1&tv=165",
                "checkName": "SET_5_Item_14"
            },
            {
                "index": 15,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F4225320587311379%2F4225320587311379.glb&autorotate=true&json-data=1720544263043&decrypt=1&tv=165",
                "checkName": "SET_5_Item_15"
            }
        ],
        [ // set 6
            {
                "index": 0,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F4225320587311379%2F4225320587311379.glb&autorotate=true&json-data=1720544263043&decrypt=1&tv=165",
                "checkName": "SET_6_Item_0"
            },
            {
                "index": 1,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F2184182556141694%2F2184182556141694.glb&autorotate=true&json-data=1720543627402&decrypt=1&tv=165",
                "checkName": "SET_6_Item_1"
            },
            {
                "index": 2,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F2782269353045508%2F2782269353045508.glb&autorotate=true&json-data=1720543654036&decrypt=1&tv=165",
                "checkName": "SET_6_Item_2"
            },
            {
                "index": 3,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F2227298142847836%2F2227298142847836.glb&autorotate=true&json-data=1720543780164&decrypt=1&tv=165",
                "checkName": "SET_6_Item_3"
            },
            {
                "index": 4,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F2797792618310969%2F2797792618310969.glb&autorotate=true&json-data=1720543815714&decrypt=1&tv=165",
                "checkName": "SET_6_Item_4"
            },
            {
                "index": 5,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F2938468276703654%2F2938468276703654.glb&autorotate=true&json-data=1720543844312&decrypt=1&tv=165",
                "checkName": "SET_6_Item_5"
            },
            {
                "index": 6,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F2229968330823491%2F2229968330823491.glb&autorotate=true&json-data=1720543939673&decrypt=1&tv=165",
                "checkName": "SET_6_Item_6"
            },
            {
                "index": 7,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F894445070155168%2F894445070155168.glb&autorotate=true&json-data=1720543967936&decrypt=1&tv=165",
                "checkName": "SET_6_Item_7"
            },
            {
                "index": 8,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F198987479306783%2F198987479306783.glb&autorotate=true&json-data=1720544010438&decrypt=1&tv=165",
                "checkName": "SET_6_Item_8"
            },
            {
                "index": 9,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F487372275851968%2F487372275851968.glb&autorotate=true&json-data=1720544057278&decrypt=1&tv=165",
                "checkName": "SET_6_Item_9"
            },
            {
                "index": 10,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F3417914243167419%2F3417914243167419.glb&autorotate=true&json-data=1720544089055&decrypt=1&tv=165",
                "checkName": "SET_6_Item_10"
            },
            {
                "index": 11,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F3760075947963199%2F3760075947963199.glb&autorotate=true&json-data=1720544111862&decrypt=1&tv=165",
                "checkName": "SET_6_Item_11"
            },
            {
                "index": 12,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F4232830700870858%2F4232830700870858.glb&autorotate=true&json-data=1720544133868&decrypt=1&tv=165",
                "checkName": "SET_6_Item_12"
            },
            {
                "index": 13,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F2223164198855253%2F2223164198855253.glb&autorotate=true&json-data=1720544171846&decrypt=1&tv=165",
                "checkName": "SET_6_Item_13"
            },
            {
                "index": 14,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F4233246387217084%2F4233246387217084.glb&autorotate=true&json-data=1720544236685&decrypt=1&tv=165",
                "checkName": "SET_6_Item_14"
            },
            {
                "index": 15,
                "url": "https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20240709%2F4225320587311379%2F4225320587311379.glb&autorotate=true&json-data=1720544263043&decrypt=1&tv=165",
                "checkName": "SET_6_Item_15"
            }
        ]
    ];

    const handleSubmit = async (formValues) => {

        setShowLoad(true);

        const body = new URLSearchParams();

        for (const key of keyOrder) {
            const value = formValues[key];
            body.append(key, value);
        }

        const link = "https://script.google.com/macros/s/AKfycbxEvQ-O961deMnC9wKJ-6HZx1_xyTSQDIs1iL9OMs7fqDnEzkH71HKS5kL6Yadq3JyP/exec";
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


    const [shapeSet, setShapeSet] = useState(initialShapeSet);





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

    useEffect(() => {
        setShapeSet(shuffleShapeSet(shapeSet));
    }, []);


    const [isActive, setIsActive] = useState([false, false, false, false, false, false]);

    // 탭을 활성화하는 함수, 탭 인덱스를 매개변수로 받음
    const handleTabClick = (index) => {
      const newIsActive = [...isActive]; // 기존 상태 복사
      newIsActive[index] = true; // 특정 인덱스의 탭을 활성화
      setIsActive(newIsActive); // 상태 업데이트
    };

    

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

                            <div className="tab-pane fade show active container-xl" id="SetupView" role="tabpanel" aria-labelledby="TabSetup">


                                <div className="text-lg d-flex mt-n6 mb-4 justify-content-evenly text-danger fw-500">
                                We recommend using Chrome or Edge browsers. NOT Safari browser.
                                </div>

                                <RadioSelection
                                    SaveId={"PADeviceFilter"}
                                    question={"Choose your device for survey. "}
                                    radioName={"PADeviceFilter"}
                                    optionNames={[
                                        "Desktop",
                                        "Notebook",
                                        "Smart phone (Not available for survey)",
                                        "Tablet (Not available for survey)"
                                    ]}
                                    onChange={(answer) => handleQuestionChange("PADeviceFilter", answer)}
                                />

                                <RadioSelection
                                    SaveId={"PADevice"}
                                    question={"Select size of the screen for survey "}
                                    radioName={"PADevice"}
                                    optionNames={[
                                        "Notebook (14inch screen screen)",
                                        "Notebook (16inch)",
                                        "Notebook (18inch)",
                                        "Desktop (27inch or smaller screen)",
                                        "Desktop (28inch screen)",
                                        "Desktop (30inch screen)",
                                        "Desktop (32inch screen)",
                                        "Desktop (34inch screen)",
                                        "Desktop (36inch or larger screen)"
                                    ]}
                                    onChange={(answer) => handleQuestionChange("PADevice", answer)}
                                />

                                <ShortTextAnswer
                                    SaveId={"PAName"}
                                    question={"Name"}
                                    onChange={(answer) => handleQuestionChange("PAName", answer)}
                                />

                                <ShortTextAnswer
                                    SaveId={"PAEmail"}
                                    question={"E-mail"}
                                    onChange={(answer) => handleQuestionChange("PAEmail", answer)}
                                />


                                <ShortTextAnswer
                                    SaveId={"PAAges"}
                                    question={"Ages"}
                                    onChange={(answer) => handleQuestionChange("PAAges", answer)}
                                />

                                <RadioSelection
                                    SaveId={"RadioForGender"}
                                    question={"Gender"}
                                    radioName={"RadioForGender"}
                                    optionNames={[
                                        "Male",
                                        "Female",
                                        "Prefer not to disclose"
                                    ]}
                                    onChange={(answer) => handleQuestionChange("RadioForGender", answer)}
                                />

                                <RadioSelection
                                    SaveId={"RadioForPADiseas"}
                                    question={"Are you having trouble seeing shapes like color blindness, superiority, etc?"}
                                    radioName={"RadioForPADiseas"}
                                    optionNames={[
                                        "No",
                                        "Yes (Not available to participat in this survey)",
                                    ]}
                                    onChange={(answer) => handleQuestionChange("RadioForPADiseas", answer)}
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
                                                "RadioForPADiseas"
                                            ])) {
                                                // handleSubmit(formData);
                                                scrollToTop();
                                                handleQuestionChange("SurveyStartTime", formatCurrentTime());
                                                handleTabClick(0);
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

                                <div className="row col-12 m-1 d-flex justify-content-evenly ">
                                    <GuideSection />



                                    <div className="d-flex col-2" style={{ position: 'relative' }}>
                                        <div className="overlay-checkbox">Example</div>
                                        <div className="overlay-checkbox-text">Hi~</div>
                                        {isActive[0] && (
                                        <iframe allow="camera" src={
                                            shapeSet[0].find(item => item.index === 0).url
                                        } />
                                        )}
                                    </div>

                                    {isActive[0] && (
                                    <div className="d-flex row col-8">
                                        {shapeSet[0].filter(q => q.index !== 0).map((q) => (

                                            <ShapeSlider
                                                key={q.index}
                                                index={q.index}
                                                SaveId={q.checkName}
                                                url={q.url}
                                                selected={q.show}
                                                onChange={(v) => handleQuestionChange(q.checkName, v)}
                                            />
                                        ))}
                                    </div>
                                    )}

                                    <div className="d-flex justify-content-evenly">
                                        <button
                                            className="btn btn-primary fw-500"
                                            type="button"
                                            onClick={() => {

                                                if (CheckValidate([
                                                    shapeSet[0][1].checkName,
                                                    shapeSet[0][2].checkName,
                                                    shapeSet[0][3].checkName,
                                                    shapeSet[0][4].checkName,
                                                    shapeSet[0][5].checkName,
                                                    shapeSet[0][6].checkName,
                                                    shapeSet[0][7].checkName,
                                                    shapeSet[0][8].checkName,
                                                    shapeSet[0][9].checkName,
                                                    shapeSet[0][10].checkName,
                                                    shapeSet[0][11].checkName,
                                                    shapeSet[0][12].checkName,
                                                    shapeSet[0][13].checkName,
                                                    shapeSet[0][14].checkName,
                                                    shapeSet[0][15].checkName,
                                                ])) {
                                                    scrollToTop();
                                                    document.getElementById("TabSSQ").click();
                                                    handleTabClick(1);
                                                } else {
                                                    alert.show('Some questions are remained', { type: types.ERROR }) //alert will be shown in bottom left
                                                    console.log("is not a validate. Check all quesitons");
                                                }

                                            }}
                                        >
                                            <span style={{ marginRight: "0.5rem" }}>Next</span>
                                            <i className="fas fa-forward text-white"></i>
                                            {/* https://fontawesome.com/search?q=next&o=r&m=free */}
                                        </button>
                                    </div>
                                </div>
                            </div>


                            <div className="tab-pane fade show" id="SSQView" role="tabpanel" aria-labelledby="TabSSQ">

                                <div className="row col-12 m-1 d-flex justify-content-evenly ">
                                    <GuideSection />

                                    <div className="d-flex col-2" style={{ position: 'relative' }}>
                                        <div className="overlay-checkbox">Example</div>
                                        <div className="overlay-checkbox-text"></div>
                                        {isActive[1] && (
                                        <iframe allow="camera" src={shapeSet[1].find(item => item.index === 0).url}
                                        />
                                        )}
                                    </div>

                                    {isActive[1] && (
                                    <div className="d-flex row col-8">
                                        {shapeSet[1].filter(q => q.index !== 0).map((q) => (

                                            <ShapeSlider
                                                index={q.index}
                                                SaveId={q.checkName}
                                                url={q.url}
                                                selected={q.show}
                                                onChange={(v) => handleQuestionChange(q.checkName, v)}
                                            />
                                        ))}
                                    </div>
)}

                                    <div className="d-flex justify-content-evenly">
                                        <button
                                            className="btn btn-primary fw-500"
                                            type="button"
                                            onClick={() => {
                                                if (CheckValidate([
                                                    shapeSet[1][1].checkName,
                                                    shapeSet[1][2].checkName,
                                                    shapeSet[1][3].checkName,
                                                    shapeSet[1][4].checkName,
                                                    shapeSet[1][5].checkName,
                                                    shapeSet[1][6].checkName,
                                                    shapeSet[1][7].checkName,
                                                    shapeSet[1][8].checkName,
                                                    shapeSet[1][9].checkName,
                                                    shapeSet[1][10].checkName,
                                                    shapeSet[1][11].checkName,
                                                    shapeSet[1][12].checkName,
                                                    shapeSet[1][13].checkName,
                                                    shapeSet[1][14].checkName,
                                                    shapeSet[1][15].checkName,
                                                ])) {
                                                    scrollToTop();
                                                    document.getElementById("TabSP").click();
                                                    handleTabClick(2);
                                                } else {
                                                    alert.show('Some questions are remained', { type: types.ERROR }) //alert will be shown in bottom left
                                                    console.log("is not a validate. Check all quesitons");
                                                }

                                            }}
                                        >
                                            <span style={{ marginRight: "0.5rem" }}>Next</span>
                                            <i className="fas fa-forward text-white"></i>
                                            {/* https://fontawesome.com/search?q=next&o=r&m=free */}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="tab-pane fade show" id="SPView" role="tabpanel" aria-labelledby="TabSP">

                                <div className="row col-12 m-1 d-flex justify-content-evenly ">
                                    <GuideSection />

                                    <div className="d-flex col-2" style={{ position: 'relative' }}>
                                        <div className="overlay-checkbox">Example</div>
                                        <div className="overlay-checkbox-text">Hi~</div>
                                        {isActive[2] && (
                                        <iframe allow="camera" src={
                                            shapeSet[2].find(item => item.index === 0).url
                                        } />
                                        )}
                                    </div>

                                    {isActive[2] && (
                                    <div className="d-flex row col-8">
                                        {shapeSet[2].filter(q => q.index !== 0).map((q) => (

                                            <ShapeSlider
                                                key={q.index}
                                                index={q.index}
                                                SaveId={q.checkName}
                                                url={q.url}
                                                selected={q.show}
                                                onChange={(v) => handleQuestionChange(q.checkName, v)}
                                            />
                                        ))}
                                    </div>
                                    )}

                                    <div className="d-flex justify-content-evenly">
                                        <button
                                            className="btn btn-primary fw-500"
                                            type="button"
                                            onClick={() => {
                                                if (CheckValidate([
                                                    shapeSet[2][1].checkName,
                                                    shapeSet[2][2].checkName,
                                                    shapeSet[2][3].checkName,
                                                    shapeSet[2][4].checkName,
                                                    shapeSet[2][5].checkName,
                                                    shapeSet[2][6].checkName,
                                                    shapeSet[2][7].checkName,
                                                    shapeSet[2][8].checkName,
                                                    shapeSet[2][9].checkName,
                                                    shapeSet[2][10].checkName,
                                                    shapeSet[2][11].checkName,
                                                    shapeSet[2][12].checkName,
                                                    shapeSet[2][13].checkName,
                                                    shapeSet[2][14].checkName,
                                                    shapeSet[2][15].checkName,
                                                ])) {
                                                    scrollToTop();
                                                    document.getElementById("TabSUS").click();
                                                    handleTabClick(3);
                                                } else {
                                                    alert.show('Some questions are remained', { type: types.ERROR }) //alert will be shown in bottom left
                                                    console.log("is not a validate. Check all quesitons");
                                                }

                                            }}
                                        >
                                            <span style={{ marginRight: "0.5rem" }}>Next</span>
                                            <i className="fas fa-forward text-white"></i>
                                            {/* https://fontawesome.com/search?q=next&o=r&m=free */}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="tab-pane fade show" id="SUSView" role="tabpanel" aria-labelledby="TabSUS">

                                <div className="row col-12 m-1 d-flex justify-content-evenly ">
                                    <GuideSection />

                                    <div className="d-flex col-2" style={{ position: 'relative' }}>
                                        <div className="overlay-checkbox">Example</div>
                                        <div className="overlay-checkbox-text">Hi~</div>
                                        {isActive[3] && (
                                        <iframe allow="camera" src={
                                            shapeSet[3].find(item => item.index === 0).url
                                        } />
                                        )}
                                    </div>

                                    {isActive[3] && (
                                    <div className="d-flex row col-8">
                                        {shapeSet[3].filter(q => q.index !== 0).map((q) => (

                                            <ShapeSlider
                                                key={q.index}
                                                index={q.index}
                                                SaveId={q.checkName}
                                                url={q.url}
                                                selected={q.show}
                                                onChange={(v) => handleQuestionChange(q.checkName, v)}
                                            />
                                        ))}
                                    </div>
                                    )}

                                    <div className="d-flex justify-content-evenly">
                                        <button
                                            className="btn btn-primary fw-500"
                                            type="button"
                                            onClick={() => {
                                                if (CheckValidate([
                                                    shapeSet[3][1].checkName,
                                                    shapeSet[3][2].checkName,
                                                    shapeSet[3][3].checkName,
                                                    shapeSet[3][4].checkName,
                                                    shapeSet[3][5].checkName,
                                                    shapeSet[3][6].checkName,
                                                    shapeSet[3][7].checkName,
                                                    shapeSet[3][8].checkName,
                                                    shapeSet[3][9].checkName,
                                                    shapeSet[3][10].checkName,
                                                    shapeSet[3][11].checkName,
                                                    shapeSet[3][12].checkName,
                                                    shapeSet[3][13].checkName,
                                                    shapeSet[3][14].checkName,
                                                    shapeSet[3][15].checkName,
                                                ])) {
                                                    scrollToTop();
                                                    document.getElementById("TabTLX").click();
                                                    handleTabClick(4);
                                                } else {
                                                    alert.show('Some questions are remained', { type: types.ERROR }) //alert will be shown in bottom left
                                                    console.log("is not a validate. Check all quesitons");
                                                }

                                            }}
                                        >
                                            <span style={{ marginRight: "0.5rem" }}>Next</span>
                                            <i className="fas fa-forward text-white"></i>
                                            {/* https://fontawesome.com/search?q=next&o=r&m=free */}
                                        </button>
                                    </div>
                                </div>
                            </div>


                            <div className="tab-pane fade show" id="TLXView" role="tabpanel" aria-labelledby="TabTLX">

                                <div className="row col-12 m-1 d-flex justify-content-evenly ">
                                    <GuideSection />

                                    <div className="d-flex col-2" style={{ position: 'relative' }}>
                                        <div className="overlay-checkbox">Example</div>
                                        <div className="overlay-checkbox-text">Hi~</div>
                                        {isActive[4] && (
                                        <iframe allow="camera" src={
                                            shapeSet[4].find(item => item.index === 0).url
                                        } />
                                        )}
                                    </div>

                                    {isActive[4] && (
                                    <div className="d-flex row col-8">
                                        {shapeSet[4].filter(q => q.index !== 0).map((q) => (

                                            <ShapeSlider
                                                key={q.index}
                                                index={q.index}
                                                SaveId={q.checkName}
                                                url={q.url}
                                                selected={q.show}
                                                onChange={(v) => handleQuestionChange(q.checkName, v)}
                                            />
                                        ))}
                                    </div>
                                    )}

                                    <div className="d-flex justify-content-evenly">
                                        <button
                                            className="btn btn-primary fw-500"
                                            type="button"
                                            onClick={() => {
                                                if (CheckValidate([
                                                    shapeSet[4][1].checkName,
                                                    shapeSet[4][2].checkName,
                                                    shapeSet[4][3].checkName,
                                                    shapeSet[4][4].checkName,
                                                    shapeSet[4][5].checkName,
                                                    shapeSet[4][6].checkName,
                                                    shapeSet[4][7].checkName,
                                                    shapeSet[4][8].checkName,
                                                    shapeSet[4][9].checkName,
                                                    shapeSet[4][10].checkName,
                                                    shapeSet[4][11].checkName,
                                                    shapeSet[4][12].checkName,
                                                    shapeSet[4][13].checkName,
                                                    shapeSet[4][14].checkName,
                                                    shapeSet[4][15].checkName,
                                                ])) {
                                                    scrollToTop();
                                                    document.getElementById("TabIPQ").click();
                                                    handleTabClick(5);
                                                } else {
                                                    alert.show('Some questions are remained', { type: types.ERROR }) //alert will be shown in bottom left
                                                    console.log("is not a validate. Check all quesitons");
                                                }

                                            }}
                                        >
                                            <span style={{ marginRight: "0.5rem" }}>Next Question</span>
                                            <i className="fas fa-forward text-white"></i>
                                            {/* https://fontawesome.com/search?q=next&o=r&m=free */}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="tab-pane fade show " id="IPQView" role="tabpanel" aria-labelledby="TabIPQ">

                                <div className="row col-12 m-1 d-flex justify-content-evenly ">
                                    <GuideSection />

                                    <div className="d-flex col-2" style={{ position: 'relative' }}>
                                        <div className="overlay-checkbox">Example</div>
                                        <div className="overlay-checkbox-text">Hi~</div>
                                        {isActive[5] && (
                                        <iframe allow="camera" src={
                                            shapeSet[5].find(item => item.index === 0).url
                                        } />
                                        )}
                                    </div>

                                    {isActive[5] && (
                                    <div className="d-flex row col-8">
                                        {shapeSet[5].filter(q => q.index !== 0).map((q) => (

                                            <ShapeSlider
                                                key={q.index}
                                                index={q.index}
                                                SaveId={q.checkName}
                                                url={q.url}
                                                selected={q.show}
                                                onChange={(v) => handleQuestionChange(q.checkName, v)}
                                            />
                                        ))}
                                    </div>
                                    )}

                                    <div className="d-flex justify-content-evenly">
                                        <button
                                            className="btn btn-primary fw-500"
                                            type="button"
                                            onClick={() => {
                                                if (CheckValidate([
                                                    shapeSet[5][1].checkName,
                                                    shapeSet[5][2].checkName,
                                                    shapeSet[5][3].checkName,
                                                    shapeSet[5][4].checkName,
                                                    shapeSet[5][5].checkName,
                                                    shapeSet[5][6].checkName,
                                                    shapeSet[5][7].checkName,
                                                    shapeSet[5][8].checkName,
                                                    shapeSet[5][9].checkName,
                                                    shapeSet[5][10].checkName,
                                                    shapeSet[5][11].checkName,
                                                    shapeSet[5][12].checkName,
                                                    shapeSet[5][13].checkName,
                                                    shapeSet[5][14].checkName,
                                                    shapeSet[5][15].checkName,
                                                ])) {
                                                    scrollToTop();
                                                    handleSubmit(formData);
                                                    // document.getElementById("TabDone").click();
                                                } else {
                                                    alert.show('Some questions are remained', { type: types.ERROR }) //alert will be shown in bottom left
                                                    console.log("is not a validate. Check all quesitons");
                                                }

                                            }}
                                        >
                                            <span style={{ marginRight: "0.5rem" }}>Finished</span>
                                            <i className="fas fa-forward text-white"></i>
                                            {/* https://fontawesome.com/search?q=next&o=r&m=free */}
                                        </button>
                                    </div>
                                </div>
                            </div>



                            <div className="tab-pane fade show" id="DoneView" role="tabpanel" aria-labelledby="TabDone">
                                <div className="customLastPage">


                                    <div className="text-lg d-flex m-4 justify-content-evenly fw-500">
                                        Complete Survey!

                                        <br></br>
                                        <br></br>

                                        Here is the code for mTurk: {generateRandomOutput()}
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

function generateRandomOutput() {
    const items = [
        'aB3cD4Ef', 'G5hI6jKl', 'Mn7O8pQr', 'sT9uV0wX', 'Yz1A2bCd', 'eF3gH4Ij', 'kL5mN6Op', 'qR7sT8Uv', 'Wx9Y0zAa', 'Bb1Cc2Dd'
    ];
    const randomIndex = Math.floor(Math.random() * items.length);
    const randomOutput = items[randomIndex];
    return randomOutput;
}


function ShapeSlider(props) {
    const [selectedValue, setSelectedValue] = useState("-1");
    const [selected, SetSelected] = useState(false);

    const localhandleOptionChange = (event) => {
        const newSelectedValue = event.target.value;

        setSelectedValue(newSelectedValue);

        // 이것이 global // 외부로 값 넘기기 위한 함수. 
        props.onChange(newSelectedValue);
    };

    return (
        <div className="col-lg-4 mb-3"
            key={props.index}
            style={{ position: 'relative', border: 'dashed' }}>
            <iframe allow="camera" src={props.url} style={{
                width: "300px",
                height: "300px"
            }} />
            <Slider
                onMouseDown={() => { SetSelected(true) }}
                className="overlay-slider"
                size="small step"
                min={1}
                max={7}
                step={1}
                marks
                sx={{ padding: "0px" }}
                valueLabelDisplay={selected == true ? "on" : "off"}
                onChange={localhandleOptionChange}
                aria-label="Small"
            />
            <div className="overlay-checkbox-text">{props.index} </div>
        </div>
    );
}

function GuideSection() {
    return (
        <div className="card mb-4">
            <div className='card-header d-flex justify-content-between'>
                <div className="fw-700">Selection Guide</div>
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
    )
}

export default Pilot;
