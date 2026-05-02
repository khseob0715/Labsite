import React, { useState } from 'react';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';
import { useAlert } from 'react-alert';
import { motion, AnimatePresence } from 'framer-motion';
// In a real application, this data would likely come from a CMS or an API call based on the URL slug
const professorInfo = {
    name: 'Prof. Hanseob Kim',
    title: '김한섭, Ph.D.',
    position: 'Assistant Professor',
    department: 'Dept. of XR',
    // Computer Science and Software Engineering, Korea University Sejong Campus',
    img: process.env.PUBLIC_URL + '/assets/img/profile/professor.jpg',
    bio: [
        // 'Hanseob Kim is an Assistant Professor in the Department of Computer Science and Software Engineering at Korea University, Sejong Campus. 
        'His research focuses on Human-Computer Interaction (HCI), Virtual/Augmented Reality (VR/AR), and User Experience (UX).',
        'He is passionate about improving human life through technology, with a special emphasis on creating immersive and comfortable virtual experiences. His work includes developing novel techniques to mitigate cybersickness, designing intuitive user interfaces for VR/AR, and evaluating user engagement in various interactive systems.'
    ],
    email: 'khseob0715@konyang.ac.kr',
    office: 'Nature Science Hall, Room 105',
    // 'Science and Technology Building Ⅱ, Room 429',
    links: {
        googleScholar: 'https://scholar.google.co.kr/citations?hl=ko&user=Oi53T2UAAAAJ',
        linkedin: 'https://www.linkedin.com/in/aidenkim0715/'
    },
    education: [
        { degree: 'Ph.D. in Computer Science and Engineering', university: 'Korea University', year: '2025', advisor: '(Advisor: Gerard Jounghyun Kim)' },
        { degree: 'M.S. in Computer Science and Engineering', university: 'Korea University', year: '2021', advisor: '(Advisor: Gerard Jounghyun Kim)' },
        { degree: 'B.S. in Computer Science', university: 'Chosun University', year: '2019' },
    ],
    researchInterests: [
        'Human-Computer Interaction (HCI)',
        'Virtual Reality (VR) & Augmented Reality (AR)',
        'Cybersickness Mitigation',
        'User Experience (UX) & Usability',
        '3D User Interfaces',
    ],
    workExperience: [
        // { role: 'Assistant Professor, Dept. of Computer Science and Software Engineering', institution: 'Korea University, Sejong Campus', duration: '2026.09 - Present' },
        { role: 'Assistant Professor, Dept. of XR for National Defense', institution: 'Konyang University',
            duration: '2025.03 - 2026.08\n Chair of Department, 2025.07 - 2026.07\nDept. of Artificial Intelligence, 2025.03 - 2026.02' },
        { role: 'Research Assistant, Center for Artificial Intelligence', institution: 'Korea Institute of Science and Technology', duration: '2019.01 - 2024.01',  advisor: '(Advisor: Jae-In Hwang)'},
    ],
    committee: [
        { event: 'IEEE Virtual Reality 2026', role: 'Student Volunteer Chair' },
        { event: 'APMAR 2025 (Asia-Pacific Workshop on Mixed and Augmented Reality)', role: 'Web & Financial Chair' },
        { event: '2025 CG&I 소사이어티 메타버스+AI+XR 워크샵', role: 'Organizing Chair' },
    ],
    academicService: [
        'Reviewed for ACM IUI 2025 Conference',
        'Reviewed for ACM CHI 2024, 2025, 2026 Conference',
        'Special Recognition for Outstanding Reviews in 2025, 2026',
        'Reviewed for IEEE VR 2024, 2025, 2026 Conference',
        'Reviewed for ACM VRST 2024, 2025 Conference',
        'Special Recognition for Outstanding Reviews in 2024',
        'Reviewed for IEEE ISMAR 2024, 2025 Conference',
        'Reviewed for IEEE TVCG Journals',
        'Reviewed for Elsevier Journals [Computer & Graphics]',
        'Reviewed for Domestic Journal/Conference [KCGS, HCIK, Smart Media, Digital Contents]',
    ],
    professionalActivities: [
        { category: '면접위원', content: '2026년도 진흥원 기간제 근로자 공개채용 면접심사', date: '2026.04.29', institution: '한국유교문화진흥원', type: 'external' },

        { category: '자문위원', content: 'V-SMR 가상원자로 플랫폼 R&D 자문', date: '2026.04', institution: '한국원자력연구원(KAERI)', type: 'external' },
       
        { category: '집필위원', content: '글로컬대학30사업 2025년도 연차보고서 집필 TF', date: '2026.03 - 2026.05', institution: '건양대학교', type: 'internal' },

        { category: '운영위원', content: '글로컬대학 해외인턴십 운영위원회', date: '2026.04 - 2026.08', institution: '건양대학교', type: 'internal' },
        { category: '운영위원', content: '2027학년도 입학전형 운영위원회', date: '2026.03 - 2026.08', institution: '건양대학교', type: 'internal' },
        { category: '관리위원', content: '2026학년도 교육질관리 위원회', date: '2026.03 - 2026.08', institution: '건양대학교', type: 'internal' },

        { category: '운영위원', content: '2025년 생성형 AI를 활용한 청소년 폭력 예방 콘텐츠 제작 및 공모전 운영', date: '2025.06 - 2025.09', institution: '논산시청소년청년재단', type: 'external' },

        { category: '운영위원', content: '홈페이지 운영위원회', date: '2026.03 - 2026.08', institution: '건양대학교', type: 'internal' },
        { category: '심사위원', content: '제 10회 전국 고등학교 동아리 소프트웨어 경진대회', date: '2025.11', institution: '충청권 SW중심대학사업', type: 'external' },
        { category: '집필위원', content: 'AI중심대학전환 사업계획서 집필 TF', date: '2025.11 - 2026.02', institution: '건양대학교', type: 'internal' },

        { category: '집필위원', content: '인문사회융합인재양성사업 연차보고서 집필 TF', date: '2025.11 - 2026.02', institution: '건양대학교', type: 'internal' },
        { category: '관리위원', content: '2026학년도 입학전형관리 위원회', date: '2025.07 - 2026.02', institution: '건양대학교', type: 'internal' },
        { category: '평가위원', content: '과업심의위원회 대민정보시스템 통합운영체계', date: '2025.10', institution: '중소기업기술정보진흥원', type: 'external' },
        { category: '운영위원', content: '지역사회문제해결 프로젝트 교과 전환 운영 TF', date: '2025.07 - 2025.12', institution: '건양대학교', type: 'internal' },
        { category: '집필위원', content: '인문사회융합인재양성사업 계획서 집필 TF', date: '2025.03 - 2025.06', institution: '건양대학교', type: 'internal' },
        
        // { category: '평가위원', content: '2025년도 실감형 콘텐츠 지원사업 기술 평가', date: '2025.10', institution: '한국콘텐츠진흥원(KOCCA)', type: 'external' },
        // { category: '운영위원', content: '2025년도 교내 해커톤 대회 심사 및 운영', date: '2025.05', institution: '고려대학교', type: 'internal' },
    ],
    awards: [
        { name: "🏅 University President's Commendation", institution: 'Konyang University', year: '2026.02.06' },
        { name: '🏅 KU Achievement Award', institution: 'Korea University', year: '2025.02.20' },
        { name: '🏅 Best Presentation Award', event: 'APMAR 2024', year: '2024.11.30' },
        { name: '🏅 Best Poster Award', event: 'ACM VRST 2023 Conference', year: '2023.10.10' },
        { name: '🏅 Outstanding Research Award', institution: 'Korea Electronic Association (KEA)', year: '2023.08.31' },
        { name: '🏅 AIR Outstanding Technology', institution: 'KIST AI Robotic Center', year: '2022.12.21' },
        { name: '🥈 Outstanding Graduate Student', institution: 'KIST, Korea Institute of Science and Technology', year: '2021.08.25' },
        { type: 'header', title: 'Undergraduate Awards' },
        { name: '🥈 Excellence Award (2nd), University Startup Competition', institution: 'Korea, Gwangju Metropolitan City Hall', year: '2019.1.10' },
        { name: '🥇 Best Paper in Undergraduate Student', institution: 'Korea Computer Graphics Society', year: '2018.07.13' },
        { name: '🥈 Silver Award (2nd), IT Conference - Project Competition', institution: 'Chosun University', year: '2018.11.29' },
        { name: '🥇 Grand Award (1st), Capstone Design Competition', institution: 'Linc+, Chosun University', year: '2018.11.27' },
        { name: '🥇 Grand Award (1st), SW Hackathon', institution: 'Chosun University', year: '2018.11.10' },
        { name: '🥇 Grand Award (1st), Capstone Design Competition', institution: 'Engineering Center in Chosun University', year: '2018.10.02' },
        { name: '🥇 Outstanding Team (1st), Healthcare IoT Project', institution: 'Qualcomm Institute in University of San Diego', year: '2018.02.20' },
        { name: '🥇 Best Paper (1st), IT Conference Presentation', institution: 'Chosun University', year: '2017.11.23' },
        { name: '🥉 Bronze Award (3rd), SW Hackathon', institution: 'Chosun University', year: '2017.11.11' },
        { name: '🏅 Special Award (4th), SW Open-source Hackathon', institution: 'Korea Computer Congress', year: '2017.09.17' },
        { name: '🥇 Grand Award (1st), Company Analysis Competition', institution: 'Anygent Inc', year: '2017.01.20' },
        { name: '🥈 Excellence Award (2nd), Student Autonomy Team Project Competition', institution: 'Chosun University', year: '2017.01.09' },
        { name: '🥇 Grand Award (1st), IoT Academy - Project Competition', institution: 'Smart Human Resource Development', year: '2016.07.25' },
    ]
};

