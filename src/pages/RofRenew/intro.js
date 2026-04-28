import React from "react";
import { Link } from "react-router-dom";
import HEADER from '../../components/Header';

function Intro() {
    return (
        <>
            <HEADER
                title={"ROF _ V2 설문"}
                contents={"설문 내용 / 실험 대상자 조건 제대로 확인 후 피실험자에게 제공할 것"}
            />

            <div className="d-flex" style={{ height: "600px", alignItems: "center" }}>
                <div className="d-flex flex-column" style={{ width: "100%", alignItems: "center" }}>

                    <div className="m-5">
                        <Link className="btn btn-orange  rowBT2"
                            type="button" to="/rofrenew/mssq">
                            사전 멀미감 설문 
                        </Link>
                    </div>

                    <div className="m-5">
                        <Link className="btn btn-primary  rowBT2"
                            type="button" to="/rofrenew/pre">
                            사전 설문 
                        </Link>
                    </div>

                    <div className="m-5 ">
                        <Link className="btn btn-secondary  rowBT2"
                            type="button" to="/rofrenew/postcd">
                            조건 후 설문
                        </Link>
                    </div>


                    {/* <div className="m-5 ">
                        
                        <a className="btn btn-red rowBT" href="https://forms.gle/g7uQEM6bJ7jRWtZt6" 
                            target="_blank" rel="noopener noreferrer">
                            사후 설문 (구글 설문지)
                        </a>
                    </div> */}
                </div>
            </div>
        </>
    );

}
export default Intro;
