import React, {useState} from 'react';
import {
    Slider,
} from "@mui/material";

function NASATLX(props) {
    const [selectedValue, setSelectedValue] = useState("-1");

    const handleOptionChange = (event) =>{
        const newSelectedValue = event.target.value;

        setSelectedValue(newSelectedValue);

        props.onChange(newSelectedValue);
    };

    return (
        <div className="card mb-4">
            <div className="card-header fw-500">{props.question}</div>
            <div className="card-body d-flex justify-content-around mt-5">
                <Slider
                    size="small step"
                    min={0}
                    max={100}
                    step={5}
                    marks
                    sx={{
                        padding: "0px",
                    }}
                    valueLabelDisplay="on"
                    defaultValue={0}
                    aria-label="Small"
                    onChange={handleOptionChange}
                />
            </div>
        </div>
    );
}

export default NASATLX;