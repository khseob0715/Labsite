import React, { useState } from 'react';

function RadioLikertScaleEndPoint(props) {
    const [selectedOption, setSelectedOption] = useState("-1");

    const handleOptionChange = (event) => {
        const newSelectedValue = event.target.value;

        setSelectedOption(newSelectedValue);

        props.onChange(newSelectedValue);
    };

    const radios = props.optionNames.map((option, index) => (
        <label className="form-check-label form-radio-container d-flex align-items-center flex-column"
            htmlFor={`${props.SaveId}_${index}`} key={index}>
            <label className='form-check-label mb-2' htmlFor={`${props.SaveId}_${index}`} >
                {option.label}
            </label>
            <input
                className="mt-3 form-check-input"
                type="radio"
                id={`${props.saveId}_${index}`}
                name={`name_${props.radioName}_${index}`}
                value={option.value}
                checked={selectedOption == option.value}
                onChange={handleOptionChange}
            />
        </label>

    ));

    return (
        <div className="card mb-4">
            <div className='card-header d-flex justify-content-between'>
                <div className="fw-500">{props.question} </div>
                <div className='text-invisible-header'>{props.SaveId}</div>
            </div>
            <div className="card-body d-flex justify-content-around">
                <div className="d-flex align-items-end">
                    {props.optionLabels[0].label}
                </div>

                {radios}
                <div className="d-flex align-items-end">
                    {props.optionLabels[1].label}
                </div>
            </div>
        </div>
    );
}

export default RadioLikertScaleEndPoint;