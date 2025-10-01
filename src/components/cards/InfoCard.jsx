// ============================================
// FILE: src/components/cards/InfoCard.jsx
// ============================================
import React from 'react';

const InfoCard = ({ title, content }) => (
  <div>
    <h3 className="text-2xl font-bold text-teal-700 mb-4">{title}</h3>
    {typeof content === 'string' ? (
      <p className="text-gray-700 leading-relaxed">{content}</p>
    ) : (
      content
    )}
  </div>
);

export default InfoCard;