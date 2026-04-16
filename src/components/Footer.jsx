import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 4rem 5%;
  background-color: ${({ theme }) => theme.colors.background};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const FooterGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;

  .logo {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.text.primary};
  }

  .desc {
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: ${({ theme }) => theme.typography.small};
    max-width: 300px;
    margin-bottom: 2rem;
  }

  .title {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.colors.text.primary};
  }

  .links {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    a {
      color: ${({ theme }) => theme.colors.text.secondary};
      font-size: ${({ theme }) => theme.typography.small};
      transition: color 0.2s ease;

      &:hover {
        color: ${({ theme }) => theme.colors.text.primary};
      }
    }
  }
`;

const Bottom = styled.div`
  max-width: 1200px;
  margin: 4rem auto 0;
  padding-top: 2rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.text.muted};
  font-size: ${({ theme }) => theme.typography.small};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

const Footer = () => {
  return (
    <FooterContainer id="contact">
      <FooterGrid>
        <Column>
          <div className="logo">Luminarix Studio</div>
          <div className="desc">
            Next-Level Web Site for SaaS & Startups. We focus on speed, clarity, and results.
          </div>
        </Column>

        <Column>
          <div className="title">Social Media</div>
          <div className="links">
            <a href="https://x.com/alimdesigner_" target="_blank" rel="noreferrer">X/Twitter</a>

            <a href="https://www.linkedin.com/in/alimdesign/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://www.instagram.com/alimlife_/" target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </Column>


      </FooterGrid>

      <Bottom>
        <div>© 2026 Luminarix Studio. All rights reserved.</div>

      </Bottom>
    </FooterContainer>
  );
};

export default Footer;
