import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CSSPlugin } from 'gsap/CSSPlugin';
import styled from 'styled-components';

gsap.registerPlugin(ScrollTrigger, CSSPlugin);

const FooterSection = styled.footer`
  background: linear-gradient(180deg, rgba(14, 14, 14, 0.95) 0%, rgba(26, 26, 26, 0.98) 100%);
  padding: 80px 0 40px;
  border-top: 0.3px solid rgba(0, 255, 136, 0.3);
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 60px;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const FooterBrand = styled.div`
  z-index: 2;
`;

const Logo = styled.div`
  margin-bottom: 20px;
  
  img {
    height: 40px;
    width: auto;
    max-width: 100%;
    object-fit: contain;
    
    @media (max-width: 768px) {
      height: 35px;
    }
    
    @media (max-width: 480px) {
      height: 30px;
    }
  }
`;

const BrandDescription = styled.p`
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin-bottom: 30px;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
`;

const SocialLink = styled.a`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.8);
  border: 0.3px solid rgba(0, 255, 136, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: all 0.3s ease;

  svg {
    width: 20px;
    height: 20px;
    fill: #00ff88;
    transition: fill 0.3s ease;
  }

  &:hover {
    border-color: rgba(0, 255, 136, 1);
    background: rgba(0, 0, 0, 0.95);
    transform: translateY(-2px);

    svg {
      fill: #00ffaa;
    }
  }
`;

const FooterColumn = styled.div`
  z-index: 2;
`;

const ColumnTitle = styled.h4`
  font-family: 'Playfair Display', serif;
  font-size: 1.3rem;
  font-weight: 400;
  margin-bottom: 25px;
  color: #ffffff;
  letter-spacing: -0.5px;
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterLinkItem = styled.li`
  margin-bottom: 15px;
`;

const FooterLink = styled.a`
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  display: inline-block;
  position: relative;
  font-size: 0.95rem;

  &:hover {
    color: rgba(0, 255, 136, 0.9);
  }
`;

const FooterBottom = styled.div`
  padding-top: 40px;
  border-top: 0.3px solid rgba(0, 255, 136, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Copyright = styled.p`
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.9rem;
  margin: 0;
`;

const BottomLinks = styled.div`
  display: flex;
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

const BottomLink = styled.a`
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  font-size: 0.9rem;

  &:hover {
    color: rgba(0, 255, 136, 0.8);
  }
`;

const FloatingElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
`;

const FloatingElement = styled.div`
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(255, 77, 109, 0.05), rgba(0, 255, 247, 0.05));
  backdrop-filter: blur(5px);
