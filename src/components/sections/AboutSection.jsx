// ============================================
// FILE: src/components/sections/AboutSection.jsx
// ============================================
import React from 'react';
import Section from '../layout/Section';
import SectionTitle from '../common/SectionTitle';
import InfoCard from '../cards/InfoCard';

const AboutSection = () => (
  <Section id="about" className="bg-white">
    <SectionTitle>About Us</SectionTitle>
    <div className="grid md:grid-cols-2 gap-12">
      <InfoCard 
        title="Our Story"
        content={
          <>
            <p className="text-gray-700 leading-relaxed mb-4">
              Living Years creates communities for adults with developmental disabilities that fulfill 
              their need for independence while ensuring their safety.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We believe that everyone deserves a place to call home where they can thrive, grow, 
              and be part of a supportive community.
            </p>
          </>
        }
      />
      <InfoCard 
        title="Our Team"
        content="The Living Years team is a dedicated group of professionals committed to creating and 
        maintaining a sense of belonging and community for all who live in a Living Years apartment."
      />
    </div>
  </Section>
);

export default AboutSection;