import React from 'react';

// Placeholder data for courses
const courseData = [
  // {
  //   year: '2026',
  //   semester: 'Fall',
  //   university: 'Korea',
  //   courses: [
  //     {
  //       code: 'TBD',
  //       title: 'HCI 및 가상현실 (가칭)',
  //       department: '컴퓨터소프트웨어학과'
  //     },
  //     {
  //       code: 'TBD',
  //       title: 'HCI 및 가상현실 (가칭)',
  //       department: '컴퓨터소프트웨어학과'
  //     },
  //     {
  //       code: 'TBD',
  //       title: 'HCI 및 가상현실 (가칭)',
  //       department: '컴퓨터소프트웨어학과'
  //     }
  //   ]
  // },
  {
    year: '2026',
    semester: 'Spring',
    university: 'Konyang',
    courses: [
      {
        code: '61952A',
        title: '실감미디어컴퓨팅개론',
        department: '국방XR학부',
        description: '컴퓨터공학 기초 이론 및 XR 기반 이론'
      },
      {
        code: '00041L',
        title: '메타버스프로그래밍',
        department: '국방XR학부',
        description: 'Python 기초 프로그래밍 및 로블록스 스튜디오 프로젝트'
      },
      {
        code: '61939A',
        title: 'SDG·지역사회문제해결 Ⅰ',
        department: '휴머니티칼리지',
        description: 'XR 아트퍼포먼스 프로젝트'
      },
      {
        code: '61929A',
        title: '컴퓨터그래픽',
        department: '디지털콘텐츠학과',
        description: 'Unity 3D 엔진 활용 360도 미디어 콘텐츠 프로젝트'
      }
    ]
  },
  {
    year: '2025',
    semester: 'Fall',
    university: 'Konyang',
    courses: [
      {
        code: '61952A',
        title: '기계학습',
        department: '인공지능학과'        ,
        description: '머신러닝 기초 이론 및 딥러닝 실습'
      },
      {
        code: '00041L',
        title: 'ESG·지역사회문제해결 II',
        department: '인공지능학과',
        description: '로블록스 스튜디오 프로젝트'
      },
      {
        code: '61939A',
        title: 'AI 프로젝트 IV ',
        department: '인공지능학과',
        description: 'HCI 이론 및 Human-AI Interaction 프로젝트'
      },
      {
        code: '61929A',
        title: 'AI 설계및프로젝트심화 II',
        department: '인공지능학과',
        description: 'AI 프로젝트 실습 및 논문 작성 지도'
      },
      {
        code: 'A810006',
        title: '인공지능특론 ',
        department: '대학원'
      }
    ]
  },
  {
    year: '2025',
    semester: 'Spring',
    university: 'Konyang',
    courses: [
      {
        code: '61905A',
        title: '창의 도전 설계 Ⅰ',
        department: '인공지능학과'
      },
      {
        code: '61934A',
        title: 'AI 캡스톤디자인',
        department: '인공지능학과',
        description: 'AI 산학 프로젝트 및 논문 작성 지도'
      },
      {
        code: 'A810010',
        title: '머신러닝 알고리즘 ',
        department: '대학원'
      },
      {
        code: 'A810005',
        title: 'AI·SW 특론 ',
        department: '대학원'
      }
    ]
  }
];

const Course = () => {
  // 강의 데이터를 연도별로 그룹화하고 Spring/Fall로 나눔
  const groupedCourses = courseData.reduce((acc, curr) => {
    if (!acc[curr.year]) {
      acc[curr.year] = { Spring: null, Fall: null };
    }
    acc[curr.year][curr.semester] = curr;
    return acc;
  }, {});

  // 연도를 내림차순으로 정렬
  const sortedYears = Object.keys(groupedCourses).sort((a, b) => b - a);

  // 학기 카드 렌더링 함수
  const renderSemesterCard = (semesterData) => {
    if (!semesterData) return null;
    const isKonyang = semesterData.university === 'Konyang';
    return (
      <div className="card shadow-sm h-100" style={{ border: 'none', borderLeft: `5px solid ${isKonyang ? '#198754' : '#8b0029'}` }}>
        <div className="card-header bg-light border-bottom-0 pt-3 pb-3">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="fw-bolder mb-0 text-dark">
              {semesterData.semester}
            </h5>
            <span className="badge shadow-sm text-white" style={{ backgroundColor: isKonyang ? '#198754' : '#8b0029' }}>
              {isKonyang ? 'Konyang Univ.' : 'Korea Univ.'}
            </span>
          </div>
        </div>
        <div className="list-group list-group-flush flex-grow-1">
          {semesterData.courses.map((course, courseIndex) => (
          <div key={courseIndex} className="list-group-item px-3 py-3">
            <div className="d-flex justify-content-between align-items-start">
              <div className="pe-2">
                <h6 className={`fw-bold text-dark ${course.description ? 'mb-1' : 'mb-0'}`}>{course.title}</h6>
                {course.description && <p className="mb-0 text-muted" style={{ fontSize: '0.85rem' }}>{course.description}</p>}
              </div>
              <small className="text-muted text-end flex-shrink-0" style={{ marginTop: '2px' }}>{course.code} | {course.department}</small>
            </div>
          </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="container-xl px-4 mt-5 mb-5">
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bolder">Lectures</h1>
        <p className="lead text-muted">University courses taught by our lab members.</p>
        <hr className="w-25 mx-auto" />
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-10 mt-2 pt-2 mb-5">
          {sortedYears.map((year) => (
            <div key={year} className="mb-5">
              <h3 className="fw-bolder mb-4" style={{ borderBottom: '3px solid #8b0029', paddingBottom: '0.5rem', display: 'inline-block' }}>{year}</h3>
              <div className="row align-items-stretch">
                <div className="col-md-6 mb-4 mb-md-0">
                  {renderSemesterCard(groupedCourses[year].Spring)}
                </div>
                <div className="col-md-6">
                  {renderSemesterCard(groupedCourses[year].Fall)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Course;