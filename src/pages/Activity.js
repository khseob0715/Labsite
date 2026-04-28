// import React from 'react';
// import FeatherIcon from 'feather-icons-react';

// // Placeholder data for invited talks
// const invitedTalksData = [
//   {
//     title: '📝 대학연계 다과목 지도 역량 강화 교원 연수 프로그램 운영 - 인공지능의 이해',
//     year: '2025.07.23',
//     location: '교원 연수 프로그램',
//     links: [
//       {name: '뉴시스', url: 'https://www.newsis.com/view/NISX20250723_0003263481'}
//     ]
//   },
//   {
//     title: '🏫 국방과 의료 분야에서의 가상현실 사용',
//     year: '2025.07.17',
//     location: '서대전고등학교 고교 특강'
//   },
//   {
//     title: '🏫 국방과 의료 분야에서의 가상현실 사용',
//     year: '2025.07.15',
//     location: '태안고등학교 고교 특강'
//   },
//   {
//     title: '🏫 국방과 의료 분야에서의 가상현실 사용',
//     year: '2025.07.09',
//     location: '송촌고등학교 고교 특강'
//   },
//   {
//     title: '🏫 ChatGPT와 메타버스 실제 수업 활용 방안',
//     year: '2025.06.25',
//     location: '금산여고 교사대상 특강'
//   },
//   {
//     title: '📈 "부여고, 공강을 진로로 채우다. ‘틈새 강의실: ON’ 프로그램 성료"',
//     year: '2025.06.19',
//     location: '부여고등학교 고교 특강',
//     links: [
//       { name: '충남일보', url: '#!' },
//       { name: '중부메일', url: '#!' }
//     ]
//   },
//   {
//     title: '🏫 국방과 의료 분야에서의 가상현실 사용',
//     year: '2025.05.21',
//     location: '서산여자고등학교 고교 특강'
//   },
//   {
//     title: '📑 Human-Centered Research to Interactive XR',
//     year: '2025.02.03',
//     location: 'Pusan National University'
//   },
//   {
//     title: '📑 Human-Centered Research to Interactive XR',
//     year: '2024.11.29',
//     location: 'Chonnam National University'
//   },
//   {
//     title: '😊 Toward Socially Intelligent Virtual Companion',
//     year: '2024.01.09',
//     location: 'University of Ulsan'
//   },
//   {
//     title: '🎢 How Can We Solve the Cybersickness',
//     year: '2023.08.18',
//     location: '2023 APMAR, Pitch Your Work'
//   },
//   {
//     title: '📈 Statistical Analysis in Human-Centered Research',
//     year: '2023.07.09',
//     location: 'KETI'
//   }
// ];

// // Placeholder data for exhibitions
// const exhibitionsData = [
//   {
//     title: '⛱️ 건양대, 2025 충남 늘봄 한마당 성료 미래 인재양성 선도 - VR 사격 체험',
//     year: '2025.10.25~26',
//     location: '공주교육대학교 2025 충남 RISE 3권역 늘봄 한마당',
//     links: [
//       {name: '디트뉴스', url: 'https://www.dtnews24.com/news/articleView.html?idxno=800241'}
//     ]
//   },
//   {
//     title: '⛱️ 논산시 청소년 진로 박람회 체험 부스 운영 - 가상현실 DIY 키트 만들기',
//     year: '2025.09.11~12',
//     location: '논산시 청소년 진로 박람회' ,
//     links: [
//       { name: '베리타스알파', url: 'https://www.veritas-a.com/news/articleView.html?idxno=572041' }
//     ]
//   },
//   {
//     title: '🧘 건양대 국방XR학부, 세종 청소년 위한 \'VR명상 체험 활동\' 진행',
//     year: '2025.06.16',
//     location: '세종시 청소년상담복지센터',
//     links: [
//       { name: '베리타스알파', url: 'https://www.veritas-a.com/news/articleView.html?idxno=558610' }
//     ]
//   },
//   {
//     title: '🔫 국방XR학부-심스리얼리티 “MVEX 2025” 참가, 국방 메타버스 기술 공개',
//     year: '2025.06.09',
//     location: '서울 코엑스 메타버스 엑스포 2025',
//     links: [
//       { name: '시선뉴스', url: 'https://www.sisunnews.co.kr/news/articleView.html?idxno=225336' },
//       { name: '베리타스알파', url: 'https://www.veritas-a.com/news/articleView.html?idxno=559998' }
//     ]
//   }
// ];

// const Activity = () => {
//   // 두 데이터를 하나로 합치고 타입(Invited Talk, Exhibition)을 부여
//   const allActivities = [
//     ...invitedTalksData.map(item => ({ ...item, type: 'Invited Talk', typeColor: '#8b0029' })),
//     ...exhibitionsData.map(item => ({ ...item, type: 'Exhibition', typeColor: '#0061f2' }))
//   ];

//   // 날짜 기준 최신순 정렬
//   allActivities.sort((a, b) => {
//     const dateA = a.year.replace(/[^0-9]/g, '');
//     const dateB = b.year.replace(/[^0-9]/g, '');
//     return dateB.localeCompare(dateA);
//   });

