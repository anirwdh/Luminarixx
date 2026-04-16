import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Section = styled.section`
  padding: 8rem 5%;
  background-color: ${({ theme }) => theme.colors.background};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 4rem 5%;
  }
`;


const Container = styled.div`
  max-width: 800px;
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

const Accordion = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const AccordionItem = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  overflow: hidden;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: #333;
  }
`;

const AccordionHeader = styled.button`
  width: 100%;
  text-align: left;
  padding: 1.5rem 2rem;
  font-size: 1.125rem;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.text.primary};

  span.icon {
    font-size: 1.5rem;
    font-weight: 300;
    transition: transform 0.3s ease;
    transform: ${({ $isOpen }) => ($isOpen ? 'rotate(45deg)' : 'rotate(0)')};
    flex-shrink: 0;
    margin-left: 1rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 1.25rem 1.25rem;
    font-size: 1rem;
  }
`;


const AccordionContent = styled.div`
  max-height: ${({ $isOpen }) => ($isOpen ? '500px' : '0')};
  opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')};
  padding: ${({ $isOpen }) => ($isOpen ? '0 2rem 1.5rem 2rem' : '0 2rem')};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 1rem;
  line-height: 1.6;
`;

const ContactCTA = styled.div`
  margin-top: 4rem;
  text-align: center;
  padding: 3rem;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  
  h3 {
    margin-bottom: 1.5rem;
    font-size: ${({ theme }) => theme.typography.h3};
  }

  .links {
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;

    a {
      padding: 0.75rem 1.5rem;
      background: #111;
      border: 1px solid #333;
      border-radius: ${({ theme }) => theme.borderRadius.full};
      font-size: ${({ theme }) => theme.typography.small};
      transition: all 0.2s ease;

      &:hover {
        background: #222;
        transform: translateY(-2px);
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 2rem 1.5rem;
    margin-top: 2rem;

    h3 { font-size: 1.25rem; }

    .links {
      gap: 0.75rem;

      a {
        padding: 0.6rem 1.2rem;
        font-size: 0.8rem;
      }
    }
  }
`;


const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const sectionRef = useRef(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.faq-header', 
        { y: 30, opacity: 0 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out'
        }
      );

      gsap.fromTo('.faq-item', 
        { x: -20, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '.faq-list',
            start: 'top 85%',
          },
          x: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power3.out'
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const faqs = [
    {
      q: 'What kind of projects do you take on?',
      a: 'We work on a wide range of digital solutions — including web and mobile apps, CRM/ERP systems, AI automation, and custom software tailored to your business needs.'
    },
    {
      q: 'How long does a project take?',
      a: 'Timelines vary based on scope. Smaller projects can take 1–2 weeks, while more complex systems may take longer. We share a clear roadmap and timeline before we begin.'
    },
    {
      q: 'Do you handle both design and development?',
      a: 'Yes — we cover everything from UI/UX design to full-stack development, ensuring a seamless and consistent product experience from start to finish.'
    },
    {
      q: 'Can you build custom systems for my business?',
      a: 'Absolutely. We specialize in building tailored solutions like dashboards, internal tools, CRM/ERP systems, and automation workflows based on your exact requirements.'
    },
    {
      q: 'Do you offer AI or automation solutions?',
      a: 'Yes — we build AI-powered tools, chatbots, and automation systems that help streamline operations, reduce manual work, and improve efficiency.'
    },
    {
      q: 'What happens after the project is completed?',
      a: 'We provide post-launch support to ensure everything runs smoothly. Ongoing maintenance, updates, and scaling support are also available if needed.'
    },
    {
      q: 'How do we get started?',
      a: 'Simply reach out through the contact form or message us directly. We’ll understand your requirements, suggest the best approach, and guide you through the next steps.'
    }
  ];

  return (
    <Section ref={sectionRef} id="faq">
      <Container>
        <Header className="faq-header">
          <div className="badge">FAQ</div>
          <h2>Everything You Need to Know</h2>
          <p>From timelines to payments — here’s what founders usually ask us.</p>
        </Header>

        <Accordion className="faq-list">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} className="faq-item">
              <AccordionHeader 
                onClick={() => toggleFAQ(index)}
                $isOpen={openIndex === index}
              >
                {faq.q}
                <span className="icon">+</span>
              </AccordionHeader>
              <AccordionContent $isOpen={openIndex === index}>
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <ContactCTA className="faq-item">
          <h3>Can't find your answer?</h3>
          <div className="links">
            <a href="https://www.linkedin.com/in/the-luminarix-417a703b4/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B9lRJhOfgRPulugA6mfETsA%3D%3D" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://www.instagram.com/luminarix.official" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://www.threads.com/@luminarix.official" target="_blank" rel="noreferrer">Threads</a>
          </div>
        </ContactCTA>
      </Container>
    </Section>
  );
};

export default FAQ;
