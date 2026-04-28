import React from "react";
import { Link } from "react-router-dom";
import HEADER from '../../components/Header';

import {
    Slider,
} from "@mui/material";

function valueLabelFormat(value) {
    const minutes = Math.floor(value / 60); // 분 계산
    const seconds = value % 60; // 초 계산

    // 분과 초가 한 자리 숫자일 경우 앞에 0을 붙여서 두 자리로 만듭니다.
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${formattedMinutes}:${formattedSeconds}`;

    // return `${scaledValue} ${units[unitIndex]}`;
}

function Main() {
    const [value, setValue] = React.useState(1);

    const handleChange = (event, newValue) => {
        if (typeof newValue === 'number') {
            setValue(newValue);
        }
    };

    return (
        <>
            <HEADER
                title={"Lifter VR"}
                contents={"체감 시간을 입력해주세요"}
            />

            <div className="d-flex justify-content-center align-items-center" style={{ height: "70vh" }}>
                <div className="container-xl px-12" >
                    <div className="row justify-content-center" >
                        <div className="col-xl-8">
                            <div className="cart-body">
                                <div className="card mb-4">
                                    <div className="card-header fw-500">콘텐츠를 즐긴 체감 시간이 어느정도 되는 것 같았나요?</div>
                                    <div className="card-body d-flex justify-content-around" style={{flexDirection:"column"}}>

                                        <div className="fw-800 m-2 mb-5 d-flex justify-content-center" style={{fontSize:"xx-large"}}>
                                            체감 시간: {valueLabelFormat(value)}
                                        </div>

                                        <Slider
                                            className="mt-3"
                                            value={value}
                                            size="small step"
                                            min={1}
                                            max={600}
                                            step={1}
                                            // marks
                                            sx={{
                                                padding: "0px",
                                            }}
                                            valueLabelFormat={valueLabelFormat}
                                            valueLabelDisplay="on"
                                            defaultValue={1}
                                            onChange={handleChange}
                                            aria-label="Small"
                                        // onChange={handleOptionChange}
                                        />
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
export default Main;
