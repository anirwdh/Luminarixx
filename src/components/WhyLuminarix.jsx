import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CSSPlugin } from 'gsap/CSSPlugin';
import styled from 'styled-components';

gsap.registerPlugin(ScrollTrigger, CSSPlugin);

const WhySection = styled.section`
  padding: 80px 0;
  background: linear-gradient(180deg, rgba(14, 14, 14, 0.4) 0%, rgba(26, 26, 26, 0.6) 100%),
              url('/assets/images/bgg.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  position: relative;
  overflow: hidden;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
 
  z-index: 10;

  @media (max-width: 768px) {
    background-attachment: scroll;
    padding: 60px 0;
    min-height: 60vh;
  }

  @media (max-width: 480px) {
    padding: 40px 0;
    min-height: 50vh;
  }
`;

const WhyContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 100px;
  align-items: center;
  min-height: 80vh;
  position: relative;
  z-index: 2;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 80px;
    min-height: auto;
  }
`;

const LeftVisual = styled.div`
  position: relative;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 968px) {
    position: absolute;
    top: -50px;
    left: 0;
    right: 0;
    height: 150px;
    z-index: 1;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding-top: 50px;
  }

  @media (max-width: 480px) {
    height: 100px;
    top: -30px;
    padding-top: 30px;
  }
`;

const GlowOrb = styled.div`
  width: 300px;
  height: 300px;
  position: relative;
  border-radius: 50%;
  background: radial-gradient(circle at center, 
   rgba(76, 140, 102, 0.83) 30%,  rgba(64, 161, 100, 0.25) 0%, 
    
    transparent 70%);
  filter: blur(30px);
  animation: float 6s ease-in-out infinite, pulse 4s ease-in-out infinite;

  @media (max-width: 968px) {
    width: 150px;
    height: 150px;
  }

  @media (max-width: 480px) {
    width: 100px;
    height: 100px;
    filter: blur(20px);
  }

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: radial-gradient(circle at center,

      transparent 100%);
    animation: rotate 20s linear infinite;

    @media (max-width: 968px) {
      width: 100px;
      height: 100px;
    }
  }

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: radial-gradient(circle at center,

      transparent 70%);
    animation: rotate-reverse 15s linear infinite;

    @media (max-width: 968px) {
      width: 50px;
      height: 50px;
    }
  }
`;

const RightContent = styled.div`
  z-index: 2;

  @media (max-width: 968px) {
    order: 1;
    z-index: 3;
    position: relative;
    margin-top: 60px;
  }
`;

const SectionTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: clamp(3.5rem, 7vw, 5rem);
  font-weight: 400;
  line-height: 1.05;
  margin-bottom: 40px;
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
    margin-bottom: 30px;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.65);
  margin-bottom: 60px;
  max-width: 500px;
  font-weight: 300;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 40px;
  }
`;

const EditorialContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  margin-top: 70px;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const EditorialParagraph = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.65);
  font-weight: 300;
`;

const WhyLuminarix = () => {
  const sectionRef = useRef();
  const leftVisualRef = useRef();
  const rightContentRef = useRef();
  const editorialContentRef = useRef();

  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <WhySection ref={sectionRef} className="scroll-section">
      <WhyContainer className="section-content">
        <LeftVisual ref={leftVisualRef}>
          <GlowOrb />
        </LeftVisual>

        <RightContent ref={rightContentRef}>
          <SectionTitle>
            <span className="light-text">Why Luminarix</span><br />
            <span className="normal-text">Stands Apart.</span>
          </SectionTitle>
          
          {/* <SectionSubtitle>
              We design and build intelligent digital systems — from custom software and 
  AI automation to web and mobile applications — helping businesses scale 
  faster with technology built for performance, reliability, and growth.
          </SectionSubtitle> */}

          <EditorialContent ref={editorialContentRef}>
            <EditorialParagraph>
              At Luminarix, we specialize in custom software development, AI automation, 
    and modern web and mobile application development. Our engineering approach 
    focuses on building scalable, secure, and high-performance digital solutions 
    that help businesses operate faster and more efficiently.
            </EditorialParagraph>

            <EditorialParagraph>
              From AI chatbots and automated workflows to enterprise software platforms 
    and digital products, we create technology ecosystems that streamline 
    operations, improve decision-making, and support long-term business growth.
            </EditorialParagraph>
          </EditorialContent>
        </RightContent>
      </WhyContainer>
    </WhySection>
  );
};

export default WhyLuminarix;
