import React, { useState, useRef, useEffect } from 'react'; // Add useState, useRef, useEffect
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import { Modal, Carousel } from 'react-bootstrap';
import './News.css'; // Import the CSS file for timeline styling

// Placeholder data for news items
const basicNewsData = [
  // {
  //   date: '2026. 09. 01',
  //   type: '공지',
  //   title: 'KU Sejong 컴퓨터소프트웨어학과 조교수 임용',
  //   cardContent: '고려대학교 세종캠퍼스 컴퓨터소프트웨어학과에 합류하였습니다.  ',
  //   link: '/join-us' // Join Us 페이지로 연결
  // },
  // {
  //   date: '2026. 09. 01',
  //   type: '공지',
  //   title: '2027학년도 전기 대학원생 및 학부연구생 모집',
  //   cardContent: 'DXP Lab에서 2027학년도 전기 대학원생(석사/박사) 및 학부연구생을 모집합니다. HCI, VR/AR 분야에 관심 있는 학생들의 많은 지원 바랍니다.',
  //   link: '/join-us' // Join Us 페이지로 연결
  // },
  {
    date: '2026. 04. 24',
    type: '강연',
    title: '게임의 기술이 현실을 바꾸다! 국방과 의료에서의 VR 기술',
    shortTitle:'대신고등학교 고교 특강',
    location: '대전 대신고등학교 고교 특강',
    cardContent: '김한섭 교수님이 대신고 2학년 학생들을 대상으로 국방과 의료 분야에서 가상현실 기술이 어떻게 활용될 수 있는지에 대한 강연을 진행하였습니다.',
    imgs: [
        process.env.PUBLIC_URL + '/assets/img/activities/260425.png',
    ]
    // link: '/join-us' // Join Us 페이지로 연결
  },
  {
    date: '2026. 04. 20',
    type: '연구',
    title: <>A New Journal Article has been accepted at <i>Frontiers in Psychology</i></>,
    cardContent: `이화여대 차기주 교수님과 공동으로 수행한 연구의 논문인 수락되었습니다. 우리 연구실에서는 김동현 학생이 참여했습니다.`,
    link: '/publication/child_gaze' 
  },
  {
    date: '2026. 03. 01',
    type: '연구',
    title: '우수신진연구 유형 A 선정',
    cardContent: '한국연구재단 우수신진연구과제에 선정되었습니다.',
    link: 'https://www.konyang.ac.kr/cop/bbs/BBSMSTR_000000000581/selectBoardArticle.do?nttId=287718&pageIndex=1&searchCnd=&searchWrd=' // Join Us 페이지로 연결
  },
  {
    date: '2026. 03. 22',
    type: '연구',
    title: 'Two research posters has been published at IEEE VR 2026 Conference',
    shortTitle: 'IEEE VR 2026 포스터 발표',
    showInGallery: false, // 갤러리 연동 제외 (기본값은 true)
    cardContent: 'Can We Have Both? Balancing Agency and Attention in Route-Guided, Focused VR Experiences \nIn-situ Progressive Evaluation of VR Immersion: A Comparison between Voice and Controller-based Questionnaires validated with EEG',
    imgs: [
      'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?q=80&w=800&auto=format&fit=crop',
      // 'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?q=80&w=800&auto=format&fit=crop',
    ]
  },
  {
    date: '2026. 03. 21',
    type: '행사',
    title: '2026 IEEE VR Conference 참가 및 30주년 행사 주최',
    shortTitle: 'IEEE VR 2026 참가 및 기념 행사',
    cardContent: 'VR 분야 국제학회 중 가장 큰 학회인 IEEE VR 2026이 대구에서 개최되었습니다. Student Volunteer Chair 역할을 수행하였습니다. 또한, 지도교수님이신 김정현 교수님의 교직 30주년 행사를 주최하였습니다.',
    // link: '/publication', // Publication 페이지로 연결
    imgs: [
        process.env.PUBLIC_URL + '/assets/img/activities/20260321.png',
        process.env.PUBLIC_URL + '/assets/img/activities/202603211.png',
    ]
  },
  {
    date: '2026. 02. 06',
    type: '공지',
    title: '건양대학교 총장 표창 수상',
    location: '2026 학사보고회',
    cardContent: '김한섭 교수님은 건양대학교 글로컬대학30 사업 기여에 대한 공을 인정받아 총장님의 표창을 수상하였습니다.',
    // link: 'https://www.konyang.ac.kr/cop/bbs/BBSMSTR_000000000581/selectBoardArticle.do?nttId=287718&pageIndex=1&searchCnd=&searchWrd=' // Join Us 페이지로 연결
  },
  {
    date: '2025. 12. 16',
    type: '행사',
    title: '메타버스+AI+XR 워크샵 참여 및 조직위원장 수행',
    shortTitle: '메타버스+AI+XR 워크샵',
    cardContent: '2025 한국소프트웨어종합학술대회에서 개최된 메타버스+AI+XR 워크샵에 참여하였으며, 조직위원장 역할을 수행하였습니다',
    imgs:[
        process.env.PUBLIC_URL + '/assets/img/activities/workshopmetaverse (1).jpg',
        process.env.PUBLIC_URL + '/assets/img/activities/workshopmetaverse (2).jpg',
    ]
  },
  {
    date: '2025. 11. 11',
    type: '연구',
    title: 'A New Journal Article has been published! ',
    cardContent: 'Effects of Mini-Map Usage and Spatial Ability on Cybersickness in Virtual Reality Navigation',
    link: "https://www.tandfonline.com/doi/full/10.1080/10447318.2025.2579783"
  },
   {
    date: '2025. 07. 01',
    type: '공지',
    title: 'Konyang University 국방XR학부 학과장 임명',
    cardContent: '김한섭 교수님이 건양대학교 국방XR학부 신설을 위한 준비학과장에 임명되었습니다.',
  },
  {
    date: '2025. 05. 27',
    type: '행사',
    title: '2025 한국인공지능융합기술학회 춘계학술대회 참가',
    cardContent: '건양대학교 인공지능학과 학생들과 함께 5편의 논문을 발표하였습니다',
    imgs: [
        process.env.PUBLIC_URL + '/assets/img/activities/KakaoTalk_20260419_113307988.jpg',
    ]
  },
  {
    date: '2025. 04. 25',
    type: '연구',
    title: 'ACM CHI 2025 Conference Paper has been published!',
    cardContent: 'The Impact of Observer Presence on Trainees’ Mental States and Performance in Remote Military Training with Virtual Humans in Mixed Reality Environment',
    link: "https://dl.acm.org/doi/10.1145/3706598.3713515"
  },
  {
    date: '2025. 04. 06',
    type: '연구',
    title: 'A New Journal Short Communication has been published!  ',
    cardContent: 'The vestibulo-ocular and vestibulospinal reflexes minimally impact the freezing of gait in patients with early-to-moderate Parkinson’s disease',
    link: "https://www.sciencedirect.com/science/article/pii/S2590112525000234"
  },
  {
    date: '2025. 03. 08',
    type: '연구',
    title: 'A New Journal Article has been published!  ',
    cardContent: 'The Vestibulo-Ocular Reflex is Associated With Visuospatial Dysfunction in Patients With Parkinson’s Disease, Brain and Behavior (SCIE) ',
    link: "https://onlinelibrary.wiley.com/doi/10.1002/brb3.70453"
  },
   {
    date: '2025. 03. 01',
    type: '공지',
    title: 'IMX Lab 설립',
    cardContent: 'Immersive Media eXperience Lab이 만들어졌습니다. VR/AR 분야에 열정있는 대학원생을 모집합니다. ',
  },
  {
    date: '2025. 03. 01',
    type: '공지',
    title: 'Konyang University 인공지능학과 조교수 임용',
    cardContent: '건양대학교 인공지능학과에 합류하였습니다.',
  },
  {
    date: '2025. 02. 13',
    type: '연구',
    title: 'A New Journal Article has been published!  ',
    cardContent: 'BalanceVR: balance training to increase tolerance to cybersickness in immersive virtual reality, Springer Virtual Reality (SCIE) ',
    link: "https://link.springer.com/article/10.1007/s10055-024-01097-7"
  },
];

