import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  padding: 4rem 1rem;
  background-color: ${({ theme }) => theme.colors.background};
  text-align: center;
`;

const Tools = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
`;

const Logo = styled.img`
  height: 50px;
`;

/**
 * FooterTools renders partner logos to reinforce the familiar, low-code stack.
 */
const FooterTools: React.FC = () => (
  <Section>
    <Tools>
      <Logo src="/logos/zapier.svg" alt="Zapier" />
      <Logo src="/logos/powerautomate.svg" alt="Power Automate" />
      <Logo src="/logos/openai.svg" alt="OpenAI" />
      <Logo src="/logos/anthropic.svg" alt="Anthropic" />
    </Tools>
  </Section>
)

export default FooterTools