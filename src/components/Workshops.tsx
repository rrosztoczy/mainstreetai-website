import React from 'react';
import styled from 'styled-components';
import { FaLightbulb, FaUsers, FaRocket, FaLaptopCode, FaCalendarAlt, FaVideo } from 'react-icons/fa';

const WorkshopsSection = styled.section`
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
  margin-bottom: 1.5rem;
  color: #333;
`;

const SectionSubheading = styled.p`
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #666;
  line-height: 1.6;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const WorkshopGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const WorkshopCard = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }
`;

const IconWrapper = styled.div`
  font-size: 2.5rem;
  color: #1a2a6c;
  margin-bottom: 1.5rem;
`;

const WorkshopTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
`;

const WorkshopDescription = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const WorkshopDetails = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const WorkshopDetail = styled.li`
  padding: 0.5rem 0;
  color: #555;
  display: flex;
  align-items: flex-start;
  
  &:before {
    content: "•";
    color: #1a2a6c;
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-right: 0.5em;
  }
`;

const FormatSection = styled.div`
  margin-top: 4rem;
  padding: 2rem;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;

const FormatHeading = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #333;
  text-align: center;
`;

const FormatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FormatCard = styled.div`
  background-color: #f5f7fa;
  border-radius: 8px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const FormatTitle = styled.h4`
  font-size: 1.3rem;
  margin: 1rem 0;
  color: #333;
`;

const FormatDescription = styled.p`
  color: #666;
  line-height: 1.5;
`;

const DeliveryOptions = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1rem;
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

const DeliveryOption = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #555;
  font-weight: 500;
