import React from 'react'
import styled from 'styled-components'
import landingContent from '../content/landing'

const Section = styled.section`
  padding: 4rem 1rem;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: table;
  }
`;

const THead = styled.thead`
  th {
    padding: 0.75rem;
    font-size: ${({ theme }) => theme.fontSizes.h3};
  }
`;

const TBody = styled.tbody`
  td {
    padding: 0.75rem;
    border-top: 1px solid ${({ theme }) => theme.colors.secondary};
    font-size: ${({ theme }) => theme.fontSizes.bodyLg};
  }
`;

const Cards = styled.div`
  display: block;
  gap: 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
`;

const StepTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.h3};
  margin-bottom: 0.5rem;
`;

const When = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.body};
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const Framing = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.bodyLg};
  font-style: italic;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const Copy = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.body};
`;

const Timeline: React.FC = () => {
  const { timeline } = landingContent;

  return (
    <Section id="timeline">
      <Table>
        <THead>
          <tr>
            <th>Step</th>
            <th>When</th>
            <th>Emotional Framing</th>
            <th>Copy Variant</th>
          </tr>
        </THead>
        <TBody>
          {timeline.map((item, index) => (
            <tr key={index}>
              <td>{item.step}</td>
              <td>{item.when}</td>
              <td>{item.emotionalFraming}</td>
              <td>{item.copyVariant}</td>
            </tr>
          ))}
        </TBody>
      </Table>
      <Cards>
        {timeline.map((item, index) => (
          <Card key={index}>
            <StepTitle>{item.step}</StepTitle>
            <When>{item.when}</When>
            <Framing>{item.emotionalFraming}</Framing>
            <Copy>{item.copyVariant}</Copy>
          </Card>
        ))}
      </Cards>
    </Section>
  );
};

export default Timeline;