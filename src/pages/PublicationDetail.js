import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import { useAlert } from 'react-alert';
import { publicationsData } from './Publication';

const PublicationDetail = ({ match }) => {
  const { id } = match.params;
  
  // 모든 Publication 데이터에서 해당 id를 가진 논문을 찾습니다.
  const allPubs = Object.values(publicationsData).flat();
  // id가 일치하는 논문이 없으면(잘못된 주소 등) 샘플 데이터를 보여줍니다.
  const pub = allPubs.find(p => p.id === id) || {
      title: 'Publication Not Found',
      authors: 'Author Names',
      journal: 'Unknown Journal',
      details: '',
      doi: '',
      link: '#!',
      video: 'https://www.youtube.com',
      tags: [],
      keywords: [],
      abstract: 'No abstract available for this publication.',
      image: '',
      caption: '',
      citation: ''
  };
  const alert = useAlert();

  // 페이지 마운트 시 최상단으로 스크롤 이동
  useEffect(() => {
      window.scrollTo(0, 0);
  }, []);

  const handleCopyCitation = () => {
    if (pub.citation) {
      navigator.clipboard.writeText(pub.citation);
      alert.show('인용문이 복사되었습니다!', { type: 'success' });
    }
  };

  return (
    <div className="container-xl px-4 mt-5 mb-5">
      <style>
        {`
          .btn-crimson {
            background-color: #8b0029;
            color: white;
            border: 1px solid #8b0029;
            transition: all 0.3s ease;
          }
          .btn-crimson:hover, .btn-crimson:focus {
            background-color: #6d001a;
            color: white;
            border-color: #6d001a;
          }
          .btn-light-crimson-hover {
            background-color: #f8f9fa;
            color: #212529;
            border: 1px solid #dee2e6;
            transition: all 0.3s ease;
          }
          .btn-light-crimson-hover:hover, .btn-light-crimson-hover:focus {
            border-color: #8b0029;
            background-color: #f8f9fa;
          }
          .citation-copy-btn {
            position: absolute;
            bottom: 10px;
            right: 10px;
            background-color: rgba(255, 255, 255, 0.9);
            border: 1px solid #dee2e6;
            border-radius: 0.5rem;
            padding: 0.5rem 1rem;
            font-size: 0.85rem;
            font-weight: bold;
            color: #8b0029;
            cursor: pointer;
            transition: all 0.2s ease-in-out;
          }
          .citation-copy-btn:hover {
            background-color: #8b0029;
            color: white;
            border-color: #8b0029;
          }
          .citation-copy-btn:hover svg {
            stroke: white !important;
          }
        `}
      </style>
      {/* Back Navigation */}
      <div className="mb-2">
        <Link to="/publication" className="text-decoration-none fw-bold d-inline-flex align-items-center" style={{ color: '#8b0029' }}>
          <FeatherIcon icon="arrow-left" className="me-1" style={{ width: 16, height: 16, stroke: '#8b0029', verticalAlign: 'middle', position: 'relative', top: '-1px' }} />
          Back to Publication
        </Link>
      </div>

      <div className="card border-0 shadow-sm mt-4 mb-5">
        <div className="card-body p-4 p-md-5">
          {/* Tags */}
          <div className="d-flex align-items-center gap-2 mb-3">
            {pub.tags && pub.tags.map(tag => (
              <span key={tag} className="badge text-white px-2 py-1" style={{ backgroundColor: '#8b0029' }}>{tag}</span>
            ))}
          </div>

          {/* Header */}
          <h1 className="fw-bolder mb-3">{pub.title}</h1>
          <p className="lead text-dark">{pub.authors}</p>
          <p className="text-muted mb-4">
            <span className="fw-bold">{pub.journal}</span>, {pub.details}
          </p>
          
          {/* Action Links */}
          <div className="d-flex flex-wrap gap-2 mb-5">
             {/* {pub.link && pub.link !== '#!' && (
               <a href={pub.link} target="_blank" rel="noopener noreferrer" className="btn btn-crimson rounded-pill d-inline-flex align-items-center px-4 shadow-sm">
                 <FeatherIcon icon="external-link" className="me-2" style={{ width: 16, height: 16 }} />
                 Publisher Site
               </a>
             )} */}
             {pub.doi && (
               <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer" className="btn btn-light-crimson-hover rounded-pill d-inline-flex align-items-center px-4 shadow-sm text-decoration-none">
                 DOI: {pub.doi}
               </a>
             )}
             {pub.video && pub.video !== '#!' && (
               <a href={pub.video} target="_blank" rel="noopener noreferrer" className="btn btn-light-crimson-hover rounded-pill d-inline-flex align-items-center px-4 shadow-sm text-decoration-none">
                 <FeatherIcon icon="youtube" className="me-2" style={{ width: 16, height: 16 }} />
                 YouTube
               </a>
             )}
          </div>

          <hr className="my-5" />

          {/* Teaser Image */}
          {pub.image && (
            <div className="mb-5 text-center">
              <img 
                src={pub.image} 
                alt="Teaser" 
                className="img-fluid rounded" 
              />
              {pub.caption && (
                <p className="text-muted mt-3 small">
                  {pub.caption}
                </p>
              )}
            </div>
          )}

          {/* Abstract */}
          {pub.abstract && (
            <>
              <h3 className="fw-bolder mb-4" style={{ color: '#8b0029' }}>Abstract</h3>
              <p className="mb-5 text-dark" style={{ lineHeight: '1.8', fontSize: '1.1rem', textAlign: 'justify', whiteSpace: 'pre-line' }}>
                {pub.abstract}
              </p>
            </>
          )}

          {/* Citation */}
          {pub.citation && (
            <>
              <h3 className="fw-bolder mb-4" style={{ color: '#8b0029' }}>Citation (BibTeX)</h3>
              <div className="position-relative mb-4">
                <pre className="bg-light p-4 rounded border text-dark" style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word', fontSize: '0.95rem', fontFamily: 'monospace' }}>
{pub.citation}
                </pre>
                <button className="citation-copy-btn d-flex align-items-center" onClick={handleCopyCitation}>
                  <FeatherIcon icon="copy" className="me-2" style={{ stroke: '#8b0029', width: 16, height: 16 }} />
                  복사하기
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PublicationDetail;