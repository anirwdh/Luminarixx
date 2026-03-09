import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CSSPlugin } from 'gsap/CSSPlugin';
import styled from 'styled-components';

gsap.registerPlugin(ScrollTrigger, CSSPlugin);

const PortfolioSection = styled.section`
  height: 50rem;
  background: linear-gradient(180deg, rgba(14, 14, 14, 0.4) 0%, rgba(26, 26, 26, 0.6) 100%),
              url('/assets/images/JJJ.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    background-attachment: scroll;
    height: 100vh;
    min-height: 600px;
  }

  @media (max-width: 480px) {
    height: auto;
    min-height: 500px;
  }
`;

const HorizontalScrollContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 100%;
  overflow-x: auto;
  padding-top: 200px;

  @media (max-width: 768px) {
    height: auto;
    min-height: 60vh;
    margin-top: 0;
    padding-top: 0;
  }

  @media (max-width: 480px) {
    min-height: 50vh;
  }
`;

const ScrollContent = styled.div`
  display: flex;
  height: 60vh;
  min-width: 100%;
  gap: 40px;
  padding: 0 10vw;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    height: 50vh;
    gap: 15px;
    padding: 0 20px;
  }

  @media (max-width: 480px) {
    height: 45vh;
    gap: 12px;
    padding: 0 15px;
  }
`;

const WorkItem = styled.div`
  position: relative;
  margin-top: 50px;
  width: 300px;
  height: 400px;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  backdrop-filter: blur(0px);
  background: transparent;
  border: 1px solid rgba(255,255,255,0.3);
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  flex-shrink: 0;
  z-index: 1;

  @media (max-width: 768px) {
    width: 240px;
    height: 320px;
    margin-top: 0;
    border: 2px solid rgba(255,255,255,0.3);
    transform: scale(0.9);
    transition: all 0.3s ease;
  }

  @media (max-width: 480px) {
    width: 200px;
    height: 280px;
  }

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 30px 60px rgba(255, 77, 109, 0.3);
    backdrop-filter: blur(0px);
    background: transparent;

    .work-overlay {
      opacity: 0;
    }

    .work-image {
      transform: scale(1);
      filter: blur(0px);
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    &:hover {
      transform: scale(0.9);
    }

    &.in-focus {
      transform: scale(1);
      border-color: rgba(0, 255, 136, 0.8);
      box-shadow: 0 10px 30px rgba(0, 255, 136, 0.2);
    }
  }
`;

const WorkImage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  transition: all 0.6s ease;
  position: absolute;
  top: 0;
  left: 0;
  background-size: cover;
  background-position: center;
  z-index: 0;
  filter: blur(0px);
  opacity: 0;

  @media (max-width: 768px) {
    opacity: 1;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: none;
    z-index: 1;
  }

  span {
    position: relative;
    z-index: 2;
  }
`;

const WorkOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(255, 77, 109, 0.9), rgba(0, 255, 247, 0.9));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.4s ease;
  padding: 40px;
  text-align: center;
`;

const WorkTitle = styled.h3`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1px;
  color: #ffffff;
`;

const WorkCategory = styled.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const WorkDescription = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 30px;
  max-width: 400px;
`;

const HoverText = styled.div`
  position: absolute;
  bottom: -60px;
  left: 50%;
  transform: translateX(-50%);
  font-family: 'Brush Script MT', cursive;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.6);
  opacity: 1;
  white-space: nowrap;
  font-style: italic;
  z-index: 10;

  @media (max-width: 768px) {
    display: none;
  }
`;

const SectionHeader = styled.div`
  position: absolute;
  top: 10%;
  left: 10%;
  z-index: 5;
  max-width: 900px;

  @media (max-width: 768px) {
    position: relative;
    top: auto;
    left: auto;
    text-align: center;
    margin-bottom: 20px;
    padding: 0 20px;
  }

  @media (max-width: 480px) {
    margin-bottom: 15px;
    padding: 0 15px;
  }
`;

