import React, { useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import FeatherIcon from "feather-icons-react";
import { Collapse } from 'bootstrap'; // Bootstrap의 Collapse JavaScript를 사용하기 위해 임포트


const TopNav = () => {
    const navLinkStyle = {
        fontWeight: "500",
        color: "#575757",
        margin: "0 0.5rem"
    };

    const activeLinkStyle = {
        color: "#8b0029",
        fontWeight: "700",
    };

    const navbarTogglerRef = useRef(null);
    const navbarCollapseRef = useRef(null);

    const handleNavLinkClick = () => {
        // Collapse 메뉴가 열려있을 경우에만 닫도록 처리
        if (navbarCollapseRef.current && navbarCollapseRef.current.classList.contains('show')) {
            // Bootstrap의 Collapse 기능을 직접 호출하여 메뉴를 닫습니다.
            // 또는 navbarTogglerRef.current.click() 을 사용하여 토글 버튼을 클릭하는 효과를 낼 수도 있습니다.
            const bsCollapse = new Collapse(navbarCollapseRef.current, {
                toggle: false
            });
            bsCollapse.hide();
        }
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top py-3" style={{ zIndex: 1030 }}>
            <div className="container-fluid px-4">
                <Link className="navbar-brand d-flex align-items-center" to="/" style={{ color: "#8b0029", fontWeight: "bold", fontSize: "1.25rem" }}>
                    <FeatherIcon icon="box" className="me-2" style={{ width: 24, height: 24, stroke: "#8b0029" }} />
                    IMX Lab
                </Link>
                <button ref={navbarTogglerRef} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#topNavCollapse" aria-controls="topNavCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div ref={navbarCollapseRef} className="collapse navbar-collapse" id="topNavCollapse">
                    <ul className="navbar-nav ms-auto">
                        {/* 각 NavLink에 onClick 이벤트 핸들러 추가 */}
                        <li className="nav-item"><NavLink className="nav-link" style={navLinkStyle} activeStyle={activeLinkStyle} exact to="/" onClick={handleNavLinkClick}>Home</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" style={navLinkStyle} activeStyle={activeLinkStyle} to="/team" onClick={handleNavLinkClick}>Members</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" style={navLinkStyle} activeStyle={activeLinkStyle} to="/research" onClick={handleNavLinkClick}>Research</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" style={navLinkStyle} activeStyle={activeLinkStyle} to="/project" onClick={handleNavLinkClick}>Projects</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" style={navLinkStyle} activeStyle={activeLinkStyle} to="/publication" onClick={handleNavLinkClick}>Publications</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" style={navLinkStyle} activeStyle={activeLinkStyle} to="/course" onClick={handleNavLinkClick}>Lectures</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" style={navLinkStyle} activeStyle={activeLinkStyle} to="/news" onClick={handleNavLinkClick}>Activities</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" style={navLinkStyle} activeStyle={activeLinkStyle} to="/gallery" onClick={handleNavLinkClick}>Gallery</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" style={navLinkStyle} activeStyle={activeLinkStyle} to="/join-us" onClick={handleNavLinkClick}>Join Us</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default TopNav;