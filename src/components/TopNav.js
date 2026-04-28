import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import FeatherIcon from "feather-icons-react";

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

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top py-3" style={{ zIndex: 1030 }}>
            <div className="container-fluid px-4">
                <Link className="navbar-brand d-flex align-items-center" to="/" style={{ color: "#8b0029", fontWeight: "bold", fontSize: "1.25rem" }}>
                    <FeatherIcon icon="box" className="me-2" style={{ width: 24, height: 24 }} />
                    {/* KU Sejong DXP Lab */}
                    IMX Lab
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#topNavCollapse" aria-controls="topNavCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="topNavCollapse">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><NavLink className="nav-link" style={navLinkStyle} activeStyle={activeLinkStyle} exact to="/">Home</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" style={navLinkStyle} activeStyle={activeLinkStyle} to="/team">Members</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" style={navLinkStyle} activeStyle={activeLinkStyle} to="/research">Research</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" style={navLinkStyle} activeStyle={activeLinkStyle} to="/project">Projects</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" style={navLinkStyle} activeStyle={activeLinkStyle} to="/publication">Publications</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" style={navLinkStyle} activeStyle={activeLinkStyle} to="/course">Lectures</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" style={navLinkStyle} activeStyle={activeLinkStyle} to="/news">Activities</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" style={navLinkStyle} activeStyle={activeLinkStyle} to="/gallery">Gallery</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" style={navLinkStyle} activeStyle={activeLinkStyle} to="/join-us">Join Us</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default TopNav;