const SectionTitle = styled.h2`
margin-top: 40px;
  font-family: 'Playfair Display', serif;
  font-size: clamp(3.1rem, 6vw, 4rem);
  font-weight: 400;
  margin-bottom: 0px;
  line-height: 1.05;
  text-align: left;
  letter-spacing: -1.5px;
  white-space: nowrap;

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
    font-size: clamp(2rem, 7vw, 2.8rem);
    margin-bottom: 15px;
    text-align: center;
    white-space: normal;
    line-height: 1.1;
    letter-spacing: -1px;
  }

  @media (max-width: 480px) {
    font-size: clamp(1.8rem, 8vw, 2.5rem);
    margin-bottom: 10px;
    line-height: 1.15;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
`;

const Portfolio = () => {
  const sectionRef = useRef();
  const scrollContentRef = useRef();
  const itemsRef = useRef();
  const [focusedIndex, setFocusedIndex] = useState(0);

  const projects = [
    { image: '/assets/images/w1.png', url: 'https://takearecess.com/' },
    { image: '/assets/images/w2.png', url: 'https://www.harliandharpa.com/' },
    { image: '/assets/images/bbb.png', url: 'https://www.theweddinggroove.com/' },
    { image: '/assets/images/w3.png', url: 'https://www.platypusshoes.com.au/' },
    { image: '/assets/images/w4.png', url: 'https://www.milkrun.com/' },
    { image: '/assets/images/w5.png', url: 'https://www.ifixit.com/Device/Phone' }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const scrollContent = scrollContentRef.current;
    const items = scrollContent.children;

    // Calculate total width needed for horizontal scroll
    const totalWidth = Array.from(items).reduce((acc, item) => acc + item.offsetWidth + 40, 0);
    
    // Set width of scroll content
    scrollContent.style.width = `${totalWidth}px`;

    // Check if mobile device
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
      // On mobile, enable native horizontal scrolling without GSAP animation
      scrollContent.style.overflowX = 'auto';
      scrollContent.style.scrollSnapType = 'x mandatory';
      
      // Add scroll snap to children for better mobile experience
      Array.from(items).forEach(item => {
        item.style.scrollSnapAlign = 'center';
      });

      // Handle scroll to detect focused item
      const handleScroll = () => {
        const scrollLeft = scrollContent.scrollLeft;
        const containerWidth = scrollContent.offsetWidth;
        const centerX = scrollLeft + containerWidth / 2;
        
        let closestIndex = 0;
        let closestDistance = Infinity;
        
        Array.from(items).forEach((item, index) => {
          const itemLeft = item.offsetLeft;
          const itemCenter = itemLeft + item.offsetWidth / 2;
          const distance = Math.abs(centerX - itemCenter);
          
          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = index;
          }
        });
        
        setFocusedIndex(closestIndex);
      };

      scrollContent.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial call
      
      return () => {
        scrollContent.removeEventListener('scroll', handleScroll);
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }

    // Desktop: Simple horizontal scroll animation
    gsap.to(scrollContent, {
      x: () => -(totalWidth - window.innerWidth + 200),
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${totalWidth - window.innerWidth + 200}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <PortfolioSection ref={sectionRef}>
      <SectionHeader className="section-header">
        <SectionTitle>
          <span className="light-text">Our Work</span><br />
          <span className="normal-text">Precision.Excellence</span>
        </SectionTitle>
       
      </SectionHeader>

      <HorizontalScrollContainer>
        <ScrollContent ref={scrollContentRef}>
          {projects.map((project, index) => (
            <WorkItem 
              key={index} 
              className={window.innerWidth <= 768 && index === focusedIndex ? 'in-focus' : ''}
              onClick={() => window.open(project.url, '_blank')}
            >
              <WorkImage 
                className="work-image" 
                style={{ backgroundImage: `url(${project.image})` }}
              />
            </WorkItem>
          ))}
        </ScrollContent>
      </HorizontalScrollContainer>
      <HoverText className="hover-text">hover on cards →</HoverText>
    </PortfolioSection>
  );
};

export default Portfolio;
