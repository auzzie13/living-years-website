// ============================================
// FILE: src/components/sections/MissionStatement.jsx
// ============================================
import React from 'react';
import Section from '../layout/Section';
import SectionTitle from '../common/SectionTitle';

const MissionStatement = () => (
  <Section className="bg-living-white">
    <div className="max-w-4xl mx-auto text-center">
      <SectionTitle>Our Mission</SectionTitle>
      <p className="text-lg text-gray-700 leading-relaxed">
        Living Years is working to fill the gap in consumer-controlled, affordable, safe, and 
        community-centered apartment living for adults with developmental disabilities. We provide 
        the individuals we serve with an atmosphere of hope, apartment security, a sense of belonging, and community-centered apartment living for adults with IDD.<br></br>
        *Combines Intellectual and Developmental disabilities
      </p>
    </div>
  </Section>
);

export default MissionStatement;