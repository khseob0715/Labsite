import React, { useState } from 'react';
import {
    Slider,
} from "@mui/material";

import { ClickAwayListener } from '@mui/base';

function EmotionModel(props) {

    const valueLabelFormat = (value) => {

        const i = props.marks.findIndex(item => item.value === value);

        // if(props.min == 0)
        // {
            
        // }
        // else if(props.min == 1)
        // {
        //     return `${value} ${props.marks[i -1].label}`; // 원하는 형식으로 값을 포맷팅
        // }
        return `${value} ${props.marks[i].label}`; // 원하는 형식으로 값을 포맷팅
        
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

    const handleOptionChange = (event) => {
        const newSelectedValue = event.target.value;

        setSelectedValue(newSelectedValue);

        props.onChange(newSelectedValue);
    };

    return (
        <div className="card mb-4">
            <div className="card-header fw-500">{props.question}</div>



            <div className="card-body d-flex justify-content-around mt-5" style={{
                flexDirection: "column"
            }
            }>
                <div className='d-flex justify-content-center'>
                    <img src={process.env.PUBLIC_URL + props.imageUrl} alt="이미지 설명" 
                     style={{width: "100%"}}
                    />
                </div>
                <div>
                    <Slider
                                onMouseDown={() => { SetSelected(true) }}
                                defaultValue={0}
                                aria-label="Custom marks"
                                step={props.step}
                                min={props.min}
                                max={props.max}
                                valueLabelDisplay={selected == true ? "on" : "off"}
                                marks={props.marks}
                                valueLabelFormat={valueLabelFormat}
                                onChange={localhandleOptionChange}
                                sx={{
                                    '& .MuiSlider-thumb': {
                                    background: selected ? "primary" : 'rgba(0,0,0,0.0)',
                                    boxShadow: selected ? '0 2px 12px 0 rgba(0,0,0,0.4)' : '',
                                      '&:before': {
                                        boxShadow: '0 2px 12px 0 rgba(0,0,0,0)',
                                       },
                                    }
                                  }}
                            />
                </div>

            </div>
        </div>
    );
}

export default EmotionModel;