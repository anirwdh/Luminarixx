import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { initEmailJS, sendEmail } from '../services/emailService';

gsap.registerPlugin(ScrollTrigger);

const Section = styled.section`
  padding: 8rem 5%;
  background-color: ${({ theme }) => theme.colors.background};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 4rem 5%;
  }
`;


const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 2.5rem;
  }
`;


const ContactInfoWrapper = styled.div`
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
  
  p.desc {
    font-size: ${({ theme }) => theme.typography.h3};
    color: ${({ theme }) => theme.colors.text.secondary};
    margin-bottom: 3rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    h2 {
      font-size: clamp(1.8rem, 7vw, 3rem);
      margin-bottom: 1rem;
    }

    p.desc {
      font-size: 1rem;
      margin-bottom: 2rem;
    }
  }
`;


const InfoItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: transform 0.3s ease, border-color 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    border-color: #444;
  }

  .icon {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.background};
    border: 1px solid ${({ theme }) => theme.colors.border};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    flex-shrink: 0;
  }
  
  .details {
    h4 {
      margin: 0 0 0.25rem 0;
      color: ${({ theme }) => theme.colors.text.secondary};
      font-size: ${({ theme }) => theme.typography.small};
    }
    p {
      margin: 0;
      color: ${({ theme }) => theme.colors.text.primary};
      font-weight: 500;
      word-break: break-word;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 1.25rem;
    gap: 1rem;

    .icon {
      width: 40px;
      height: 40px;
      font-size: 1rem;
    }

    .details p {
      font-size: 0.875rem;
    }
  }
`;


const FormContainer = styled.form`
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 1.75rem 1.5rem;
    gap: 1.25rem;
    border-radius: ${({ theme }) => theme.borderRadius.md};
  }
`;

const FormGroup = styled.div`
  label {
    display: block;
    margin-bottom: 0.6rem;
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: ${({ theme }) => theme.typography.small};
    letter-spacing: 0.02em;
  }
  
  input, textarea, select {
    width: 100%;
    box-sizing: border-box;
    padding: 1.2rem;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: ${({ theme }) => theme.borderRadius.md};
    color: ${({ theme }) => theme.colors.text.primary};
    font-family: inherit;
    font-size: ${({ theme }) => theme.typography.body};
    transition: all 0.3s ease;
    -webkit-appearance: none;
    
    &:focus {
      outline: none;
      background: rgba(255, 255, 255, 0.06);
      border-color: rgba(255, 255, 255, 0.25);
      box-shadow: 0 0 15px rgba(255, 255, 255, 0.05);
    }
  }
  
  textarea {
    resize: vertical;
    min-height: 120px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    label { font-size: 0.8rem; }

    input, textarea, select {
      padding: 1rem;
      font-size: 16px; /* Prevents iOS auto-zoom on focus */
      border-radius: ${({ theme }) => theme.borderRadius.sm};
    }

    textarea { min-height: 100px; }
  }
`;


const SubmitBtn = styled.button`
  width: 100%;
  padding: 1.2rem;
  background: rgba(255, 255, 255, 0.95);
  color: #000;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-weight: 600;
  font-size: ${({ theme }) => theme.typography.body};
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  margin-top: 1rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: width 0.6s ease, height 0.6s ease;
    z-index: 0;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(255, 255, 255, 0.15);
  }
  
  &:hover::before {
    width: 300%;
    height: 300%;
  }

  > span {
    position: relative;
    z-index: 1;
  }
  
  &:active {
    transform: scale(0.98);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const FormMessage = styled.div`
  padding: 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  text-align: center;
  font-size: ${({ theme }) => theme.typography.small};
  background: ${({ $isError, theme }) => $isError ? 'rgba(255, 77, 109, 0.1)' : 'rgba(0, 255, 136, 0.1)'};
  color: ${({ $isError }) => $isError ? '#ff4d6d' : '#00ff88'};
  border: 1px solid ${({ $isError }) => $isError ? 'rgba(255, 77, 109, 0.2)' : 'rgba(0, 255, 136, 0.2)'};
`;

const Contact = () => {
  const sectionRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMsg, setStatusMsg] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMsg(null);

    try {
      const result = await sendEmail(formData);

      if (result.success) {
        setStatusMsg({ type: 'success', text: "Thank you! We'll be in touch soon." });
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      } else {
        setStatusMsg({ type: 'error', text: result.message || 'Failed to send.' });
      }
    } catch (error) {
      setStatusMsg({ type: 'error', text: 'An unexpected error occurred.' });
    }

    setIsSubmitting(false);
    setTimeout(() => setStatusMsg(null), 5000);
  };

  useEffect(() => {
    initEmailJS();

    const ctx = gsap.context(() => {
      gsap.from('.contact-animate', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section ref={sectionRef} id="contact">
      <Container>
        <ContactInfoWrapper className="contact-animate">
          <div className="badge">Contact</div>
          <h2>Get In Touch</h2>
          <p className="desc">
            Ready to transform your digital presence? We're here to help you achieve your goals. Reach out to us and let's discuss how we can bring your vision to life.
          </p>

          <InfoItemsContainer>
            <InfoItem>
              <div className="icon">✉️</div>
              <div className="details">
                <h4>Email</h4>
                <p>luminarix.official@gmail.com</p>
              </div>
            </InfoItem>

            <InfoItem>
              <div className="icon">📞</div>
              <div className="details">
                <h4>Phone</h4>
                <p>+91 9027224030</p>
              </div>
            </InfoItem>


          </InfoItemsContainer>
        </ContactInfoWrapper>

        <FormContainer className="contact-animate" onSubmit={handleSubmit}>
          {statusMsg && (
            <FormMessage $isError={statusMsg.type === 'error'}>
              {statusMsg.text}
            </FormMessage>
          )}

          <FormGroup>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required />
          </FormGroup>

          <FormGroup>
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" required />
          </FormGroup>

          <FormGroup>
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 9027224030" />
          </FormGroup>

          <FormGroup>
            <label htmlFor="service">Service Type</label>
            <select id="service" name="service" value={formData.service} onChange={handleChange} required>
              <option value="">Select a service...</option>
              <option value="web-development">Web Development</option>
              <option value="mobile-app">Mobile App Development</option>
              <option value="ui-ux-design">UI/UX Design</option>
              <option value="branding">Branding & Identity</option>
              <option value="digital-marketing">Digital Marketing</option>
              <option value="consulting">Consulting</option>
              <option value="other">Other</option>
            </select>
          </FormGroup>

          <FormGroup>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your project..." required />
          </FormGroup>

          <SubmitBtn type="submit" disabled={isSubmitting}>
            <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
          </SubmitBtn>
        </FormContainer>
      </Container>
    </Section>
  );
};

export default Contact;