`;

const TestimonialSection = styled.div`
  margin-top: 4rem;
  padding: 2.5rem;
  background: linear-gradient(135deg, #e5e9f0, #f5f7fa);
  border-radius: 10px;
  text-align: center;
`;

const TestimonialHeading = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #333;
`;

const TestimonialText = styled.p`
  font-size: 1.2rem;
  font-style: italic;
  color: #555;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;
`;

const TestimonialAuthor = styled.p`
  font-weight: 600;
  color: #333;
`;

const CTAButton = styled.a`
  display: inline-block;
  margin-top: 2rem;
  padding: 1rem 2rem;
  background-color: #1a2a6c;
  color: white;
  border-radius: 5px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background-color: #0f1a4f;
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }
`;

const Workshops: React.FC = () => {
  return (
    <WorkshopsSection id="workshops">
      <Container>
        <SectionHeading>AI Workshops & Training</SectionHeading>
        <SectionSubheading>
          Empower your team with practical AI knowledge through our interactive workshops and training programs.
          Our workshops are designed to demystify AI and provide your organization with actionable strategies for implementation.
        </SectionSubheading>
        
        <WorkshopGrid>
          <WorkshopCard>
            <IconWrapper>
              <FaLightbulb />
            </IconWrapper>
            <WorkshopTitle>Customized Content</WorkshopTitle>
            <WorkshopDescription>
              Tailored specifically to your industry and business needs
            </WorkshopDescription>
            <WorkshopDetails>
              <WorkshopDetail>Pre-workshop discovery calls to understand your challenges</WorkshopDetail>
              <WorkshopDetail>Industry-specific AI use cases and examples</WorkshopDetail>
              <WorkshopDetail>Customized materials for your team's technical level</WorkshopDetail>
              <WorkshopDetail>Focus on your most pressing business opportunities</WorkshopDetail>
            </WorkshopDetails>
          </WorkshopCard>
          
          <WorkshopCard>
            <IconWrapper>
              <FaUsers />
            </IconWrapper>
            <WorkshopTitle>Interactive Training</WorkshopTitle>
            <WorkshopDescription>
              Engaging sessions that build AI literacy across your organization
            </WorkshopDescription>
            <WorkshopDetails>
              <WorkshopDetail>AI fundamentals explained in business terms</WorkshopDetail>
              <WorkshopDetail>Current capabilities and limitations of AI technologies</WorkshopDetail>
              <WorkshopDetail>Real-world success stories and case studies</WorkshopDetail>
              <WorkshopDetail>Ethical considerations and responsible AI practices</WorkshopDetail>
            </WorkshopDetails>
          </WorkshopCard>
          
          <WorkshopCard>
            <IconWrapper>
              <FaLaptopCode />
            </IconWrapper>
            <WorkshopTitle>Hands-on Prototyping</WorkshopTitle>
            <WorkshopDescription>
              Practical experience with AI tools and technologies
            </WorkshopDescription>
            <WorkshopDetails>
              <WorkshopDetail>Guided exercises with popular AI platforms</WorkshopDetail>
              <WorkshopDetail>Prompt engineering techniques and best practices</WorkshopDetail>
              <WorkshopDetail>Collaborative problem-solving using AI tools</WorkshopDetail>
              <WorkshopDetail>Immediate application to your business challenges</WorkshopDetail>
            </WorkshopDetails>
          </WorkshopCard>
          
          <WorkshopCard>
            <IconWrapper>
              <FaRocket />
            </IconWrapper>
            <WorkshopTitle>Strategy Roadmap Development</WorkshopTitle>
            <WorkshopDescription>
              Create an actionable plan for AI implementation
            </WorkshopDescription>
            <WorkshopDetails>
              <WorkshopDetail>Opportunity identification and prioritization</WorkshopDetail>
              <WorkshopDetail>Resource planning and capability assessment</WorkshopDetail>
              <WorkshopDetail>Implementation timeline and milestone creation</WorkshopDetail>
              <WorkshopDetail>ROI measurement framework and success metrics</WorkshopDetail>
            </WorkshopDetails>
          </WorkshopCard>
        </WorkshopGrid>
        
        <FormatSection>
          <FormatHeading>Workshop Formats</FormatHeading>
          <FormatGrid>
            <FormatCard>
              <IconWrapper>
                <FaCalendarAlt />
              </IconWrapper>
              <FormatTitle>Half-Day Workshop</FormatTitle>
              <FormatDescription>
                A focused 4-hour session ideal for executive teams or departments looking for a concentrated introduction to AI capabilities and strategic opportunities.
              </FormatDescription>
              <DeliveryOptions>
                <DeliveryOption>
                  <FaUsers /> In-Person
                </DeliveryOption>
                <DeliveryOption>
                  <FaVideo /> Virtual
                </DeliveryOption>
              </DeliveryOptions>
            </FormatCard>
            
            <FormatCard>
              <IconWrapper>
                <FaCalendarAlt />
              </IconWrapper>
              <FormatTitle>Full-Day Workshop</FormatTitle>
              <FormatDescription>
                A comprehensive 8-hour program that provides deeper exploration of AI applications, hands-on exercises, and collaborative roadmap development.
              </FormatDescription>
              <DeliveryOptions>
                <DeliveryOption>
                  <FaUsers /> In-Person
                </DeliveryOption>
                <DeliveryOption>
                  <FaVideo /> Virtual
                </DeliveryOption>
              </DeliveryOptions>
            </FormatCard>
          </FormatGrid>
        </FormatSection>
        
        <TestimonialSection>
          <TestimonialHeading>What Our Workshop Participants Say</TestimonialHeading>
          <TestimonialText>
            "Very few times do I have that whole team together exploring something that is new to almost all of us. I heard nothing but GREAT feedback on your presentation, your composure, your kindness and excitement."
          </TestimonialText>
          <TestimonialAuthor>— CEO, Financial Technology Company</TestimonialAuthor>
          
          <CTAButton href="mailto:info@mainstreetai.com?subject=Workshop%20Inquiry">
            Schedule a Workshop
          </CTAButton>
        </TestimonialSection>
      </Container>
    </WorkshopsSection>
  );
};

export default Workshops; 