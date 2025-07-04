import React from 'react'

export interface TestimonialType {
  id: number;
  name: string;
  position: string;
  company: string;
  quote: string;
  image?: string;
}

export interface FAQItemType {
  id: number;
  question: string;
  answer: string;
}

export interface FeatureType {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

/** Content structure for the landing page */
export interface LandingContent {
  firstFold: FirstFold;
  costSavings: CostSavings;
  serviceTiles: ServiceTile[];
  timeline: TimelineStep[];
  proofMetrics: ProofMetric[];
}

export interface FirstFold {
  headline: string;
  subHeadlineTemplate: string;
  rotatorTerms: string[];
  supportLine: string;
  primaryCTA: { text: string; url?: string; widgetUrl: string };
  secondaryCTAs: { text: string; href: string; type: 'playbook' | 'video' }[];
  founder: { name: string; text: string; avatar: string };
}

export interface CostSavings {
  annualSavings: string;
  formula: string;
  extraBenefits: string;
}

export interface ServiceTile {
  title: string;
  audience: string;
  coreDesire: string;
  emotionalHook: string;
  logicalBenefit: string;
  aspirationalAngle: string;
  examples: string[];
}

export interface TimelineStep {
  step: string;
  when: string;
  emotionalFraming: string;
  copyVariant: string;
}

export interface ProofMetric {
  metric: string;
  copy: string;
}