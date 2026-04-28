import React, { useState } from 'react';


function RadioAudio(props) {
    let referenceAudio = new Audio(props.referenceAudioPath);
    let synthesizeAudio = new Audio(props.synthesizeAudioPath);

    const [selectedOptionSimliar, setSelectedOptionSimliar] = useState("-1");
    const [selectedOptionQuality, setSelectedOptionQuality] = useState("-1");

    const referencePlay = () => {
        referenceAudio.play();
    }

    const synthesizePlay = () => {
        synthesizeAudio.play();
    }


    const handleOptionChangeSimliar = (event) => {
        const t = event.target.value;

        setSelectedOptionSimliar(t);

        props.onChangeSimilar(t);
    };

    const handleOptionChangeQuality = (event) => {
        const t = event.target.value;

        setSelectedOptionQuality(t);

        props.onChangeQuality(t);
    };




    const radiosSimliar = props.optionNames.map((option, index) => (
        <label className="form-check-label form-radio-container d-flex align-items-center flex-column"
            htmlFor={`${props.audioIndex}simliary${index}`} key={index}>
            <label className='form-check-label mb-2' htmlFor={`${props.audioIndex}simliary`}>
                {option.label}
            </label>
            <input
                className="mt-3 form-check-input"
                type="radio"
                id={`${props.audioIndex}simliary${index}`}
                name={`${props.audioIndex}simliary${index}`}
                value={option.value}
                checked={selectedOptionSimliar == option.value}
                onChange={handleOptionChangeSimliar}
            />
        </label>

    ));

    const radiosQuality = props.optionNames.map((option, index) => (
        <label className="form-check-label form-radio-container d-flex align-items-center flex-column"
            htmlFor={`${props.audioIndex}quality${index}`} key={index}>
            <label className='form-check-label mb-2' htmlFor={`${props.audioIndex}quality`}>
                {option.label}
            </label>
            <input
                className="mt-3 form-check-input"
                type="radio"
                id={`${props.audioIndex}quality${index}`}
                name={`${props.audioIndex}quality${index}`}
                value={option.value}
                checked={selectedOptionQuality == option.value}
                onChange={handleOptionChangeQuality}
            />
        </label>
    ));




    return (
        <>
            <div className="card mb-4">

                <div className="m-1">
                    <button className='btn btn-primary m-3' onClick={() => {referencePlay();}}>Reference Speaker 음성</button>                </div>
                <div className="mb-1 mx-1 d-flex align-items-center">
                    <button className='btn btn-green mx-3' onClick={()=> {synthesizePlay();}}>합성된 음성</button>
                    <div className="fw-500">{props.transcript}</div>
                </div>
                <div className='card-header d-flex justify-content-between'>
                    <div className="fw-500">Reference 음성과 합성된 음성을 듣고, 음성의 유사도를 평가해주세요</div>
                    <div className='text-invisible-header'>{props.audioIndex}</div>
                </div>
                <div className="card-body d-flex justify-content-around">
                    {radiosSimliar}
                </div>

                <div className='card-header d-flex justify-content-between card-header_addit'>
                    <div className="fw-500">Reference 음성과 합성된 음성을 듣고, 음성의 질을 평가해주세요</div>
                    <div className='text-invisible-header'>{props.audioIndex}</div>
                </div>
                <div className="card-body d-flex justify-content-around">
                    {radiosQuality}
                </div>
            </div>
        </>
    );
}

export default RadioAudio;