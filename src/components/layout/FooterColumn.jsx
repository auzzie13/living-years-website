// ============================================
// FILE: src/components/layout/FooterColumn.jsx
// ============================================
import React from 'react';

const FooterColumn = ({ title, children }) => (
  <div>
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    {children}
  </div>
);

export default FooterColumn;