// ============================================
// FILE: src/components/layout/Navigation.jsx
// ============================================
import React from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '../common/Logo';
import NavLink from '../common/NavLink';
import MobileMenu from './MobileMenu';

const Navigation = ({ items, mobileMenuOpen, setMobileMenuOpen }) => {
  return (
    <header className="bg-living-cream shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Logo />
          
          <div className="hidden md:flex space-x-8">
            {items.map((item) => (
              <NavLink key={item.name} {...item} />
            ))}
          </div>

          <button
            className="md:hidden text-living-blue"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <MobileMenu items={items} onClose={() => setMobileMenuOpen(false)} />
        )}
      </nav>
    </header>
  );
};

export default Navigation;
