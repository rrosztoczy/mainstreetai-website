import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const HeroSection = styled.section`
  position: relative;
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

/* new italic sub-quote style */
const Subquote = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  text-align: left;
  position: absolute;
  bottom: 1rem;
  left: 1rem;
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

const Hero: React.FC = () => (
  <HeroSection id="home">
    <HeroContent>
      {/* updated headline */}
      <Headline>
        The businesses leading in AI adoption are winning.
      </Headline>

      {/* updated sub-headline */}
      <Subheadline>
        The latest reports show that companies leading AI adoption see higher revenue growth and returns<sup>1</sup>.
      </Subheadline>

      <Subheadline>
        If your team is behind, we can help.
      </Subheadline>

      {/* existing CTA button */}
      <Link to="getting-started" smooth={true} duration={500}>
        <CTAButton>See How to Get Started</CTAButton>
      </Link>
    </HeroContent>
          {/* citation line (reference article, no external link) */}
          <Subquote>
        <em>[1] Source: Boston Consulting Group, “AI Adoption in 2024,” Oct 24 2024.</em>
      </Subquote>
  </HeroSection>
);

export default Hero; 