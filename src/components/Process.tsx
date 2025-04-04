import React from 'react';
import styled from 'styled-components';

const ProcessSection = styled.section`
  padding: 5rem 1rem;
  background-color: #f5f7fa;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const SectionHeading = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #333;
`;

const StepsContainer = styled.div`
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: calc(50% - 1px);
    width: 2px;
    background-color: #ddd;
    
    @media (max-width: 768px) {
      left: 30px;
    }
  }
`;

const Step = styled.div`
  display: flex;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
  
  &:last-child {
    margin-bottom: 0;
  }
  
  &:nth-child(odd) {
    flex-direction: row-reverse;
    
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
`;

const StepNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background-color: #1a2a6c;
  color: white;
  border-radius: 50%;
  font-size: 1.5rem;
  font-weight: bold;
  z-index: 2;
  margin: 0 auto;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  
  @media (max-width: 768px) {
    margin: 0 0 0 0;
    position: absolute;
    left: 0;
  }
`;

const StepContent = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  width: calc(50% - 50px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    width: calc(100% - 60px);
    margin-left: 60px;
  }
`;

const StepTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
`;

const StepText = styled.p`
  color: #666;
  line-height: 1.5;
`;

const PartnershipSection = styled.div`
  margin-top: 4rem;
  padding: 2rem;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const PartnershipHeading = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #333;
`;

const PartnershipText = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #555;
  margin-bottom: 1.5rem;
`;

const Process: React.FC = () => {
  return (
    <ProcessSection id="process">
      <Container>
        <SectionHeading>Your Clear Path to AI Leadership</SectionHeading>
        <StepsContainer>
          <Step>
            <StepNumber>1</StepNumber>
            <StepContent>
              <StepTitle>Alignment</StepTitle>
              <StepText>
                We demystify AI technology and identify high-impact opportunities specific to your business. Our team works with you to understand your challenges and set clear objectives.
              </StepText>
            </StepContent>
          </Step>
          <Step>
            <StepNumber>2</StepNumber>
            <StepContent>
              <StepTitle>Deployment</StepTitle>
              <StepText>
                We securely install the right customized AI systems or tools within your business, configured to your exact specifications and integrated with your existing tool stack or infrastructure.
              </StepText>
            </StepContent>
          </Step>
          <Step>
            <StepNumber>3</StepNumber>
            <StepContent>
              <StepTitle>Integration</StepTitle>
              <StepText>
                We seamlessly connect AI capabilities to your workflows and data sources, ensuring your team can immediately leverage these new intelligent systems.
              </StepText>
            </StepContent>
          </Step>
          <Step>
            <StepNumber>4</StepNumber>
            <StepContent>
              <StepTitle>Expansion</StepTitle>
              <StepText>
                We help you continuously scale and adapt your AI capabilities as your business evolves, identifying new opportunities and staying ahead of the competition.
              </StepText>
            </StepContent>
          </Step>
        </StepsContainer>
        <PartnershipSection>
          <PartnershipHeading>Your Dedicated AI Partner, Keeping You Ahead of the Curve</PartnershipHeading>
          <PartnershipText>
            At the core of our service is a forward deployed engineer who works directly with your team so that we get to know your business and bring our expertise to you.
          </PartnershipText>
        </PartnershipSection>
      </Container>
    </ProcessSection>
  );
};

export default Process; 