const awardDetails = [
    { category: 'service', nameKo: '건양대학교 총장 표창', nameEn: "University President's Commendation", 
        institutionKo: '건양대학교', institutionEn: 'Konyang University', 
        detailKo: '글로컬대학30 사업 국방XR학부 신설 및 다전공 활성화 기여에 대한 공로', detailEn: 'Recognized for contributions to the Glocal University 30 project', 
        collaboratorsKo: '개인 수상', collaboratorsEn: 'Individual award', year: '2026.02.06' },
    { category: 'paper', nameKo: '우수 논문상', nameEn: 'Best Paper Award', institutionKo: 
        '한국인공지능융합기술학회', institutionEn: 'Korea AI&X Technology Society', detailKo: '아동 음성 분석을 통한 SELSI 기준 표현 언어 발달 단계 분류 모델', 
        detailEn: 'Research award for outstanding academic presentation', collaboratorsKo: '이신화, 이지수, 김지우, 김소연, 김한섭*, 김웅식', 
        collaboratorsEn: 'Collaborative research presentation', year: '2025.05.27' },
    { category: 'paper', nameKo: '우수 논문상', nameEn: 'Best Paper Award', institutionKo: 
        '한국인공지능융합기술학회', institutionEn: 'Korea AI&X Technology Society', detailKo: '망치운동게임: 악력 센서를 활용한 웹 기반 헌혈 보조 게임', 
        detailEn: 'Research award for outstanding academic presentation', collaboratorsKo: '김다빈, 유진, 최승효, 이수현, 김한섭*, 김웅식', 
        collaboratorsEn: 'Collaborative research presentation', year: '2025.05.27' },
    { category: 'service', nameKo: 'KU Achievement Award', nameEn: 'KU Achievement Award', institutionKo: '고려대학교', 
        institutionEn: 'Korea University', detailKo: '박사과정생 연구 및 학술 활동 성과에 대한 공로상', 
        detailEn: 'Achievement award for research and academic contributions', collaboratorsKo: '개인 수상', 
        collaboratorsEn: 'Individual award', year: '2025.02.20' },
    { category: 'paper', nameKo: '우수 발표 논문상', nameEn: 'Best Presentation Award', institutionKo: 
        'APMAR 2024', institutionEn: 'APMAR 2024', detailKo: '학술 발표 우수성에 대한 연구논문상', 
        detailEn: 'Research presentation award for outstanding academic presentation', collaboratorsKo: '신혜민, 김한섭*, 이재윤, 김정현', 
        collaboratorsEn: 'Collaborative research presentation', year: '2024.11.30' },
    { category: 'paper', nameKo: '우수 포스터 논문상', nameEn: 'Best Poster Award', institutionKo: 
        'ACM VRST 2023 Conference', institutionEn: 'ACM VRST 2023 Conference', detailKo: 'The Effect of False but Stable Heart Rate Feedback via Sound and Vibration on VR', 
        detailEn: 'Research poster award for outstanding academic poster presentation', collaboratorsKo: '주동윤, 김한섭*, 김정현', 
        collaboratorsEn: 'Collaborative research presentation', year: '2023.10.10' },
    { category: 'paper', nameKo: '우수 연구상', nameEn: 'Outstanding Research Award', institutionKo: '한국전자정보통신산업진흥회', 
        institutionEn: 'Korea Electronics Association (KEA)', detailKo: 'BalanceVR: Balance Training to Increase Tolerance to Cybersickness', 
        detailEn: 'BalanceVR: Balance Training to Increase Tolerance to Cybersickness in Immersive Virtual Reality', collaboratorsKo: '김재훈, 강성훈, 양예찬, 김한섭*, 김정현', collaboratorsEn: 'Individual award', year: '2023.08.31' },
    { category: 'service', nameKo: 'AIR Outstanding Technology', nameEn: 'AIR Outstanding Technology', institutionKo: 'KIST AI Robotic Center', institutionEn: 'KIST AI Robotic Center', detailKo: '우수 기술 기여에 대한 공로상', detailEn: 'Service award for outstanding technology contribution', collaboratorsKo: '개인 수상', collaboratorsEn: 'Center project contribution', year: '2022.12.21' },
    { category: 'service', nameKo: 'Outstanding Graduate Student', nameEn: 'Outstanding Graduate Student', 
        institutionKo: 'KIST, 한국과학기술연구원', institutionEn: 'KIST, Korea Institute of Science and Technology', 
        detailKo: '석사과정생 연구 수행 및 기관 기여에 대한 공로상', detailEn: 'Service award for graduate research and institutional contribution', collaboratorsKo: '개인 수상', collaboratorsEn: 'Individual award', year: '2021.08.25' },
    { type: 'header', titleKo: 'Undergraduate Awards', titleEn: 'Undergraduate Awards' },
    { category: 'competition', nameKo: '대학 창업 경진대회 우수상', nameEn: 'Excellence Award, University Startup Competition', 
        institutionKo: '광주광역시청', institutionEn: 'Gwangju Metropolitan City Hall', 
        detailKo: '창업 아이디어 및 사업화 계획 우수성에 대한 경진대회 수상', 
        detailEn: 'Competition award for startup idea and business plan excellence', 
        collaboratorsKo: '김한섭*, 김진혁, 김해지, 이윤식, 김기용', collaboratorsEn: 'Team award', year: '2019.01.10' },
    { category: 'paper', nameKo: '학부생 우수논문상', nameEn: 'Best Paper in Undergraduate Student', institutionKo: '한국컴퓨터그래픽스학회', 
        institutionEn: 'Korea Computer Graphics Society', detailKo: '학부 연구논문 우수성에 대한 연구논문상', 
        detailEn: 'Research paper award for undergraduate research excellence', 
        collaboratorsKo: '김한섭*, 이지은', collaboratorsEn: 'Hanseob Kim, Jieun Lee', year: '2018.07.13' },
    { category: 'competition', nameKo: 'IT Conference 프로젝트 경진대회 은상', nameEn: 'Silver Award, IT Conference Project Competition', 
        institutionKo: '조선대학교', institutionEn: 'Chosun University', detailKo: '프로젝트 구현 및 발표 우수성에 대한 경진대회 수상', 
        detailEn: 'Competition award for project implementation and presentation', 
        collaboratorsKo: '김한섭*, 김진혁, 김해지, 이윤식, 김기용', collaboratorsEn: 'Team award', year: '2018.11.29' },
    { category: 'competition', nameKo: '캡스톤 디자인 경진대회 대상', 
        nameEn: 'Grand Award, Capstone Design Competition', institutionKo: 'LINC+, 조선대학교', 
        institutionEn: 'LINC+, Chosun University', detailKo: '캡스톤 디자인 결과물 우수성에 대한 경진대회 수상', 
        detailEn: 'Competition award for capstone design excellence', 
        collaboratorsKo: '김한섭*, 김진혁, 김해지, 이윤식, 김기용', collaboratorsEn: 'Team award', year: '2018.11.27' },
    { category: 'competition', nameKo: 'SW 해커톤 대상', 
        nameEn: 'Grand Award, SW Hackathon', institutionKo: '조선대학교', 
        institutionEn: 'Chosun University', detailKo: '소프트웨어 해커톤 프로젝트 우수성에 대한 경진대회 수상', 
        detailEn: 'Competition award for software hackathon project excellence', collaboratorsKo: '팀 수상', 
        collaboratorsEn: 'Team award', year: '2018.11.10' },
    { category: 'competition', nameKo: '캡스톤 디자인 경진대회 대상', 
        nameEn: 'Grand Award, Capstone Design Competition', 
        institutionKo: '조선대학교 공학교육혁신센터', institutionEn: 'Engineering Education Innovation Center, Chosun University', 
        detailKo: '공학 설계 결과물 우수성에 대한 경진대회 수상', detailEn: 'Competition award for engineering design excellence', 
        collaboratorsKo: '김한섭*, 김진혁, 김해지, 이윤식, 김기용', collaboratorsEn: 'Team award', year: '2018.10.02' },
    { category: 'competition', nameKo: 'Healthcare IoT Project 우수팀 1위', 
        nameEn: 'Outstanding Team, Healthcare IoT Project', 
        institutionKo: 'Qualcomm Institute, University of San Diego', institutionEn: 'Qualcomm Institute, University of San Diego', detailKo: '헬스케어 IoT 프로젝트 우수성에 대한 경진대회 수상', detailEn: 'Competition award for healthcare IoT project excellence', collaboratorsKo: '팀 수상', collaboratorsEn: 'Team award', year: '2018.02.20' },
    { category: 'paper', nameKo: 'IT Conference 논문발표 최우수상', 
        nameEn: 'Best Paper, IT Conference Presentation', institutionKo: '조선대학교', institutionEn: 'Chosun University', detailKo: '논문 발표 우수성에 대한 연구논문상', detailEn: 'Research paper award for outstanding conference paper presentation', collaboratorsKo: '공동저자 수상', collaboratorsEn: 'Co-author award', year: '2017.11.23' },
    { category: 'competition', nameKo: 'SW 해커톤 동상', nameEn: 'Bronze Award, SW Hackathon', institutionKo: '조선대학교', institutionEn: 'Chosun University', detailKo: '소프트웨어 해커톤 프로젝트 우수성에 대한 경진대회 수상', detailEn: 'Competition award for software hackathon project excellence', collaboratorsKo: '팀 수상', collaboratorsEn: 'Team award', year: '2017.11.11' },
    { category: 'competition', nameKo: 'SW 오픈소스 해커톤 특별상', nameEn: 'Special Award, SW Open-source Hackathon', institutionKo: '한국정보과학회', institutionEn: 'Korea Computer Congress', detailKo: '오픈소스 기반 개발 결과물에 대한 경진대회 수상', detailEn: 'Competition award for open-source development project', collaboratorsKo: '팀 수상', collaboratorsEn: 'Team award', year: '2017.09.17' },
    { category: 'competition', nameKo: '기업분석 경진대회 대상', nameEn: 'Grand Award, Company Analysis Competition', institutionKo: 'Anygent Inc.', institutionEn: 'Anygent Inc.', detailKo: '기업 분석 및 발표 우수성에 대한 경진대회 수상', detailEn: 'Competition award for company analysis and presentation excellence', collaboratorsKo: '팀 수상', collaboratorsEn: 'Team award', year: '2017.01.20' },
    { category: 'competition', nameKo: '학생 자치팀 프로젝트 경진대회 우수상', nameEn: 'Excellence Award, Student Autonomy Team Project Competition', institutionKo: '조선대학교', institutionEn: 'Chosun University', detailKo: '학생 자치 프로젝트 성과에 대한 경진대회 수상', detailEn: 'Competition award for student-led project achievement', collaboratorsKo: '팀 수상', collaboratorsEn: 'Team award', year: '2017.01.09' },
    { category: 'competition', nameKo: 'IoT Academy 프로젝트 경진대회 대상', nameEn: 'Grand Award, IoT Academy Project Competition', institutionKo: '스마트인재개발원', institutionEn: 'Smart Human Resource Development Institute', detailKo: 'IoT 프로젝트 구현 우수성에 대한 경진대회 수상', detailEn: 'Competition award for IoT project implementation excellence', collaboratorsKo: '팀 수상', collaboratorsEn: 'Team award', year: '2016.07.25' },
];

