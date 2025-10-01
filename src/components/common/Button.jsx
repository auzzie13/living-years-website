// ============================================
// FILE: src/components/common/Button.jsx
// ============================================
import React from 'react';

const Button = ({ children, href, variant = 'primary', onClick }) => {
  const baseStyles = "inline-block px-8 py-3 rounded-lg font-semibold transition-colors";
  const variants = {
    primary: "bg-white text-teal-700 hover:bg-teal-50",
    secondary: "bg-teal-700 text-white hover:bg-teal-800",
    outline: "bg-white text-teal-700 border-2 border-teal-700 hover:bg-teal-50"
  };

  const className = `${baseStyles} ${variants[variant]}`;

  if (href) {
    return <a href={href} className={className}>{children}</a>;
  }

  return <button onClick={onClick} className={className}>{children}</button>;
};

export default Button;