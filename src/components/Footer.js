import React from 'react';
import { Link } from 'react-router-dom';
import FeatherIcon from "feather-icons-react";
import { useAlert } from 'react-alert';
import './Footer.css';

const Footer = () => {
    const alert = useAlert();

    const handleCopyEmail = (e, email) => {
        e.preventDefault();
        navigator.clipboard.writeText(email);
        alert.show('이메일이 복사되었습니다.');
    };

    return (
        <footer className="footer-dark">
            <div className="container-xl">
                <div className="row">
                    <div className="col-md-4 mb-4 mb-md-0">
                        <h5 className="footer-title">
                            {/* KU Sejong DXP Lab */}
                            IMX Lab
                        </h5>
                        <p className="footer-text">
                            HCI & VR/AR 기술의 미래를 함께 이끌어갈 열정적인 연구원을 기다립니다.
                        </p>
                        <div className="social-icons">
                            <a href="#!" className="social-icon"><FeatherIcon icon="github" style={{ width: 20, height: 20, stroke: 'white' }} /></a>
                            <a href="#!" className="social-icon"><FeatherIcon icon="youtube" style={{ width: 20, height: 20, stroke: 'white' }} /></a>
                            <a href="#!" className="social-icon"><FeatherIcon icon="instagram" style={{ width: 20, height: 20, stroke: 'white' }} /></a>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-4 mb-4 mb-md-0">
                                <h6 className="footer-heading">Quick Links</h6>
                                <ul className="footer-links">
                                    <li><Link to="/research">Research</Link></li>
                                    <li><Link to="/publication">Publication</Link></li>
                                    <li><Link to="/team">Team</Link></li>
                                    <li><Link to="/join-us">Join Us</Link></li>
                                </ul>
                            </div>
                            <div className="col-md-8">
                                <h6 className="footer-heading">Contact</h6>
                                <ul className="footer-contact">
                                    {/* <li>
                                        <FeatherIcon icon="map-pin" className="me-2" style={{ width: 18, height: 18, stroke: 'white' }} />
                                        (30019) 세종특별자치시 세종로 2511 고려대학교 세종캠퍼스 과학기술대학 2관
                                    </li> */}
                                    <li>
                                        <FeatherIcon icon="mail" className="me-2" style={{ width: 18, height: 18, stroke: 'white' }} />
                                    <a href="#!" onClick={(e) => handleCopyEmail(e, 'contact@dxplab.korea.ac.kr')} className="text-decoration-none" style={{ color: 'inherit', cursor: 'pointer' }}>
                                        khseob0715@konyang.ac.kr
                                    </a>
                                    </li>
                                    <li>
                                        <FeatherIcon icon="phone" className="me-2" style={{ width: 18, height: 18, stroke: 'white' }} />
                                        041-860-XXXX
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="footer-divider" />
                <div className="footer-bottom">
                    <p className="mb-0">
                        {/* COPYRIGHT &copy; {new Date().getFullYear()} KOREA UNIVERSITY SEJONG CAMPUS. ALL RIGHTS RESERVED. */}
                    </p>
                    <div className="footer-bottom-links">
                        {/* <Link to="#!">개인정보처리방침</Link> */}
                        <p>이메일무단수집거부</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;