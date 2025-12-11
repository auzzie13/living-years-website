// ============================================
// FILE: src/App.jsx
// ============================================
import React, { useState } from 'react';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import MissionStatement from './components/sections/MissionStatement';
import Communities from './components/sections/Communities';
import Testimonial from './components/sections/Testimonial';
import AboutSection from './components/sections/AboutSection';
import SupportSection from './components/sections/SupportSection';
import NewsSection from './components/sections/NewsSection';
import FAQSection from './components/sections/FAQSection';
import { Home, Users, Heart, Mail, FileText, HelpCircle } from 'lucide-react';

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'Our Communities', href: '#communities', icon: Users },
    { name: 'About Us', href: '#about', icon: FileText },
    { name: 'Support Us', href: '#support', icon: Heart },
    { name: 'News', href: '#news', icon: Mail },
    { name: 'FAQ', href: '#faq', icon: HelpCircle },
  ];

  return (
    <div className="min-h-screen bg-living-cream">
      <Navigation 
        items={navigation} 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
      />
      
      <Hero />
      <MissionStatement />
      <Communities />
      
      <Testimonial 
        quote="I love where I live because I have all my independence"
        attribution="Independent But Not Alone"
      />
      
      <AboutSection />
      <SupportSection />
      <NewsSection />
      <FAQSection />
      <Footer navigation={navigation} />
    </div>
  );
};

export default App;