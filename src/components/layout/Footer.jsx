// ============================================
// FILE: src/components/layout/Footer.jsx
// ============================================
import React from 'react';
import FooterColumn from './FooterColumn';

const Footer = ({ navigation }) => (
  <footer className="bg-teal-900 text-white py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <FooterColumn title="Living Years">
          <p className="text-teal-200">
            Creating communities that foster independence for adults with developmental disabilities.
          </p>
        </FooterColumn>
        
        <FooterColumn title="Quick Links">
          <ul className="space-y-2">
            {navigation.map((item) => (
              <li key={item.name}>
                <a href={item.href} className="text-teal-200 hover:text-white">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </FooterColumn>
        
        <FooterColumn title="Contact">
          <p className="text-teal-200">
            Email: info@livingyears.org<br />
            Phone: (555) 123-4567
          </p>
        </FooterColumn>
      </div>
      
      <div className="border-t border-teal-800 pt-8 text-center text-teal-200">
        <p>&copy; 2025 Living Years. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;