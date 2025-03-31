import React from 'react';
import styled from 'styled-components';
import { TestimonialType } from '../types';

const TestimonialsSection = styled.section`
  padding: 5rem 1rem;
  background-color: #f5f7fa;
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

const SectionSubheading = styled.p`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 3rem;
  font-size: 1.2rem;
  color: #666;
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const TestimonialCard = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`;

const QuoteText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #555;
  margin-bottom: 1.5rem;
  flex-grow: 1;
  
  &:before {
    content: '"';
    font-size: 1.5rem;
    color: #1a2a6c;
  }
  
  &:after {
    content: '"';
    font-size: 1.5rem;
    color: #1a2a6c;
  }
`;

const TestimonialFooter = styled.div`
  display: flex;
  align-items: center;
`;

const TestimonialImage = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ddd;
  margin-right: 1rem;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const TestimonialInfo = styled.div``;

const TestimonialName = styled.h4`
  font-size: 1.1rem;
  margin-bottom: 0.25rem;
  color: #333;
`;

const TestimonialPosition = styled.p`
  font-size: 0.9rem;
  color: #666;
`;

// Placeholder testimonials - to be replaced with real ones later
const testimonials: TestimonialType[] = [
  {
    id: 1,
    name: "Coming Soon",
    position: "Future Client",
    company: "Company Name",
    quote: "We're currently working with our first clients. Testimonials will be added as our projects complete.",
  },
  {
    id: 2,
    name: "Coming Soon",
    position: "Future Client",
    company: "Company Name",
    quote: "We're currently working with our first clients. Testimonials will be added as our projects complete.",
  },
  {
    id: 3,
    name: "Coming Soon",
    position: "Future Client",
    company: "Company Name",
    quote: "We're currently working with our first clients. Testimonials will be added as our projects complete.",
  }
];

const Testimonials: React.FC = () => {
  return (
    <TestimonialsSection id="testimonials">
      <Container>
        <SectionHeading>Success Stories</SectionHeading>
        <SectionSubheading>
          See how organizations like yours are transforming their operations with secure, enterprise-grade AI solutions.
        </SectionSubheading>
        <TestimonialsGrid>
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id}>
              <QuoteText>{testimonial.quote}</QuoteText>
              <TestimonialFooter>
                <TestimonialImage>
                  {testimonial.image && <img src={testimonial.image} alt={testimonial.name} />}
                </TestimonialImage>
                <TestimonialInfo>
                  <TestimonialName>{testimonial.name}</TestimonialName>
                  <TestimonialPosition>{testimonial.position}, {testimonial.company}</TestimonialPosition>
                </TestimonialInfo>
              </TestimonialFooter>
            </TestimonialCard>
          ))}
        </TestimonialsGrid>
      </Container>
    </TestimonialsSection>
  );
};

export default Testimonials; 