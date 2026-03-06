import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CSSPlugin } from 'gsap/CSSPlugin';
import styled from 'styled-components';

gsap.registerPlugin(ScrollTrigger, CSSPlugin);

const AboutSection = styled.section`
  padding: 100px 0;
  background: linear-gradient(180deg, #1a1a1a 0%, #0e0e0e 100%);
  position: relative;
  overflow: hidden;
`;

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 50px;
  }
`;

const AboutContent = styled.div`
  z-index: 2;
`;

const SectionTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 800;
  margin-bottom: 30px;

  .light-text {
    background: linear-gradient(135deg, #bbf7d0, #ffffff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .normal-text {
    color: #ffffff;
  }
`;

const AboutText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 30px;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin-top: 50px;
`;

const StatItem = styled.div`
  text-align: center;
  padding: 30px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(255, 77, 109, 0.3);
    background: rgba(255, 77, 109, 0.05);
  }
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #ff4d6d, #00fff7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 10px;
`;

const StatLabel = styled.div`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const AboutVisual = styled.div`
  position: relative;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const VisualCard = styled.div`
  position: absolute;
  background: linear-gradient(135deg, rgba(255, 77, 109, 0.1), rgba(0, 255, 247, 0.1));
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 40px;
  backdrop-filter: blur(10px);
  transition: all 0.4s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(255, 77, 109, 0.2);
  }
`;

const MainCard = styled(VisualCard)`
  width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  z-index: 3;
`;

const FloatingCard = styled(VisualCard)`
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
`;

const Card1 = styled(FloatingCard)`
  top: 20px;
  right: 20px;
`;

const Card2 = styled(FloatingCard)`
  bottom: 20px;
  left: 20px;
`;

const About = () => {
  const sectionRef = useRef();
  const contentRef = useRef();
  const visualRef = useRef();
  const statsRef = useRef();

  useEffect(() => {
    // Content animation
    gsap.from(contentRef.current.children, {
      x: -80,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
        end: 'bottom 30%',
        toggleActions: 'play none none reverse'
      }
    });

    // Visual cards animation
    const visualCards = visualRef.current.children;
    gsap.from(visualCards, {
      scale: 0,
      rotation: 180,
      opacity: 0,
      duration: 1.2,
      stagger: 0.2,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 60%',
        end: 'bottom 30%',
        toggleActions: 'play none none reverse'
      }
    });

    // Stats animation
    const statItems = statsRef.current.children;
    gsap.from(statItems, {
      y: 60,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: statsRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    });

    // Floating animation for cards
    gsap.to(Card1, {
      y: -20,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    });

    gsap.to(Card2, {
      y: -15,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      delay: 1
    });

    // Counter animation for stats
    const observerOptions = {
      threshold: 0.5,
      rootMargin: '0px'
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const statNumbers = entry.target.querySelectorAll('.stat-number');
          statNumbers.forEach(stat => {
            const target = parseInt(stat.textContent);
            let current = 0;
            const increment = target / 50;
            
            const updateCounter = () => {
              if (current < target) {
                current += increment;
                stat.textContent = Math.ceil(current) + '+';
                requestAnimationFrame(updateCounter);
              } else {
                stat.textContent = target + '+';
              }
            };
            
            updateCounter();
          });
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      observer.disconnect();
    };
  }, []);

  return (
    <AboutSection ref={sectionRef}>
      <div className="container">
        <AboutContainer>
          <AboutContent ref={contentRef}>
            <SectionTitle>
              <span className="light-text">About</span> <span className="normal-text">Luminarix</span>
            </SectionTitle>
            <AboutText>
              We are a team of passionate creators, developers, and strategists dedicated to transforming 
              digital experiences. With expertise spanning web development, mobile applications, AI solutions, 
              and digital marketing, we help businesses thrive in the modern digital landscape.
            </AboutText>
            <AboutText>
              Our approach combines cutting-edge technology with creative design thinking to deliver 
              solutions that not only look stunning but also drive measurable results. We believe in 
              building long-term partnerships with our clients and helping them achieve their digital goals.
            </AboutText>
            <AboutText>
              From startups to established enterprises, we've helped numerous brands establish their 
              digital presence and reach new heights of success. Your vision, our expertise – together 
              we create extraordinary digital experiences.
            </AboutText>
          </AboutContent>

          <AboutVisual ref={visualRef}>
            <MainCard>🚀</MainCard>
            <Card1>💡</Card1>
            <Card2>🎯</Card2>
          </AboutVisual>
        </AboutContainer>

        <StatsGrid ref={statsRef}>
          <StatItem>
            <StatNumber className="stat-number">150</StatNumber>
            <StatLabel>Projects Completed</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber className="stat-number">98</StatNumber>
            <StatLabel>Happy Clients</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber className="stat-number">50</StatNumber>
            <StatLabel>Team Members</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber className="stat-number">7</StatNumber>
            <StatLabel>Years Experience</StatLabel>
          </StatItem>
        </StatsGrid>
      </div>
    </AboutSection>
  );
};

export default About;
