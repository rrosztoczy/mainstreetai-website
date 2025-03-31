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