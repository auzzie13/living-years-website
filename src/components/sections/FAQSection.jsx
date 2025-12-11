// ============================================
// FILE: src/components/sections/FAQSection.jsx
// ============================================
import React from 'react';
import Section from '../layout/Section';
import SectionTitle from '../common/SectionTitle';
import FAQItem from '../cards/FAQItem';

const FAQSection = () => {
  const faqs = [
    {
      q: "Who can live in a Living Years community?",
      a: "Our communities are designed for adults with developmental disabilities who seek independent living in a supportive environment."
    },
    {
      q: "What makes Living Years different?",
      a: "We provide consumer-controlled, affordable, safe, and community-centered apartment living that fosters independence while ensuring residents are never alone."
    },
    {
      q: "How can I apply?",
      a: "Contact us directly to learn about availability and the application process for our communities."
    }
  ];

  return (
    <Section id="faq" className="bg-living-cream">
      <div className="max-w-4xl mx-auto">
        <SectionTitle>Frequently Asked Questions</SectionTitle>
        <div className="space-y-6">
          {faqs.map((item, i) => (
            <FAQItem key={i} question={item.q} answer={item.a} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default FAQSection;