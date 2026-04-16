import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -2;
`;

const VideoOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(10, 10, 10, 0.7);
  z-index: -1;
`;

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 5%;
  text-align: center;
  padding-top: 100px;
  position: relative;
  overflow: hidden;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-top: 90px;
    min-height: 100svh;
  }
`;

const Badge = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 0.5rem 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.typography.small};
  color: ${({ theme }) => theme.colors.text.secondary};
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  opacity: 0;
  transform: translateY(20px);
`;

const Circle = styled.span`
  width: 8px;
  height: 8px;
  background-color: #4ade80; /* Green accent for 'online' or 'available' */
  border-radius: 50%;
  display: inline-block;
  box-shadow: 0 0 10px rgba(74, 222, 128, 0.4);
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.hero};
  letter-spacing: -0.04em;
  margin-bottom: 1.5rem;
  max-width: 900px;
  line-height: 1.1;

  .line-wrapper {
    overflow: hidden;
    display: block;
    padding-bottom: 0.1em;
  }
  
  .line {
    display: inline-block;
    transform: translateY(110%);
    will-change: transform;
  }
  
  span.highlight {
    background: linear-gradient(180deg, #111 0%, #888 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: clamp(2.2rem, 10vw, 3.2rem);
    letter-spacing: -0.03em;
    margin-bottom: 1rem;
  }
`;


const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.typography.h3};
  color: ${({ theme }) => theme.colors.text.secondary};
  max-width: 600px;
  margin-bottom: 3rem;
  opacity: 0;
  transform: translateY(20px);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;


const CTAWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  opacity: 0;
  transform: translateY(20px);
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    width: 100%;
  }
`;

const PrimaryButton = styled.a`
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.text.primary};
  color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: 1rem;
  font-weight: 600;
  transition: transform 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    transform: scale(1.03);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    justify-content: center;
  }
`;

const SecondaryButton = styled.a`
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text.primary};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;

  &:hover {
    background-color: ${({ theme }) => theme.colors.surfaceHover};
    border-color: #333;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    justify-content: center;
  }
`;

const Avatars = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 3rem;
  opacity: 0;
  transform: translateY(20px);
  padding: 0.75rem 1.25rem;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  text-decoration: none;
  cursor: pointer;
  transition: background 0.3s ease, border-color 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.surfaceHover};
    border-color: #444;
  }

  .images {
    display: flex;
    img {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      border: 2px solid ${({ theme }) => theme.colors.background};
      margin-left: -10px;
      &:first-child {
        margin-left: 0;
      }
    }
  }

  .text {
    font-size: ${({ theme }) => theme.typography.small};
    color: ${({ theme }) => theme.colors.text.secondary};
    text-align: left;
    span {
      display: block;
      color: ${({ theme }) => theme.colors.text.primary};
      font-weight: 600;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-top: 2rem;
    padding: 0.6rem 1rem;
    gap: 0.75rem;

    .images img {
      width: 26px;
      height: 26px;
    }

    .text {
      font-size: 0.75rem;
    }
  }
`;


const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate lines separately for the exact reveal effect
      gsap.to('.line', {
        y: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power4.out',
        delay: 0.1
      });

      gsap.to('.hero-anim', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.5
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <HeroSection ref={containerRef} id="hero">
      <VideoBackground
        autoPlay
        muted
        loop
        playsInline
        src="/assets/videos/bggg.mp4"
      />
      <VideoOverlay />
      <Badge className="hero-anim">
        <Circle /> Available for new projects
      </Badge>

      <Title>
        <div className="line-wrapper"><span className="line text-reveal">We Build</span></div>
        <div className="line-wrapper"><span className="line highlight text-reveal">software that Scales</span></div>
      </Title>

      <Subtitle className="hero-anim">
        A strategic software that accelerates your SaaS or startup’s success
      </Subtitle>

      <CTAWrapper className="hero-anim">
        <PrimaryButton href="#pricing">
          Secure your April spot
          <span>🦾</span>
        </PrimaryButton>
        <SecondaryButton href="#pricing">
          Plans and Pricing
        </SecondaryButton>
      </CTAWrapper>

      <Avatars className="hero-anim" href="#reviews">
        <div className="images">
          {/* using generic placeholders as we don't have the exact user avatars yet */}
          <img src="https://i.pravatar.cc/100?img=1" alt="user" />
          <img src="https://i.pravatar.cc/100?img=2" alt="user" />
          <img src="https://i.pravatar.cc/100?img=3" alt="user" />
        </div>
        <div className="text">
          <span>Our clients trust us</span>
          Let's see testimonials
        </div>
      </Avatars>
    </HeroSection>
  );
};

export default Hero;
