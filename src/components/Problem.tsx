import React from 'react';
import styled from 'styled-components';
import { FaLightbulb, FaShieldAlt, FaPuzzlePiece, FaTrophy } from 'react-icons/fa';

const ProblemSection = styled.section`
  padding: 5rem 1rem;
  background-color: #f9f9f9;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeading = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1.5rem;
  color: #333;
`;

const Content = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem;
  font-size: 1.2rem;
  line-height: 1.6;
  color: #555;
`;

const PainPointsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const PainPoint = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
`;

const PainPointIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #89253e;
  display: flex;
  justify-content: center;
`;

const PainPointTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: #333;
  text-align: center;
`;

const PainPointText = styled.p`
  color: #666;
  line-height: 1.5;
  text-align: center;
`;

const Problem: React.FC = () => {
  return (
    <ProblemSection id="problem">
      <Container>
        <SectionHeading>Be the Disruptor.</SectionHeading>
        <Content>
          Artificial Intelligence solutions are fundamentally different from classical software products. The ability to scale intelligence will disrupt most industries - and we expect most of this will take place in the next five years.
          <br /><br />
          Misconceptions, hesitations, and confusion about AI's capabilities mean that many businesses will be left behind.
        </Content>
        <PainPointsContainer>
          <PainPoint>
            <PainPointIcon><FaLightbulb /></PainPointIcon>
            <PainPointTitle>Missed Opportunities</PainPointTitle>
            <PainPointText>
              Misunderstanding AI leads to missed opportunities, lost investments, and competitive disadvantages.
            </PainPointText>
          </PainPoint>
          <PainPoint>
            <PainPointIcon><FaPuzzlePiece /></PainPointIcon>
            <PainPointTitle>Generic Solutions</PainPointTitle>
            <PainPointText>
              Off-the-shelf AI tools fail to address your unique culture, business challenges, and "jobs to be done".
            </PainPointText>
          </PainPoint>
          <PainPoint>
            <PainPointIcon><FaTrophy /></PainPointIcon>
            <PainPointTitle>Competitive Edge</PainPointTitle>
            <PainPointText>
              When intelligence is externalized to tech companies, you surrender your most valuable competitive advantages.
            </PainPointText>
          </PainPoint>
          <PainPoint>
            <PainPointIcon><FaShieldAlt /></PainPointIcon>
            <PainPointTitle>Security & Privacy Risks</PainPointTitle>
            <PainPointText>
              Outsourced AI solutions can expose your most sensitive data and create serious security vulnerabilities.
            </PainPointText>
          </PainPoint>
        </PainPointsContainer>
      </Container>
    </ProblemSection>
  );
};

export default Problem; 