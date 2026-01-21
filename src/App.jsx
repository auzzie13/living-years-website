// ============================================
// FILE: src/App.jsx
// ============================================
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import DonatePage from './pages/DonatePage';
import AboutPage from './pages/AboutPage';
import { Home, Users, Heart, Mail, FileText, HelpCircle } from 'lucide-react';

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Our Communities', href: '/#communities', icon: Users },
    { name: 'About Us', href: '/about', icon: FileText },
    { name: 'Support Us', href: '/#support', icon: Heart },
    { name: 'News', href: '/#news', icon: Mail },
    { name: 'FAQ', href: '/#faq', icon: HelpCircle },
  ];

  return (
    <div className="min-h-screen bg-living-cream">
      <Navigation 
        items={navigation} 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
      />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      
      <Footer navigation={navigation} />
    </div>
  );
};

export default App;