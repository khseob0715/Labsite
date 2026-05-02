import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Hero.css';

// 실제 사용할 이미지 경로로 수정해주세요.
const images = [
    {
        src: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2574&auto=format&fit=crop',
        alt: 'First slide',
        title: 'Konyang IMX Lab',
        caption: '인간과 기술의 조화를 목표로 혁신적인 상호작용을 연구합니다.'
    },
    {
        src: process.env.PUBLIC_URL + '/assets/img/home/research.png',
        alt: 'Second slide',
        title: 'Pioneering Research',
        caption: '가상현실(VR), 증강현실(AR), 사용자 경험(UX) 등 다양한 분야를 탐구합니다.'
    },
    {
        src: process.env.PUBLIC_URL + '/assets/img/home/teamImage.jpg',
        alt: 'Third slide',
        title: 'Join Our Team',
        caption: '미래를 함께 만들어갈 열정적인 학부 연구생 및 대학원생을 기다립니다.'
    }
];

const Hero = () => {
    return (
        <Carousel fade indicators={false} controls={false} interval={4000} className="carousel-fade">
            {images.map((image, index) => (
                <Carousel.Item key={index}>
                    <div className="hero-image-container">
                        <img
                            className="d-block w-100 hero-image"
                            src={image.src}
                            alt={image.alt}
                        />
                         <div className="hero-overlay"></div>
                    </div>
                    <Carousel.Caption className="text-start hero-caption">
                        <h1 className="display-4 fw-bolder text-white mb-3">{image.title}</h1>
                        <p className="lead fw-normal text-white-75 mb-0">{image.caption}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default Hero;