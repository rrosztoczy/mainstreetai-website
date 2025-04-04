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
  color: #222222;
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
        <ContactInfo>
          <ContactItem>
            Email: <a href="mailto:info@mainstreetai.com">info@mainstreetai.com</a>
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