// ============================================
// FILE: src/components/common/SocialSidebar.jsx
// ============================================
import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

const SocialSidebar = () => {
  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://facebook.com/livingyears', // Replace with your actual Facebook URL
      icon: <Facebook size={24} />,
      bgColor: 'bg-[#1877F2] hover:bg-[#0d65d9]'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/livingyears', // Replace with your actual Instagram URL
      icon: <Instagram size={24} />,
      bgColor: 'bg-gradient-to-br from-[#f09433] via-[#e6683c] to-[#bc1888] hover:opacity-90'
    },
    {
      name: 'X (Twitter)',
      url: 'https://x.com/livingyears', // Replace with your actual X/Twitter URL
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      bgColor: 'bg-black hover:bg-gray-800'
    }
  ];

  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
      <div className="flex flex-col gap-2">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${social.bgColor} text-living-white p-3 rounded-r-lg shadow-lg transition-all hover:pl-4 group`}
            aria-label={social.name}
            title={social.name}
          >
            <div className="flex items-center gap-3">
              {social.icon}
              <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap font-semibold">
                {social.name}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialSidebar;