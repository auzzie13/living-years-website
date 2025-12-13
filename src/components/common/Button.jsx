// ============================================
// FILE: src/components/common/Button.jsx
// ============================================
import React from 'react';

const Button = ({ children, href, variant = 'primary', onClick }) => {
  const baseStyles = "inline-block px-8 py-3 rounded-lg font-semibold transition-colors";
  const variants = {
    primary: "bg-living-white text-living-blue hover:bg-opacity-90",
    secondary: "bg-living-blue text-living-white hover:bg-opacity-90",
    outline: "bg-living-white text-living-blue border-2 border-living-blue hover:bg-living-cream"
  };

  const className = `${baseStyles} ${variants[variant]}`;

  if (href) {
    return <a href={href} className={className}>{children}</a>;
  }

  return <button onClick={onClick} className={className}>{children}</button>;
};

export default Button;