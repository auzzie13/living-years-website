// ============================================
// FILE: src/components/layout/Section.jsx
// ============================================
import React from 'react';

const Section = ({ id, className = "", children }) => (
  <section id={id} className={`py-16 ${className}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  </section>
);

export default Section;