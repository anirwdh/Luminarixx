import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styled from 'styled-components';

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = styled.section`
  padding: 120px 0;
  background: linear-gradient(180deg, rgba(14, 14, 14, 0.4) 0%, rgba(26, 26, 26, 0.6) 100%),
              url('/assets/images/vvv.jpg');
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

const ServicesContainer = styled.div`
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

const CardsGrid = styled.div`
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

const Card = styled.div`
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

const CardNumber = styled.div`
  position: absolute;
  right: 30px;
  top: 20px;
  font-size: 80px;
  opacity: 0.15;
  font-family: serif;
`;

const CardTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: #ffffff;
  font-family: 'Playfair Display', serif;
`;

const CardDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  font-size: 1rem;
`;

const CardImage = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const Services = () => {
  const sectionRef = useRef();
  const cardsRef = useRef();

  const services = [
    {
      title: "Night is ours",
      description:
        "Time slows. Conversations soften. Every pour, every plate moves to its own quiet rhythm."
    },
    {
      title: "Heat First",
      description:
        "The flame decides everything — sear, scent, smoke."
    },
    {
      title: "Silence Matters",
      description:
        "The hush between sounds is part of the ritual."
    },
    {
      title: "Bitter Is Honest",
      description:
        "Bitterness is truth, sweetness a memory."
    }
  ];

  useEffect(() => {
    // Temporarily disable animations to ensure cards are visible
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <ServicesSection ref={sectionRef} className="scroll-section">
      <ServicesContainer>
        <SectionTitle>
          <span className="light-text">Our Services</span><br />
          <span className="normal-text">Crafted Excellence.</span>
        </SectionTitle>
        


        <CardsGrid ref={cardsRef}>
          {services.map((service, i) => (
            <Card key={i} className="service-card">
              <CardNumber>
                {i + 1}
              </CardNumber>
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>
                {service.description}
              </CardDescription>
            </Card>
          ))}
        </CardsGrid>
      </ServicesContainer>
    </ServicesSection>
  );
};

export default Services;
