// ============================================
// FILE: src/components/cards/CommunityCard.jsx
// ============================================
import React from 'react';

const CommunityCard = ({ number }) => (
  <div className="bg-living-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
    <div className="h-48 bg-gradient-to-br from-living-blue to-[#1a4d62]"></div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-living-blue mb-2">Community {number}</h3>
      <p className="text-gray-600 mb-4">
        Safe, affordable, and community-centered apartment living where residents can live independently, but not alone.
      </p>
      <button className="text-living-blue font-semibold hover:text-opacity-80">
        Learn More →
      </button>
    </div>
  </div>
);

export default CommunityCard;