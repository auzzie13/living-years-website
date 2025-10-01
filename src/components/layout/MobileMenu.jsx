// ============================================
// FILE: src/components/layout/MobileMenu.jsx
// ============================================
import React from 'react';

const MobileMenu = ({ items, onClose }) => (
  <div className="md:hidden pb-4">
    {items.map((item) => (
      <a
        key={item.name}
        href={item.href}
        className="block py-2 text-teal-700 hover:text-teal-900 font-medium"
        onClick={onClose}
      >
        {item.name}
      </a>
    ))}
  </div>
);

export default MobileMenu;