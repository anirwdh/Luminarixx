import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CSSPlugin } from 'gsap/CSSPlugin';
import styled from 'styled-components';

gsap.registerPlugin(ScrollTrigger, CSSPlugin);

const WhySection = styled.section`
  padding: 120px 0;
  background: linear-gradient(180deg, rgba(14, 14, 14, 0.4) 0%, rgba(26, 26, 26, 0.6) 100%),
              url('/assets/images/bgg.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  position: relative;
  overflow: hidden;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
 
  z-index: 10;
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
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 968px) {
    position: absolute;
    top: -100px;
    left: 0;
    right: 0;
    height: 100%;
    z-index: 1;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding-top: 100px;
  }
`;

const GlowOrb = styled.div`
  width: 400px;
  height: 400px;
  position: relative;
  border-radius: 50%;
  background: radial-gradient(circle at center, 
   rgba(76, 140, 102, 0.83) 30%,  rgba(64, 161, 100, 0.25) 0%, 
    
    transparent 70%);
  filter: blur(40px);
  animation: float 6s ease-in-out infinite, pulse 4s ease-in-out infinite;

  @media (max-width: 968px) {
    width: 200px;
    height: 200px;
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
  margin-top: 40px;

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
            <span className="light-text">Where Automation</span><br />
            <span className="normal-text">Meets Ambition.</span>
          </SectionTitle>
          
          <SectionSubtitle>
            We don't just build technology. We design intelligent systems 
            that quietly power growth, precision, and long-term scalability.
          </SectionSubtitle>

          <EditorialContent ref={editorialContentRef}>
            <EditorialParagraph>
              Luminarix engineers intelligent software, web platforms, and mobile applications 
              designed to move at the speed of modern business. Every system is built with 
              automation at its core — reducing friction, eliminating inefficiencies, 
              and accelerating execution.
            </EditorialParagraph>

            <EditorialParagraph>
              From AI-powered workflows to scalable digital infrastructure, we create 
              autonomous ecosystems that adapt, optimize, and grow with your ambition — 
              transforming complexity into clarity and momentum.
            </EditorialParagraph>
          </EditorialContent>
        </RightContent>
      </WhyContainer>
    </WhySection>
  );
};

export default WhyLuminarix;
