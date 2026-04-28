import React from 'react';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';

const JoinUs = () => {
  return (
    <div className="container-xl px-4 mt-5 mb-5">
      <div className="text-center mb-5">
        <div className="badge rounded-pill mb-3 px-3 py-2 fw-bold" style={{ backgroundColor: 'rgba(139, 0, 41, 0.1)', color: '#8b0029', letterSpacing: '0.05rem' }}>
          WE ARE HIRING
        </div>
        <h1 className="display-5 fw-bolder mb-3">Join Us</h1>
        <p className="lead text-muted">IMX Lab은 VR, AR, XR, HCI, AI 기반의 차세대 실감형 인터랙션 연구를 수행하는 연구실입니다.</p>
        <hr className="w-25 mx-auto" />
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="row">
            <div className="col-lg-6 mb-5">
              {/* Graduate Students & Interns */}
              <div className="card shadow-sm h-100 rounded-4 border-0 lift" style={{ overflow: 'hidden' }}>
                <div className="card-body p-4 p-md-5">
                  <div className="d-flex align-items-center mb-4">
                    <div className="rounded-circle p-3 me-3 d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px', backgroundColor: 'rgba(139, 0, 41, 0.05)' }}>
                      <FeatherIcon icon="users" style={{ color: '#8b0029', width: 32, height: 32 }} />
                    </div>
                    <h4 className="fw-bolder mb-0">Graduate Students & Interns</h4>
                  </div>
                  <p className="text-dark mb-4">
                    DXP Lab은 가상현실(VR), 증강현실(AR), 확장현실(XR), 인간-컴퓨터 상호작용(HCI), 인공지능(AI), 실감미디어가 융합되는 지점에서 새로운 연구 문제를 탐구하는 연구실입니다.
                  </p>
                  <p className="text-dark mb-4">
                    본 연구실은 박사과정생, 석사과정생, 학부연구생과 함께 <strong className="text-dark">학술적 가치와 실용적 가치</strong>를 동시에 갖는 연구를 수행하는 것을 목표로 하고 있습니다.
                  </p>
                  <p className="text-dark mb-4">
                    특히 사용성이 높고, 편안하며, 지능적인 <strong className="text-dark">XR 경험을 설계하고 구현</strong>하는 데 관심이 있는 학생을 환영합니다.
                  </p>
                  <div className="p-3 bg-light rounded-3 mb-4">
                    <span className="fw-bold text-dark d-block mb-2"><FeatherIcon icon="target" className="me-2" style={{ width: 18, height: 18, color: '#8b0029' }} />주요 연구 분야</span>
                    <span className="small text-dark">몰입형 인터랙션, 사용자 경험, 사이버멀미, 접근성, Believable AI, 메타버스 보안, 기능성 게임, 국방 XR 등</span>
                  </div>
                  <p className="text-dark mb-0">
                    연구실 구성원은 시스템 설계, 프로토타이핑, 사용자 연구, 데이터 분석, 논문 작성, 산학협력 및 공동연구에 참여할 수 있습니다.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-5">
              {/* Application Process */}
              <div className="card shadow-sm h-100 rounded-4 border-0 lift" style={{ overflow: 'hidden' }}>
                <div className="card-body p-4 p-md-5">
                  <div className="d-flex align-items-center mb-4">
                    <div className="rounded-circle p-3 me-3 d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px', backgroundColor: 'rgba(139, 0, 41, 0.05)' }}>
                      <FeatherIcon icon="clipboard" style={{ color: '#8b0029', width: 32, height: 32 }} />
                    </div>
                    <h4 className="fw-bolder mb-0">Application Process</h4>
                  </div>

                  <div className="d-flex mb-3">
                    <div className="flex-shrink-0 me-3 mt-1">
                      <span className="badge rounded-circle d-flex align-items-center justify-content-center fw-bold" style={{ width: '28px', height: '28px', backgroundColor: '#8b0029', color: 'white', fontSize: '0.9rem' }}>1</span>
                    </div>
                    <p className="mb-0 text-muted">연구실 지원을 희망하는 학생은 먼저 <strong className="text-dark">연구실의 최근 연구 주제와 방향을 검토</strong>한 뒤, 관심 분야와의 적합성을 확인합니다.</p>
                  </div>
                  <div className="d-flex mb-3">
                    <div className="flex-shrink-0 me-3 mt-1">
                      <span className="badge rounded-circle d-flex align-items-center justify-content-center fw-bold" style={{ width: '28px', height: '28px', backgroundColor: '#8b0029', color: 'white', fontSize: '0.9rem' }}>2</span>
                    </div>
                    <p className="mb-0 text-muted">정식 지원 이전, <strong className="text-dark">이력서, 성적표, 포트폴리오(또는 프로젝트 요약 자료), 관심 연구 분야 소개서</strong>를 준비하여 이메일로 연락합니다.</p>
                  </div>
                  <div className="d-flex mb-3">
                    <div className="flex-shrink-0 me-3 mt-1">
                      <span className="badge rounded-circle d-flex align-items-center justify-content-center fw-bold" style={{ width: '28px', height: '28px', backgroundColor: '#8b0029', color: 'white', fontSize: '0.9rem' }}>3</span>
                    </div>
                    <p className="mb-0 text-muted">대학원 진학 고려 시, 서로의 협업 방식과 장기적 목표 확인을 위해 <strong className="text-dark">학부연구생 또는 인턴 형태의 선행 참여</strong>를 적극 권장합니다.</p>
                  </div>
                  <div className="d-flex mb-0">
                    <div className="flex-shrink-0 me-3 mt-1">
                      <span className="badge rounded-circle d-flex align-items-center justify-content-center fw-bold" style={{ width: '28px', height: '28px', backgroundColor: '#8b0029', color: 'white', fontSize: '0.9rem' }}>4</span>
                    </div>
                    <p className="mb-0 text-muted">서류 검토 후 적합한 지원자는 <strong className="text-dark">면담 또는 인터뷰</strong>를 진행하며, 필요시 간단한 기술 질의나 포트폴리오 리뷰가 포함될 수 있습니다.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>



          {/* Preferred Skills */}
          <div className="card shadow-sm mb-5 rounded-4 border-0 lift" style={{ overflow: 'hidden' }}>
            <div className="card-body p-4 p-md-5">
              <div className="d-flex align-items-center mb-4">
                <div className="rounded-circle p-3 me-3 d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px', backgroundColor: 'rgba(139, 0, 41, 0.05)' }}>
                  <FeatherIcon icon="star" style={{ color: '#8b0029', width: 32, height: 32 }} />
                </div>
                <h4 className="fw-bolder mb-0">Preferred Skills</h4>
              </div>
              <p className="text-muted mb-4">
                컴퓨터공학, 인공지능, 소프트웨어, 디지털콘텐츠, 게임, 디자인, 심리학, 인지과학 등 다양한 학문적 배경을 가진 학생들의 지원을 환영합니다.<br/>
                다음의 역량을 갖추신 분들을 우대합니다. </p>

              <div className="row g-4 mb-4">
                {[
                  "Unity, Unreal Engine 등 인터랙티브 3D 콘텐츠 개발 경험",
                  "VR, AR, XR 애플리케이션 설계 및 프로토타이핑 경험",
                  "HCI, UX, 사용자 연구 설계 및 평가에 대한 관심",
                  "AI/ML 기반 시스템, 행동 데이터 분석, 지능형 인터페이스 관심",
                  "C#, Python 등 인터랙티브 시스템 구현을 위한 프로그래밍 역량",
                  "센서, 시선추적, 모션트래킹, 웨어러블 인터페이스 관련 경험",
                  "기능성 게임, 디지털 트윈, 국방 XR, 실감형 응용 시스템 관심",
                  "논문 탐독, 학술 글쓰기, 문제 해결 중심의 구현 역량"
                ].map((skill, index) => (
                  <div className="col-md-6" key={index}>
                    <div className="d-flex align-items-start">
                      <FeatherIcon icon="check-circle" className="me-3 mt-1 flex-shrink-0" style={{ color: '#8b0029', width: 22, height: 22 }} />
                      <span className="text-dark fw-bold">{skill}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* <div className="alert alert-light border-0 d-flex align-items-center mb-0 mt-4" style={{ backgroundColor: '#f8f9fa' }}>
                <FeatherIcon icon="info" className="me-3 text-muted flex-shrink-0" style={{ width: 24, height: 24 }} />
                <span className="text-muted small">
                  
                </span>

              </div> */}
              <div className="alert alert-light border-0 d-flex align-items-center mb-0 mt-4" style={{ backgroundColor: '#f8f9fa' }}>
                <FeatherIcon icon="info" className="me-3 text-muted flex-shrink-0" style={{ width: 24, height: 24 }} />
                <span className="text-muted small">
                  위의 모든 역량을 갖출 필요는 없으며, 성실하게 배우고 연구를 수행하려는 태도가 더욱 중요합니다.
                </span>
              </div>
            </div>
          </div>

          {/* Contact Us */}
          <div className="card shadow-lg mb-5 text-center text-white rounded-4 lift" style={{ backgroundImage: 'linear-gradient(135deg, #8b0029 0%, #5a001a 100%)', border: 'none' }}>
            <div className="card-body p-5">
              <FeatherIcon icon="send" className="mb-4 text-white-50" style={{ width: 56, height: 56, stroke: 'white' }} />
              <h2 className="fw-bolder mb-3 text-white">Let's Build the Future Together</h2>
              <p className="text-white-75 mb-4">
                XR, HCI, AI, 실감형 인터랙티브 시스템 연구에 관심이 있고, 스스로 문제를 정의하며 함께 성장하고자 하는 학생의 지원을 환영합니다.
              </p>
              <p className="mb-5 text-white-75">
                연구실 참여를 희망하는 경우, CV 와 희망 연구 분야를 포함하여 아래 이메일로 문의해주시기 바랍니다.
              </p>
              <p className="btn btn-light btn-lg shadow-sm rounded-pill px-5" style={{ color: '#8b0029', fontWeight: 'bold' }}>
                {/* <FeatherIcon icon="mail" className="me-2 mb-1" style={{ width: 22, height: 22 }} /> */}
                khseob0715@konyang.ac.kr
              </p>
            </div>
          </div>

          {/* Benefits & Culture Row */}
          <div className="row">
            <div className="col-lg-6 mb-5">
              {/* Benefits & Support */}
              <div className="card shadow-sm h-100 rounded-4 border-0 lift" style={{ overflow: 'hidden' }}>
                <div className="card-body p-4 p-md-5">
                  <div className="d-flex align-items-center mb-4">
                    <div className="rounded-circle p-3 me-3 d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px', backgroundColor: 'rgba(139, 0, 41, 0.05)' }}>
                      <FeatherIcon icon="gift" style={{ color: '#8b0029', width: 32, height: 32 }} />
                    </div>
                    <h4 className="fw-bolder mb-0">Benefits & Support</h4>
                  </div>
                  <ul className="list-unstyled mb-0">
                    <li className="d-flex mb-3">
                      <FeatherIcon icon="check" className="me-3 flex-shrink-0 mt-1" style={{ width: 20, height: 20, color: '#8b0029' }} />
                      <span className="text-muted"><strong className="text-dark">인건비 지원</strong> (참여 과제에 따른 산정)</span>
                    </li>
                    <li className="d-flex mb-3">
                      <FeatherIcon icon="check" className="me-3 flex-shrink-0 mt-1" style={{ width: 20, height: 20, color: '#8b0029' }} />
                      <span className="text-muted"><strong className="text-dark">국내·외 학술대회 참관 및 논문 발표 지원</strong> (항공, 숙박, 등록비 등)</span>
                    </li>
                    <li className="d-flex mb-3">
                      <FeatherIcon icon="check" className="me-3 flex-shrink-0 mt-1" style={{ width: 20, height: 20, color: '#8b0029' }} />
                      <span className="text-muted"><strong className="text-dark">최신 고사양 PC/노트북, VR/AR 장비</strong> 및 연구 공간 제공</span>
                    </li>
                    <li className="d-flex mb-3">
                      <FeatherIcon icon="check" className="me-3 flex-shrink-0 mt-1" style={{ width: 20, height: 20, color: '#8b0029' }} />
                      <span className="text-muted"><strong className="text-dark">우수 연구 성과 인센티브</strong> 지급</span>
                    </li>
                    <li className="d-flex">
                      <FeatherIcon icon="check" className="me-3 flex-shrink-0 mt-1" style={{ width: 20, height: 20, color: '#8b0029' }} />
                      <span className="text-muted"><strong className="text-dark">다양한 정부/산업체 과제 참여</strong>를 통한 실무 경험 제공</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-5">
              {/* Lab Culture */}
              <div className="card shadow-sm h-100 rounded-4 border-0 lift" style={{ overflow: 'hidden' }}>
                <div className="card-body p-4 p-md-5">
                  <div className="d-flex align-items-center mb-4">
                    <div className="rounded-circle p-3 me-3 d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px', backgroundColor: 'rgba(139, 0, 41, 0.05)' }}>
                      <FeatherIcon icon="smile" style={{ color: '#8b0029', width: 32, height: 32 }} />
                    </div>
                    <h4 className="fw-bolder mb-0">Lab Culture</h4>
                  </div>
                  <ul className="list-unstyled mb-0">
                    <li className="d-flex mb-3">
                      <FeatherIcon icon="message-circle" className="me-3 flex-shrink-0 mt-1" style={{ width: 20, height: 20, color: '#8b0029' }} />
                      <span className="text-muted">자유롭고 수평적인 분위기 속에서 <strong className="text-dark">주도적인 연구 수행</strong> 지향</span>
                    </li>
                    <li className="d-flex mb-3">
                      <FeatherIcon icon="users" className="me-3 flex-shrink-0 mt-1" style={{ width: 20, height: 20, color: '#8b0029' }} />
                      <span className="text-muted">정기적인 랩 세미나 및 <strong className="text-dark">교수님과의 1:1 밀착 지도 </strong></span>
                    </li>
                    <li className="d-flex mb-3">
                      <FeatherIcon icon="clock" className="me-3 flex-shrink-0 mt-1" style={{ width: 20, height: 20, color: '#8b0029' }} />
                      <span className="text-muted">효율적인 연구를 위한 <strong className="text-dark">유연한 출퇴근</strong> </span>
                    </li>
                    <li className="d-flex mb-3">
                      <FeatherIcon icon="globe" className="me-3 flex-shrink-0 mt-1" style={{ width: 20, height: 20, color: '#8b0029' }} />
                      <span className="text-muted">국내·외 우수 연구진 및 타 대학/기관과의 <strong className="text-dark">활발한 공동 연구 네트워크</strong></span>
                    </li>
                    {/* <li className="d-flex">
                      <FeatherIcon icon="book-open" className="me-3 flex-shrink-0 mt-1" style={{ width: 20, height: 20, color: '#8b0029' }} />
                      <span className="text-muted">단순 개발이 아닌 <strong className="text-dark">학문적 문제 해결 (Problem Solving) 능력</strong> 배양</span>
                    </li> */}
                  </ul>
                  <div className="mt-4 pt-2 text-end">
                    <Link to="/gallery" className="fw-bold d-inline-flex align-items-center text-decoration-none" style={{ color: '#8b0029' }}>
                      Go to Gallery <FeatherIcon icon="arrow-right" className="ms-1" style={{ width: 16, height: 16, stroke: '#8b0029' }} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default JoinUs;