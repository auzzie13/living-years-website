// ============================================
// FILE: src/components/sections/Communities.jsx (UPDATED)
// ============================================
import React from 'react';
import Section from '../layout/Section';
import SectionTitle from '../common/SectionTitle';
import { Home, Users, Heart } from 'lucide-react';
// import CommunityCard from '../cards/CommunityCard';

const Communities = () => (
  <Section id="communities" className="bg-living-cream">
    <SectionTitle>Our Communities</SectionTitle>
    
    {/* Icon Version - Temporary */}
    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      <div className="bg-living-white rounded-lg shadow-md p-8 text-center hover:shadow-xl transition-shadow border-2 border-living-gold">
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 bg-living-blue rounded-full flex items-center justify-center">
            <Home size={48} className="text-living-white" />
          </div>
        </div>
        <h3 className="text-2xl font-bold text-living-blue mb-4">Safe Housing</h3>
        <p className="text-gray-700">
          Affordable, accessible apartments designed for independent living with security and comfort in mind.
        </p>
      </div>

      <div className="bg-living-white rounded-lg shadow-md p-8 text-center hover:shadow-xl transition-shadow border-2 border-living-gold">
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 bg-living-blue rounded-full flex items-center justify-center">
            <Users size={48} className="text-living-white" />
          </div>
        </div>
        <h3 className="text-2xl font-bold text-living-blue mb-4">Community</h3>
        <p className="text-gray-700">
          A supportive environment where residents can build friendships and never feel alone.
        </p>
      </div>

      <div className="bg-living-white rounded-lg shadow-md p-8 text-center hover:shadow-xl transition-shadow border-2 border-living-gold">
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 bg-living-blue rounded-full flex items-center justify-center">
            <Heart size={48} className="text-living-white" />
          </div>
        </div>
        <h3 className="text-2xl font-bold text-living-blue mb-4">Independence</h3>
        <p className="text-gray-700">
          Fostering self-determination and personal growth while providing the support needed to thrive.
        </p>
      </div>
    </div>

    {/* Original Card Version - Commented out for when you have actual communities */}
    {/* 
    <div className="grid md:grid-cols-3 gap-8">
      {[1, 2, 3].map((i) => (
        <CommunityCard key={i} number={i} />
      ))}
    </div>
    */}
  </Section>
);

export default Communities;