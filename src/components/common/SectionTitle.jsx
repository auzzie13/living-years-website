// ============================================
// FILE: src/components/common/SectionTitle.jsx
// ============================================
import React from 'react';

const SectionTitle = ({ children, centered = true }) => (
  <h2 className={`text-3xl font-bold text-living-blue mb-12 ${centered ? 'text-center' : ''}`}>
    {children}
  </h2>
);

export default SectionTitle;
