// ============================================
// FILE: src/pages/HomePage.jsx
// ============================================
import React from 'react';
import Hero from '../components/sections/Hero';
import StatsSection from '../components/sections/StatsSection';
import MissionStatement from '../components/sections/MissionStatement';
import Communities from '../components/sections/Communities';
import Testimonial from '../components/sections/Testimonial';
import SupportSection from '../components/sections/SupportSection';
import ContactFormSection from '../components/sections/ContactFormSection';
import NewsSection from '../components/sections/NewsSection';
import FAQSection from '../components/sections/FAQSection';

const HomePage = () => {
  return (
    <>
      <Hero />
      <StatsSection />
      <MissionStatement />
      <Communities />
      
      <Testimonial 
        quote="I love where I live because I have all my independence"
        attribution="Independent But Not Alone"
      />
      
      <SupportSection />
      <ContactFormSection />
      <NewsSection />
      <FAQSection />
    </>
  );
};

export default HomePage;