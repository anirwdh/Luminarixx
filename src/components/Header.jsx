import React, { useState } from 'react';
import styled from 'styled-components';

const smoothScroll = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    const headerHeight = 80; // Account for fixed header
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

const DesktopHeader = styled.header`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
  width: 105%;
  z-index: 1000;
`;

const DesktopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  background: transparent;
  backdrop-filter: none;
  border-radius: 0;
  border: none;
  position: relative;
`;

const Logo = styled.img`
  position: absolute;
  left: 2rem;
  top: 50%;
  transform: translateY(-50%);
  height: 52px;
  width: auto;
  object-fit: contain;
`;

const NavPill = styled.nav`
  display: flex;
  gap: 2rem;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(25px);
  padding: 0.75rem 2rem;
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #00d4aa;
  }
`;

const MobileHeader = styled.header`
  display: none;
`;

const MobileContainer = styled.div`
  position: fixed;
  top: 1.2rem;
  left: 50%;
  transform: translateX(-50%);
  width: 77%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem 1.2rem;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(20px);
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 1000;
`;

const MobileLogo = styled.img`
  height: 24px;
  width: auto;
  object-fit: contain;
`;

const Hamburger = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 0;
  transform: translateY(16px);
  position: relative;
  width: 30px;
  height: 24px;

  span {
    width: 22px;
    height: 2px;
    background: white;
    display: block;
    transition: all 0.3s ease;
    transform-origin: center;
  }

  &:active span:nth-child(1) {
    transform: translateY(6px) rotate(45deg);
  }

  &:active span:nth-child(2) {
    opacity: 0;
  }

  &:active span:nth-child(3) {
    transform: translateY(-6px) rotate(-45deg);
  }
`;

const MobileMenuOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0);
  backdrop-filter: blur(20px);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 8rem;
`;

const MobileMenu = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: center;
`;

const MobileNavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 500;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #00d4aa;
  }
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* ================= DESKTOP HEADER ================= */}
      <header className="desktop-header">
        <div className="desktop-container">
          {/* Logo positioned absolutely on left */}
          <Logo
            src="/assets/images/logo.png"
            alt="Luminarix"
          />

          {/* Center Nav */}
          <div className="nav-pill">
            <a href="#why-luminarix" onClick={(e) => {
              e.preventDefault();
              smoothScroll('why-luminarix');
            }}>Why</a>
            <a href="#services" onClick={(e) => {
              e.preventDefault();
              smoothScroll('services');
            }}>Services</a>
            <a href="#portfolio" onClick={(e) => {
              e.preventDefault();
              smoothScroll('portfolio');
            }}>Work</a>
            <a href="#contact" onClick={(e) => {
              e.preventDefault();
              smoothScroll('contact');
            }}>Contact</a>
          </div>

        </div>
      </header>

      {/* ================= MOBILE HEADER ================= */}
      <header className="mobile-header">
        <div className="mobile-container">
          <MobileLogo
            src="/assets/images/logo.png"
            alt="Luminarix"
          />

          <button
            className="hamburger"
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {isMenuOpen && (
          <div className="mobile-menu-overlay" onClick={closeMenu}>
            <nav className="mobile-menu" onClick={(e) => e.stopPropagation()}>
              <a href="#why-luminarix" onClick={(e) => {
                e.preventDefault();
                smoothScroll('why-luminarix');
                closeMenu();
              }}>Why</a>
              <a href="#services" onClick={(e) => {
                e.preventDefault();
                smoothScroll('services');
                closeMenu();
              }}>Services</a>
              <a href="#portfolio" onClick={(e) => {
                e.preventDefault();
                smoothScroll('portfolio');
                closeMenu();
              }}>Work</a>
              <a href="#contact" onClick={(e) => {
                e.preventDefault();
                smoothScroll('contact');
                closeMenu();
              }}>Contact</a>
            </nav>
          </div>
        )}
      </header>

      <style jsx>{`
        /* ================= DESKTOP ================= */
        .desktop-header {
          position: fixed;
          top: 2rem;
          left: 50%;
          transform: translateX(-50%);
          width: 95%;
          z-index: 1000;
        }

        .desktop-container {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
          background: transparent;
          backdrop-filter: none;
          border-radius: 0;
          border: none;
          position: relative;
        }
        
        .desktop-container::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
        }

        .logo {
          color: white;
          font-weight: 600;
          font-size: 1rem;
        }

        .nav-pill {
          display: flex;
          gap: 2rem;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(25px);
          padding: 0.75rem 2rem;
          border-radius: 30px;
          border: 1px solid rgba(255,255,255,0.1);
        }

        .nav-pill a {
          color: white;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .nav-pill a:hover {
          color: #00d4aa;
        }

        .right-side {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .lang {
          color: white;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .cta-btn {
          padding: 0.5rem 1rem;
          border-radius: 20px;
          border: 1px solid rgba(255,255,255,0.2);
          background: transparent;
          color: white;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .cta-btn:hover {
          background: rgba(255,255,255,0.1);
          border-color: rgba(255,255,255,0.3);
        }

        /* ================= MOBILE ================= */
        .mobile-header {
          display: none;
        }

        .mobile-container {
          position: fixed;
          top: 1.2rem;
          left: 50%;
          transform: translateX(-50%);
          width: 77%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.6rem 1.2rem;
          background: rgba(0,0,0,0.7);
          backdrop-filter: blur(20px);
          border-radius: 30px;
          border: 1px solid rgba(255,255,255,0.1);
          z-index: 1000;
        }

        .hamburger {
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding: 0;
        
        }

        .hamburger span {
          width: 22px;
          height: 2px;
          background: white;
          display: block;
          transition: all 0.3s ease;
        }

        .mobile-menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(20px);
          z-index: 999;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          padding-top: 8rem;
        }

        .mobile-menu {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          text-align: center;
        }

        .mobile-menu a {
          color: white;
          text-decoration: none;
          font-size: 1.2rem;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .mobile-menu a:hover {
          color: #00d4aa;
        }

        /* ================= RESPONSIVE SWITCH ================= */
        @media (max-width: 768px) {
          .desktop-header {
            display: none;
          }

          .mobile-header {
            display: block;
          }
        }
      `}</style>
    </>
  );
};

export default Header;
