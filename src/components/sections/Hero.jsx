// ============================================
// FILE: src/components/sections/Hero.jsx
// ============================================
import React from 'react';
import Button from '../common/Button';

const Hero = () => (
  <section id="home" className="bg-gradient-to-br from-living-blue to-[#2a5c6a] text-white py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
        Apartment Communities That Foster Independence
      </h1>
      <p className="text-xl md:text-2xl mb-8 text-blue-100">
        For adults with developmental disabilities
      </p>
      <Button href="#communities" variant="primary">
        Our Communities
      </Button>
    </div>
  </section>
);

export default Hero;