import React from "react";
import { Link } from "react-router-dom";
import HEADER from '../../components/Header';

function Main() {
    return (
        <>
            <HEADER
                title={"Lifter"}
                contents={"설문 내용 / 실험 대상자 조건 제대로 확인 후 피실험자에게 제공할 것"}
            />

            <div className="d-flex" style={{ height: "600px", alignItems: "center" }}>
                <div className="d-flex flex-column" style={{ width: "100%", alignItems: "center" }}>
                    <div className="m-5">
                        <Link className="btn btn-primary  rowBT" 
                            type="button" to="/lifter/prequestion">
                            사전 설문 (BFI, Neck Pain)
                        </Link>
                    </div>

                    <div className="m-5 ">
                        <Link className="btn btn-secondary  rowBT"  
                            type="button" to="/lifter/sessionquestion">
                            세션 설문
                        </Link>
                    </div>

                    <div className="m-5 ">
                        <Link className="btn btn-red  rowBT"  
                            type="button" to="/lifter/postquestion">
                            사후 설문
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );

}
export default Main;
