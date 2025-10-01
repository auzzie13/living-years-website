// ============================================
// FILE: src/components/common/NavLink.jsx
// ============================================
import React from 'react';

const NavLink = ({ name, href }) => (
  <a
    href={href}
    className="text-teal-700 hover:text-teal-900 font-medium transition-colors"
  >
    {name}
  </a>
);

export default NavLink;