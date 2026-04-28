import React, { useState } from 'react';
import FeatherIcon from 'feather-icons-react';
import { Link, useHistory } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import { useAlert } from 'react-alert';

const teamData = {
  professor: [
    {
      name: 'Hanseob Kim',
      title: '김한섭',
      role: 'Assistant Professor',
      // department: 'Dept. of Computer Science and Software Engineering, Korea University (Sejong)',
      department: 'Dept. of XR for National Defense, Konyang University',
      img: process.env.PUBLIC_URL + '/assets/img/profile/professor.jpg',
      hoverImg: process.env.PUBLIC_URL + '/assets/img/profile/professor_hover.jpg',
      bio: 'HCI, VR/AR, 및 사용자 경험(UX) 분야를 연구하고 있습니다. 실감미디어 기술을 통해 인간의 삶을 향상시키는 것에 중점을 두고 있습니다.',
      // email: 'khseob0715@korea.ac.kr',
      email: 'khseob0715@konyang.ac.kr',
      links: {
        googleScholar: 'https://scholar.google.co.kr/citations?hl=ko&user=Oi53T2UAAAAJ',
        linkedin: 'https://www.linkedin.com/in/aidenkim0715/',
      },
      profileUrl: '/team/prof-hanseob-kim',
    },
  ],
  phd: [
    {
      name: 'Your Name',
      title: 'Join Us',
      img: process.env.PUBLIC_URL + '/assets/img/profile/students.jpg',
      hoverImg: process.env.PUBLIC_URL + '/assets/img/profile/students_hover.jpg',
      bio: 'TBD',
      email: 'TBD@konyang.ac.kr',
      links: {},
      period: '2026.09 - Present',
      projects: ['참여 프로젝트 예시 1', '참여 프로젝트 예시 2'],
      publications: ['국제/국내 학술대회 논문 예시 1']
    }
  ],
  master: [
    {
      name: 'Your Name',
      title: 'Join Us',
      img: process.env.PUBLIC_URL + '/assets/img/profile/students.jpg',
      hoverImg: process.env.PUBLIC_URL + '/assets/img/profile/students_hover.jpg',
      bio: 'TBD',
      email: 'TBD@konyang.ac.kr',
      links: {},
      period: '2026.09 - Present',
      projects: [],
      publications: []
    }
  ],
  undergrad: [
    {
      name: 'Minji Choi',
      title: '최민지',
      img: process.env.PUBLIC_URL + '/assets/img/profile/minjichoi.jpg',
      hoverImg: process.env.PUBLIC_URL + '/assets/img/profile/students.jpg',
      bio: 'VR/AR 기초 기술 학습 및 연구 보조',
      email: ' mjchoi1208@gmail.com',
      links: {},
      period: '2025.03 - Present',
      projects: [
        '메타버스 환경 내 휴먼 인증 강화를 위한 몰입형 캡챠 개발 (한국연구재단)',
        '생성형AI 활용 페르소나 중심 대화 상호작용 설계 (SW중심대학 LabCorps)'
      ],
      publications: []
    },
    {
      name: 'Seohoo Lee',
      title: '이서후',
      img: process.env.PUBLIC_URL + '/assets/img/profile/students.jpg',
      hoverImg: process.env.PUBLIC_URL + '/assets/img/profile/students_hover.jpg',
      bio: '시선 추적 데이터 분석 및 전처리',
      email: 'skyseohu@gmail.com',
      links: {},
      period: '2025.03 - Present',
      projects: [
        '메타버스 환경 내 휴먼 인증 강화를 위한 몰입형 캡챠 개발 (한국연구재단)',
        '생성형AI 활용 페르소나 중심 대화 상호작용 설계 (SW중심대학 LabCorps)'
      ],
      publications: []
    },
  ],
  alumni: [
    {
      name: 'Donghyun Kim',
      title: '김동현',
      degree: '학사 졸업 (2026)',
      thesis: '생성형AI 활용 페르소나 중심 디지털휴먼 및 대화 상호작용 설계',
      company: '석사 진학',
      // email: 'alumni1@gmail.com',
      // links: { linkedin: '#!' },
      period: '2025.03 - 2026.02',
      projects: ['생성형AI 활용 페르소나 중심 대화 상호작용 설계 (SW중심대학 LabCorps)'],
      publications: [
        '(2026) Preschoolers Early Gaze Exploration in Virtual Preschool Classrooms: A Transition-Based Eye-Tracking Analysis of Window Views and Room Size',
        '(2025) 구음장애인의 의사소통 지원을 위한 발화 재구성 시스템용 언어 모델 선정 평가']
    },
    {
      name: 'Daeyeong Yoo ',
      title: '유대영',
      degree: '학사 졸업 (2026)',
      thesis: '생성형AI 활용 페르소나 중심 디지털휴먼 및 대화 상호작용 설계',
      // company: 'Naver Z',
      // email: 'alumni2@gmail.com',
      // links: {},
      period: '2025.03 - 2026.02',
      projects: ['생성형AI 활용 페르소나 중심 대화 상호작용 설계 (SW중심대학 LabCorps)'],
      publications: ['(2025) 구음장애인의 의사소통 지원을 위한 발화 재구성 시스템용 언어 모델 선정 평가']
    },
    {
      name: 'Hyeonho Jung ',
      title: '정현호',
      degree: '학사 졸업 (2026)',
      thesis: '생성형AI 활용 페르소나 중심 디지털휴먼 및 대화 상호작용 설계',
      // company: 'KRIBB 선임연구원',
      // email: 'alumni3@gmail.com',
      // links: { linkedin: '#!' },
      period: '2025.03 - 2026.02',
      projects: ['생성형AI 활용 페르소나 중심 대화 상호작용 설계 (SW중심대학 LabCorps)'],
      publications: ['(2025) 구음장애인의 의사소통 지원을 위한 발화 재구성 시스템용 언어 모델 선정 평가']
    },
  ],
};

