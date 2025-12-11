// ============================================
// FILE: src/components/cards/NewsItem.jsx
// ============================================
import React from 'react';

const NewsItem = ({ number }) => (
  <div className="border-l-4 border-living-blue pl-6 py-4">
    <h3 className="text-xl font-bold text-living-blue mb-2">Latest Update {number}</h3>
    <p className="text-gray-600 mb-2">
      Keep up with Living Years news and community updates here.
    </p>
    <span className="text-sm text-gray-500">Posted on September 2025</span>
  </div>
);

export default NewsItem;