import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CSSPlugin } from 'gsap/CSSPlugin';
import styled from 'styled-components';

gsap.registerPlugin(ScrollTrigger, CSSPlugin);

const ContactSection = styled.section`
  padding: 120px 0;
  background: linear-gradient(180deg, rgba(14, 14, 14, 0.4) 0%, rgba(26, 26, 26, 0.6) 100%),
              url('/assets/images/vvv.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  z-index: 10;

  @media (max-width: 768px) {
    background-attachment: scroll;
    padding: 80px 0;
    min-height: auto;
  }

  @media (max-width: 480px) {
    padding: 60px 0;
  }
`;

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: start;
  position: relative;
  z-index: 10;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 50px;
    padding: 40px 20px;
  }
`;

const ContactContent = styled.div`
  z-index: 15;
  position: relative;
`;

const SectionTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: clamp(3.1rem, 6vw, 4rem);
  font-weight: 400;
  line-height: 1.05;
  margin-bottom: 30px;
  text-align: left;
  letter-spacing: -1.5px;
  color: #ffffff;
  z-index: 20;
  position: relative;

  .light-text {
    background: linear-gradient(135deg, #bbf7d0, #ffffff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .normal-text {
    color: #ffffff;
  }

  @media (max-width: 768px) {
    font-size: clamp(2.5rem, 8vw, 3.5rem);
    margin-bottom: 25px;
    text-align: center;
  }
`;

const ContactText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 40px;
  z-index: 20;
  position: relative;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.15);
  }
`;

const InfoIcon = styled.div`
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

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
    width: 24px;
    height: 24px;
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

const InfoDetails = styled.div`
  flex: 1;
`;

const InfoLabel = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 5px;
`;

const InfoValue = styled.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
`;

const ContactForm = styled.form`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 25px;
  padding: 50px;
  backdrop-filter: blur(10px);
  z-index: 15;
  position: relative;
`;

const FormGroup = styled.div`
  margin-bottom: 30px;
`;

const FormLabel = styled.label`
  display: block;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: rgba(255, 255, 255, 0.9);
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 15px 20px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  color: #ffffff;
  font-size: 1rem;

  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 15px 20px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  color: #ffffff;
  font-size: 1rem;
  font-family: inherit;
  resize: vertical;
  min-height: 150px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 18px 40px;
  background: rgba(0, 0, 0, 0.9);
  color: #ffffff;
  border: 0.3px solid rgba(0, 255, 136, 0.8);
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  overflow: hidden;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    border-color: rgba(0, 255, 136, 0.3);
  }
`;

const SuccessMessage = styled.div`
  padding: 20px;
  background: linear-gradient(135deg, rgba(0, 255, 247, 0.2), rgba(255, 77, 109, 0.2));
  border: 1px solid rgba(0, 255, 247, 0.3);
  border-radius: 10px;
  color: #ffffff;
  text-align: center;
  margin-bottom: 20px;
  animation: fadeInUp 0.5s ease;
`;

const FormSelect = styled.select`
  width: 100%;
  padding: 15px 20px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  color: #ffffff;
  font-size: 1rem;
  cursor: pointer;

  option {
    background: #1a1a1a;
    color: #ffffff;
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }
`;

const Contact = () => {
  const sectionRef = useRef();
  const contentRef = useRef();
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    setShowSuccess(true);
    setFormData({
      name: '',
      email: '',
      service: '',
      message: ''
    });
    setIsSubmitting(false);

    // Hide success message after 5 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <ContactSection ref={sectionRef} id="contact">
      <ContactContainer>
        <ContactContent ref={contentRef}>
          <SectionTitle>
            <span className="light-text">Get In</span> <span className="normal-text">Touch</span>
          </SectionTitle>
          <ContactText>
            Ready to transform your digital presence? We're here to help you achieve your goals. 
            Reach out to us and let's discuss how we can bring your vision to life.
          </ContactText>
          
          <ContactInfo>
            <InfoItem>
              <InfoIcon>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </InfoIcon>
              <InfoDetails>
                <InfoLabel>Email</InfoLabel>
                <InfoValue>luminarix.official@gmail.com</InfoValue>
              </InfoDetails>
            </InfoItem>
            
            <InfoItem>
              <InfoIcon>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.46.45.69 1.08 1.08 1.46.45.34.74.03 1.02-.24l2.2-2.2c2.83-2.83 5.14-3.76 6.59-6.59l-2.2-2.2zm-1.39 9.23c-.67-.67-1.5-1.5-2.17-2.17l-1.41 1.41c.67.67 1.5 1.5 2.17 2.17l1.41-1.41zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                </svg>
              </InfoIcon>
              <InfoDetails>
                <InfoLabel>Phone</InfoLabel>
                <InfoValue>+91 9027224030</InfoValue>
              </InfoDetails>
            </InfoItem>
            
            <InfoItem>
              <InfoIcon>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13h1c0 0 7-7.75 7-13 0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </InfoIcon>
              <InfoDetails>
                <InfoLabel>Address</InfoLabel>
                <InfoValue>70-72 Sector 63, Noida, Uttar Pradesh, India</InfoValue>
              </InfoDetails>
            </InfoItem>
          </ContactInfo>
        </ContactContent>

        <ContactForm ref={formRef} onSubmit={handleSubmit}>
          {showSuccess && (
            <SuccessMessage>
              Thank you for your message! We'll get back to you soon.
            </SuccessMessage>
          )}
          
          <FormGroup>
            <FormLabel htmlFor="name">Your Name</FormLabel>
            <FormInput
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              required
            />
          </FormGroup>

          <FormGroup>
            <FormLabel htmlFor="email">Email Address</FormLabel>
            <FormInput
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              required
            />
          </FormGroup>

          <FormGroup>
            <FormLabel htmlFor="service">Service Type</FormLabel>
            <FormSelect
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="">Select a service...</option>
              <option value="web-development">Web Development</option>
              <option value="mobile-app">Mobile App Development</option>
              <option value="ui-ux-design">UI/UX Design</option>
              <option value="branding">Branding & Identity</option>
              <option value="digital-marketing">Digital Marketing</option>
              <option value="consulting">Consulting</option>
              <option value="other">Other</option>
            </FormSelect>
          </FormGroup>

          <FormGroup>
            <FormLabel htmlFor="message">Message</FormLabel>
            <FormTextarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project..."
              required
            />
          </FormGroup>

          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </SubmitButton>
        </ContactForm>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;
