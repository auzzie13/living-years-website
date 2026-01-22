// ============================================
// FILE: src/components/sections/NewsSection.jsx
// ============================================
import React from 'react';
import Section from '../layout/Section';
import SectionTitle from '../common/SectionTitle';
import NewsItem from '../cards/NewsItem';

const NewsSection = () => (
  <Section id="news" className="bg-living-white">
    <SectionTitle>News & Updates</SectionTitle>
    <div className="space-y-6">
      {[1].map((i) => (
        <NewsItem key={i} number={i} />
      ))}
    </div>
  </Section>
);

export default NewsSection;