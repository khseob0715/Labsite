import React, { useState } from 'react';

const marks = [
    {
        value: 1,
        label: '1',
    },
    {
        value: 2,
        label: '2',
    },
    {
        value: 3,
        label: '3',
    },
    {
        value: 4,
        label: '4',
    },
    {
        value: 5,
        label: '5',
    },
    {
        value: 6,
        label: '6',
    },
    {
        value: 7,
        label: '7',
    },
];

function SevenPointLikert(props) {
    const [selectedOption, setSelectedOption] = useState("-1");



    const handleOptionChange = (event) => {
        const newSelectedValue = event.target.value;

        setSelectedOption(newSelectedValue);

        props.onChange(newSelectedValue);
    };

    const radios = props.optionNames.map((option, index) => (
        <label className="form-check-label form-radio-container d-flex align-items-center flex-column"
            htmlFor={`${props.SaveId}${index}`} key={index}>
            <label className='form-check-label mb-2' htmlFor={`${props.SaveId}${index}`}>
                {option.label}
            </label>
            <input
                className="mt-3 form-check-input"
                type="radio"
                id={`${props.SaveId}${index}`}
                name={props.radioName}
                value={option.value}
                checked={selectedOption == option.value}
                onChange={handleOptionChange}
            />
        </label>

    ));


    return (
        <div className="card mb-4 ">
            <div className="card-header fw-500">{props.question}</div>
            <div className="card-body d-flex justify-content-around mb-3">
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

export default SevenPointLikert;