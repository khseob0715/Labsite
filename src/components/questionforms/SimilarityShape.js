import React, { useState } from 'react';
import {
    Slider,
} from "@mui/material";

function SimilarityShape(props) {
    
    const [selectedValueArousal, setSelectedValueArousal] = useState("-1");

    const [selectedArousal, SetSelectedArousal] = useState(false);

    const handleOptionChangeArousal = (event) => {
        const newSelectedValue = event.target.value;

        setSelectedValueArousal(newSelectedValue);

        props.onChangeArousal(newSelectedValue);
    };



    const [selectedValueValance, setSelectedValueValance] = useState("-1");

    const [selectedValance, SetSelectedValance] = useState(false);

    const handleOptionChangeValance = (event) => {
        const newSelectedValue = event.target.value;

        setSelectedValueValance(newSelectedValue);

        props.onChangeValance(newSelectedValue);
    };




    return (
        <div className="card mb-4">
            <div className="card-header fw-500">{props.question}</div>



            <div className="card-body d-flex justify-content-around mt-5" style={{
                flexDirection: "column"
            }
            }>
          


            </div>
        </div>
    );
}

export default SimilarityShape;