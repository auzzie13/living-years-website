// ============================================
// FILE: src/components/cards/FAQItem.jsx
// ============================================
import React from 'react';

const FAQItem = ({ question, answer }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm">
    <h3 className="text-lg font-bold text-teal-800 mb-2">{question}</h3>
    <p className="text-gray-700">{answer}</p>
  </div>
);

export default FAQItem;