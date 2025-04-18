import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: linear-gradient(135deg, #3a6186, #89253e, #f3904f);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  color: white;
  padding: 0 1rem;
  
  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

const HeroContent = styled.div`
  max-width: 850px;
`;

const Headline = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subheadline = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  line-height: 1.5;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const CTAButton = styled.button`
  padding: 1rem 2rem;
  font-size: 1.2rem;
  background-color: #5cb85c;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  
  &:hover {
    background-color: #4cae4c;
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
  }
`;

const Hero: React.FC = () => {
  return (
    <HeroSection id="home">
      <HeroContent>
        <Headline>Artificial Intelligence is the greatest opportunity of our lifetime. The time to act is now.</Headline>
        <Subheadline>
          Our top-tier AI engineers can inspire your team, accelerate adoption, and help tackle mission critical projects using state of the art models, tools, and products. Our motto is "prove that anything is possible" and we can't wait to prove it to you.
        </Subheadline>
        <Link to="contact" smooth={true} duration={500}>
          <CTAButton>
            Talk to an Engineer
          </CTAButton>
        </Link>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero; 