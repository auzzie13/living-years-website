// ============================================
// FILE: src/pages/AboutPage.jsx
// ============================================
import React from 'react';
import AboutSection from '../components/sections/AboutSection';

const AboutPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-living-blue to-[#1a4d62] text-living-white py-20">
        <div className="text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              About Living Years
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              We are a team of passionate leaders dedicated to creating safe, inclusive communities where adults with developmental disabilities can live independently and thrive.
            </p>
        </div>
      </section>

      {/* Board Members Section */}
      <AboutSection />

      {/* Core Values */}
      <section className="py-16 bg-living-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-living-blue text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-living-white p-8 rounded-lg border-2 border-living-gold">
              <h3 className="text-2xl font-bold text-living-blue mb-3">Independence</h3>
              <p className="text-gray-700">We empower individuals to live autonomously, make their own choices, and reach their full potential.</p>
            </div>
            <div className="bg-living-white p-8 rounded-lg border-2 border-living-gold">
              <h3 className="text-2xl font-bold text-living-blue mb-3">Community</h3>
              <p className="text-gray-700">We foster meaningful connections and belonging where residents feel supported and valued members of society.</p>
            </div>
            <div className="bg-living-white p-8 rounded-lg border-2 border-living-gold">
              <h3 className="text-2xl font-bold text-living-blue mb-3">Safety</h3>
              <p className="text-gray-700">We provide secure, accessible environments designed with care and attention to the needs of our residents.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;