const awardCategoryMeta = {
    paper: { ko: '연구논문', en: 'Research', color: '#2f6f5e', bg: '#e0f2eb', border: '#b8decd' },
    service: { ko: '공로', en: 'Service', color: '#856404', bg: '#fff3cd', border: '#f1dda0' },
    competition: { ko: '경진대회', en: 'Contest', color: '#7a4f9a', bg: '#f0e6f7', border: '#d9c3e9' },
};

const ProfessorProfile = () => {
    const professor = professorInfo;
    const [isUndergradAwardsOpen, setIsUndergradAwardsOpen] = useState(false);
    const [showExternalOnly, setShowExternalOnly] = useState(true); // 기본값: 모두 포함
    const [awardLanguage, setAwardLanguage] = useState('ko');
    const alert = useAlert();

    const handleCopyEmail = (e, email) => {
        e.preventDefault();
        navigator.clipboard.writeText(email);
        alert.show('이메일이 복사되었습니다.');
    };

    const undergradAwardsIndex = awardDetails.findIndex(a => a.type === 'header');
    const gradAwards = undergradAwardsIndex === -1 ? awardDetails : awardDetails.slice(0, undergradAwardsIndex);
    const undergradAwards = undergradAwardsIndex === -1 ? [] : awardDetails.slice(undergradAwardsIndex + 1);
    const awardItems = awardDetails.filter(award => award.type !== 'header');
    const awardStats = [
        { label: '연구논문상', count: awardItems.filter(award => award.category === 'paper').length },
        { label: '공로상', count: awardItems.filter(award => award.category === 'service').length },
        { label: '경진대회수상', count: awardItems.filter(award => award.category === 'competition').length },
    ];
    const isAwardKorean = awardLanguage === 'ko';
    const renderAwardItem = (award, index) => {
        const category = awardCategoryMeta[award.category];
        return (
            <li key={index} className="award-detail-item">
                <span
                    className="award-category-badge"
                    style={{
                        color: category.color,
                        backgroundColor: category.bg,
                        borderColor: category.border
                    }}
                >
                    {isAwardKorean ? category.ko : category.en}
                </span>
                <div className="award-detail-content">
                    <div className="fw-bold text-dark">{isAwardKorean ? award.nameKo : award.nameEn}</div>
                    <div className="text-muted small">
                        {isAwardKorean ? award.institutionKo : award.institutionEn} <span className="mx-1">|</span> {award.year} <span className="mx-1">|</span> {isAwardKorean ? award.collaboratorsKo : award.collaboratorsEn}
                    </div>
                    <div className="small" style={{ color: '#495057' }}>
                        {isAwardKorean ? award.detailKo : award.detailEn}
                    </div>
                </div>
            </li>
        );
    };

    const filteredProfessionalActivities = professor.professionalActivities.filter(
        activity => showExternalOnly ? activity.type !== 'internal' : true
    );

    return (
        <div className="bg-white">
            <style>
                {`
                    .text-crimson { color: #8b0029 !important; }
                    .prof-social-btn {
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
                    .prof-social-btn:hover, .prof-social-btn:focus {
                        color: #ffffff;
                        background-color: #8b0029;
                        border-color: #8b0029;
                    }
                    .prof-social-btn svg {
                        stroke: #8b0029;
                        transition: stroke 0.3s ease;
                    }
                    .prof-social-btn:hover svg, .prof-social-btn:focus svg {
                        stroke: #ffffff;
                    }
                    .prof-social-btn i {
                        font-size: 1.3rem !important;
                    }
                    .prof-activity-switch:checked {
                        background-color: #8b0029;
                        border-color: #8b0029;
                    }
                    .prof-activity-switch:focus {
                        border-color: #8b0029;
                        outline: 0;
                        box-shadow: 0 0 0 0.25rem rgba(139, 0, 41, 0.25);
                    }
                    .prof-scrollable-content::-webkit-scrollbar {
                        width: 6px;
                    }
                    .prof-scrollable-content::-webkit-scrollbar-track {
                        background: #f8f9fa;
                        border-radius: 4px;
                    }
                    .prof-scrollable-content::-webkit-scrollbar-thumb {
                        background: #dee2e6;
                        border-radius: 4px;
                    }
                    .prof-scrollable-content::-webkit-scrollbar-thumb:hover {
                        background: #adb5bd;
                    }
                    .award-stats {
                        display: flex;
                        align-items: center;
                        flex-wrap: wrap;
                        color: #6c757d;
                        font-size: 0.85rem;
                        font-weight: 700;
                    }
                    .award-stat-count {
                        color: #8b0029;
                        font-weight: 800;
                    }
                    .award-stat-divider {
                        margin: 0 0.55rem;
                        color: rgba(108, 117, 125, 0.55);
                    }
                    .award-stat-item {
                        white-space: nowrap;
                    }
                    .award-language-toggle {
                        display: inline-flex;
                        align-items: center;
                        gap: 0.35rem;
                        flex-shrink: 0;
                    }
                    .award-language-toggle button {
                        border: 1px solid #dee2e6;
                        border-radius: 0.25rem;
                        background: #f8f9fa;
                        color: #6c757d;
                        font-size: 0.72rem;
                        font-weight: 700;
                        line-height: 1.2;
                        padding: 0.22rem 0.45rem;
                        transition: all 0.2s ease;
                    }
                    .award-language-toggle button.active {
                        background-color: rgba(139, 0, 41, 0.08);
                        border-color: rgba(139, 0, 41, 0.35);
                        color: #8b0029;
                    }
                    .award-detail-item {
                        display: flex;
                        align-items: flex-start;
                        gap: 0.55rem;
                        padding: 0.25rem 0;
                        border-bottom: 1px solid #f1f3f5;
                    }
                    .award-detail-item:last-child {
                        border-bottom: 0;
                        padding-bottom: 0;
                    }
                    .award-category-badge {
                        width: 64px;
                        border: 1px solid;
                        border-radius: 0.25rem;
                        padding: 0.18rem 0.28rem;
                        text-align: center;
                        font-size: 0.75em;
                        font-weight: 4500;
                        line-height: 1;
                        white-space: nowrap;
                        flex-shrink: 0;
                        margin-top: 0.18rem;
                    }
                    .award-detail-content {
                        min-width: 0;
                    }
                    @media (max-width: 575.98px) {
                        .award-stats {
                            width: 100%;
                            justify-content: flex-start;
                        }
                        .award-detail-item {
                            flex-direction: column;
                            gap: 0.5rem;
                        }
                    }
                `}
            </style>
            <div className="container-xl px-4 py-5" style={{backgroundColor: '#ffffff'}}>
                <div className="row gx-5">
                    {/* Left Column: Profile Picture and Contact */}
                    <div className="col-lg-4">
                        <div className="card shadow-sm mb-4 sticky-lg-top" style={{ top: '100px' }}>
                            <div className="card-body text-center p-4">
                                <img src={professor.img} className="rounded-circle img-fluid mb-3 shadow-sm" alt={professor.name} style={{ width: '180px', height: '180px', objectFit: 'cover', border: '4px solid #f8f9fa' }} />
                                <h3 className="fw-bolder">{professor.name}</h3>
                                <p className="text-muted">{professor.title}</p>
                                <hr className="my-4" />
                                <ul className="list-unstyled text-start small">
                                    <li className="d-flex align-items-center mb-3">
                                        <FeatherIcon icon="mail" className="me-3" style={{color: '#8b0029', width: 16, height: 16}}/>
                                        <a href="#!" onClick={(e) => handleCopyEmail(e, professor.email)} className="text-decoration-none fw-bold" style={{ color: '#8b0029', cursor: 'pointer' }} title="이메일 복사하기">{professor.email}</a>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <FeatherIcon icon="map-pin" className="me-3 text-muted" style={{width: 16, height: 16}} />
                                        <span>{professor.office}</span>
                                    </li>
                                </ul>
                                <hr className="my-4" />
                                <div className="d-flex justify-content-center gap-2">
                                    <a href={professor.links.googleScholar} className="btn prof-social-btn btn-sm" title="Google Scholar"><i className="fas fa-graduation-cap"></i></a>
                                    <a href={professor.links.linkedin} className="btn prof-social-btn btn-sm" title="LinkedIn"><i className="fab fa-linkedin" style={{ fontSize: '1.05rem' }}></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Details */}
                    <div className="col-lg-8">
                        {/* Biography */}
                        <div className="card shadow-sm mb-4">
                            <div className="card-header bg-white border-0 p-4 pb-0">
                                <h4 className="fw-bolder text-crimson mb-0">About Me</h4>
                            </div>
                            <div className="card-body p-4">
                                {professor.bio.map((paragraph, index) => (
                                    <p key={index} className="mb-3" style={{ textAlign: 'justify' }}>{paragraph}</p>
                                ))}
                            </div>
                        </div>

                        {/* Work Experience */}
                        <div className="card shadow-sm mb-4">
                            <div className="card-header bg-white border-0 p-4 pb-0">
                                <h4 className="fw-bolder text-crimson mb-0">Work Experience</h4>
                            </div>
                            <div className="card-body p-4">
                                <ul className="list-unstyled">
                                    {professor.workExperience.map((exp, index) => (
                                        <li key={index} className="mb-3">
                                            <div className="fw-bold">{exp.role}</div>
                                            <div className="text-muted">{exp.institution} {exp.advisor}</div>
                                            <div className="small text-muted" style={{ whiteSpace: 'pre-line' }}>{exp.duration}</div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Education */}
                        <div className="card shadow-sm mb-4">
                            <div className="card-header bg-white border-0 p-4 pb-0">
                                <h4 className="fw-bolder text-crimson mb-0">Education</h4>
                            </div>
                            <div className="card-body p-4">
                                <ul className="list-unstyled">
                                    {professor.education.map((edu, index) => (
                                        <li key={index} className="mb-3">
                                            <div className="fw-bold">{edu.degree}</div>
                                            <div className="text-muted small">{edu.year}. {edu.university} {edu.advisor}</div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Research Interests */}
                        <div className="card shadow-sm mb-4">
                            <div className="card-header bg-white border-0 p-4 pb-0">
                                <h4 className="fw-bolder text-crimson mb-0">Research Interests</h4>
                            </div>
                            <div className="card-body p-4">
                                <div className="d-flex flex-wrap">
                                    {professor.researchInterests.map((interest, index) => (
                                        <span key={index} className="badge bg-light text-dark border me-2 mb-2 px-3 py-2 rounded-pill">{interest}</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Academic Service & Committee */}
                        <div className="card shadow-sm mb-4">
                            <div className="card-header bg-white border-0 p-4 pb-0">
                                <h4 className="fw-bolder text-crimson mb-0">Academic Activities</h4>
                            </div>
                            <div className="card-body p-4">
                                <h5 className="fw-bolder text-dark mb-3">Committee</h5>
                                <ul className="list-unstyled mb-4">
                                    {professor.committee.map((item, index) => (
                                        <li key={index} className="mb-2 small">
                                            {item.event} | <span className="fw-bold">{item.role}</span>
                                        </li>
                                    ))}
                                </ul>
                                <h5 className="fw-bolder text-dark mb-3">Reviewer</h5>
                                <ul className="list-unstyled">
                                    {professor.academicService.map((item, index) => {
                                        if (item.startsWith('Special Recognition')) {
                                            return (
                                                <li key={index} className="mb-2 small" style={{ paddingLeft: '1.5rem' }}>
                                                    <span className="text-crimson fst-italic">{item}</span>
                                                </li>
                                            );
                                        }
                                        return (
                                            <li key={index} className="mb-2 small">{item}</li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>

                        {/* Professional Activities */}
                        <div className="card shadow-sm mb-4">
                            <div className="card-header bg-white border-0 p-4 pb-0 d-flex justify-content-between align-items-center">
                                <h4 className="fw-bolder text-crimson mb-0">Professional Activities</h4>
                                <div className="form-check form-switch mb-0 d-flex align-items-center">
                                    <input 
                                        className="form-check-input mt-1 me-2 prof-activity-switch" 
                                        type="checkbox" 
                                        id="internalActivitySwitch" 
                                        checked={showExternalOnly} 
                                        onChange={(e) => setShowExternalOnly(e.target.checked)} 
                                        style={{ cursor: 'pointer' }} 
                                    />
                                    <label className={`form-check-label small fw-bold ${showExternalOnly ? '' : 'text-muted'}`} htmlFor="internalActivitySwitch" style={{ cursor: 'pointer', paddingTop: '2px', color: showExternalOnly ? '#8b0029' : '' }}>
                                        외부 위원만 보기
                                    </label>
                                </div>
                            </div>
                            <div className="card-body p-4">
                                <div className="prof-scrollable-content" style={{ maxHeight: '300px', overflowY: 'auto', paddingRight: '10px' }}>
                                    <ul className="list-unstyled mb-0">
                                        <AnimatePresence initial={false}>
                                            {filteredProfessionalActivities.map((activity) => (
                                                <motion.li 
                                                    key={activity.content}
                                                    initial={{ opacity: 0, height: 0, marginBottom: 0, overflow: 'hidden' }}
                                                    animate={{ opacity: 1, height: 'auto', marginBottom: 8, overflow: 'hidden' }}
                                                    exit={{ opacity: 0, height: 0, marginBottom: 0, overflow: 'hidden' }}
                                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                                    className="d-flex align-items-start"
                                                >
                                                    <span className="badge bg-light text-dark border me-2 mt-1 flex-shrink-0" style={{ width: '60px' }}>
                                                        {activity.category}
                                                    </span>
                                                    <div>
                                                        <div className="fw-bold  text-dark" style={{ fontSize: '0.95rem' }}>
                                                            {activity.content}
                                                        </div>
                                                        <div className="text-muted small">
                                                            {activity.institution} <span className="mx-1">|</span> {activity.date}
                                                        </div>
                                                    </div>
                                                </motion.li>
                                            ))}
                                        </AnimatePresence>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Awards */}
                        <div className="card shadow-sm mb-4">
                            <div className="card-header bg-white border-0 p-4 pb-0">
                                <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-start gap-3">
                                    <div>
                                        <h4 className="fw-bolder text-crimson mb-2">Awards & Honors</h4>
                                        <div className="award-stats" aria-label="Award statistics">
                                            {awardStats.map((stat, index) => (
                                                <React.Fragment key={stat.label}>
                                                    {index > 0 && <span className="award-stat-divider">|</span>}
                                                    <span className="award-stat-item">
                                                        {stat.label} <span className="award-stat-count">{stat.count}</span>
                                                    </span>
                                                </React.Fragment>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="award-language-toggle" role="group" aria-label="Award language">
                                        <button
                                            type="button"
                                            className={awardLanguage === 'ko' ? 'active' : ''}
                                            onClick={() => setAwardLanguage('ko')}
                                        >
                                            KOR
                                        </button>
                                        <button
                                            type="button"
                                            className={awardLanguage === 'en' ? 'active' : ''}
                                            onClick={() => setAwardLanguage('en')}
                                        >
                                            ENG
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body p-4">
                                <ul className="list-unstyled mb-0">
                                    {gradAwards.map((award, index) => renderAwardItem(award, index))}
                                </ul>
                                {undergradAwards.length > 0 && (
                                    <>
                                        <a
                                            href="#!"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setIsUndergradAwardsOpen(!isUndergradAwardsOpen);
                                            }}
                                            aria-controls="undergrad-awards-collapse"
                                            aria-expanded={isUndergradAwardsOpen}
                                            className="text-decoration-none"
                                        >
                                            <h5 className="fw-bold small text-muted mt-4 mb-3 d-flex justify-content-between align-items-center">
                                                {isAwardKorean ? 'Undergraduate Awards' : 'Undergraduate Awards'}
                                                <FeatherIcon icon={isUndergradAwardsOpen ? 'chevron-up' : 'chevron-down'} size="18" />
                                            </h5>
                                        </a>
                                        <Collapse in={isUndergradAwardsOpen}>
                                            <div id="undergrad-awards-collapse">
                                                <ul className="list-unstyled pt-2 mb-0">
                                                    {undergradAwards.map((award, index) => renderAwardItem(award, index))}
                                                </ul>
                                            </div>
                                        </Collapse>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfessorProfile;
