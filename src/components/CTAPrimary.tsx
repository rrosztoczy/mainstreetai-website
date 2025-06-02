import React from 'react';
import styled from 'styled-components';

const CTASection = styled.section`
  padding: 5rem 1rem;
  background: linear-gradient(135deg, #3a6186, #89253e, #f3904f);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  color: white;
  text-align: center;
  
  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`;

const Subheading = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const CTAButton = styled.a`
  display: inline-block;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  background-color: white;
  color: #1a2a6c;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
  }
`;

const CTAPrimary: React.FC = () => {
  return (
    <CTASection id="contact">
      <Container>
        <Heading>Ready to Accelerate Your Business with AI?</Heading>
        <Subheading>
          Schedule a free AI Capability Assessment to discover how our dedicated AI engineers can partner with your team to drive growth and efficiency through secure, enterprise-grade AI solutions.
        </Subheading>
        <CTAButton href="mailto:info@mainstreetai.com?subject=AI%20Fit%20Request">
          Book a Fit Call
        </CTAButton>
      </Container>
    </CTASection>
  );
};

export default CTAPrimary; 