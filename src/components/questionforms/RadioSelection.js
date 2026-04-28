import React, { useState } from "react";

function RadioSelection(props) {

    const [answer, setAnswer] = useState("");

    const handleAnswerChange = (event) => {
        const newAnswer = event.target.value;

        setAnswer(newAnswer);

        props.onChange(newAnswer);
    };

    const radios = props.optionNames.map((option, index) => (
        <div className="form-check form-radio-container me-3 mb-3 border-bottom" key={index}>
            <input
                className="form-check-input"
                id={`${props.SaveId}${index}`}
                type="radio"
                value={option}
                name={props.radioName}
                onChange={handleAnswerChange}
                checked={answer === option}
            />
            <label className="form-check-label" htmlFor={`${props.SaveId}${index}`}>
                {option}
            </label>
        </div>
    ));



    return (
        <div className="card mb-4">
            <div className="card-header fw-500">{props.question}</div>
            <div className="card-body ">
                {radios}
            </div>
        </div>
    )
}
export default RadioSelection;





