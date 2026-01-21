// ============================================
// FILE: src/components/common/NavLink.jsx 
// ============================================
import React from 'react';
import { Link } from 'react-router-dom';

const NavLink = ({ name, href }) => {
  // Check if it's an external link or hash link
  const isHashLink = href.startsWith('/#');
  const isExternalOrHome = href === '/' || !href.startsWith('/');

  if (isHashLink) {
    return (
      <a
        href={href}
        className="text-living-blue hover:text-opacity-80 font-medium transition-colors"
      >
        {name}
      </a>
    );
  }

  if (href.startsWith('/') && !isHashLink) {
    return (
      <Link
        to={href}
        className="text-living-blue hover:text-opacity-80 font-medium transition-colors"
      >
        {name}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className="text-living-blue hover:text-opacity-80 font-medium transition-colors"
    >
      {name}
    </a>
  );
};

export default NavLink;