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

/* new italic sub-quote style */
const Subquote = styled.p`
  font-size: 0.9rem;
  color: #555;
  margin: 0.75rem 0 1.5rem;
  text-align: center;
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
        Businesses leading in AI adoption are outpacing the competition.
      </Headline>

      {/* updated sub-headline */}
      <Subheadline>
        BCG’s latest AI Adoption report shows that AI-forward companies enjoy&nbsp;
        <strong>1.5× revenue growth, 1.6× higher shareholder returns,</strong> and&nbsp;
        <strong>1.4× better ROIC</strong>.<br/>
        If you’re still wondering where to start—or trying to align scattered pilot projects—
        there’s a proven path:&nbsp;<em>Align → Jump Start → Evolve</em>.
      </Subheadline>

      {/* citation line (reference article, no external link) */}
      <Subquote>
        <em>Source: Boston Consulting Group, “AI Adoption in 2024,” Oct 24 2024.</em>
      </Subquote>

      {/* existing CTA button */}
      <Link to="packages" smooth={true} duration={500}>
        <CTAButton>See the 3-Step Plan</CTAButton>
      </Link>
    </HeroContent>
  </HeroSection>
);

export default Hero; 