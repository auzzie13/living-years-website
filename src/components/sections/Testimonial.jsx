// ============================================
// FILE: src/components/sections/Testimonial.jsx
// ============================================
import React from 'react';

const Testimonial = ({ quote, attribution }) => (
  <section className="py-16 bg-living-blue text-living-white">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <blockquote className="text-2xl md:text-3xl font-medium italic mb-4">
        "{quote}"
      </blockquote>
      <p className="text-blue-100 text-lg">{attribution}</p>
    </div>
  </section>
);

export default Testimonial;
