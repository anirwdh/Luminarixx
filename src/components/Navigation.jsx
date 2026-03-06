import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CSSPlugin } from 'gsap/CSSPlugin';
import styled from 'styled-components';

gsap.registerPlugin(ScrollTrigger, CSSPlugin);

const Navigation = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 20px 0;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
`;

const NavContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: 800;
  background: linear-gradient(135deg, #ff4d6d, #00fff7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const NavMenu = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${props => props.$isOpen ? '0' : '-100%'};
    width: 80%;
    max-width: 400px;
    height: 100vh;
    background: linear-gradient(135deg, rgba(14, 14, 14, 0.98), rgba(26, 26, 26, 0.98));
    backdrop-filter: blur(20px);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: right 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    padding: 20px;
  }
`;

const NavLink = styled.a`
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  position: relative;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(135deg, #ff4d6d, #00fff7);
    transition: width 0.3s ease;
  }

  &:hover {
    color: #ffffff;

    &:after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin: 15px 0;
  }
`;

const CTAButton = styled.button`
  padding: 12px 30px;
  background: linear-gradient(135deg, #ff4d6d, #00fff7);
  color: #ffffff;
  border: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(255, 77, 109, 0.3);
  }

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const Hamburger = styled.button`
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  z-index: 1001;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const HamburgerLine = styled.span`
  width: 25px;
  height: 3px;
  background: #ffffff;
  border-radius: 2px;
  transition: all 0.3s ease;
  transform-origin: center;

  ${props => props.$isOpen && `
    &:first-child {
      transform: rotate(45deg) translate(5px, 5px);
    }
    &:nth-child(2) {
      opacity: 0;
    }
    &:last-child {
      transform: rotate(-45deg) translate(7px, -6px);
    }
  `}
`;

const Header = () => {
  const navRef = useRef();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    // Handle scroll effect
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    // Navigation animation on load
    gsap.from(navRef.current.children, {
      y: -50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out'
    });

    // ScrollTrigger for navigation background
    ScrollTrigger.create({
      start: 'top -50',
      end: 99999,
      toggleClass: { className: 'scrolled', targets: navRef.current }
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Navigation 
        ref={navRef} 
        className={isScrolled ? 'scrolled' : ''}
        style={{
          background: isScrolled 
            ? 'rgba(14, 14, 14, 0.95)' 
            : 'transparent',
          backdropFilter: isScrolled ? 'blur(20px)' : 'none',
          boxShadow: isScrolled 
            ? '0 10px 30px rgba(0, 0, 0, 0.3)' 
            : 'none'
        }}
      >
        <NavContainer>
          <Logo onClick={handleLogoClick}>
            Luminarix
          </Logo>

          <NavMenu $isOpen={isMenuOpen}>
            {navItems.map((item, index) => (
              <NavLink
                key={index}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
              >
                {item.name}
              </NavLink>
            ))}
            <CTAButton onClick={() => scrollToSection('#contact')}>
              Get Started
            </CTAButton>
          </NavMenu>

          <Hamburger onClick={toggleMenu}>
            <HamburgerLine $isOpen={isMenuOpen} />
            <HamburgerLine $isOpen={isMenuOpen} />
            <HamburgerLine $isOpen={isMenuOpen} />
          </Hamburger>
        </NavContainer>
      </Navigation>

      </>
  );
};

export default Header;
