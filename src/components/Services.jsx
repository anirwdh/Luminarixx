import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Section = styled.section`
  padding: 8rem 5%;
  background-color: ${({ theme }) => theme.colors.background};
  
  @keyframes pulseOp {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 1; }
  }
  @keyframes spinCenter {
    100% { transform: rotate(360deg); }
  }
  @keyframes bounceHead {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-3px); }
  }
  @keyframes floatContinuous {
    0% { transform: translateY(0px) rotate(0deg); }
    100% { transform: translateY(-8px) rotate(2deg); }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 4rem 5%;
  }
`;


const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin: 0 auto 5rem;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  .badge {
    display: inline-block;
    padding: 0.5rem 1rem;
    background: ${({ theme }) => theme.colors.surface};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.borderRadius.full};
    font-size: ${({ theme }) => theme.typography.small};
    color: ${({ theme }) => theme.colors.text.secondary};
    margin-bottom: 2rem;
  }
  
  h2 {
    font-size: ${({ theme }) => theme.typography.h1};
    font-weight: 500;
    letter-spacing: -0.04em;
    margin-bottom: 1.5rem;
    line-height: 1.1;
  }
  
  p {
    font-size: ${({ theme }) => theme.typography.h3};
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

const ServicesList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const ServiceItem = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 3.5rem 3rem;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px dashed ${({ theme }) => theme.colors.border};
  border-radius: 2.5rem;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), background 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s ease;
  cursor: pointer;
  min-height: 280px;
  position: relative;
  overflow: hidden;

  /* Ambient floating glow in the background */
  &::before {
    content: '';
    position: absolute;
    width: 250px; height: 250px;
    background: radial-gradient(circle, rgba(150,150,150,0.06) 0%, transparent 60%);
    top: -20px; right: -50px;
    border-radius: 50%;
    animation: floatContinuous 6s ease-in-out infinite alternate;
    pointer-events: none;
    z-index: 0;
  }

  > * { position: relative; z-index: 1; }

  &:hover {
    background: ${({ theme }) => theme.colors.surfaceHover};
    border-color: ${({ theme }) => theme.colors.text.muted};
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.04);
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.text.primary};
  }

  p {
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: 1.125rem;
    line-height: 1.6;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 2rem;
    border-radius: 1.5rem;
    min-height: unset;

    h3 { font-size: 1.25rem; }
    p { font-size: 1rem; }
  }
`;


const IconWrapper = styled.div`
  width: 64px;
  height: 64px;
  background-color: ${({ theme }) => theme.colors.text.primary};
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2.5rem;
  position: relative;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: inset 0 2px 5px rgba(255,255,255,0.1), 0 4px 10px rgba(0,0,0,0.05);
  animation: floatContinuous 4s ease-in-out infinite alternate;
  
  svg {
    width: 30px;
    height: 30px;
    color: ${({ theme }) => theme.colors.surface};
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    border-radius: 20px;
    background: inherit;
    z-index: -1;
    filter: blur(12px);
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  ${ServiceItem}:hover & {
    transform: translateY(-5px) scale(1.05);
    
    svg {
      transform: scale(1.1) rotate(5deg);
    }
    
    &::before {
      opacity: 0.35;
    }
  }
`;

const Services = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.service-header', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      });

      gsap.from('.service-item', {
        scrollTrigger: {
          trigger: '.service-list',
          start: 'top 85%',
        },
        x: -40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power3.out'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const servicesData = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" style={{animation: 'pulseOp 2s infinite'}}></polyline>
          <polyline points="8 6 2 12 8 18" style={{animation: 'pulseOp 2s infinite 1s'}}></polyline>
        </svg>
      ),
      title: 'Software Craft',
      desc: 'Scalable custom software solutions engineered for performance - built for startups, SaaS platforms, and growing digital businesses.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" style={{animation: 'spinCenter 12s linear infinite', transformOrigin: 'center'}}/>
          <circle cx="12" cy="12" r="4" style={{animation: 'pulseOp 2s infinite'}}/>
        </svg>
      ),
      title: 'AI Automation',
      desc: 'Intelligent automation systems powered by AI - designed for startups, SaaS, and enterprises to streamline workflows and boost efficiency.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4" style={{animation: 'bounceHead 2s infinite alternate'}}></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" style={{animation: 'pulseOp 3s infinite 1.5s'}}></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75" style={{animation: 'pulseOp 3s infinite'}}></path>
        </svg>
      ),
      title: 'HR Solutions',
      desc: 'Modern HR and workforce management systems - tailored for startups, enterprises, and growing teams to optimize hiring and operations.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21" style={{animation: 'pulseOp 2s infinite'}}></line>
          <line x1="12" y1="17" x2="12" y2="21" style={{animation: 'pulseOp 2s infinite 1s'}}></line>
        </svg>
      ),
      title: 'Web & Mobile Dev',
      desc: 'High-performance web and mobile experiences - crafted for startups, SaaS, and brands focused on speed, usability, and conversion.'
    }
  ];

  return (
    <Section ref={sectionRef} id="services">
      <Container>
        <Header className="service-header">
          <div className="badge">Services</div>
          <h2>What We Do Best</h2>
          <p>From design to launch — we cover the full cycle to make your product stand out.</p>
        </Header>
        <ServicesList className="service-list">
          {servicesData.map((s, i) => (
            <ServiceItem key={i} className="service-item">
              <IconWrapper className="svc-icon-wrapper">
                {s.icon}
              </IconWrapper>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </ServiceItem>
          ))}
        </ServicesList>
      </Container>
    </Section>
  );
};

export default Services;