// Placeholder data for invited talks (from Activity)
const invitedTalksData = [
  {
    title: '대학연계 다과목 지도 역량 강화 교원 연수 프로그램 운영 - 데이터과학',
    year: '2026.07.28',
    cardContent: '교원 연수 프로그램',
    links: [
      // {name: '뉴시스', url: 'https://www.newsis.com/view/NISX20250723_0003263481'}
    ]
  },
  {
    year: '2026. 07. 16',
    type: '강연',
    title: '게임의 기술이 현실을 바꾸다! 국방과 의료에서의 VR 기술',
    location: '충남 덕산고등학교 고교 특강',
  },
  {
    year: '2026. 07. 10',
    type: '강연',
    title: '게임의 기술이 현실을 바꾸다! 국방과 의료에서의 VR 기술',
    location: '대전 예산고등학교 고교 특강',
  },
  {
    year: '2026. 07. 07',
    type: '강연',
    title: '게임의 기술이 현실을 바꾸다! 국방과 의료에서의 VR 기술',
    location: '대전 송촌고등학교 고교 특강',
  },
  {
    title: '대학연계 다과목 지도 역량 강화 교원 연수 프로그램 운영 - 인공지능의 이해',
    year: '2025.07.23',
    cardContent: '교원 연수 프로그램',
    links: [
      {name: '뉴시스', url: 'https://www.newsis.com/view/NISX20250723_0003263481'}
    ]
  },
  { title: '국방과 의료 분야에서의 가상현실 사용', year: '2025.07.17', location: '서대전고등학교 고교 특강' },
  { title: '‘VR 진로체험 특강’으로 국방XR 기술 접한 태안고 학생들...‘직접 조립 체험도’', year: '2025.07.15', location: '태안고등학교 고교 특강',
    shortTitle:"태안고등학교 고교 특강",
    cardContent:"태안 고등학교에 방문하여 DIY 가상현실 키드 체험과 특강을 진행하였습니다",
    links: [
      { name: '대전투데이', url: 'https://www.daejeontoday.com/news/articleView.html?idxno=702049' },
      // { name: '중부메일', url: '#!' }
    ],
    imgs: [
        process.env.PUBLIC_URL + '/assets/img/activities/20250715png.png',
    ]
   },
  { title: '국방과 의료 분야에서의 가상현실 사용', year: '2025.07.09', location: '송촌고등학교 고교 특강' },
  { title: 'ChatGPT와 메타버스 실제 수업 활용 방안', year: '2025.06.25', location: '금산여고 교사대상 특강',
    shortTitle:"금산여고 교사대상 특강",
    cardContent:"선생님들을 대상으로 ChatGPT 와 메타버스 플랫폼을 수업에서 어떻게 활용할 수 있는지에 대한 강연을 진행하였습니다!",
    imgs: [
        process.env.PUBLIC_URL + '/assets/img/activities/202506251.png',
        process.env.PUBLIC_URL + '/assets/img/activities/123.png',
    ] },
  {
    title: '"부여고, 공강을 진로로 채우다. ‘틈새 강의실: ON’ 프로그램 성료"',
    year: '2025.06.19',
    location: '부여고등학교 고교 특강',
    links: [
      { name: '충남일보', url: 'https://www.chungnamilbo.co.kr/news/articleView.html?idxno=834777' },
      // { name: '중부메일', url: '#!' }
    ]
  },
  { title: '국방과 의료 분야에서의 가상현실 사용', year: '2025.05.21', location: '서산여자고등학교 고교 특강' },
  { title: 'Human-Centered Research to Interactive XR', year: '2025.02.03', location: '부산대학교' },
  { title: 'Human-Centered Research to Interactive XR', year: '2024.11.29', location: '전남대학교' },
  { title: 'Toward Socially Intelligent Virtual Companion', year: '2024.01.09', location: '울산대학교' },
  { title: 'How Can We Solve the Cybersickness', year: '2023.08.18', location: '2023 APMAR, Pitch Your Work' },
  { title: 'Statistical Analysis in Human-Centered Research', year: '2023.07.09', location: 'KETI' }
];

