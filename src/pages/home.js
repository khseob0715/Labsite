import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react"; // https://feathericons.com/
import Hero from '../components/Hero';
import { newsData } from './News'; // Import news data
import { publicationsData } from './Publication'; // Import publication data

function Home() {
    // Filter and sort recent publications
    const recentPublications = publicationsData.internationalpaper
        .filter(pub => pub.tags && (pub.tags.includes('SCIE') || pub.tags.includes('BK21')))
        .sort((a, b) => {
            const yearA = a.details.match(/\b\d{4}\b/);
            const yearB = b.details.match(/\b\d{4}\b/);
            return (yearB ? parseInt(yearB[0]) : 0) - (yearA ? parseInt(yearA[0]) : 0);
        })
        .slice(0, 9); // Show top 10

    const VisitorCounter = () => {
        const [todayCount, setTodayCount] = useState('...');
        const [totalCount, setTotalCount] = useState('...');

        useEffect(() => {
            const workspace = 'hanseob-kims-team-3950';
            const counterName = 'first-counter-3950';

            // 'en-CA' 로케일은 'Asia/Seoul' 시간대에 대해 신뢰할 수 있는 YYYY-MM-DD 형식을 제공합니다.
            const todayDateString = new Date().toLocaleDateString('en-CA', { timeZone: 'Asia/Seoul' });
            const lastVisitDate = localStorage.getItem('lastVisitDate');

            const fetchStats = async () => {
                try {
                    // 접속(새로고침)할 때마다 카운트 1 증가 API 무조건 호출
                    // Only increment if it's the first visit today
                    if (lastVisitDate !== todayDateString) {
                        await fetch(`https://api.counterapi.dev/v2/${workspace}/${counterName}/up`).catch(() => {});
                        localStorage.setItem('lastVisitDate', todayDateString);
                    }

                    // stats API를 호출하여 전체(Total)와 오늘(Today) 방문자 수를 한 번에 가져옴
                    const res = await fetch(`https://api.counterapi.dev/v2/${workspace}/${counterName}/stats`);
                    
                    if (res.ok) {
                        const json = await res.json();
                        setTotalCount(json.data.up_count.toLocaleString());
                        setTodayCount(json.data.stats.today.up.toLocaleString());
                    }
                } catch (error) {
                    console.error('Failed to fetch visitor stats:', error);
                    setTodayCount('-');
                    setTotalCount('-');
                }
            };

            fetchStats();
        }, []);

        return (
            <div
                className="position-fixed shadow rounded-pill bg-white d-none d-md-flex align-items-center px-3 py-2 lift"
                style={{
                    bottom: '30px',
                    right: '30px',
                    zIndex: 1040,
                    border: '1px solid rgba(139, 0, 41, 0.2)'
                }}
            >
                <FeatherIcon
                    icon="bar-chart-2"
                    style={{
                        width: 16,
                        height: 16,
                        color: '#8b0029',
                        marginRight: '10px'
                    }}
                />

                <div className="d-flex align-items-center me-3">
                    <span
                        className="fw-bold"
                        style={{ fontSize: '0.8rem', color: '#8b0029' }}
                    >
                        Today
                    </span>
                    <span
                        className="ms-2 fw-bolder text-dark"
                        style={{ fontSize: '0.85rem' }}
                    >
                        {todayCount}
                    </span>
                </div>

                <div className="d-flex align-items-center">
                    <span
                        className="fw-bold"
                        style={{ fontSize: '0.8rem', color: '#8b0029' }}
                    >
                        Total
                    </span>
                    <span
                        className="ms-2 fw-bolder text-dark"
                        style={{ fontSize: '0.85rem' }}
                    >
                        {totalCount}
                    </span>
                </div>
            </div>
        );
    };

    return (
        <>
            <Hero />
            <div className="container-xl px-4 mt-5">
                <style>
                    {`
                        .custom-scrollbar::-webkit-scrollbar {
                            width: 6px;
                        }
                        .custom-scrollbar::-webkit-scrollbar-track {
                            background: #f8f9fa;
                        }
                        .custom-scrollbar::-webkit-scrollbar-thumb {
                            background: #dee2e6;
                            border-radius: 4px;
                        }
                        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                            background: #adb5bd;
                        }
                    `}
                </style>


                {/* About Our Lab & Latest Updates 영역 */}
                <div className="row mb-5">
                    {/* About Our Lab */}
                    <div className="col-lg-6 mb-4 mb-lg-0 d-flex flex-column">
                        <div className="card h-100 shadow-sm" style={{ borderRadius: "15px", overflow: 'hidden', border: 'none', borderLeft: '5px solid #8b0029' }}>
                            <div className="card-header bg-gray-100 border-0 pt-4 px-4">
                                <h3 className="fw-bolder mb-0 d-flex align-items-center" style={{ color: "#8b0029" }}>
                                    <FeatherIcon icon="chrome" className="me-4" style={{ width: 24, height: 24, stroke: "#8b0029" }} />
                                    {/* 고려대학교 세종캠퍼스 DXP 연구실 */}
                                    건양대학교 IMX 연구실
                                </h3>
                            </div>
                            <div className="card-body p-4 d-flex flex-column">
                                <p className="text-dark fs-5 mb-4" style={{ textAlign: "justify", wordBreak: "keep-all" }}>
                                    우리 연구실은 가상현실(VR), 증강현실(AR) 및 인간-컴퓨터 상호작용(HCI) 분야의 다양한 주제를 연구합니다. 기술과 인간의 조화를 목표로 사용자 중심의 인터페이스 설계 및 경험(UX) 평가를 진행하고 있으며, 인공지능(AI) 모델 개발과 혁신적인 상호작용 기법 연구에 매진하고 있습니다.
                                </p>
                                <div className="mt-auto">
                                    <Link to="/research" className="btn text-white" style={{ backgroundColor: "#8b0029", borderRadius: "8px" }}>
                                        연구 자세히 보기 <FeatherIcon icon="arrow-right" className="ms-1" style={{ width: 16, height: 16, stroke: 'white' }} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Latest Updates */}
                    <div className="col-lg-6 mt-4 mt-lg-0 d-flex flex-column">
                        <div className="card h-100 shadow-sm d-flex flex-column" style={{ borderRadius: "15px", overflow: 'hidden', border: 'none', borderLeft: '5px solid #8b0029' }}>
                            <div className="card-header mb-3 bg-light border-0 pt-4 pb-3 px-4 d-flex justify-content-between align-items-center">
                                <h3 className="fw-bolder mb-0 d-flex align-items-center text-nowrap" style={{ color: "#8b0029" }}>
                                    <FeatherIcon icon="radio" className="me-3" style={{ width: 24, height: 24, stroke: "#8b0029" }} />
                                    Latest News
                                </h3>
                                <Link to="/news" className="text-decoration-none d-flex align-items-center" style={{ color: '#8b0029', fontWeight: 'bold' }}>
                                    View All News <FeatherIcon icon="arrow-right" className="ms-1" style={{ width: 14, height: 14, stroke: '#8b0029' }} />
                                </Link>
                            </div>
                            <div className="list-group list-group-flush custom-scrollbar flex-grow-1" style={{ overflowY: "auto", maxHeight: "260px" }}>
                                {newsData.slice(0, 10).map((item, index) => {
                                    let badgeColor = '';
                                    switch (item.type) {
                                        case '공지':
                                            badgeColor = '#8b0029'; // Crimson
                                            break;
                                        case '연구':
                                            badgeColor = '#157608'; // Secondary gray
                                            break;
                                        case '행사':
                                            badgeColor = '#0d6efd'; // Primary blue
                                            break;
                                        case '강연':
                                            badgeColor = '#6f42c1'; // Purple
                                            break;
                                        case '전시':
                                            badgeColor = '#bc6015'; // Orange
                                            break;
                                        default:
                                            badgeColor = '#6c757d';
                                    }
                                    return (
                                        <Link to="/news" key={index} className="list-group-item list-group-item-action px-4 py-2 d-flex align-items-start border-0 border-bottom">
                                            <div className="me-3">
                                                <span className="badge text-white px-2 py-1" style={{ backgroundColor: badgeColor, fontSize: "0.8rem" }}>{item.type}</span>
                                            </div>
                                            <div className="flex-grow-1 overflow-hidden">
                                                <h6 className="mb-1 fw-bold text-dark text-truncate">{item.title}</h6>
                                                <small className="text-muted">{item.date}</small>
                                            </div>
                                        </Link>
                                    );
                                })}
                                <div className="text-center py-4">
                                    <Link to="/news" className="btn btn-sm rounded-pill px-4 fw-bold text-white shadow-sm" style={{ backgroundColor: '#8b0029', border: 'none' }}>
                                        더 많은 뉴스 보기
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Join Our Lab CTA 영역 */}
                <div className="row mb-5">
                    <div className="col-12">
                        <div className="card border-0 shadow-sm overflow-hidden text-white" style={{ borderRadius: "20px", backgroundImage: 'linear-gradient(45deg, #a00029, #6d001a)' }}>
                            <div className="card-body p-5 d-flex align-items-center justify-content-between flex-column flex-md-row">
                                <div className="mb-4 mb-md-0 me-md-4">
                                    <h2 className="text-white display-6 fw-bolder mb-2">Join Our Lab</h2>
                                    <p className="text-white-75 mb-0" style={{ fontSize: "1.05rem", textAlign: "justify", wordBreak: "keep-all" }}>HCI와 VR/AR 기술의 미래를 함께 이끌어갈 열정적인 연구원을 기다립니다. <br className="d-none d-md-block" />학부 연구생 및 대학원 과정에 관심 있으신 분들은 언제든 연락주세요.</p>
                                </div>
                                <div className="flex-shrink-0">
                                    <Link to="/join-us" className="btn btn-lg btn-light shadow-sm lift" style={{ color: '#8b0029', fontWeight: 'bold', borderRadius: "10px", padding: "12px 24px" }}>
                                        지원하기 <FeatherIcon icon="user-plus" className="ms-2" stroke="#8b0029" style={{ width: 20, height: 20 }} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Highlight Research 영역 */}
                <div className="mb-5 pt-4">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h1 className="display-5 fw-bolder mb-0">Latest Publications</h1>
                        <Link to="/publication" className="text-decoration-none d-flex align-items-center" style={{ color: '#8b0029', fontWeight: 'bold' }}>
                            View All Publications
                            <FeatherIcon icon="arrow-right" className="ms-1" style={{ width: 16, height: 16, stroke: '#8b0029' }} />
                        </Link>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            {recentPublications.map((pub, index) => {
                                const yearMatch = pub.details.match(/\b\d{4}\b/);
                                const year = yearMatch ? yearMatch[0] : 'N/A';
                                return (
                                    <a href={pub.link} target="_blank" rel="noopener noreferrer" className="text-decoration-none" key={index}>
                                        <div className="card card-body mb-3 shadow-sm border-0 lift">
                                            <h6 className="fw-bolder text-dark mb-1">{pub.title}</h6>
                                            <p className="text-muted small mb-0">
                                                {pub.journal} ({year})
                                            </p>
                                        </div>
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>

            </div>

            {/* Visitor Counter Section (Floating) */}
            <VisitorCounter />

        </>
    );

}
export default Home;
