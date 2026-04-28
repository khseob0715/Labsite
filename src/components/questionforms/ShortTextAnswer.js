import React, { useState } from "react";

function ShortTextAnswer({ question, SaveId, hint, onChange }) {

    const [answer, setAnswer] = useState("");

    const handleAnswerChange = (event) => {
        const newAnswer = event.target.value;

        setAnswer(newAnswer);

        onChange(newAnswer);
    };

    return (
        <div className="card mb-4">
            <div className="card-header fw-500">{question}</div>
            <div className="card-body">
                <input
                    className="questionContents"
                    type="text"
                    id={SaveId}
                    placeholder={hint}
                    value={answer} 
                    onChange={handleAnswerChange}
                />
            </div>
        </div>
    )
}

export default ShortTextAnswer;