// Placeholder data for exhibitions (from Activity)
const exhibitionsData = [
  {
    title: '건양대, 2025 충남 늘봄 한마당 성료 미래 인재양성 선도 - VR 사격 체험',
    year: '2025.10.25~26',
    location: '공주교육대학교 2025 충남 RISE 3권역 늘봄 한마당',
    shortTitle: "늘봄 한마당 참가 및 전시",
    cardContent:"늘봄 한마당 프로그램에서 VR 게임 체험을 시켜주었습니다. \n도움을 주신 고려대학교 김재훈님, 건양대 군사학과 학생들에게 감사드립니다!",
    links: [
      {name: '디트뉴스', url: 'https://www.dtnews24.com/news/articleView.html?idxno=800241'}
    ],
    imgs: [
        process.env.PUBLIC_URL + '/assets/img/activities/nelbom (1).jpg',
        process.env.PUBLIC_URL + '/assets/img/activities/nelbom (2).jpg',
      
    ]
  },
  {
    title: '논산시 청소년 진로 박람회 체험 부스 운영 - 가상현실 DIY 키트 만들기',
    year: '2025.09.11~12',
    location: '논산시 청소년 진로 박람회' ,
    shortTitle:"논산시 청소년 진로 박람회",
    cardContent: "논산시 꿈빛나래 페스티벌에 참가해 지역 중·고등학생들에게 가상현실 콘텐츠를 체험시켜줬습니다.\n디지털콘텐츠학과 강규리, 임수현, 이우진 학생에게 감사합니다!",
    links: [
      { name: '베리타스알파', url: 'https://www.veritas-a.com/news/articleView.html?idxno=572041' }
    ],
    imgs: [
        process.env.PUBLIC_URL + '/assets/img/activities/20250911.png',
        process.env.PUBLIC_URL + '/assets/img/activities/20250912.png',
      
    ]
  },
  {
    title: '건양대 국방XR학부, 세종 청소년 위한 \'VR명상 체험 활동\' 진행',
    year: '2025.06.16',
    location: '세종시 청소년상담복지센터',
    shortTitle:"세종 청소년상담의날 전시",
    cardContent:"학생들에게 가상현실 콘텐츠를 체험시켜주고 왔습니다!\n고생한 임진성, 이서후 그리고 디지털콘텐츠학과 이우진, 강영진 학생에게 감사합니다!",
    links: [
      { name: '베리타스알파', url: 'https://www.veritas-a.com/news/articleView.html?idxno=558610' }
    ],
    imgs: [
        process.env.PUBLIC_URL + '/assets/img/activities/202506141.png',
        process.env.PUBLIC_URL + '/assets/img/activities/202506142.png',
        process.env.PUBLIC_URL + '/assets/img/activities/202506143.jpg',
    ]
  },
  {
    title: '국방XR학부-심스리얼리티 “MVEX 2025” 참가, 국방 메타버스 기술 공개',
    year: '2025.06.09',
    location: '서울 코엑스 메타버스 엑스포 2025',
    cardContent: "심스리얼리티 기업과 함께 메타버스 엑스포에서 국방XR 기술을 전시하였습니다.",
    shortTitle: "MVEX 2025 참가 및 전시",
    links: [
      { name: '시선뉴스', url: 'https://www.sisunnews.co.kr/news/articleView.html?idxno=225336' },
      { name: '베리타스알파', url: 'https://www.veritas-a.com/news/articleView.html?idxno=559998' }
    ],
    imgs: [
        process.env.PUBLIC_URL + '/assets/img/activities/202506181.png',
        process.env.PUBLIC_URL + '/assets/img/activities/202506182.png',
    ]
  }
];