//   // 연도별로 그룹화
//   const groupedActivities = allActivities.reduce((acc, curr) => {
//     const yearStr = curr.year.substring(0, 4);
//     if (!acc[yearStr]) acc[yearStr] = [];
//     acc[yearStr].push(curr);
//     return acc;
//   }, {});

//   const sortedYears = Object.keys(groupedActivities).sort((a, b) => b - a);

//   return (
//     <div className="container-xl px-4 mt-5 mb-5">
//       <style>
//         {`
//           .activity-link-btn {
//             color: #212832;
//             border: 1px solid #212832;
//             background-color: transparent;
//             transition: all 0.3s ease;
//           }
//           .activity-link-btn:hover, .activity-link-btn:focus {
//             color: #ffffff;
//             background-color: #8b0029;
//             border-color: #8b0029;
//           }
//           .activity-link-btn:hover svg, .activity-link-btn:focus svg {
//             stroke: #ffffff !important;
//           }
//           .timeline-left-container {
//             position: relative;
//             padding-left: 30px;
//           }
//           .timeline-left-container::before {
//             content: '';
//             position: absolute;
//             top: 0;
//             bottom: 0;
//             left: 15px;
//             width: 2px;
//             background-color: #e9ecef;
//             z-index: 1;
//           }
//           .timeline-left-item {
//             position: relative;
//             margin-bottom: 2rem;
//           }
//           .timeline-left-dot {
//             position: absolute;
//             left: -25px;
//             top: 1.5rem;
//             width: 20px;
//             height: 20px;
//             border-radius: 50%;
//             border: 3px solid #fff;
//             z-index: 2;
//             box-shadow: 0 0 0 2px rgba(0,0,0,0.05);
//           }
//           .timeline-year-dot {
//             position: absolute;
//             left: -27px;
//             top: 50%;
//             transform: translateY(-50%);
//             width: 24px;
//             height: 24px;
//             border-radius: 50%;
//             background-color: #212832;
//             border: 4px solid #fff;
//             z-index: 3;
//             box-shadow: 0 0 0 2px rgba(0,0,0,0.05);
//           }
//           @media (max-width: 767.98px) {
//             .timeline-left-container {
//               padding-left: 20px;
//             }
//             .timeline-left-container::before {
//               left: 10px;
//             }
//             .timeline-left-dot {
//               left: -20px;
//             }
//             .timeline-year-dot {
//               left: -22px;
//             }
//           }
//         `}
//       </style>
//       <div className="text-center mb-5">
//         <h1 className="display-5 fw-bolder">Activities</h1>
//         <p className="lead text-muted">A timeline of our invited talks and exhibitions.</p>
//         <hr className="w-25 mx-auto" />
//       </div>
//       <div className="row justify-content-center">
//         <div className="col-lg-10 mt-4 mb-5">
//           <div className="timeline-left-container">
//             {sortedYears.map((year) => (
//               <div key={year} className="mb-5">
//                 {/* Year Label */}
//                 <div className="position-relative mb-4 text-start">
//                   <div className="bg-white d-inline-block position-relative" style={{ paddingLeft: '40px', zIndex: 3 }}>
//                     <h2 className="fw-bolder m-0" style={{ color: '#212832' }}>{year}</h2>
//                   </div>
//                   <div className="timeline-year-dot"></div>
//                 </div>

//                 {/* Activities for the year */}
//                 {groupedActivities[year].map((item, index) => (
//                   <div className="timeline-left-item" key={index}>
//                     <div className="timeline-left-dot" style={{ backgroundColor: item.typeColor }}></div>
//                     <div className="card shadow-sm border-0 lift">
//                       <div className="card-body p-4 d-flex flex-column flex-md-row justify-content-between align-items-md-center">
//                         <div className="mb-3 mb-md-0 pe-md-3">
//                           <div className="d-flex align-items-center mb-2">
//                             <span className="badge text-white px-2 py-1 me-2" style={{ backgroundColor: item.typeColor, fontSize: "0.75rem" }}>{item.type}</span>
//                             <small className="text-muted fw-bold">{item.year}</small>
//                           </div>
//                           <h5 className="fw-bolder text-dark mb-2">{item.title}</h5>
//                           <p className="text-muted small mb-0 d-flex align-items-center">
//                             <FeatherIcon icon="map-pin" className="me-1" style={{ width: 14, height: 14 }} />
//                             {item.location}
//                           </p>
//                         </div>
//                         {item.links && (
//                           <div className="d-flex gap-2 flex-shrink-0">
//                             {item.links.map((link, i) => (
//                               <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="btn btn-sm activity-link-btn d-flex align-items-center shadow-sm" style={{ borderRadius: '20px' }}>
//                                 {link.name && <span className="me-1 small fw-bold">{link.name}</span>}
//                                 <FeatherIcon icon="external-link" style={{ width: 14, height: 14, marginLeft: link.name ? '4px' : '0' }} />
//                               </a>
//                             ))}
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Activity;