`;

const Footer = () => {
  const footerRef = useRef();

  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <FooterSection ref={footerRef}>
      <FooterContainer>
        <FooterContent>
          <FooterBrand>
            <Logo>
              <img src="/assets/images/logo.png" alt="Luminarix Logo" />
            </Logo>
            <BrandDescription>
              Transforming brands with cutting-edge digital solutions. We create exceptional experiences 
              that captivate audiences and drive meaningful results for businesses worldwide.
            </BrandDescription>
            <SocialLinks>
              <SocialLink href="https://instagram.com/luminarix" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#00ff88">
                  <rect x="2" y="2" width="20" height="20" rx="5" fill="none" stroke="#00ff88" strokeWidth="2"/>
                  <circle cx="7" cy="7" r="1" fill="#00ff88"/>
                  <circle cx="17" cy="7" r="1" fill="#00ff88"/>
                  <circle cx="7" cy="17" r="1" fill="#00ff88"/>
                  <circle cx="17" cy="17" r="1" fill="#00ff88"/>
                </svg>
              </SocialLink>
              <SocialLink href="https://youtube.com/@luminarix" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#00ff88">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.376.505a3.016 3.016 0 0 0-2.122 2.136C.282 8.818 0 11.548 0 14.819c0 2.415.672 4.678 1.825 6.36.2.415 2.415 0 0 0 0 1.825 1.681 3.945 1.825 6.36z"/>
                </svg>
              </SocialLink>
              <SocialLink href="https://twitter.com/luminarix" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#00ff88">
                  <path d="M23.953 4.57a10 10 0 0 1-2.825.748 4.937 4.937 0 0 1-1.896.696 4.937 4.937 0 0 1-2.212-1.564 10 10 0 0 1-3.238 1.277 10 10 0 0 1-2.212 1.564 10 10 0 0 1-2.212 1.564 4.937 4.937 0 0 1 1.896.696z"/>
                </svg>
              </SocialLink>
              <SocialLink href="https://linkedin.com/company/luminarix" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#00ff88">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.562-3.037-1.562 0-1.562 1.709-1.562 3.037v5.569H9.351V9h3.414v1.561h1.562c1.562 0 3.037.234 3.037 1.562v5.569h3.554c.345 0 .625-.28.625-.625V8.062c0-.345-.28-.625-.625-.625H4.125c-.345 0-.625.28-.625.625v11.75c0 .345.28.625.625.625h16.25z"/>
                </svg>
              </SocialLink>
            </SocialLinks>
          </FooterBrand>

          <FooterColumn>
            <ColumnTitle>Services</ColumnTitle>
            <FooterLinks>
              <FooterLinkItem>
                <FooterLink onClick={() => scrollToSection('services')}>
                  Web Development
                </FooterLink>
              </FooterLinkItem>
              <FooterLinkItem>
                <FooterLink onClick={() => scrollToSection('services')}>
                  App Development
                </FooterLink>
              </FooterLinkItem>
              <FooterLinkItem>
                <FooterLink onClick={() => scrollToSection('services')}>
                  Digital Marketing
                </FooterLink>
              </FooterLinkItem>
              <FooterLinkItem>
                <FooterLink onClick={() => scrollToSection('services')}>
                  AI Solutions
                </FooterLink>
              </FooterLinkItem>
            </FooterLinks>
          </FooterColumn>

          <FooterColumn>
            <ColumnTitle>Company</ColumnTitle>
            <FooterLinks>
              <FooterLinkItem>
                <FooterLink onClick={() => scrollToSection('about')}>
                  About Us
                </FooterLink>
              </FooterLinkItem>
              <FooterLinkItem>
                <FooterLink onClick={() => scrollToSection('portfolio')}>
                  Portfolio
                </FooterLink>
              </FooterLinkItem>
              <FooterLinkItem>
                <FooterLink onClick={() => scrollToSection('testimonials')}>
                  Testimonials
                </FooterLink>
              </FooterLinkItem>
              <FooterLinkItem>
                <FooterLink onClick={() => scrollToSection('contact')}>
                  Contact
                </FooterLink>
              </FooterLinkItem>
            </FooterLinks>
          </FooterColumn>

          <FooterColumn>
            <ColumnTitle>Resources</ColumnTitle>
            <FooterLinks>
              <FooterLinkItem>
                <FooterLink href="/blog" target="_blank">
                  Blog
                </FooterLink>
              </FooterLinkItem>
              <FooterLinkItem>
                <FooterLink href="/careers" target="_blank">
                  Careers
                </FooterLink>
              </FooterLinkItem>
              <FooterLinkItem>
                <FooterLink href="/privacy" target="_blank">
                  Privacy Policy
                </FooterLink>
              </FooterLinkItem>
              <FooterLinkItem>
                <FooterLink href="/terms" target="_blank">
                  Terms of Service
                </FooterLink>
              </FooterLinkItem>
            </FooterLinks>
          </FooterColumn>
        </FooterContent>

        <FooterBottom>
          <Copyright>
            © 2024 Luminarix Studio. All rights reserved.
          </Copyright>
          <BottomLinks>
            <BottomLink href="/privacy" target="_blank">
              Privacy Policy
            </BottomLink>
            <BottomLink href="/terms" target="_blank">
              Terms of Service
            </BottomLink>
          </BottomLinks>
        </FooterBottom>
      </FooterContainer>
    </FooterSection>
  );
};

export default Footer;