// 모든 데이터를 하나로 통합
export const newsData = [
  ...basicNewsData,
  ...invitedTalksData.map(item => ({
    date: item.year,
    type: '강연',
    title: item.title,
    cardContent: item.cardContent,
    location: item.location,
    links: item.links,
    imgs: item.imgs,
    shortTitle: item.shortTitle,
    showInGallery: item.showInGallery
  })),
  ...exhibitionsData.map(item => ({
    date: item.year,
    type: '전시',
    title: item.title,
    cardContent: item.cardContent,
    location: item.location,
    links: item.links,
    imgs: item.imgs,
    shortTitle: item.shortTitle,
    showInGallery: item.showInGallery
  }))
].sort((a, b) => {
  const dateA = a.date.replace(/[^0-9]/g, '');
  const dateB = b.date.replace(/[^0-9]/g, '');
  return dateB.localeCompare(dateA);
});

const NewsItem = ({ date, type, title, cardContent, location, link, links, imgs, onImageClick, isModalOpen }) => {
  let badgeColor = '';
  switch (type) {
    case '공지':
      badgeColor = '#8b0029'; // Crimson
      break;
    case '연구':
      badgeColor = '#038c60'; // Secondary gray
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

  const isExternal = link && (link.startsWith('http://') || link.startsWith('https://'));

  return (
    <div className="timeline-left-item">
      <div className="timeline-left-dot" style={{ backgroundColor: badgeColor }}></div>
      <div className="card shadow-sm border-0 lift h-100" style={{ zIndex: isModalOpen ? 1 : undefined }}>
        <div className="card-body p-4 d-flex flex-column flex-md-row justify-content-between align-items-md-start">
          <div className="flex-grow-1 pe-md-4">
            <div className="d-flex align-items-center mb-2">
              <span className="badge text-white px-2 py-1 me-2" style={{ backgroundColor: badgeColor, fontSize: "0.8rem" }}>{type}</span>
              <small className="text-muted fw-bold">{date}</small>
            </div>
            <h5 className="fw-bolder text-dark mb-2">{title}</h5>
            {cardContent && <p className="text-black-50 mb-0" style={{ whiteSpace: 'pre-line' }}>{cardContent}</p>}
          {location && (
            <div className="d-flex align-items-center mt-2 small fw-bold" style={{ color: '#8b0029' }}>
              <FeatherIcon icon="map-pin" style={{ width: 14, height: 14, marginRight: '5px', stroke: '#8b0029' }} />
              {location}
            </div>
          )}
          </div>
          {(link || links) && (
            <div className="d-flex flex-wrap justify-content-end align-items-center gap-3 mt-3 mt-md-0 flex-shrink-0 align-self-md-end">
              {link && link !== '#!' && (isExternal ? (
                  <a href={link} target="_blank" rel="noopener noreferrer" className="fw-bold d-inline-flex align-items-center text-decoration-none text-nowrap" style={{ color: '#8b0029' }}>
                    자세히 보기 <FeatherIcon icon="arrow-right" className="ms-1" style={{ width: 16, height: 16, stroke: '#8b0029' }} />
                  </a>
                ) : (
                  <Link to={link} className="fw-bold d-inline-flex align-items-center text-decoration-none text-nowrap" style={{ color: '#8b0029' }}>
                    자세히 보기 <FeatherIcon icon="arrow-right" className="ms-1" style={{ width: 16, height: 16, stroke: '#8b0029' }} />
                  </Link>
                )
              )}
              {links && (
                <div className="d-flex gap-2 flex-shrink-0 flex-wrap justify-content-end">
                  {links.map((lnk, i) => (
                    <a key={i} href={lnk.url} target="_blank" rel="noopener noreferrer" className="btn btn-sm news-link-btn d-flex align-items-center shadow-sm text-nowrap" style={{ borderRadius: '20px' }}>
                      {lnk.name && <span className="me-1 small fw-bold">{lnk.name}</span>}
                      <FeatherIcon icon="external-link" style={{ width: 14, height: 14, marginLeft: lnk.name ? '4px' : '0' }} />
                    </a>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
        {imgs && imgs.length > 0 && (
          <div className="card-footer p-3 border-top-0 bg-light">
            <div className="row gx-2">
              {imgs.map((imgUrl, index) => (
                <div className="col-4 col-md-3" key={index}>
                  <img 
                    src={imgUrl} 
                    className="img-fluid rounded" 
                    alt={`${title} ${index + 1}`} 
                    style={{ height: '80px', width: '100%', objectFit: 'cover', cursor: 'pointer' }} 
                    onClick={() => onImageClick && onImageClick(imgs, index, title)}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const News = () => {
  const [activeYear, setActiveYear] = useState(new Date().getFullYear().toString()); // State for active year
  const yearRefs = useRef({}); // Ref for each year's section
  const [selectedTypes, setSelectedTypes] = useState([]); // 필터링을 위한 선택된 타입 상태
  const [showTopBtn, setShowTopBtn] = useState(false); // Scroll to top 상태
  const [visibleYearCount, setVisibleYearCount] = useState(1); // 한 번에 보여줄 연도 개수 (초기값 1년치)

  const [modalImages, setModalImages] = useState([]); // 모달에 띄울 이미지들
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // 현재 선택된 이미지 인덱스
  const [showModal, setShowModal] = useState(false); // 모달 표시 여부
  const [modalTitle, setModalTitle] = useState(''); // 모달 제목 추가

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

  const typeColors = {
    '공지': '#8b0029', // Crimson
    '연구': '#038c60', // Secondary gray
    '행사': '#0d6efd', // Primary blue
    '강연': '#6f42c1', // Purple
    '전시': '#bc6015'  // Orange
  };

  // 선택된 타입에 맞게 데이터 필터링 (아무것도 선택 안 했을 땐 전체 표시)
  const filteredNews = newsData.filter(item => {
    if (selectedTypes.length === 0) return true;
    return selectedTypes.includes(item.type);
  });

  // 연도별로 데이터 그룹화
  const groupedNews = filteredNews.reduce((acc, curr) => {
    const yearStr = curr.date.substring(0, 4);
    if (!acc[yearStr]) acc[yearStr] = [];
    acc[yearStr].push(curr);
    return acc;
  }, {});
  const sortedYears = Object.keys(groupedNews).sort((a, b) => b - a);

  // 화면이 세로로 긴 모니터이거나 브라우저 창을 늘렸을 때 빈 공간을 감지하여 추가 로드
  useEffect(() => {
    const checkAndLoadMore = () => {
      if (window.innerHeight + document.documentElement.scrollTop + 300 >= document.documentElement.offsetHeight) {
        if (visibleYearCount < sortedYears.length) {
          setVisibleYearCount(prev => prev + 1);
        }
      }
    };
    
    // 화면 렌더링 완료 후 높이 재계산을 위해 약간의 지연 시간 적용
    const timeoutId = setTimeout(checkAndLoadMore, 150);
    
    window.addEventListener('scroll', checkAndLoadMore);
    window.addEventListener('resize', checkAndLoadMore); // 창 크기 조절 시에도 반응
    
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', checkAndLoadMore);
      window.removeEventListener('resize', checkAndLoadMore);
    };
  }, [visibleYearCount, sortedYears.length]);

  // 필터 토글 핸들러
  const toggleFilter = (type) => {
    setSelectedTypes(prev =>
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  // Function to scroll to a specific year's section
  const scrollToYear = (year) => {
    setActiveYear(year);
    const targetIndex = sortedYears.indexOf(year);
    
    // 선택한 연도가 아직 렌더링되지 않은 상태라면 해당 연도까지 렌더링 허용
    if (targetIndex >= visibleYearCount) {
      setVisibleYearCount(targetIndex + 1);
    }
    
    setTimeout(() => {
      if (yearRefs.current[year]) {
        yearRefs.current[year].scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 50); // DOM 업데이트 후 부드럽게 스크롤되도록 약간 지연
  };

  const handleImageClick = (imgs, index, title) => {
    setModalImages(imgs);
    setCurrentImageIndex(index);
    setModalTitle(title);
    setShowModal(true);
  };

  // 화면에 렌더링할 연도 목록만 잘라서 사용
  const displayedYears = sortedYears.slice(0, visibleYearCount);

  return (
    <div className="container-xl px-4 mt-5 mb-5">
      <style>
        {`
          .news-link-btn {
            color: #212832;
            border: 1px solid #212832;
            background-color: transparent;
            transition: all 0.3s ease;
          }
          .news-link-btn:hover, .news-link-btn:focus {
            color: #ffffff;
            background-color: #8b0029;
            border-color: #8b0029;
          }
          .news-link-btn:hover svg, .news-link-btn:focus svg {
            stroke: #ffffff !important;
          }
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(30px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .timeline-fade-in {
            opacity: 0;
            animation: fadeInUp 0.6s ease-out forwards;
          }
          .news-filter-bar {
            position: sticky;
            top: 78px;
            z-index: 1020;
            padding: 0.85rem 0;
            background-color: rgba(255, 255, 255, 0.96);
            backdrop-filter: blur(8px);
            border-bottom: 1px solid rgba(33, 40, 50, 0.08);
          }
          .timeline-left-container {
            position: relative;
            padding-left: 160px;
          }
          .timeline-left-container::before {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            left: 145px;
            width: 2px;
            background-color: #e9ecef;
            z-index: 0;
          }
          .timeline-left-item {
            position: relative;
            margin-bottom: 1.5rem;
          }
          .timeline-left-dot {
            position: absolute;
            left: -25px;
            top: 1.5rem;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            border: 3px solid #fff;
            z-index: 2;
            box-shadow: 0 0 0 2px rgba(0,0,0,0.05);
          }
          .timeline-year-header {
            position: relative;
            height: 60px;
          }
          .timeline-year-wrapper {
            position: absolute;
            left: -160px;
            width: 145px;
            text-align: right;
            padding-right: 30px;
            top: 50%;
            transform: translateY(-50%);
            z-index: 3;
          }
          .year-label {
            color: #212832;
            font-size: 2.8rem;
            letter-spacing: -1px;
          }
          .timeline-year-dot {
            position: absolute;
            left: -27px;
            top: 50%;
            transform: translateY(-50%);
            width: 24px;
            height: 24px;
            border-radius: 50%;
            background-color: #212832;
            border: 4px solid #fff;
            z-index: 3;
            box-shadow: 0 0 0 2px rgba(0,0,0,0.05);
          }
          @media (max-width: 767.98px) {
            .news-filter-bar {
              top: 64px;
              align-items: stretch !important;
            }
            .news-filter-bar .btn-group {
              flex-wrap: wrap;
            }
            .timeline-left-container {
              padding-left: 20px;
            }
            .timeline-left-container::before {
              left: 10px;
            }
            .timeline-left-dot {
              left: -20px;
            }
            .timeline-year-header {
              height: auto;
            }
            .timeline-year-wrapper {
              position: relative;
              left: 0;
              width: auto;
              text-align: left;
              padding-right: 0;
              padding-left: 15px;
              transform: none;
            }
            .year-label {
              font-size: 2.2rem;
            }
            .timeline-year-dot {
              left: -22px;
            }
          }

          .news-custom-close-btn {
            background: transparent;
            border: none;
            color: #ced4da;
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
          .news-custom-close-btn:hover,
          .news-custom-close-btn:focus {
            color: #ffffff;
            background-color: rgba(255, 255, 255, 0.15);
            transform: rotate(90deg);
            outline: none;
          }
          .news-custom-close-btn svg {
            width: 32px !important;
            height: 32px !important;
            stroke-width: 2.5px;
            stroke: currentColor;
          }
        `}
      </style>
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bolder">Activities</h1>
        <p className="lead text-muted">Stay updated with the latest happenings at IMX Lab.</p>
        <hr className="w-25 mx-auto" />
      </div>
      <div className="row justify-content-center">
        {/* Navigation & Filters */}
        <div className="col-lg-12 d-flex flex-column flex-md-row justify-content-between align-items-center mb-5 gap-3 news-filter-bar">
          {/* Year Navigation */}
          <div className="btn-group shadow-sm" role="group" aria-label="Year navigation">
            {sortedYears.map(year => (
              <button
                key={year}
                type="button"
                className={`btn btn-sm ${activeYear === year ? 'btn-dark' : 'btn-outline-dark'}`}
                onClick={() => scrollToYear(year)}
              >
                {year}
              </button>
            ))}
          </div>

          {/* Type Filters */}
          <div className="d-flex flex-wrap gap-2 justify-content-center">
            {Object.keys(typeColors).map(type => {
              // 선택된 타입이 없으면(전체 표시 상태) 모두 활성화된 것처럼 보이고, 
              // 하나라도 선택했다면 선택된 것만 활성화되어 보이게 설정
              const isActive = selectedTypes.length === 0 || selectedTypes.includes(type);
              return (
                <button
                  key={type}
                  type="button"
                  className="btn btn-sm rounded-pill fw-bold shadow-sm"
                  style={{
                    backgroundColor: isActive ? typeColors[type] : 'transparent',
                    color: isActive ? 'white' : typeColors[type],
                    border: `1px solid ${typeColors[type]}`,
                    opacity: isActive ? 1 : 0.5,
                    transition: 'all 0.2s ease-in-out'
                  }}
                  onClick={() => toggleFilter(type)}
                >
                  {type}
                </button>
              );
            })}
          </div>
        </div>
        
        <div className="col-lg-12 mt-5 mb-5">
          <div className="timeline-left-container">
            {displayedYears.map((year) => (
              <div key={year} ref={el => yearRefs.current[year] = el} className="timeline-fade-in">
                {/* Year Label */}
                <div className="timeline-year-header mb-1">
                  <div className="timeline-year-wrapper bg-white">
                    <h2 className="fw-bolder m-0 year-label">{year}</h2>
                  </div>
                  <div className="timeline-year-dot"></div>
                </div>

                {/* News Items for the year */}
                {groupedNews[year].map((item, index) => (
                  <NewsItem key={index} {...item} onImageClick={handleImageClick} isModalOpen={showModal} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

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

      {/* 이미지 모달 */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered size="lg">
        <Modal.Header style={{ backgroundColor: '#212529', borderBottom: '1px solid #495057' }}>
          <Modal.Title className="text-white">
          {modalTitle}
          </Modal.Title>
          <button type="button" className="news-custom-close-btn" onClick={() => setShowModal(false)} aria-label="Close">
            <FeatherIcon icon="x" size="28" />
          </button>
        </Modal.Header>
        <Modal.Body className="p-0 text-center position-relative" style={{ backgroundColor: '#212529' }}>
          {modalImages.length > 0 && (
            <Carousel activeIndex={currentImageIndex} onSelect={(idx) => setCurrentImageIndex(idx)} slide={false} interval={null} variant="light" controls={modalImages.length > 1} indicators={modalImages.length > 1}>
              {modalImages.map((imgUrl, idx) => (
                <Carousel.Item key={idx}>
                  <div style={{ width: '100%', aspectRatio: '16/9', maxHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img
                      src={imgUrl}
                      alt={`Enlarged view ${idx + 1}`}
                      className="d-block"
                      style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
                    />
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          )}
        </Modal.Body>
        <Modal.Footer className="flex-column align-items-center pt-3" style={{ backgroundColor: '#212529', borderTop: '1px solid #495057' }}>
          {modalImages.length > 1 && (
            <div className="d-flex justify-content-center align-items-center w-100">
              <span className="text-white small fw-bold px-3 py-1 rounded-pill" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                {currentImageIndex + 1} / {modalImages.length}
              </span>
            </div>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default News;
