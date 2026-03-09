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
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }

  svg {
    width: 20px;
    height: 20px;
    fill: rgba(255, 255, 255, 0.8);
    transition: all 0.3s ease;
    z-index: 1;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);

    &::before {
      left: 100%;
    }

    svg {
      fill: rgba(255, 255, 255, 1);
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
              <SocialLink href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="currentColor"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </SocialLink>
              <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </SocialLink>
              <SocialLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </SocialLink>
              <SocialLink href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </SocialLink>
              <SocialLink href="https://github.com" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
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
