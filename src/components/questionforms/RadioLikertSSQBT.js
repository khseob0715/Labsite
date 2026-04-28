import React, { useState } from 'react';

function RadioLikertSSQBT(props) {
    const [selectedOption, setSelectedOption] = useState("-1");
    const [selectedOption_v, setSelectedOption_v] = useState("-1");
    const [selectedOption_b, setSelectedOption_b] = useState("-1");


    const handleOptionChange = (event) => {
        const newSelectedValue = event.target.value;

        setSelectedOption(newSelectedValue);

        props.onChange(newSelectedValue);
    };

    const handleOptionChange_v = (event) => {
        const newSelectedValue_t = event.target.value;

        setSelectedOption_v(newSelectedValue_t);

        props.onChange_v(newSelectedValue_t);
    };


    const handleOptionChange_b = (event) => {
        const newSelectedValue_b = event.target.value;

        setSelectedOption_b(newSelectedValue_b);

        props.onChange_b(newSelectedValue_b);
    };



    const radios = props.optionNames.map((option, index) => (
        <label className="form-check-label form-radio-container d-flex align-items-center flex-column"
            htmlFor={`${props.contents.OriginalId}${index}`} key={index}>
            <label className='form-check-label mb-2' htmlFor={`${props.contents.OriginalId}${index}`}>
                {option.label}
            </label>
            <input
                className="mt-3 form-check-input"
                type="radio"
                id={`${props.contents.OriginalId}${index}`}
                name={props.contents.RadioIndex}
                value={option.value}
                checked={selectedOption == option.value}
                onChange={handleOptionChange}
            />
        </label>

    ));

    const radiosV = props.optionNames.map((option, index) => (
        <label className="form-check-label form-radio-container d-flex align-items-center flex-column"
            htmlFor={`${props.contents.AdditionalQ[0].AdditionalId}${index}`} key={index}>
            <label className='form-check-label mb-2' htmlFor={`${props.contents.AdditionalQ[0].AdditionalId}${index}`}>
                {option.label}
            </label>
            <input
                className="mt-3 form-check-input"
                type="radio"
                id={`${props.contents.AdditionalQ[0].AdditionalId}${index}`}
                name={props.contents.AdditionalQ[0].AdditionalRadioIndex}
                value={option.value}
                checked={selectedOption_v == option.value}
                onChange={handleOptionChange_v}
            />
        </label>
    ));

    const radiosB = props.optionNames.map((option, index) => (
        <label className="form-check-label form-radio-container d-flex align-items-center flex-column"
            htmlFor={`${props.contents.AdditionalQ[1].AdditionalId}${index}`} key={index}>
            <label className='form-check-label mb-2' htmlFor={`${props.contents.AdditionalQ[1].AdditionalId}${index}`} >
                {option.label}
            </label>
            <input
                className="mt-3 form-check-input"
                type="radio"
                id={`${props.contents.AdditionalQ[1].AdditionalId}${index}`}
                name={props.contents.AdditionalQ[1].AdditionalRadioIndex}
                value={option.value}
                checked={selectedOption_b == option.value}
                onChange={handleOptionChange_b}
            />
        </label>

    ));




    return (
        <>
            <div className="card mb-4">
                <div className='card-header d-flex justify-content-between'>
                    <div className="fw-500">{props.contents.Question} </div>
                    <div className='text-invisible-header'>{props.contents.OriginalId}</div>
                </div>
                <div className="card-body d-flex justify-content-around">
                    {radios}
                </div>

                <div className='card-header d-flex justify-content-between card-header_addit'>
                    <div className="fw-500">{props.contents.AdditionalQ[0].AdditionalQuestion} </div>
                    <div className='text-invisible-header'>{props.contents.AdditionalQ[0].AdditionalId}</div>
                </div>
                <div className="card-body d-flex justify-content-around">
                    {radiosV}
                </div>

                <div className='card-header d-flex justify-content-between card-header_addit'>
                    <div className="fw-500">{props.contents.AdditionalQ[1].AdditionalQuestion} </div>
                    <div className='text-invisible-header'>{props.contents.AdditionalQ[1].AdditionalId}</div>
                </div>
                <div className="card-body d-flex justify-content-around">
                    {radiosB}
                </div>
            </div>
        </>
    );
}

export default RadioLikertSSQBT;
