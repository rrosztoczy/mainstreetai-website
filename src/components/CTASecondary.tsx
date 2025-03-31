import React from 'react';
import styled from 'styled-components';
import mediumLogo from '../assets/medium-logo.jpeg'; // Adjust path as needed

const CTASection = styled.section`
  padding: 4rem 1rem;
  background-color: #f5f7fa;
  text-align: center;
`;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const FooterLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`;

const LogoImage = styled.img`
  height: 60px;
  margin-right: 15px;
`;

const LogoText = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  color: #3a6186;
`;

const Heading = styled.h3`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #333;
`;

const ContactInfo = styled.div`
  margin-bottom: 2rem;
`;

const ContactItem = styled.p`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: #555;
  
  a {
    color: #1a2a6c;
    font-weight: 600;
    transition: color 0.3s ease;
    
    &:hover {
      color: #b21f1f;
    }
  }
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  color: #777;
  margin-top: 2rem;
`;

const CTASecondary: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <CTASection>
      <Container>
        <FooterLogo>
          <LogoImage src={mediumLogo} alt="Mainstreet AI Logo" />
          <LogoText>Mainstreet AI</LogoText>
        </FooterLogo>
        <Heading>Get in Touch</Heading>
        <ContactInfo>
          <ContactItem>
            Email: <a href="mailto:contact@mainstreetai.com">contact@mainstreetai.com</a>
          </ContactItem>
          <ContactItem>
            Phone: <a href="tel:+15555555555">(555) 555-5555</a>
          </ContactItem>
        </ContactInfo>
        <Copyright>
          © {currentYear} Mainstreet AI. All rights reserved.
        </Copyright>
      </Container>
    </CTASection>
  );
};

export default CTASecondary; 