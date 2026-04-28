import React, { useState } from 'react';

function RadioLikertScale(props) {
    const [selectedOption, setSelectedOption] = useState("-1");

    const handleOptionChange = (event) => {
        const newSelectedValue = event.target.value;

        setSelectedOption(newSelectedValue);

        props.onChange(newSelectedValue);
    };

    const radios = props.optionNames.map((option, index) => (
        <label className="form-check-label 
                        form-radio-container 
                        d-flex 
                        align-items-center 
                        flex-column" 
            htmlFor={`${props.saveId}_${index}`} key={index}>

            <label className='form-check-label mb-2' 
                 htmlFor={`${props.saveId}_${index}`} >
                {option.label}
            </label>
            
            <input
                id={`${props.saveId}_${index}`}
                className="mt-3 form-check-input"
                type="radio"
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
                <div className='text-invisible-header'>{props.saveId}</div>
            </div>
            <div className="card-body d-flex justify-content-around">
                {radios}
            </div>
        </div>
    );
}

export default RadioLikertScale;