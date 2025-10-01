// ============================================
// FILE: src/components/sections/SupportSection.jsx
// ============================================
import React from 'react';
import Section from '../layout/Section';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';

const SupportSection = () => (
  <Section id="support" className="bg-amber-50">
    <div className="max-w-4xl mx-auto text-center">
      <SectionTitle>Support Us</SectionTitle>
      <p className="text-lg text-gray-700 mb-8 leading-relaxed">
        If you have a desire to share your talents with adults with developmental disabilities, 
        then Living Years would like to meet you. We have volunteer opportunities that fit with most schedules.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button variant="secondary">Volunteer</Button>
        <Button variant="outline">Donate</Button>
      </div>
    </div>
  </Section>
);

export default SupportSection;