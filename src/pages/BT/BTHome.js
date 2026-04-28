import React from "react";
import { Link } from "react-router-dom";
import HEADER from '../../components/Header';

function BTHome() {
    return (
        <>
            <HEADER
                title={"5/1 ~ 5/12 실험 설문지"}
                contents={"설문 내용 제대로 확인 후 피실험자에게 제공할 것"}
            />

            <div className="d-flex" style={{ height: "600px", alignItems: "center" }}>
                <div className="d-flex flex-column" style={{ width: "100%", alignItems: "center" }}>
                    <div className="m-5">
                        <Link className="btn btn-primary  rowBT" 
                            type="button" to="/bt/pre">
                            첫째날 롤러코스터 설문지
                        </Link>
                    </div>

                    <div className="m-5 ">
                        <Link className="btn btn-red  rowBT"  type="button" to="/bt/main">
                            매일 훈련 후 설문지
                        </Link>
                    </div>

                    <div className="m-5 ">
                        <Link className="btn btn-secondary rowBT"  type="button" to="/bt/last">
                            마지막날 롤러코스터 설문지
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );

}
export default BTHome;
