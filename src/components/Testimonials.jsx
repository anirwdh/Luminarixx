import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CSSPlugin } from 'gsap/CSSPlugin';
import styled from 'styled-components';

gsap.registerPlugin(ScrollTrigger, CSSPlugin);

const TestimonialsSection = styled.section`
  padding: 100px 0;
  background: #0e0e0e;
  position: relative;
  overflow: hidden;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 80px;
`;

const SectionTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 800;
  margin-bottom: 20px;

  .light-text {
    background: linear-gradient(135deg, #bbf7d0, #ffffff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .normal-text {
    color: #ffffff;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.7);
  max-width: 600px;
  margin: 0 auto;
`;

const TestimonialsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
`;

const TestimonialTrack = styled.div`
  display: flex;
  transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
`;

const TestimonialCard = styled.div`
  min-width: 100%;
  padding: 0 20px;
`;

const CardContent = styled.div`
  background: linear-gradient(135deg, rgba(255, 77, 109, 0.05), rgba(0, 255, 247, 0.05));
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 25px;
  padding: 50px;
  text-align: center;
  position: relative;
  backdrop-filter: blur(10px);
  transition: all 0.4s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 30px 60px rgba(255, 77, 109, 0.2);
    border-color: rgba(255, 77, 109, 0.3);
  }
`;

const QuoteIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 30px;
  background: linear-gradient(135deg, #ff4d6d, #00fff7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const TestimonialText = styled.p`
  font-size: 1.3rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 40px;
  font-style: italic;
`;

const ClientInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const ClientAvatar = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ff4d6d, #00fff7);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #ffffff;
  font-weight: 700;
`;

const ClientDetails = styled.div`
  text-align: left;
`;

const ClientName = styled.h4`
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 5px;
`;

const ClientRole = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
`;

const ClientCompany = styled.p`
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Navigation = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 50px;
`;

const NavButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.3);
  background: transparent;
  color: #ffffff;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: linear-gradient(135deg, #ff4d6d, #00fff7);
    border-color: transparent;
    transform: scale(1.1);
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

const Dots = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 30px;
`;

const Dot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: ${props => props.$active ? 'linear-gradient(135deg, #ff4d6d, #00fff7)' : 'rgba(255, 255, 255, 0.3)'};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.$active ? 'linear-gradient(135deg, #ff3366, #00e6cc)' : 'rgba(255, 255, 255, 0.5)'};
  }
`;

const Testimonials = () => {
  const sectionRef = useRef();
  const trackRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      text: "Working with Luminarix was a game-changer for our business. They delivered a stunning website that perfectly captures our brand essence and has significantly increased our online conversions.",
      name: "Sarah Johnson",
      role: "CEO",
      company: "TechStart Inc.",
      avatar: "SJ"
    },
    {
      text: "The team's expertise in AI solutions helped us automate complex processes and save countless hours. Their attention to detail and innovative approach exceeded all our expectations.",
      name: "Michael Chen",
      role: "CTO",
      company: "DataFlow Systems",
      avatar: "MC"
    },
    {
      text: "Luminarix transformed our digital presence with a comprehensive marketing strategy. Our brand awareness has skyrocketed, and we're seeing unprecedented growth in engagement.",
      name: "Emily Rodriguez",
      role: "Marketing Director",
      company: "Growth Labs",
      avatar: "ER"
    },
    {
      text: "The mobile app they developed for us is intuitive, fast, and beautifully designed. Our customers love it, and it has become an essential part of our business operations.",
      name: "David Kim",
      role: "Product Manager",
      company: "Innovate Co.",
      avatar: "DK"
    },
    {
      text: "Their HR solutions have streamlined our entire workforce management process. The system is robust, user-friendly, and has improved our operational efficiency tremendously.",
      name: "Lisa Thompson",
      role: "HR Director",
      company: "Global Corp",
      avatar: "LT"
    }
  ];

  const totalTestimonials = testimonials.length;

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + totalTestimonials) % totalTestimonials);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalTestimonials);
  };

  useEffect(() => {
    // Animate section entrance
    gsap.from(sectionRef.current.children, {
      y: 80,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
        end: 'bottom 30%',
        toggleActions: 'play none none reverse'
      }
    });

    // Auto-advance testimonials
    const interval = setInterval(() => {
      goToNext();
    }, 5000);

    return () => {
      clearInterval(interval);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  useEffect(() => {
    // Animate testimonial change
    gsap.to(trackRef.current, {
      x: -currentIndex * 100 + '%',
      duration: 0.5,
      ease: 'power2.inOut'
    });
  }, [currentIndex]);

  return (
    <TestimonialsSection ref={sectionRef}>
      <div className="container">
        <SectionHeader>
          <SectionTitle>
            <span className="light-text">Client</span> <span className="normal-text">Testimonials</span>
          </SectionTitle>
          <SectionSubtitle>
            Don't just take our word for it - hear what our clients have to say about working with us
          </SectionSubtitle>
        </SectionHeader>

        <TestimonialsContainer>
          <TestimonialTrack ref={trackRef}>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index}>
                <CardContent>
                  <QuoteIcon>"</QuoteIcon>
                  <TestimonialText>{testimonial.text}</TestimonialText>
                  <ClientInfo>
                    <ClientAvatar>{testimonial.avatar}</ClientAvatar>
                    <ClientDetails>
                      <ClientName>{testimonial.name}</ClientName>
                      <ClientRole>{testimonial.role}</ClientRole>
                      <ClientCompany>{testimonial.company}</ClientCompany>
                    </ClientDetails>
                  </ClientInfo>
                </CardContent>
              </TestimonialCard>
            ))}
          </TestimonialTrack>

          <Navigation>
            <NavButton onClick={goToPrevious} aria-label="Previous testimonial">
              ←
            </NavButton>
            <NavButton onClick={goToNext} aria-label="Next testimonial">
              →
            </NavButton>
          </Navigation>

          <Dots>
            {testimonials.map((_, index) => (
              <Dot
                key={index}
                $active={index === currentIndex}
                onClick={() => goToTestimonial(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </Dots>
        </TestimonialsContainer>
      </div>
    </TestimonialsSection>
  );
};

export default Testimonials;
