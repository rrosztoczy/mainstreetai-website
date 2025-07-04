import { LandingContent } from '../types'
import founderAvatar from '../assets/founder.jpg'

const landingContent: LandingContent = {
  firstFold: {
    headline: 'AI Native Operations for Startups & Scale-ups',
    subHeadlineTemplate: 'Experts in AI _Ops',
    rotatorTerms: ['Rev', 'Product', 'Customer'],
    supportLine:
      'Stay on top of every customer pain point, feature request, and win. Keep everyone - sales, product, engineering and customer success - focused and in the know. Minimize feedback loops. Optimize direction. Accelerate Product Market Fit.',
    primaryCTA: {
      text: 'Book a 30‑minute call with Ryan →',
      widgetUrl: 'https://calendly.com/ryan-mainstreetai/30min?hide_gdpr_banner=1&primary_color=5cb85c',
    },
    secondaryCTAs: [
      { text: 'Download the 1‑page playbook →', href: '/assets/playbook.pdf', type: 'playbook' },
      { text: 'Watch our 2‑minute overview →', href: 'https://www.youtube.com/embed/VIDEO_ID', type: 'video' },
    ],
    founder: {
      name: 'Ryan Rosztoczy',
      text:
        'Built by Ryan Rosztoczy - technical founder who’s shipped products from idea to exit and delivered AI solutions for YC startups and established companies.',
      avatar: founderAvatar,
    },
  },
  costSavings: {
    annualSavings: '$40 000/year',
    formula: '$100/hr × 2 hrs/week × 4 people × 50 weeks = $40 000/year',
    extraBenefits:
      'And that’s before you factor in the sharper focus, faster PMF discovery, and capital-efficient scaling you unlock. It’s what happens when your team spends time building instead of debating.',
  },
  serviceTiles: [
    {
      title: 'AI RevOps',
      audience: 'VP Sales',
      coreDesire: 'Close more deals, faster',
      emotionalHook: 'Relief (“No more grunt work”)',
      logicalBenefit: 'Automates research & follow-ups',
      aspirationalAngle: 'Be the quota-crushing hero',
      examples: [
        'AI RevOps: Your 24/7 SDR',
        'AI RevOps: Automate lead research & follow-ups',
        'AI RevOps: Every prospect prepped before the call',
      ],
    },
    {
      title: 'AI CS Ops',
      audience: 'Head of CS',
      coreDesire: 'Delight customers',
      emotionalHook: 'Confidence (“I’m always on top”)',
      logicalBenefit: 'Summarizes tickets → product insight',
      aspirationalAngle: 'Become a zero-churn powerhouse',
      examples: [
        'AI CS Ops: Turn support tickets into product insights',
        'AI CS Ops: Know every customer pain point',
        'AI CS Ops: Weekly VoC reports on autopilot',
      ],
    },
    {
      title: 'AI Product Ops',
      audience: 'CPO / PM',
      coreDesire: 'Build the right features',
      emotionalHook: 'Empowerment (“Data-driven roadmap”)',
      logicalBenefit: 'Feeds user feedback → feature ideas',
      aspirationalAngle: 'Ship the product users *can’t live without*',
      examples: [
        'AI Product Ops: Ship user-driven features in half the sprint',
        'AI Product Ops: Roadmap guided by real feedback',
        'AI Product Ops: Auto-rank feature requests & prototypes',
      ],
    },
  ],
  timeline: [
    {
      step: '1. Blueprint Call',
      when: 'Day 0',
      emotionalFraming: 'Hope and direction (“Let’s plot your AI wins.”)',
      copyVariant: '30‑minute blueprint: map your first sprint',
    },
    {
      step: '2. 2‑Week Sprint',
      when: 'Week 1–2',
      emotionalFraming: 'Excitement and momentum (“See AI driving deals.”)',
      copyVariant: 'Live AI workflow in 10 business days',
    },
    {
      step: '3. Hand‑Off and Scale',
      when: 'Week 3–4',
      emotionalFraming: 'Relief and confidence (“You own it, you run it.”)',
      copyVariant: 'Full hand-off with docs and team training',
    },
  ],
  proofMetrics: [
    { metric: '–42% Internal Meetings', copy: 'Slash meeting time by 40%' },
    { metric: '3× Faster Roadmap Turns', copy: 'Accelerate feature cycles 3×' },
    { metric: '+28% Deal Win-Rate', copy: 'Boost your win-rate by 28%' },
  ],
}

export default landingContent