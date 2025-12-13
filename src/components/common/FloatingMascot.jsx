// ============================================
// FILE: src/components/common/FloatingMascot.jsx
// ============================================
import React from 'react';

const FloatingMascot = () => {
  return (
    <div className="fixed left-4 bottom-4 z-40 hidden lg:block">
      <div className="relative">
        <img 
          src="/images/stick.png"
          alt="French Bulldog Mascot"
          className="w-32 h-32 object-contain drop-shadow-lg"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
      </div>
    </div>
  );
};

export default FloatingMascot;