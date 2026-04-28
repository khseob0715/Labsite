import React, { useState } from 'react';

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

  const filteredProjects = fundedProjectsData.filter(p => {
    if (filter !== 'All' && p.status !== filter) return false;
    if (myProjectsOnly && !p.pi.includes('김한섭')) return false;
    return true;
  });

  const sortedProjects = filteredProjects.sort((a, b) => {
    const dateA = new Date(a.duration.split(' - ')[0].replace('.', '-'));
    const dateB = new Date(b.duration.split(' - ')[0].replace('.', '-'));
    return sortOrder === '최신순' ? dateB - dateA : dateA - dateB;
  });

  return (
    <div className="container-xl px-4 mt-5 mb-5">
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
        `}
      </style>
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bolder">Projects</h1>
        <p className="lead text-muted">Explore our funded projects.</p>
        <hr className="w-25 mx-auto" />
      </div>

      {/* Filters and Sorting */}
      <div className="d-flex justify-content-center align-items-center mb-4 gap-3">
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
                  className="form-check-input mt-0 me-2" 
                  type="checkbox" 
                  id="myProjectSwitch" 
                  checked={myProjectsOnly} 
                  onChange={(e) => setMyProjectsOnly(e.target.checked)} 
                  style={{ cursor: 'pointer' }} 
              />
              <label className={`form-check-label small fw-bold ${myProjectsOnly ? '' : 'text-muted'}`} htmlFor="myProjectSwitch" style={{ cursor: 'pointer', paddingTop: '2px', color: myProjectsOnly ? '#8b0029' : '' }}>연구책임자 과제만 보기</label>
          </div>
      </div>

      <div className="row justify-content-center">
        {sortedProjects.map((project, index) => (
          <div className="col-lg-10 mb-4" key={index}>
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
    </div>
  );
};

export default Project;