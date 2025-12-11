// ============================================
// FILE: src/components/common/Logo.jsx
// ============================================
import React from 'react';

const Logo = () => (
  <div className="flex items-center">
    <img 
      src="/logo.png" 
      alt="Living Years Logo" 
      className="h-16 w-auto"
      onError={(e) => {
        e.target.style.display = 'none';
        e.target.nextSibling.style.display = 'block';
      }}
    />
    <div style={{display: 'none'}} className="flex items-center gap-2">
      <div className="text-3xl font-bold text-living-blue">LIVING YEARS</div>
    </div>
  </div>
);

export default Logo;