import React from 'react';
import styled from 'styled-components';
import founderImage from '../assets/founder.jpg'; // You'll need to add your headshot to the assets folder

const FounderSection = styled.section`
  padding: 5rem 1rem;
  background-color: white;
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

const FounderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const FounderImage = styled.img`
  width: 100%;
  max-width: 300px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const ContentContainer = styled.div`
  flex: 2;
`;

const FounderName = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #333;
`;

const FounderTitle = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  color: #555;
`;

const FounderVision = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: #555;
`;

const FounderBio = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #555;
`;

const Founder: React.FC = () => {
  return (
    <FounderSection id="founder">
      <Container>
        <SectionHeading>Meet Our Founder</SectionHeading>
        <FounderContainer>
          <ImageContainer>
            <FounderImage src={founderImage} alt="Founder of Mainstreet AI" />
          </ImageContainer>
          <ContentContainer>
            <FounderName>Your Name</FounderName>
            <FounderTitle>Founder & CEO</FounderTitle>
            <FounderVision>
              "My vision for Mainstreet AI is to democratize artificial intelligence for businesses of all sizes. 
              I believe that AI shouldn't be the exclusive domain of tech giants—it should be accessible, 
              practical, and transformative for every organization. By creating true partnerships with our clients 
              and deploying expert engineers who become extensions of their teams, we're helping businesses own 
              their AI future rather than being disrupted by it."
            </FounderVision>
            <FounderBio>
              With over [X] years of experience in AI and enterprise technology, I founded Mainstreet AI to bridge 
              the gap between cutting-edge AI capabilities and practical business applications. Before Mainstreet AI, 
              I [brief career highlights]. I'm passionate about helping organizations harness the power of AI while 
              maintaining control of their most valuable asset—their intelligence.
            </FounderBio>
          </ContentContainer>
        </FounderContainer>
      </Container>
    </FounderSection>
  );
};

export default Founder; 