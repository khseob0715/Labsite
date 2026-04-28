import React, { useState } from 'react'; // useState 추가
import { Modal, Button, Carousel } from 'react-bootstrap'; // react-bootstrap 컴포넌트 추가 (사용 환경에 맞게 수정)
import FeatherIcon from 'feather-icons-react'; // FeatherIcon 추가 (사용 환경에 맞게 수정)
import './Gallery.css';
import { newsData } from './News';

// Placeholder data for gallery items
const staticGalleryData = [
    
  {
    date: '2025.09.26-27',
    title: 'APMAR 2025 참가',
    description: '부산에서 열린 APMAR 2025 워크숍에 참석하였습니다.',
    imgs: [
      process.env.PUBLIC_URL + '/assets/img/activities/teamImage.jpg',
    ],
  },
  // {
  //   date: '2025.06.24',
  //   title: '세종시 청소년 상담의 날 VR 전시',
  //   description: '학생들에게 가상현실 콘텐츠를 체험시켜주고 왔습니다! 고생한 임진성, 이서후 그리고 디지털콘텐츠학과 이우진, 강영진 학생에게 감사합니다!',
  //   imgs: [
  //     process.env.PUBLIC_URL + '/assets/img/activities/202506141.png',
  //     process.env.PUBLIC_URL + '/assets/img/activities/202506142.png',
  //     process.env.PUBLIC_URL + '/assets/img/activities/202506143.jpg',
  //   ],
  // },
  {
    date: '2025.03.01',
    title: 'IMX Lab 연구실 개소',
    description: 'IMX Lab이 공식적으로 문을 열고 첫 연구를 시작했습니다.',
    imgs: [
      'https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=2070&auto=format&fit=crop',
    ],
  },
];

// News 데이터 중 이미지가 있는 항목을 추출하여 Gallery 형식으로 자동 변환
const newsGalleryData = newsData
  .filter(item => item.imgs && item.imgs.length > 0 && item.showInGallery !== false)
  .map(item => ({
    date: item.date,
    title: item.shortTitle || item.title, // shortTitle이 있으면 우선 적용, 없으면 기본 title 사용
    description: item.cardContent, // News의 cardContent를 Gallery의 description으로 사용
    imgs: item.imgs,
  }));

// 정적 갤러리 데이터와 News 갤러리 데이터를 병합하고 최신 날짜순으로 정렬
const galleryData = [...staticGalleryData, ...newsGalleryData].sort((a, b) => {
  const dateA = a.date.replace(/[^0-9]/g, '').substring(0, 8); // '2025.09.26-27' 같은 형태에서 8자리 숫자만 추출
  const dateB = b.date.replace(/[^0-9]/g, '').substring(0, 8);
  return dateB.localeCompare(dateA);
});

const GalleryItem = ({ date, title, imgs, onClick }) => (
  <div className="col-lg-4 col-md-6 mb-4">
    <div className="card shadow-sm border-0 lift gallery-item" onClick={onClick} style={{ cursor: 'pointer', height: '220px', overflow: 'hidden' }}>
      <img src={imgs[0]} className="card-img h-100 w-100" alt={title} style={{ objectFit: 'cover' }} />
      <div className="card-img-overlay d-flex flex-column justify-content-end p-0" style={{ opacity: 1, transition: 'none' }}>
        <div className="p-3 w-100 d-flex justify-content-between align-items-end" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 100%)' }}>
          <div>
            <h5 className="fw-bolder text-white mb-1" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>{title}</h5>
            <p className="text-white-75 small mb-0" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>{date}</p>
          </div>
          {imgs && imgs.length > 1 && (
            <span className="text-white fw-bold px-2 py-1 rounded-pill" style={{ backgroundColor: 'rgba(255,255,255,0.25)', fontSize: '0.75rem', backdropFilter: 'blur(4px)' }}>
              1 / {imgs.length}
            </span>
          )}
        </div>
      </div>
    </div>
  </div>
);

const Gallery = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // 현재 선택된 이미지 번호 상태 추가

  const handleShow = (index) => {
    setCurrentIndex(index);
    setCurrentImageIndex(0); // 모달을 열 때마다 첫 번째 이미지로 초기화
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  const handleSelect = (selectedIndex) => {
    setCurrentImageIndex(selectedIndex); // 이미지 넘길 때 번호 업데이트
  };

  // 연도별로 갤러리 데이터 그룹화
  const groupedGallery = galleryData.reduce((acc, item, index) => {
    const year = item.date.substring(0, 4);
    if (!acc[year]) acc[year] = [];
    acc[year].push({ ...item, originalIndex: index });
    return acc;
  }, {});
  const sortedYears = Object.keys(groupedGallery).sort((a, b) => b - a);

  return (
    <div className="container-xl px-4 mt-5 mb-5">
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bolder">Gallery</h1>
        <p className="lead text-muted">Moments from our lab activities and events.</p>
        <hr className="w-25 mx-auto" />
      </div>

      {sortedYears.map((year) => (
        <div key={year} className="mb-5">
          <h3 className="fw-bolder mb-4" style={{ borderBottom: '3px solid #8b0029', paddingBottom: '0.5rem', display: 'inline-block' }}>{year}</h3>
          <div className="row">
            {groupedGallery[year].map((item) => (
              <GalleryItem key={item.originalIndex} {...item} onClick={() => handleShow(item.originalIndex)} />
            ))}
          </div>
        </div>
      ))}

      {/* 이미지 모달 */}
      <Modal show={showModal} onHide={handleClose} centered size="lg" className="modal-gallery">
        <Modal.Header style={{ backgroundColor: '#212529', borderBottom: '1px solid #495057' }}>
          <Modal.Title className="text-white">
            {galleryData[currentIndex]?.title}
          </Modal.Title>
          <button type="button" className="custom-close-btn" onClick={handleClose} aria-label="Close">
            <FeatherIcon icon="x" size="28" />
          </button>
        </Modal.Header>
        <Modal.Body className="p-0 text-center position-relative" style={{ backgroundColor: '#212529' }}>
          <Carousel activeIndex={currentImageIndex} onSelect={handleSelect} slide={false} interval={null} variant="light" controls={galleryData[currentIndex]?.imgs?.length > 1} indicators={galleryData[currentIndex]?.imgs?.length > 1}>
            {galleryData[currentIndex]?.imgs?.map((imgUrl, idx) => (
              <Carousel.Item key={idx}>
                {/* <div style={{ height: '65vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}> */}
                  <div style={{ width: '100%', aspectRatio: '16/9', maxHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img
                    src={imgUrl}
                    alt={`${galleryData[currentIndex]?.title} ${idx + 1}`}
                    className="d-block"
                    style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
                  />
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </Modal.Body>
        <Modal.Footer className="flex-column align-items-start pt-3" style={{ backgroundColor: '#212529', borderTop: '1px solid #495057' }}>
          {galleryData[currentIndex]?.description && (
            <p className="text-white-75 mb-2 w-100">{galleryData[currentIndex]?.description}</p>
          )}
          <div className="d-flex justify-content-between align-items-center w-100">
            <span className="text-white-50 small">{galleryData[currentIndex]?.date}</span>
            {/* 총 사진 수 및 현재 순서 표시 (예: 1 / 3) */}
            {galleryData[currentIndex]?.imgs?.length > 1 && (
              <span className="text-white small fw-bold px-3 py-1 rounded-pill" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                {currentImageIndex + 1} / {galleryData[currentIndex]?.imgs?.length}
              </span>
            )}
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Gallery;