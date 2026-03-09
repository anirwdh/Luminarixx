import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CSSPlugin } from 'gsap/CSSPlugin';
import styled from 'styled-components';

gsap.registerPlugin(ScrollTrigger, CSSPlugin);

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: radial-gradient(ellipse at center, rgba(255, 77, 109, 0.1) 0%, transparent 70%);
  transform: translateZ(0); /* Hardware acceleration */
  backface-visibility: hidden; /* Prevent flicker */
  perspective: 1000px; /* Enable 3D acceleration */
`;

const HeroContent = styled.div`
  text-align: center;
  z-index: 3;
  max-width: 1200px;
  padding: 0 20px;
  position: relative;
  transform: translateZ(0); /* Hardware acceleration */
  backface-visibility: hidden; /* Prevent flicker */
`;

const HeroTitle = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: clamp(4rem, 9vw, 7.5rem);
  font-weight: 400;
  line-height: 1.05;
  letter-spacing: -1.5px;
  margin-top: 15rem;
  margin-bottom: 40px;
  text-transform: none;
  transform: translateZ(0); /* Hardware acceleration */
  backface-visibility: hidden; /* Prevent flicker */
  will-change: transform, opacity; /* Optimize for animations */

  .light-text {
    background: linear-gradient(135deg, #bbf7d0, #ffffff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .normal-text {
    color: #ffffff;
  }

  span {
    display: inline-block;
  }

  @media (max-width: 768px) {
    font-size: clamp(2.5rem, 8vw, 4rem);
    margin-bottom: 30px;
    margin-top: 8rem;
    letter-spacing: -1px;
    line-height: 1.1;
  }

  @media (max-width: 480px) {
    font-size: clamp(2rem, 10vw, 3.5rem);
    margin-bottom: 25px;
    margin-top: 6rem;
    letter-spacing: -0.5px;
    line-height: 1.15;
  }
`;

const HeroSubtitle = styled.p`
  font-size: clamp(1.1rem, 2.5vw, 1.4rem);
  margin-bottom: 50px;
  color: rgba(255, 255, 255, 0.85);
  font-weight: 400;
  max-width: 200rem;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.5;
  letter-spacing: 0.5px;
  text-align: center;
  transform: translateZ(0); /* Hardware acceleration */
  backface-visibility: hidden; /* Prevent flicker */
  will-change: transform, opacity; /* Optimize for animations */
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
`;

const Button = styled.button`
  padding: 14px 35px;
  font-size: 14px;
  font-weight: 600;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }

  &:hover:before {
    left: 100%;
  }
`;

const PrimaryButton = styled(Button)`
  background: transparent;
  color: #bbf7d0;
  border: 2px solid rgba(187, 247, 208, 0.3);
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(20, 20, 20, 0.9));
    border-radius: 50px;
    z-index: -1;
    transition: all 0.4s ease;
  }

  &:hover {
    color: #ffffff;
    border-color: rgba(187, 247, 208, 0.6);
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(187, 247, 208, 0.2);

    &:before {
      background: linear-gradient(135deg, rgba(0, 0, 0, 0.9), rgba(40, 40, 40, 0.95));
    }
  }
`;

const SecondaryButton = styled(Button)`
  background: transparent;
  color: #ffffff;
  border: 2px solid rgba(255, 255, 255, 0.2);
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.6), rgba(20, 20, 20, 0.7));
    border-radius: 50px;
    z-index: -1;
    transition: all 0.4s ease;
  }

  &:hover {
    color: #bbf7d0;
    border-color: rgba(187, 247, 208, 0.4);
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(187, 247, 208, 0.15);

    &:before {
      background: linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(30, 30, 30, 0.85));
    }
  }
`;

const BackgroundElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  transform: translateZ(0); /* Hardware acceleration */
  backface-visibility: hidden; /* Prevent flicker */
  will-change: transform; /* Optimize for animations */

  @media (max-width: 768px) {
    object-position: center;
    /* Video is now enabled on mobile */
  }
`;

const VideoOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(14, 14, 14, 0.4);
  z-index: 2;
`;

const FloatingElement = styled.div`
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(255, 77, 109, 0.1), rgba(0, 255, 247, 0.1));
  backdrop-filter: blur(10px);
`;

const Hero = () => {
  const heroRef = useRef();
  const titleRef = useRef();
  const subtitleRef = useRef();
  const buttonsRef = useRef();

  useEffect(() => {
    // Only animate if not handled by scroll sections
    const isHandledByScroll = document.querySelector('.scroll-section')?.contains(heroRef.current);
    if (isHandledByScroll) return;

    const tl = gsap.timeline({
      onComplete: () => {
        // Clear timeline after completion to free memory
        tl.clear();
      }
    });

    // Set initial states
    gsap.set(titleRef.current, { opacity: 0, y: 60 });
    gsap.set(subtitleRef.current, { opacity: 0, y: 40 });
    if (buttonsRef.current?.children) {
      gsap.set(buttonsRef.current.children, { opacity: 0, y: 30 });
    }

    // Smooth sequential animations with optimized timing
    tl.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.0,
      ease: 'power2.out',
      force3D: true, // Hardware acceleration
      willChange: 'transform, opacity' // Optimize for animations
    })
    .to(subtitleRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out',
      force3D: true,
      willChange: 'transform, opacity'
    }, '-=0.3')
    .to(buttonsRef.current?.children || [], {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out',
      force3D: true,
      willChange: 'transform, opacity'
    }, '-=0.2');

    return () => {
      tl.kill();
      // Clear will-change after animation
      gsap.set([titleRef.current, subtitleRef.current, buttonsRef.current?.children], { 
        willChange: 'auto' 
      });
    };
  }, []);

  return (
    <HeroSection ref={heroRef} className="scroll-section">
      <VideoBackground 
        autoPlay 
        muted 
        loop 
        playsInline
        src="/assets/videos/bg.mp4"
      />
      <VideoOverlay />
      
      <HeroContent className="section-content">
        <HeroTitle ref={titleRef}>
          <span className="light-text">Built At Light</span><br />
          <span className="normal-text">Speed</span>
        </HeroTitle>
        
        <HeroSubtitle ref={subtitleRef}>
    We craft premium websites, intelligent software, AI automation, and scalable digital systems for brands that refuse to be ordinary.
        </HeroSubtitle>
        
        <HeroButtons ref={buttonsRef}>
          <PrimaryButton>Get Started</PrimaryButton>
          <SecondaryButton>View Our Work</SecondaryButton>
        </HeroButtons>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
