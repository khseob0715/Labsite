import React, { useState, useEffect } from 'react';
import FeatherIcon from 'feather-icons-react';

// Placeholder data for funded projects
const fundedProjectsData = [
  {
    grantType: 'Outstanding Young Research Grant',
    title: 'Development of Immersive CAPTCHA and Construction of AI-Non-Imitable Human Behavioral Datasets for Enhanced Human Verification in the Metaverse',
    titleKr: '메타버스 환경 내 휴먼 인증 강화를 위한 몰입형 캡챠 개발 및 AI 모방 불가 인간 행동 데이터셋 구축',
    pi: '김한섭',
    collaborators: '',
    duration: '2026.03 - 2029.02',
    fundingSource: 'NRF, Republic of Korea',
    amount: '₩ 240,000,000',
    status: '진행중'
  },
  {
    grantType: 'New Faculty Funding',
    title: 'Development of VR Sickness Reduction Techniques for Hyper-Realistic XR and Usability Evaluation',
    titleKr: '초실감 XR을 위한 가상현실 멀미 저감 기법 개발 및 사용성 평가',
    pi: '김한섭',
    collaborators: '',
    duration: '2025.04 - 2026.03',
    fundingSource: 'Heeyoung Academic & Cultural Foundation, Republic of Korea',
    // amount: '₩ 50,000,000',
    status: '진행중'
  },
  {
    grantType: 'Ph.D. Fellowship',
    title: 'Research on the Interaction/Interface for Bedridden Patients for Enhanced Virtual Reality-Based Therapy Experience',
    titleKr: '와상 환자의 가상현실 기반 치료 경험 향상을 위한 인터랙션/인터페이스 연구',
    pi: '김한섭',
    collaborators: '',
    duration: '2024.09 - 2025.02',
    fundingSource: 'NRF, Republic of Korea',
    amount: '₩ 50,000,000',
    status: '종료'
  },
  {
    grantType: 'Grobal Research Grant',
    title: 'Research on Mitigating Sickness and Enhancing Usability of XR/Metaverse Platform for Autonomous Vehicle Passengers',
    titleKr: '자율주행차 탑승자를 위한 XR/메타버스 플랫폼의 멀미 저감 및 사용성 향상 연구',
    pi: '김정현 (고려대)',
    collaborators: 'NAIST, JAPAN',
    duration: '2024.04 - 2025.02',
    fundingSource: 'IITP, Republic of Korea',
    amount: '₩ 230,000,000',
    status: '종료'
  },
  {
    grantType: '',
    title: 'Research on Super-Realistic XR Technology for the Metaverse Connecting the Real and Virtual Worlds',
    titleKr: '현실과 가상을 연결하는 메타버스를 위한 초실감 XR 기술 연구',
    pi: '김정현 (고려대)',
    collaborators: '',
    duration: '2023.03 - 2025.02',
    fundingSource: 'IITP, Republic of Korea',
    // amount: '',
    status: '종료'
  },
  {
    grantType: '',
    title: 'Professional Manpower Training for VR/AR',
    titleKr: 'VR/AR 전문 인력 양성',
    pi: '김정현 (고려대)',
    collaborators: '',
    duration: '2023.03 - 2025.12',
    fundingSource: 'KIAT, Republic of Korea',
    amount: '₩ 2,490,000,000',
    status: '종료'
  },
  {
    grantType: '',
    title: 'Research on XR Sickness Mitigation and User Safety',
    titleKr: 'XR 멀미 저감 및 사용자 안전에 관한 연구',
    pi: '김정현 (고려대)',
    collaborators: '',
    duration: '2023.03 - 2024.12',
    fundingSource: 'NRF, Republic of Korea',
    amount: '',
    status: '종료'
  },
  {
    grantType: '',
    title: 'Use-Robot Meta Interaction',
    titleKr: '사용자-로봇 메타 인터랙션',
    pi: '황재인 (KIST)',
    collaborators: '',
    duration: '2023.01 - 2023.12',
    fundingSource: 'KIST, Republic of Korea',
    amount: '',
    status: '종료'
  },
  {
    grantType: '',
    title: 'Development of Text Description-based Character Animation Synthesis Technology',
    titleKr: '텍스트 묘사 기반 캐릭터 애니메이션 합성 기술 개발',
    pi: '황재인 (KIST)',
    collaborators: '',
    duration: '2021.06 - 2022.12',
    fundingSource: 'KOCCA, Republic of Korea',
    amount: '₩ 900,000,000',
    status: '종료'
  },
  {
    grantType: '',
    title: 'Contact-free Monitoring Technology for Protection of Medical Staff',
    titleKr: '의료진 보호를 위한 비접촉 모니터링 기술',
    pi: '황재인 (KIST)',
    collaborators: '',
    duration: '2020.12 - 2023.12',
    fundingSource: 'NST, Republic of Korea',
    amount: '₩ 1,000,000,000',
    status: '종료'
  },
  {
    grantType: '',
    title: 'Digital Experience Technology for Botanical Gardens and Zoo Using Intelligent AR Interaction',
    titleKr: '지능형 AR 인터랙션을 활용한 식물원 및 동물원 디지털 체험 기술',
    pi: '황재인 (KIST)',
    collaborators: '',
    duration: '2019.01 - 2020.06',
    fundingSource: 'KOCCA, Republic of Korea',
    amount: '',
    status: '종료'
  },
  {
    grantType: '',
    title: 'HERO Part I: AI-based Multi-modal Data Analysis for Proactive Service in Digital In-Home Care',
    titleKr: '디지털 재택 케어의 선제적 서비스를 위한 AI 기반 멀티모달 데이터 분석 (HERO Part I)',
    pi: '황재인 (KIST)',
    collaborators: '',
    duration: '2019.01 - 2021.12',
    fundingSource: 'KIST, Republic of Korea',
    amount: '',
    status: '종료'
  },
  {
    grantType: '',
    title: 'VR cybersickness reduction using real-time motion recognition algorithm',
    titleKr: '실시간 모션 인식 알고리즘을 활용한 VR 사이버 멀미 저감',
    pi: '황재인 (KIST)',
    collaborators: '',
    duration: '2019.01 - 2019.09',
    fundingSource: 'Ministry of SMEs and Startups, Republic of Korea',
    amount: '',
    status: '종료'
  },
  {
    grantType: '',
    title: 'Analytical Approach for Efficient Kernel Core Computation of Geometric Objects',
    titleKr: '기하학적 객체의 효율적인 커널 코어 계산을 위한 해석적 접근',
    pi: '이지은 (조선대)',
    collaborators: '',
    duration: '2018.04 - 2018.09',
    fundingSource: 'NRF, Republic of Korea',
    amount: '₩ 45,833,000',
    status: '종료'
  }
];

