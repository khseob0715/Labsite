import React from "react";
import { Link } from "react-router-dom";
import HEADER from '../../components/Header';

function Intro() {
    return (
        <>
            <HEADER
                title={"Mini Map"}
                contents={"설문 내용 / 실험 대상자 조건 제대로 확인 후 피실험자에게 제공할 것"}
            />

            <div className="d-flex" style={{ height: "600px", alignItems: "center" }}>
                <div className="d-flex flex-column" style={{ width: "100%", alignItems: "center" }}>
                    <div className="m-5">
                        {/* <Link className="btn btn-primary  rowBT"
                            type="button" to="/minimap/pre">
                            사전 설문 (구글 설문지)
                        </Link> */}

                        <a className="btn btn-red rowBT" href="https://forms.gle/5q9jFU7dkT1xtw3H8" 
                            target="_blank" rel="noopener noreferrer">
                            사전 설문지 (구글 설문지)
                        </a>
                    </div>

                    <div className="m-5 ">
                        <Link className="btn btn-secondary  rowBT"
                            type="button" to="/minimap/postcd">
                            조건 후 설문
                        </Link>
                    </div>


                    <div className="m-5 ">
                        
                        <a className="btn btn-red rowBT" href="https://forms.gle/vz7qgjvs7D7r9JqA6" 
                            target="_blank" rel="noopener noreferrer">
                            사후 설문 (구글 설문지)
                        </a>

                    </div>
                </div>
            </div>
        </>
    );

}
export default Intro;
