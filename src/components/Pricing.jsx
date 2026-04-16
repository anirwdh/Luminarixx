import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Section = styled.section`
  padding: 8rem 5%;
  background-color: ${({ theme }) => theme.colors.background};

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
  margin-bottom: 5rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  
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

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const PricingCard = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: 3rem;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, background 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    background: ${({ theme }) => theme.colors.surfaceHover};
  }

  h3 {
    font-size: ${({ theme }) => theme.typography.h3};
    margin-bottom: 1rem;
  }

  p.desc {
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: ${({ theme }) => theme.typography.body};
    margin-bottom: 2rem;
    min-height: 4.5em;
  }

  ul {
    margin-bottom: 3rem;
    flex-grow: 1;
    
    li {
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
      gap: 0.75rem;
      color: ${({ theme }) => theme.colors.text.primary};
      font-size: 1rem;

      &::before {
        content: '✔';
        color: ${({ theme }) => theme.colors.text.secondary};
        font-size: 0.8rem;
      }
    }
  }

  a {
    display: block;
    text-align: center;
    padding: 1rem;
    background-color: ${({ theme }) => theme.colors.text.primary};
    color: ${({ theme }) => theme.colors.background};
    border-radius: ${({ theme }) => theme.borderRadius.full};
    font-weight: 600;
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.02);
    }
  }

  .featured-badge {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: transparent;
    border: 1px solid ${({ theme }) => theme.colors.border};
    padding: 0.25rem 0.75rem;
    border-radius: ${({ theme }) => theme.borderRadius.full};
    font-size: 0.75rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 2rem 1.5rem;

    p.desc { min-height: unset; }
  }
`;


const Pricing = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.pricing-header', 
        { y: 30, opacity: 0 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out'
        }
      );

      gsap.fromTo('.pricing-card', 
        { y: 40, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '.pricing-grid',
            start: 'top 85%',
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out'
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section ref={sectionRef} id="pricing">
      <Container>
        <Header className="pricing-header">
          <div className="badge">Solutions</div>
          <h2>Built for Scale. Tailored for You.</h2>
          <p>Flexible engagement models designed to match your business goals — from rapid launches to full-scale digital transformation.</p>
        </Header>
        
        <PricingGrid className="pricing-grid">
          <PricingCard className="pricing-card">
            <h3>Launch & Growth</h3>
            <p className="desc">
              Perfect for startups and brands looking to establish a strong digital presence quickly — with performance-driven design and scalable foundations.
            </p>
            <ul>
              <li>Landing Pages & Websites</li>
              <li>UI/UX Design Systems</li>
              <li>Performance Optimization</li>
              <li>Fast Turnaround Delivery</li>
            </ul>
            <a href="#contact">Get Started 🚀</a>
          </PricingCard>
          
          <PricingCard className="pricing-card">
            <h3>Custom Software</h3>
            <p className="desc">
              End-to-end development of powerful, scalable systems tailored to your workflows — built for efficiency, speed, and long-term growth.
            </p>
            <ul>
              <li>Web & Mobile Applications</li>
              <li>CRM / ERP Solutions</li>
              <li>API & Backend Systems</li>
              <li>Cloud Deployment</li>
            </ul>
            <a href="#contact">Discuss Your Project ⚙️</a>
          </PricingCard>

          <PricingCard className="pricing-card">
            <h3>AI & Automation</h3>
            <p className="desc">
              Automate operations and unlock insights with intelligent systems that reduce manual work and increase productivity.
            </p>
            <ul>
              <li>AI Chatbots & Assistants</li>
              <li>Workflow Automation</li>
              <li>Data Intelligence Tools</li>
              <li>Custom AI Integrations</li>
            </ul>
            <a href="#contact">Explore AI Solutions 🤖</a>
          </PricingCard>

          <PricingCard className="pricing-card">
            <h3>HR & Operations</h3>
            <p className="desc">
              Modern workforce solutions designed to streamline hiring, onboarding, and organizational efficiency at scale.
            </p>
            <ul>
              <li>Talent Acquisition</li>
              <li>HR Management Systems</li>
              <li>Process Optimization</li>
              <li>Ongoing Support</li>
            </ul>
            <a href="#contact">Optimize Your Team 👥</a>
          </PricingCard>
        </PricingGrid>
      </Container>
    </Section>
  );
};

export default Pricing;
