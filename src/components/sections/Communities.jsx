// ============================================
// FILE: src/components/sections/Communities.jsx
// ============================================
import React from 'react';
import Section from '../layout/Section';
import SectionTitle from '../common/SectionTitle';
import CommunityCard from '../cards/CommunityCard';

const Communities = () => (
  <Section id="communities" className="bg-amber-50">
    <SectionTitle>Our Communities</SectionTitle>
    <div className="grid md:grid-cols-3 gap-8">
      {[1, 2, 3].map((i) => (
        <CommunityCard key={i} number={i} />
      ))}
    </div>
  </Section>
);

export default Communities;