// 교수 전용 가로형 프로필 카드 컴포넌트
const ProfessorCard = ({ name, title, img, hoverImg, bio, email, links, profileUrl, role, department, onCopyEmail, isModalOpen }) => {
    const history = useHistory();

    const handleCardClick = (e) => {
        if (e.target.closest('a') || e.target.closest('button')) return;
        if (profileUrl) history.push(profileUrl);
    };

    return (
        <div className="col-12 mb-5">
            <div className={`card border-0 shadow-sm team-img-card lift ${isModalOpen ? 'no-hover' : ''}`} onClick={handleCardClick} style={{ cursor: profileUrl ? 'pointer' : 'default' }}>
                <div className="card-body p-4 p-md-5 d-flex flex-column flex-md-row align-items-md-stretch">
                    {/* 좌측 얼굴 영역 */}
                    <div className="flex-shrink-0 text-center text-md-start mb-4 mb-md-0 me-md-5 d-flex align-items-center justify-content-center">
                        <div className="position-relative d-inline-block" style={{ width: '220px', height: '220px' }}>
                            <img className="img-fluid rounded-circle shadow-sm" src={img} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover', border: '4px solid #f8f9fa' }} />
                            {hoverImg && <img className="img-fluid rounded-circle shadow-sm hover-img" src={hoverImg} alt={`${name} hover`} style={{ width: '100%', height: '100%', objectFit: 'cover', border: '4px solid #f8f9fa', position: 'absolute', top: 0, left: 0, opacity: 0, transition: 'opacity 0.4s ease' }} />}
                        </div>
                    </div>
                    {/* 우측 정보 영역 */}
                    <div className="flex-grow-1 text-center text-md-start d-flex flex-column justify-content-center">
                        <div>
                            <h2 className="fw-bolder mb-1">{name} <span className="fs-5 text-muted ms-2">{title}</span></h2>
                            <p className="mb-3 fw-bold" style={{ color: '#8b0029', fontSize: '1.05rem' }}>{role} <span className="text-muted fw-normal mx-2">|</span> <span className="text-dark fw-normal" style={{ fontSize: '0.95rem' }}>{department}</span></p>
                            <p className="text-muted mb-4" style={{ fontSize: '1rem', lineHeight: '1.6' }}>{bio}</p>
                        </div>
                        
                        <div className="mt-4 mt-md-auto d-flex flex-column flex-md-row justify-content-between align-items-center">
                            <div className="d-flex flex-column flex-md-row align-items-center gap-3 mb-4 mb-md-0">
                                <a href="#!" onClick={(e) => onCopyEmail(e, email)} className="text-decoration-none fw-bold" style={{ color: '#8b0029' }}>
                                    <FeatherIcon icon="mail" style={{ width: 18, height: 18, verticalAlign: 'middle', marginRight: '6px' }} />
                                    {email}
                                </a>
                                <div className="d-flex gap-2">
                                    {links?.googleScholar && <a href={links.googleScholar} target="_blank" rel="noopener noreferrer" className="btn btn-sm team-social-btn" title="Google Scholar"><i className="fas fa-graduation-cap"></i></a>}
                                    {links?.linkedin && <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-sm team-social-btn" title="LinkedIn"><i className="fab fa-linkedin" style={{ fontSize: '1.05rem' }}></i></a>}
                                </div>
                            </div>
                            <div>
                            {profileUrl && <Link to={profileUrl} className="btn btn-sm text-white px-4 py-2 fw-bold d-inline-flex align-items-center shadow-sm" style={{ backgroundColor: '#8b0029', borderRadius: '8px' }} onClick={(e) => e.stopPropagation()}>View Details <FeatherIcon icon="arrow-right" className="ms-2" style={{ width: 20, height: 20, stroke: 'white' }} /></Link>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// 기존 프로필 카드 컴포넌트 (사진 포함)
const TeamMember = ({ name, title, img, hoverImg, bio, email, links, profileUrl, onMemberClick, period, projects, publications, isModalOpen, role, onCopyEmail }) => {
    const history = useHistory();

    const handleCardClick = (e) => {
        // Prevent navigation if an anchor tag or a button inside it was clicked.
        if (e.target.closest('a')) {
            return;
        }
        if (profileUrl) {
            history.push(profileUrl);
        } else if (onMemberClick) {
            onMemberClick({ name, title, img, bio, email, links, period, projects, publications, role });
        }
    };
    
    return (
        <div className="col-xl-3 col-lg-4 col-md-6 mb-5">
            <div className={`card border-0 shadow-sm h-100 team-img-card lift ${isModalOpen ? 'no-hover' : ''}`} onClick={handleCardClick} style={{ cursor: (profileUrl || onMemberClick) ? 'pointer' : 'default' }}>
                <div className="card-body text-center p-4">
                    <div className="position-relative d-inline-block mb-3 mx-auto" style={{ width: '150px', height: '150px' }}>
                        <img className="img-fluid rounded-circle shadow-sm" src={img} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover', border: '3px solid #f8f9fa' }} />
                        {hoverImg && <img className="img-fluid rounded-circle shadow-sm hover-img" src={hoverImg} alt={`${name} hover`} style={{ width: '100%', height: '100%', objectFit: 'cover', border: '3px solid #f8f9fa', position: 'absolute', top: 0, left: 0, opacity: 0, transition: 'opacity 0.4s ease' }} />}
                    </div>
                    <h5 className="fw-bolder mb-1">{name}</h5>
                    <div className="text-muted mb-3">{title}</div>
                    <p className="text-dark small mb-3">{bio}</p>
                    <div className="small">
                        <a href="#!" onClick={(e) => onCopyEmail(e, email)} className="text-decoration-none fw-bold" style={{ color: '#8b0029' }}>
                            <FeatherIcon icon="mail" style={{ width: 14, height: 14,  verticalAlign: 'middle', marginRight: '4px' }} />
                            {email}
                        </a>
                    </div>
                </div>
                <div className="card-footer bg-transparent border-top-0 text-center p-3 pt-0">
                    {links?.googleScholar && (
                        <a href={links.googleScholar} className="btn btn-sm team-social-btn mx-1" title="Google Scholar">
                            <i className="fas fa-graduation-cap"></i>
                        </a>
                    )}
                    {links?.linkedin && (
                        <a href={links.linkedin} className="btn btn-sm team-social-btn mx-1" title="LinkedIn">
                            <i className="fab fa-linkedin" style={{ fontSize: '1.05rem' }}></i>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

// 졸업생 전용 리스트 아이템 컴포넌트
const AlumniListItem = ({ name, title, degree, thesis, company, email, links, onMemberClick, period, projects, publications, img, isModalOpen, onCopyEmail }) => (
    <div className="col-12">
        <div className={`card card-body mb-3 shadow-sm border-0 lift ${isModalOpen ? 'no-hover' : ''}`} onClick={(e) => {
            if (e.target.closest('a')) return;
            if (onMemberClick) onMemberClick({ name, title, degree, thesis, company, email, links, period, projects, publications, img });
        }} style={{ cursor: onMemberClick ? 'pointer' : 'default' }}>
            <div className="row align-items-center">
                <div className="col-lg-9 col-md-8">
                    <h6 className="fw-bolder mb-1">{name}</h6>
                    <p className="text-muted small mb-0">
                        {degree}
                        {thesis && <span className="mx-2">|</span>}
                        {thesis && <span>{thesis}</span>}
                        <span className="mx-2">|</span>
                        <span className="fw-500">{company}</span>
                    </p>
                </div>
                <div className="col-lg-3 col-md-4 text-md-end mt-2 mt-md-0">
                    {email &&
                        <a href="#!" onClick={(e) => onCopyEmail(e, email)} className="text-decoration-none small me-3 fw-bold" title="Email" style={{ color: '#8b0029' }}>
                            <FeatherIcon icon="mail" style={{ width: 14, height: 14, verticalAlign: 'middle', marginRight: '4px' }} />
                            {email}
                        </a>
                    }
                    {links?.linkedin && (
                        <a href={links.linkedin} className="btn btn-sm team-social-btn mx-1" title="LinkedIn">
                            <i className="fab fa-linkedin" style={{ fontSize: '1.05rem' }}></i>
                        </a>
                    )}
                </div>
            </div>
        </div>
    </div>
);

const SectionTitle = ({ title }) => (
    <div className="col-12 mb-4">
        <h2 className="fw-bolder" style={{ borderBottom: '3px solid #8b0029', paddingBottom: '0.5rem', display: 'inline-block' }}>{title}</h2>
    </div>
);


const Team = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const alert = useAlert();

  const handleMemberClick = (member) => {
    setSelectedMember(member);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedMember(null);
  };

  const handleCopyEmail = (e, email) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(email);
    alert.show('이메일이 복사되었습니다.');
  };

  return (
    <div className="container-xl px-4 mt-5 mb-5">
      <style>
        {`
          .team-custom-close-btn {
            background: transparent;
            border: none;
            color: #adb5bd;
            width: 48px;
            height: 48px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease-in-out;
            cursor: pointer;
            margin-left: auto;
          }
          .team-custom-close-btn:hover,
          .team-custom-close-btn:focus {
            color: #8b0029;
            background-color: rgba(139, 0, 41, 0.1);
            transform: rotate(90deg);
            outline: none;
          }
          .team-custom-close-btn svg {
            width: 32px !important;
            height: 32px !important;
            stroke-width: 2.5px;
            stroke: currentColor;
          }
          .team-social-btn {
            color: #8b0029;
            border-color: rgba(139, 0, 41, 0.4);
            background-color: transparent;
            transition: all 0.3s ease;
            border-radius: 50% !important;
            width: 44px;
            height: 44px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 0;
          }
          .team-social-btn:hover, .team-social-btn:focus {
            color: #ffffff;
            background-color: #8b0029;
            border-color: #8b0029;
          }
          .team-social-btn svg {
            stroke: #8b0029;
            transition: stroke 0.3s ease;
          }
          .team-social-btn:hover svg, .team-social-btn:focus svg {
            stroke: #ffffff;
          }
          .team-social-btn i {
            font-size: 1.3rem !important;
          }
          .modal-scrollable-content::-webkit-scrollbar {
            width: 6px;
          }
          .modal-scrollable-content::-webkit-scrollbar-track {
            background: #f8f9fa;
            border-radius: 4px;
          }
          .modal-scrollable-content::-webkit-scrollbar-thumb {
            background: #dee2e6;
            border-radius: 4px;
          }
          .modal-scrollable-content::-webkit-scrollbar-thumb:hover {
            background: #adb5bd;
          }
          .card.lift:hover .hover-img {
            opacity: 1 !important;
          }
          /* 호버 이미지가 있는 카드는 들썩이는 애니메이션(transform) 제거 */
          .team-img-card.lift:hover {
            transform: none !important;
          }
          /* 모달이 열려있을 때 카드의 호버 상태(마우스 이벤트) 비활성화 */
          .card.no-hover {
            pointer-events: none !important;
          }
        `}
      </style>
      {/* <div className="text-center mb-5">
        <h1 className="display-5 fw-bolder">Team</h1>
        <p className="lead text-muted">Meet the members of the DXP Lab.</p>
        <hr className="w-25 mx-auto" />
      </div> */}

      {/* Professor Section */}
      <div className="row justify-content-center mb-5">
        {/* <SectionTitle title="Faculty" /> */}
        {teamData.professor.map((member, index) => (
          <ProfessorCard key={index} {...member} isModalOpen={showModal} onCopyEmail={handleCopyEmail} />
        ))}
      </div>

      {/* Ph.D. Candidates Section */}
      <div className="row mb-5">
        <SectionTitle title="Ph.D. Candidates" />
        {teamData.phd.map((member, index) => (
          <TeamMember key={index} {...member} role="Ph.D. Candidate" onMemberClick={handleMemberClick} isModalOpen={showModal} onCopyEmail={handleCopyEmail} />
        ))}
      </div>

      {/* Master's Students Section */}
      <div className="row mb-5">
        <SectionTitle title="Master's Students" />
        {teamData.master.map((member, index) => (
          <TeamMember key={index} {...member} role="Master's Student" onMemberClick={handleMemberClick} isModalOpen={showModal} onCopyEmail={handleCopyEmail} />
        ))}
      </div>

      {/* Undergraduate Interns Section */}
      <div className="row mb-5">
        <SectionTitle title="Undergraduate Interns" />
        {teamData.undergrad.map((member, index) => (
          <TeamMember key={index} {...member} role="Undergraduate Intern" onMemberClick={handleMemberClick} isModalOpen={showModal} onCopyEmail={handleCopyEmail} />
        ))}
      </div>

      {/* Alumni Section */}
      <div className="row">
        <SectionTitle title="Alumni" />
        {teamData.alumni.map((member, index) => (
          <AlumniListItem key={index} {...member} onMemberClick={handleMemberClick} isModalOpen={showModal} onCopyEmail={handleCopyEmail} />
        ))}
      </div>

      {/* Member Detail Modal */}
      <Modal show={showModal} onHide={handleCloseModal} centered size="lg" contentClassName="bg-white border-0 shadow">
        <Modal.Header style={{ borderBottom: '1px solid #dee2e6', backgroundColor: '#fff' }}>
          <Modal.Title className="fw-bolder text-dark">{selectedMember?.name}</Modal.Title>
          <button type="button" className="team-custom-close-btn" onClick={handleCloseModal} aria-label="Close">
            <FeatherIcon icon="x" size="28" />
          </button>
        </Modal.Header>
        <Modal.Body className="p-0" style={{ backgroundColor: '#fff', borderBottomLeftRadius: '0.5rem', borderBottomRightRadius: '0.5rem' }}>
          <div className="row g-0 h-100">
            {/* Left Side: Profile Information */}
            <div className="col-md-4 p-4 d-flex flex-column align-items-center justify-content-center" style={{ backgroundColor: '#f8f9fa', borderBottomLeftRadius: '0.5rem' }}>
              {selectedMember?.img ? (
                <img className="img-fluid rounded-circle mb-3 shadow-sm" src={selectedMember.img} alt={selectedMember.name} style={{ width: '130px', height: '130px', objectFit: 'cover', border: '3px solid white' }} />
              ) : (
                <div className="rounded-circle mb-3 shadow-sm d-flex align-items-center justify-content-center bg-white" style={{ width: '130px', height: '130px' }}>
                  <FeatherIcon icon="user" style={{ width: 48, height: 48, color: '#adb5bd' }} />
                </div>
              )}
              <h4 className="fw-bolder mb-1 text-dark text-center">{selectedMember?.title || selectedMember?.name}</h4>
              <p className="mb-2 small fw-bold text-center" style={{ color: '#8b0029' }}>{selectedMember?.role || selectedMember?.degree}</p>
              {selectedMember?.email && (
                <a href="#!" onClick={(e) => handleCopyEmail(e, selectedMember.email)} className="text-decoration-none text-dark mb-0 small text-center" style={{ cursor: 'pointer' }}>
                  <FeatherIcon icon="mail" style={{ width: 14, height: 14, verticalAlign: 'middle', marginRight: '4px' }} />
                  {selectedMember.email}
                </a>
              )}
              {selectedMember?.company && <p className="text-muted mb-0 small fw-bold mt-2 text-center">{selectedMember.company}</p>}
            </div>

            {/* Right Side: Scrollable Activities */}
            <div className="col-md-8 p-4">
              <div className="modal-scrollable-content" style={{ maxHeight: '400px', overflowY: 'auto', paddingRight: '15px' }}>
                {selectedMember?.period && (
                  <div className="mb-4">
                    <h6 className="fw-bold d-flex align-items-center" style={{ color: '#8b0029' }}>
                      <FeatherIcon icon="clock" className="me-2" style={{ width: 18, height: 18 }} />
                      소속 시기
                    </h6>
                    <p className="text-dark small mb-0 ms-4">{selectedMember.period}</p>
                  </div>
                )}
                {selectedMember?.projects && selectedMember.projects.length > 0 && (
                  <div className="mb-4">
                    <h6 className="fw-bold d-flex align-items-center" style={{ color: '#8b0029' }}>
                      <FeatherIcon icon="cpu" className="me-2" style={{ width: 18, height: 18 }} />
                      참여 프로젝트 
                    </h6>
                    <ul className="text-dark small ms-2 mb-0">
                      {selectedMember.projects.map((proj, idx) => (
                        <li key={idx} className="mb-2">{proj}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {selectedMember?.publications && selectedMember.publications.length > 0 && (
                  <div className="mb-2">
                    <h6 className="fw-bold d-flex align-items-center" style={{ color: '#8b0029' }}>
                      <FeatherIcon icon="book-open" className="me-2" style={{ width: 18, height: 18 }} />
                      논문 실적
                    </h6>
                    <ul className="text-dark small ms-2 mb-0">
                      {selectedMember.publications.map((pub, idx) => (
                        <li key={idx} className="mb-2">{pub}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {(!selectedMember?.projects?.length && !selectedMember?.publications?.length && !selectedMember?.period) && (
                  <div className="d-flex align-items-center justify-content-center mt-4">
                    <p className="text-muted text-center mb-0">등록된 상세 정보가 없습니다.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Team;