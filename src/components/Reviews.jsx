import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Section = styled.section`
  padding: 8rem 5%;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 5rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  
  .badge {
    display: inline-block;
    padding: 0.5rem 1rem;
    background: ${({ theme }) => theme.colors.surface};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.borderRadius.full};
    font-size: ${({ theme }) => theme.typography.small};
    color: ${({ theme }) => theme.colors.text.secondary};
    margin-bottom: 2rem;
  }
  
  h2 {
    font-size: ${({ theme }) => theme.typography.h1};
    font-weight: 500;
    letter-spacing: -0.04em;
    margin-bottom: 1.5rem;
    line-height: 1.1;
  }
  
  p {
    font-size: ${({ theme }) => theme.typography.h3};
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

const ReviewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const ReviewCard = styled.a`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease, border-color 0.3s ease;
  text-decoration: none;
  cursor: pointer;
  color: inherit;

  &:hover {
    transform: translateY(-2px);
    border-color: #333;
  }

  p.quote {
    font-size: 1.125rem;
    color: ${({ theme }) => theme.colors.text.primary};
    line-height: 1.6;
    margin-bottom: 2rem;
    font-style: italic;

    &::before {
      content: '"';
      color: ${({ theme }) => theme.colors.text.secondary};
    }
    &::after {
      content: '"';
      color: ${({ theme }) => theme.colors.text.secondary};
    }
  }

  .author {
    display: flex;
    align-items: center;
    gap: 1rem;
    
    .avatar {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: #222;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      color: #666;
    }

    .info {
      h4 {
        margin: 0;
        font-size: 1rem;
      }
      p {
        margin: 0;
        font-size: ${({ theme }) => theme.typography.small};
        color: ${({ theme }) => theme.colors.text.secondary};
      }
    }
  }
`;

const Reviews = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.reviews-header', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      });

      gsap.from('.review-card', {
        scrollTrigger: {
          trigger: '.reviews-grid',
          start: 'top 85%',
        },
        scale: 0.95,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power3.out'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const reviewsData = [
    {
      quote: "We needed a robust, high-speed software architecture for our quick fashion delivery app, and they delivered exactly that. The user interface is incredibly snappy, the backend is flawless, and they shipped everything well before our hard deadlines.",
      author: "Ansh Agarwal",
      company: "Founder, Blip",
      initial: "AA",
      url: "https://blip.net/"
    },
    {
      quote: "Working with the team to overhaul our custom CRM and website integration was a game-changer. They deeply understood our brand and delivered a sophisticated, modern solution that matched the premium feel of Bellroy. Highly recommended for any brand looking to scale their digital infrastructure.",
      author: "Andy Fallshaw",
      company: "Founder, Bellroy",
      initial: "AF",
      url: "https://bellroy.com/"
    },
    {
      quote: "They perfectly captured the elegance and energy of our wedding choreography business. The new website is not only stunning with its smooth animations, but it has directly translated to more client inquiries. It's truly a beautifully crafted digital experience!",
      author: "Simran",
      company: "Founder, The Wedding Groove",
      initial: "S",
      url: "https://www.theweddinggroove.com/"
    },
    {
      quote: "Their expertise in crafting a cutting-edge web presence was exactly what we needed to showcase our automotive technology. The attention to detail, sleek animations, and robust performance of the final product perfectly exceeded our expectations.",
      author: "Zhu Jia",
      company: "Founder, Leapmotor",
      initial: "ZJ",
      url: "https://www.leapmotor.net/"
    },


  ];

  return (
    <Section ref={sectionRef} id="reviews">
      <Container>
        <Header className="reviews-header">
          <div className="badge">Reviews</div>
          <h2>What Clients Say About Us</h2>
          <p>Real words from founders we’ve partnered with — fast projects, strong results, lasting trust.</p>
        </Header>

        <ReviewsGrid className="reviews-grid">
          {reviewsData.map((r, i) => (
            <ReviewCard key={i} className="review-card" href={r.url} target="_blank" rel="noopener noreferrer">
              <p className="quote">{r.quote}</p>
              <div className="author">
                <div className="avatar">{r.initial}</div>
                <div className="info">
                  <h4>{r.author}</h4>
                  <p>{r.company}</p>
                </div>
              </div>
            </ReviewCard>
          ))}
        </ReviewsGrid>
      </Container>
    </Section>
  );
};

export default Reviews;
