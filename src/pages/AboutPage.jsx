// ============================================
// FILE: src/pages/AboutPage.jsx
// ============================================
import React from 'react';
import AboutSection from '../components/sections/AboutSection';
import MissionStatement from '../components/sections/MissionStatement';

const AboutPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-living-blue to-[#1a4d62] text-living-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            About Living Years
          </h1>
          <p className="text-xl opacity-90">
            Meet our dedicated board members committed to creating communities that foster independence.
          </p>
        </div>
      </section>

      {/* Mission Statement - Uses same component as homepage */}
      <MissionStatement />

      {/* Board Members */}
      <AboutSection />
    </div>
  );
};

export default AboutPage;
