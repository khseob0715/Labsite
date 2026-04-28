import React from "react";
import { Link } from "react-router-dom";
import HEADER from '../../components/Header';

function Intro() {
    return (
        <>
            <HEADER
                title={"Color Room"}
                contents={"설문 내용 / 실험 대상자 조건 제대로 확인 후 피실험자에게 제공할 것"}
            />

           

            <div className="d-flex m-5 hswrap">
                <div className="mt-2 d-flex flex-column">

                    <div className="questionList flex-column col-xl-12 col-md-12 mb-8 d-flex justify-content-center" 
                    
                    
                    style={{ position: "relative", zIndex: 2 }}>
                        
                        
                        <div className=" col-xl-6 col-md-6 mb-4 m-5">
                            <Link className="btn btn-primary  rowBT"
                                type="button" to="/colormap/pre">
                                사전 설문 (BFI / MSSQ / VIMSSQ / PANAS )
                            </Link>
                        </div>

                        <div className="col-xl-6 col-md-6 mb-4 m-5 ">

                            <a className="btn btn-red rowBT" href="https://forms.gle/ik459sCCCoHLNrVz7"
                                target="_blank" rel="noopener noreferrer">
                                실험 전 색상 설문 (구글)
                            </a>

                        </div>

                        <div className="col-xl-6 col-md-6 mb-4 m-5 ">
                            <Link className="btn btn-secondary  rowBT"
                                type="button" to="/colormap/postcd">
                                조건 후 설문 (SSQ, SIMTLX, SP)
                            </Link>
                        </div>


                        <div className="col-xl-6 col-md-6 mb-4 m-5 ">

                            <a className="btn btn-red rowBT" href="https://forms.gle/jo9p3khn1AZ5jzSKA"
                                target="_blank" rel="noopener noreferrer">
                                사후 설문 (구글 설문지)
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}
export default Intro;
