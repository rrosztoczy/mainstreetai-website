import React from 'react';
import styled from 'styled-components';
import { FaBrain, FaLock, FaBullseye, FaExpand } from 'react-icons/fa';

const SolutionSection = styled.section`
  padding: 5rem 1rem;
  background-color: white;
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

const BenefitsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const Benefit = styled.div`
  padding: 2rem;
  border-radius: 10px;
  background: #f9f9f9;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const BenefitIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #1a2a6c;
  display: flex;
  justify-content: center;
`;

const BenefitTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: #333;
  text-align: center;
`;

const BenefitText = styled.p`
  color: #666;
  line-height: 1.5;
  text-align: center;
`;

const PartnershipHighlight = styled.div`
  margin-top: 3rem;
  padding: 2rem;
  background-color: #f5f7fa;
  border-radius: 10px;
  text-align: center;
  border-left: 5px solid #3a6186;
`;

const HighlightText = styled.p`
  font-size: 1.3rem;
  line-height: 1.6;
  color: #333;
  font-weight: 500;
`;

const Solution: React.FC = () => {
  return (
    <SolutionSection id="solution">
      <Container>
        <SectionHeading>Clear the Confusion. Lead with Intelligence.</SectionHeading>
        <Content>
          Mainstreet AI provides clear guidance, expert support, and tailored AI solutions within your tool or infrastructure stack.
        </Content>
        <BenefitsContainer>
          <Benefit>
            <BenefitIcon><FaBrain /></BenefitIcon>
            <BenefitTitle>Strategic Guidance</BenefitTitle>
            <BenefitText>
              We demystify AI technology and provide strategic guidance tailored to your business objectives.
            </BenefitText>
          </Benefit>
          <Benefit>
            <BenefitIcon><FaExpand /></BenefitIcon>
            <BenefitTitle>The Right Intelligence</BenefitTitle>
            <BenefitText>
              Apply the right models, tools, and knowledge to the right problems with our expert guidance.
            </BenefitText>
          </Benefit>
          <Benefit>
            <BenefitIcon><FaLock /></BenefitIcon>
            <BenefitTitle>Total Control</BenefitTitle>
            <BenefitText>
              Deploy AI solutions within your secure infrastructure or tool stack.
            </BenefitText>
          </Benefit>
          <Benefit>
            <BenefitIcon><FaBullseye /></BenefitIcon>
            <BenefitTitle>Custom Solutions</BenefitTitle>
            <BenefitText>
              AI tailored precisely to your business needs, processes, and industry challenges.
            </BenefitText>
          </Benefit>
        </BenefitsContainer>
        <PartnershipHighlight>
          <HighlightText>
            Our approach centers on pairing your team with an expert, forward-deployed AI engineer who becomes an extension of your organization—creating a true partnership that evolves with your business needs.
          </HighlightText>
        </PartnershipHighlight>
      </Container>
    </SolutionSection>
  );
};

export default Solution; 