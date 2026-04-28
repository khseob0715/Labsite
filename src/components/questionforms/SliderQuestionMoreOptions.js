import React, { useState } from 'react';
import {
    Slider,
    Grid,
    Item,
} from "@mui/material";

import { ClickAwayListener } from '@mui/base';


  

function SliderQuestionMoreOptions(props) {

    
    const valueLabelFormat = (value) => {

        const i = props.marks.findIndex(item => item.value === value);

        // if(props.min == 0)
        // {
            
        // }
        // else if(props.min == 1)
        // {
        //     return `${value} ${props.marks[i -1].label}`; // 원하는 형식으로 값을 포맷팅
        // }
        return `${value} ${props.marks[i].label}`; // 원하는 형식으로 값을 포맷팅
        
    };

    
    const [selectedValue, setSelectedValue] = useState("-1");

    // 최초 선택을 위한 UseState
    const [selected, SetSelected] = useState(false);

    const localhandleOptionChange = (event) => {
        const newSelectedValue = event.target.value;

        setSelectedValue(newSelectedValue);

        // 이것이 global // 외부로 값 넘기기 위한 함수. 
        props.onChange(newSelectedValue);
    };

    return (
        <div className="card mb-4">
            <div className="card-header fw-700" style={{color:"#494949",  fontSize:"1.25rem",}}>
                {props.question}
            </div>

            <div className="card-body d-flex justify-content-around mx-5 mt-5 mb-2 pt-2" style={{
                flexDirection: "column"
            }
            }>
                <div>
                    <Grid container spacing={4}>
                        <Grid item xs={12} mx={4}>
                            <Slider
                                onMouseDown={() => { SetSelected(true) }}
                                defaultValue={0}

                                aria-label="Custom marks"
                                step={props.step}

                                min={props.min}
                                max={props.max}

                                valueLabelDisplay={selected == true ? "on" : "off"}
                                marks={props.marks}
                                valueLabelFormat={valueLabelFormat}
                                onChange={localhandleOptionChange}
                                sx={{
                                    // color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
                                    height: 16,
                                    padding: "0 0 16px  0",
                                    '& .MuiSlider-thumb': {
                                      width: 32,
                                      height: 32,
                                    //   transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
                                    background: selected ? "primary" : 'rgba(0,0,0,0.0)',
                                    boxShadow: selected ? '0 2px 12px 0 rgba(0,0,0,0.4)' : '',
                                      '&:before': {
                                        boxShadow: '0 2px 12px 0 rgba(0,0,0,0)',
                                       },
                                    
                                    //   '&:hover, &.Mui-focusVisible': {
                                    //     boxShadow: `0px 0px 0px 8px ${
                                    //       theme.palette.mode === 'dark'
                                    //         ? 'rgb(255 255 255 / 16%)'
                                    //         : 'rgb(0 0 0 / 16%)'
                                    //     }`,
                                    //   },
                                    //   '&.Mui-active': {
                                    //     width: 20,
                                    //     height: 20,
                                    //   },
                                    },
                                    '& .MuiSlider-mark':{
                                        width:16,
                                        height:16,
                                        borderRadius:8,
                                    },
                                    '& .MuiSlider-markLabel':{
                                        top:40,
                                        fontSize:"1.25rem",
                                        fontWeight:800
                                    }
                                  }}
                            />
                        </Grid>
                    </Grid>
                </div>

            </div>
        </div>
    );
}

export default SliderQuestionMoreOptions;