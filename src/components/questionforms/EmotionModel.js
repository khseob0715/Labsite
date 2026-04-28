import React, { useState } from 'react';
import {
    Slider,
} from "@mui/material";

import { ClickAwayListener } from '@mui/base';

function EmotionModel(props) {
    const [selectedValue, setSelectedValue] = useState("-1");

    const [selected, SetSelected] = useState(false);

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
                        onMouseDown = {()=>{SetSelected(true)}}
                        size="small step"
                        min={1}
                        max={9}
                        step={1}
                        marks
                        sx={{
                            padding: "0px",
                        }}
                        valueLabelDisplay= {selected == true ? "on" : "off"}
                        defaultValue={1}
                        aria-label="Small"
                        onChange={handleOptionChange}
                    />
                </div>

            </div>
        </div>
    );
}

export default EmotionModel;