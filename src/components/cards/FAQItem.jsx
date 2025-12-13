// ============================================
// FILE: src/components/cards/FAQItem.jsx
// ============================================
import React from 'react';

const FAQItem = ({ question, answer }) => (
  <div className="bg-living-white bg-opacity-60 p-6 rounded-lg shadow-sm border border-living-gold">
    <h3 className="text-lg font-bold text-living-blue mb-2">{question}</h3>
    <p className="text-gray-700">{answer}</p>
  </div>
);

export default FAQItem;
