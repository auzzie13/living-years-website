// ============================================
// FILE: src/components/common/NavLink.jsx
// ============================================
import React from 'react';

const NavLink = ({ name, href }) => (
  <a
    href={href}
    className="text-living-blue hover:text-opacity-80 font-medium transition-colors"
  >
    {name}
  </a>
);

export default NavLink;