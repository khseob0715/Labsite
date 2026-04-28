import React, { useState } from 'react';
import {
    Slider,
} from "@mui/material";

function ColorRoomImage(props) {
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
                <div className='d-flex justify-content-between mb-2'>
                    <img src={process.env.PUBLIC_URL + props.imageUrl} alt="이미지 설명" 
                     style={{width: "100%"}}
                    />

                    
                </div>

                <div className='d-flex justify-content-between'>
                   
                    <img src={process.env.PUBLIC_URL + props.imageUrlVR} alt="이미지 설명" 
                     style={{width: "100%"}}
                    />
                </div>


                <div className='d-flex justify-content-between mt-5 flex-column'>
                    <div className='card-header fw-500 mb-4'>
                        <b className='fw-900'>"Arousal" </b> 
                        위 방을 보고 느껴지는 감정을 골라주세요  <br/>
                         [왼쪽] 차분함, (calmness, Deactivation) ---------- [오른쪽] 활발함, 활동적(excitement, Activation)
                        {/* : 그림은 방에서 느끼는 차분함/흥분됨(calmness/excitement)의 정도를 나타냅니다. 
                          (왼쪽) 편안하고 졸린 것부터 (오른쪽) 폭발적으로 흥분되는 */}
                    </div>

                    <img src={process.env.PUBLIC_URL + props.imageUrlArousal} alt="이미지 설명" 
                     style={{width: "100%"}}
                    />
                </div>


                <div className='mb-4'>
                    <Slider
                        onMouseDown = {()=>{SetSelectedArousal(true)}}
                        size="small step"
                        min={1}
                        max={9}
                        step={1}
                        marks
                        sx={{
                            padding: "0px",
                        }}
                        valueLabelDisplay= {selectedArousal == true ? "on" : "off"}
                        defaultValue={1}
                        aria-label="Small"
                        onChange={handleOptionChangeArousal}
                    />
                </div>

                <div className='d-flex justify-content-between mt-5 flex-column'>

                    <div className='card-header fw-500 mb-4'><b className='fw-900'>"Valence" </b> 
                        {/* : 그림은 방에서 느끼는 슬픔/행복함(sadness/happiness)의 정도를 나타냅니다. 
                          (왼쪽) 눈살을 찌푸리게 하며 매우 슬픈 (오른쪽) 웃고 아주 행복한 사람 */}
                         위 방을 보고 느껴지는 감정을 골라주세요 <br/>
                         [왼쪽] 부정적, 싫음(negative,Unpleasant) ---------- [오른쪽] 긍정적, 좋음(positive,pleasant)
                    </div>

                    <img src={process.env.PUBLIC_URL + props.imageUrlValance} alt="이미지 설명" 
                     style={{width: "100%"}}
                    />
                </div>

                <div>
                    <Slider
                        onMouseDown = {()=>{SetSelectedValance(true)}}
                        size="small step"
                        min={1}
                        max={9}
                        step={1}
                        marks
                        sx={{
                            padding: "0px",
                        }}
                        valueLabelDisplay= {selectedValance == true ? "on" : "off"}
                        defaultValue={1}
                        aria-label="Small"
                        onChange={handleOptionChangeValance}
                    />
                </div>


            </div>
        </div>
    );
}

export default ColorRoomImage;