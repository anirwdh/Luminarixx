import React, { useState } from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5%;
  background: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
`;

const Logo = styled.a`
  display: flex;
  align-items: center;

  img {
    height: 32px; /* Based on typical navbar logo height */
    width: auto;
  }
`;

const Links = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(8, 8, 8, 0.97);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    padding: 2rem 5%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
    gap: 1.5rem;
  }
`;


const NavLink = styled.a`
  font-size: ${({ theme }) => theme.typography.small};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-weight: 500;

  &:hover {
    color: ${({ theme }) => theme.colors.text.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    color: rgba(255, 255, 255, 0.8);
    font-size: 1.1rem;
    padding: 0.25rem 0;

    &:hover {
      color: #ffffff;
    }
  }
`;


const MenuToggle = styled.button`
  display: none;
  font-size: 1.5rem;
  color: #ffffff;
  line-height: 1;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;


const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const CTAButton = styled.a`
  padding: 0.6rem 1.2rem;
  background-color: ${({ theme }) => theme.colors.text.primary};
  color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.typography.small};
  font-weight: 600;
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    transform: scale(1.05);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <Logo href="#">
        <img src="/assets/images/logo.png" alt="Luminarix Studio" />
      </Logo>
      <Links $isOpen={isOpen}>
        <NavLink href="#features" onClick={() => setIsOpen(false)}>Features</NavLink>
        <NavLink href="#services" onClick={() => setIsOpen(false)}>Services</NavLink>
        <NavLink href="#pricing" onClick={() => setIsOpen(false)}>Pricing</NavLink>
        <NavLink href="#reviews" onClick={() => setIsOpen(false)}>Reviews</NavLink>
        <NavLink href="#faq" onClick={() => setIsOpen(false)}>FAQ</NavLink>
      </Links>
      <NavActions>
        <CTAButton href="#contact">Let's go 🦾</CTAButton>
        <MenuToggle onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '✕' : '☰'}
        </MenuToggle>
      </NavActions>
    </Nav>
  );
};

export default Navbar;
