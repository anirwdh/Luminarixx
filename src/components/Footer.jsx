import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 4rem 5%;
  background-color: ${({ theme }) => theme.colors.background};
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 3rem 5%;
  }
`;

const FooterGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;

  .logo {
    margin-bottom: 1rem;

    img {
      height: 30px;
      width: auto;
    }
  }

  .desc {
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: ${({ theme }) => theme.typography.small};
    max-width: 300px;
    margin-bottom: 2rem;
    line-height: 1.6;
  }

  .title {
    font-size: 0.875rem;
    font-weight: 600;
    margin-bottom: 1.25rem;
    color: ${({ theme }) => theme.colors.text.primary};
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .links {
    display: flex;
    flex-direction: column;
    gap: 0.875rem;

    a {
      color: ${({ theme }) => theme.colors.text.secondary};
      font-size: ${({ theme }) => theme.typography.small};
      transition: color 0.2s ease;

      &:hover {
        color: ${({ theme }) => theme.colors.text.primary};
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    .desc {
      max-width: 100%;
    }
  }
`;

const Bottom = styled.div`
  max-width: 1200px;
  margin: 3rem auto 0;
  padding-top: 2rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.text.muted};
  font-size: ${({ theme }) => theme.typography.small};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 0.75rem;
    text-align: center;
    margin-top: 2.5rem;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterGrid>
        <Column>
          <div className="logo">
            <img src="/assets/images/logo.png" alt="Luminarix Studio" />
          </div>
          <div className="desc">
            Next-Level Web & Software for SaaS & Startups. We focus on speed, clarity, and results.
          </div>
        </Column>

        <Column>
          <div className="title">Social Media</div>
          <div className="links">
            <a href="https://www.linkedin.com/in/the-luminarix-417a703b4/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B9lRJhOfgRPulugA6mfETsA%3D%3D" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://www.instagram.com/luminarix.official" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://www.threads.com/@luminarix.official" target="_blank" rel="noreferrer">Threads</a>
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
