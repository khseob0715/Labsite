import React from 'react'
import FeatherIcon from "feather-icons-react";
import { Modal } from 'react-bootstrap';


const CustomLoading = ({message, show, handleClose, action}) => {

    return (
        <Modal show={show} onHide={handleClose} centered>
            <div className="card bg-dark text-white modal-content">
                <div className="modal-header" style={{ padding: "0.5rem 0.5rem", borderBottom:"0px" }}>
                    <FeatherIcon className="featherAlert" icon="alert-circle" style={{stroke:"#f2f6fc", width: 24, height: 24}} />
                    <h1
                        className="modal-title fw-500 text-white"
                        id="exampleModalLabel"
                    >
                        대기!
                    </h1>
                    <button className="btn-close" type="button" style={{opacity:"0"}}/>
                </div>
                
                
                <div className="Loadingcontainer">
                    <div className="Loadingcenter">
                        <div className="loader"/>        
                    </div>
                </div>
                <div className="modal-body fw-400 text-white">{message}</div>
            </div>
        </Modal>
    )
};

export default CustomLoading;