const Project = () => {
  const [filter, setFilter] = useState('All'); // All, 진행중, 종료
  const [sortOrder, setSortOrder] = useState('최신순'); // 최신순, 오래된순
  const [myProjectsOnly, setMyProjectsOnly] = useState(false); // 내 과제만 보기 토글 상태
  const [showTopBtn, setShowTopBtn] = useState(false); // Scroll to top 상태
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  const handleCopyEmail = (e) => {
    navigator.clipboard.writeText('khseob0715@gmail.com');
    setTooltipPos({ x: e.clientX, y: e.clientY });
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 1000);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredProjects = fundedProjectsData.filter(p => {
    if (filter !== 'All' && p.status !== filter) return false;
    if (myProjectsOnly && !p.pi.includes('김한섭')) return false;
    return true;
  });

  const sortedProjects = filteredProjects.sort((a, b) => {
    const dateA = a.duration.split(' - ')[0];
    const dateB = b.duration.split(' - ')[0];
    return sortOrder === '최신순' ? dateB.localeCompare(dateA) : dateA.localeCompare(dateB);
  });

  // Calculate dashboard statistics
  const totalProjects = fundedProjectsData.length;
  let totalPIProjects = 0;
  let totalPIFunding = 0;

  fundedProjectsData.forEach(p => {
    if (p.pi.includes('김한섭')) {
      totalPIProjects++;
      if (p.amount) {
        const amountInKRW = parseInt(p.amount.replace('₩ ', '').replace(/,/g, ''));
        if (!isNaN(amountInKRW)) totalPIFunding += amountInKRW;
      }
    }
  });

  const totalPIFundingInTenMillions = (totalPIFunding / 10000000).toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 1
  });

  const fundingSources = [
      '한국연구재단 (NRF)', '정보통신기획평가원 (IITP)', '한국콘텐츠진흥원 (KOCCA)', 
      '국가과학기술연구회 (NST)', '중소벤처기업부', '희영학술문화재단'
  ];
  
  const fundingBadges = (
      <div className="d-flex flex-wrap gap-2">
          {fundingSources.map((source, index) => (
              <span key={index} className="badge bg-light text-dark border" style={{ fontSize: '0.8rem', fontWeight: '500' }}>{source}</span>
          ))}
      </div>
  );

  const getColorsByType = (type) => {
    switch (type) {
      case 'university': return { bgColor: '#f0e6f7' };
      case 'research': return { bgColor: '#e0f2eb' };
      case 'company': return { bgColor: '#d5e9fa' };
      case 'localGovernment': return { bgColor: 'rgb(255, 252, 240)' };
      default: return { bgColor: 'rgba(108, 117, 125, 0.1)', textColor: '#6c757d' };
    }
  };

  const manualCollaboratorNames = [
    { name: '고려대학교', type: 'university' },
    { name: '건양대학교', type: 'university' },
    { name: 'KIST', type: 'research' },
    { name: '부산대학교', type: 'university' },
    { name: '전남대학교', type: 'university' },
    { name: '한성대학교', type: 'university' },
    { name: '울산대학교', type: 'university' },
    { name: '국립금오공과대학교', type: 'university' },
    { name: 'NAIST', type: 'research' },
    { name: 'ETRI', type: 'research' },
    { name: '논산시청소년청년재단', type: 'localGovernment' },
    { name: '대전정보문화진흥원', type: 'localGovernment' },
    { name: '대전시청자미디어센터', type: 'localGovernment' },
    { name: '에픽게임즈코리아', type: 'company' },
    { name: '비지트', type: 'company' },
    { name: '씨지픽셀', type: 'company' },
  ];

  const collaborationBadgesContent = (
    <div className="d-flex flex-wrap gap-2">
      {[...manualCollaboratorNames].sort((a, b) => a.name.localeCompare(b.name)).map((collaborator, index) => {
        const colors = getColorsByType(collaborator.type);
        return (
          <span key={index} className="badge text-dark border" style={{backgroundColor: colors.bgColor, color: colors.textColor, fontSize: '0.8rem', fontWeight: '500'}}>
            {collaborator.name}
          </span>
        );
      })}
    </div>
  );

  return (
    <div className="container-fluid px-4 px-lg-5 mt-5 mb-5">
      <style>
        {`
          #myProjectSwitch:checked {
            background-color: #8b0029;
            border-color: #8b0029;
          }
          #myProjectSwitch:focus {
            border-color: #8b0029;
            outline: 0;
            box-shadow: 0 0 0 0.25rem rgba(139, 0, 41, 0.25);
          }
          @keyframes pulse-green {
            0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(40, 167, 69, 0.7); }
            70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(40, 167, 69, 0); }
            100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(40, 167, 69, 0); }
          }
          .blob-green {
            background: #28a745;
            border-radius: 50%;
            height: 12px;
            width: 12px;
            animation: pulse-green 2s infinite;
          }
          .collab-card:hover {
            background-color: rgba(40, 167, 69, 0.1) !important;
            transform: translateY(-2px);
          }
        `}
      </style>
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bolder">Projects</h1>
        <p className="lead text-muted">Explore our funded projects.</p>
        <hr className="w-25 mx-auto" />
      </div>

      {/* Filters and Sorting - Moved to span full width and be above the columns */}
      <div className="d-flex flex-wrap justify-content-center align-items-center mb-4 gap-3">
          <div className="btn-group">
              <button className={`btn btn-sm ${filter === 'All' ? 'btn-dark' : 'btn-outline-dark'}`} onClick={() => setFilter('All')}>All</button>
              <button className={`btn btn-sm ${filter === '진행중' ? 'btn-dark' : 'btn-outline-dark'}`} onClick={() => setFilter('진행중')}>Ongoing</button>
              <button className={`btn btn-sm ${filter === '종료' ? 'btn-dark' : 'btn-outline-dark'}`} onClick={() => setFilter('종료')}>Completed</button>
          </div>
          <select className="form-select form-select-sm w-auto" value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
              <option>최신순</option>
              <option>오래된순</option>
          </select>
          <div className="form-check form-switch ms-2 d-flex align-items-center">
              <input 
                  className="form-check-input mt-0 me-2 flex-shrink-0" 
                  type="checkbox" 
                  id="myProjectSwitch" 
                  checked={myProjectsOnly} 
                  onChange={(e) => setMyProjectsOnly(e.target.checked)} 
                  style={{ cursor: 'pointer' }} 
              />
              <label className={`form-check-label small fw-bold text-nowrap ${myProjectsOnly ? '' : 'text-muted'}`} htmlFor="myProjectSwitch" style={{ cursor: 'pointer', paddingTop: '2px', color: myProjectsOnly ? '#8b0029' : '' }}>연구책임자 과제만 보기</label>
          </div>
      </div>

      {/* Main Content Area: Project List */}
      <div className="row">
        {/* Left Column: Stats Summary (Dashboard) */}
        <div className="col-lg-3 mb-5 mb-lg-0">
          <div className="sticky-top" style={{ top: '100px' }}>
            <div className="card shadow-sm mb-3" style={{ borderRadius: '12px', border: 'none',  borderLeft: '5px solid #8b0029' }}>
            <div className="card-body p-4">
              {/* <h5 className="fw-bolder mb-4" style={{ color: '#8b0029' }}>Dashboard</h5> */}
              <ul className="list-unstyled mb-0">
                <li className="mb-4 row">
                  <div className="col-6">
                    <div className="fw-bold text-dark mb-1" style={{ fontSize: '1rem' }}>총 수행 과제 (책임)</div>
                    <div className="fw-bolder " style={{ fontSize: '1.1rem', color: '#8b0029' }}>{totalProjects}건 ({totalPIProjects}건)</div>
                  </div>
                  <div className="col-6">
                    <div className="fw-bold text-dark mb-1" style={{ fontSize: '1rem' }}>책임과제 총 연구비</div>
                    <div className="fw-bolder " style={{ fontSize: '1.1rem', color: '#8b0029' }}>{totalPIFundingInTenMillions} 천만원</div>
                  </div>
                </li>
                <li className="mb-4">
                  <div className="fw-bold text-dark mb-2" style={{ fontSize: '0.9rem' }}>연구 지원 기관</div>
                  {fundingBadges}
                </li>
                <li>
                  <div className="fw-bold text-dark mb-2" style={{ fontSize: '0.9rem' }}>주요 협력 기관</div>
                  {collaborationBadgesContent}
                </li>
              </ul>
            </div>
            </div>

            {/* Open for Collaboration Card */}
            <div 
              className="card shadow-sm collab-card" 
              onClick={handleCopyEmail}
              style={{ borderRadius: '12px', backgroundColor: 
                'rgba(40, 167, 69, 0.05)', border: '1px solid rgba(40, 167, 69, 0.2)', 
                cursor: 'pointer', transition: 'all 0.2s ease' }}
              title="클릭하여 이메일 주소 복사"
            >
              <div className="card-body p-3 d-flex align-items-center">
                <div className="blob-green flex-shrink-0 m-0 me-3"></div>
                <div>
                  <div className="fw-bolder" style={{ color: '#28a745', fontSize: '1.2rem', letterSpacing: '-0.2px' }}>Open for Collaboration</div>
                  <div className="text-dark fw-bold mt-1" style={{ fontSize: '1rem', letterSpacing: '-0.3px', wordBreak: 'keep-all' }}>산학협력 및 공동연구를 환영합니다. <br/>편하게 연락주세요.</div>
                  <div className="text-dark mt-2 fw-bold d-flex align-items-center" style={{ fontSize: '0.9rem' }}>
                     khseob0715@gmail.com <FeatherIcon icon="copy" style={{ width: 18, height: 18, marginLeft: '8px' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Project List */}
        <div className="col-lg-9">
              {/* Project Items */}
              {sortedProjects.map((project, index) => (
                <div className="mb-4" key={index}>
                  <div className="card shadow-sm h-100 border-0 lift">
                    <div className="card-body p-4">
                      <div className="d-flex justify-content-between align-items-start">
                        <div>
                          {project.grantType && <div className="fw-bold mb-1" style={{ color: '#8b0029', fontSize: '0.9rem' }}>{project.grantType}</div>}
                          <h4 className="fw-bolder text-dark mb-1">{project.title}</h4>
                          {project.titleKr && <div className="text-muted small mb-3">{project.titleKr}</div>}
                        </div>
                        <span className={`badge ${project.status === '진행중' ? '' : 'bg-dark'} mt-1 text-nowrap ms-3 px-2 py-1`} style={{ fontSize: '0.85rem', backgroundColor: project.status === '진행중' ? '#8b0029' : '' }}>{project.status}</span>
                      </div>
                      <div className="small text-muted">
                        <span><strong>책임:</strong> {project.pi}</span>
                        {project.collaborators && <span className="mx-2">|</span>}
                        {project.collaborators && <span><strong>협력:</strong> {project.collaborators}</span>}
                        <span className="mx-2">|</span>
                        <span><strong>기간:</strong> {project.duration}</span>
                        <span className="mx-2">|</span>
                        <span><strong>지원:</strong> {project.fundingSource} {project.amount ? `(${project.amount})` : ''}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

      {/* Custom Tooltip */}
      {showTooltip && (
        <div style={{
          position: 'fixed',
          top: tooltipPos.y - 40,
          left: tooltipPos.x,
          transform: 'translateX(-50%)',
          backgroundColor: '#343a40',
          color: '#fff',
          padding: '8px 16px',
          borderRadius: '6px',
          fontSize: '1rem',
          fontWeight: 'bold',
          zIndex: 1050,
          pointerEvents: 'none',
          boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
          whiteSpace: 'nowrap',
          width: 'fit-content'
        }}>
          이메일 주소를 복사했습니다.
        </div>
      )}

      {/* Scroll to Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="btn shadow-lg rounded-circle d-flex align-items-center justify-content-center lift"
          style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            width: '50px',
            height: '50px',
            backgroundColor: '#8b0029',
            color: 'white',
            zIndex: 9999,
            border: 'none',
            padding: 0
          }}
          aria-label="Scroll to top"
        >
          <FeatherIcon icon="arrow-up" style={{ width: 24, height: 24, stroke: 'white' }} />
        </button>
      )}
      </div>
    </div>
  );
};

export default Project;