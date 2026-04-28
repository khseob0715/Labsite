import React, { useState } from 'react';
import {
    Slider,
    Grid,
    Item,
} from "@mui/material";

import { ClickAwayListener } from '@mui/base';

function SliderAndScore(props) {
    const valueLabelFormat = (value) => {

        return `${value} 회`;
    };


    const [selectedValue, setSelectedValue] = useState("-1");

    // 최초 선택을 위한 UseState
    const [selected, SetSelected] = useState(false);

    const localhandleOptionChange = (event) => {
        const newSelectedValue = event.target.value;

        setSelectedValue(newSelectedValue);

        // 이것이 global // 외부로 값 넘기기 위한 함수. 
        props.onChange(newSelectedValue);
    };

    const [answer, setAnswer] = useState("");

    const handleAnswerChange = (event) => {
        const newAnswer = event.target.value;

        setAnswer(newAnswer);

        props.onChange(newAnswer);
    };

    return (
        <div className="card mb-4">
            <div className="card-header fw-500">
                {props.question}
            </div>

            <div className="card-body d-flex justify-content-around mx-5 mt-5 mb-2 pt-2" style={{
                flexDirection: "column"
            }
            }>
                <div>
                    <Grid container spacing={4}>
                        <Grid item xs={12} mx={4}>
                            <Slider
                                onMouseDown={() => { SetSelected(true) }}
                                defaultValue={0}
                                aria-label="Custom marks"
                                step={1}
                                min={1}
                                max={5}
                                valueLabelDisplay="on"
                                marks={props.marks}
                                valueLabelFormat={valueLabelFormat}
                                onChange={localhandleOptionChange}
                            />
                        </Grid>
                    </Grid>


                </div>

            </div>

            <div className="card-body d-flex justify-content-around mx-5 mt-3 mb-2 pt-2" style={{
                flexDirection: "column"
            }
            }>
                <div>
                    <input
                        className="questionContents"
                        type="text"
                        id={props.id}
                        placeholder={'점수입력'}
                        value={answer}
                        onChange={handleAnswerChange}
                    />

                </div>
            </div>
        </div>
    );
}

export default SliderAndScore;