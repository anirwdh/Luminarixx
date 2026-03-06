import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styled from 'styled-components';

gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = styled.section`
  padding: 120px 0;
  background: linear-gradient(180deg, rgba(14, 14, 14, 0.4) 0%, rgba(26, 26, 26, 0.2) 100%),
              url('/assets/images/sss.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

const ExperienceContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 2;
`;

const SectionTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: clamp(3.1rem, 6vw, 4rem);
  font-weight: 400;
  line-height: 1.05;
  margin-bottom: 100px;
  text-align: right;
  letter-spacing: -1.5px;

  .light-text {
    background: linear-gradient(135deg, #bbf7d0, #ffffff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .normal-text {
    color: #ffffff;
  }

  @media (max-width: 768px) {
    font-size: clamp(2.5rem, 8vw, 3.5rem);
    margin-bottom: 25px;
    text-align: center;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 80px;
  text-align: center;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 300;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 60px;
  }
`;

const ReviewsGrid = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 60px;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
    margin-top: 40px;
  }
`;

const ReviewCard = styled.div`
  backdrop-filter: blur(10px);
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 20px;
  padding: 40px;
  color: white;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  min-height: 380px;
  width: 280px;
  flex-shrink: 0;
  
  &:nth-child(1), &:nth-child(2) {
    transform: translateY(-60px);
  }
  
  &:nth-child(3), &:nth-child(4) {
    transform: translateY(80px);
  }

  @media (max-width: 768px) {
    padding: 30px;
    min-height: 300px;
    width: 100%;
    max-width: 320px;
    margin: 0 auto;

    &:nth-child(1), &:nth-child(2) {
      transform: translateY(0);
    }
    
    &:nth-child(3), &:nth-child(4) {
      transform: translateY(0);
    }
  }
  
  &:before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, 
      rgba(255, 77, 109, 0.1), 
      rgba(0, 255, 247, 0.05), 
      rgba(138, 43, 226, 0.08)
    );
    border-radius: 20px;
    opacity: 0;
    transition: opacity 0.4s ease;
  }
`;

const Rating = styled.div`
  display: flex;
  gap: 5px;
  margin-bottom: 20px;
  font-size: 1.2rem;
`;

const ReviewText = styled.p`
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  font-size: 1rem;
  margin-bottom: 20px;
  font-style: italic;
`;

const ReviewAuthor = styled.div`
  text-align: right;
  margin-top: auto;
`;

const AuthorName = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 5px;
`;

const AuthorTitle = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
`;

const Experience = () => {
  const sectionRef = useRef();
  const reviewsRef = useRef();

  const reviews = [
    {
      rating: 5,
      text: "Exceptional work! They transformed our vision into reality with precision and creativity. The attention to detail is unmatched.",
      author: "Sarah Chen",
      title: "CEO, TechVentures"
    },
    {
      rating: 5,
      text: "Outstanding service from start to finish. The team's dedication and expertise made our project a huge success.",
      author: "Michael Rodriguez",
      title: "Creative Director"
    },
    {
      rating: 5,
      text: "Beyond impressed with the quality and professionalism. They delivered exactly what we needed, on time and beyond expectations.",
      author: "Emma Thompson",
      title: "Marketing Head"
    },
    {
      rating: 5,
      text: "A truly remarkable experience. Their innovative approach and commitment to excellence set them apart from the rest.",
      author: "James Park",
      title: "Product Manager"
    }
  ];

  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} style={{ color: i < rating ? '#FFD700' : 'rgba(255,255,255,0.3)' }}>
        ★
      </span>
    ));
  };

  return (
    <ExperienceSection ref={sectionRef} className="scroll-section">
      <ExperienceContainer>
        <SectionTitle>
          <span className="light-text">Real Experience</span><br />
          <span className="normal-text">Client Stories.</span>
        </SectionTitle>
        
       

        <ReviewsGrid ref={reviewsRef}>
          {reviews.map((review, i) => (
            <ReviewCard key={i} className="review-card">
              <Rating>
                {renderStars(review.rating)}
              </Rating>
              <ReviewText>
                "{review.text}"
              </ReviewText>
              <ReviewAuthor>
                <AuthorName>{review.author}</AuthorName>
                <AuthorTitle>{review.title}</AuthorTitle>
              </ReviewAuthor>
            </ReviewCard>
          ))}
        </ReviewsGrid>
      </ExperienceContainer>
    </ExperienceSection>
  );
};

export default Experience;
