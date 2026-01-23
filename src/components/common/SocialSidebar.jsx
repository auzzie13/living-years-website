// ============================================
// FILE: src/components/common/SocialSidebar.jsx
// ============================================
import React from 'react';
import { Instagram } from 'lucide-react';

const SocialSidebar = () => {
  const socialLinks = [
    {
      name: 'TikTok',
      url: 'https://tiktok.com/@living.years.comm', // Replace with your actual TikTok URL
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      ),
      bgColor: 'bg-black hover:bg-gray-800'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/livingyearscommunity', // Replace with your actual Instagram URL
      icon: <Instagram size={24} />,
      bgColor: 'bg-gradient-to-br from-[#f09433] via-[#e6683c] to-[#bc1888] hover:opacity-90'
    },
    {
      name: 'X (Twitter)',
      url: 'https://x.com/livingyearscomm', // Replace with your actual X/Twitter URL
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      bgColor: 'bg-black hover:bg-gray-800'
    }
  ];

  return (
    <>
      {/* Desktop - Left Sidebar */}
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

      {/* Mobile - Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-living-white border-t-2 border-living-gold shadow-lg">
        <div className="flex justify-around items-center py-3 px-4">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${social.bgColor} text-living-white p-3 rounded-lg shadow-md transition-transform hover:scale-110`}
              aria-label={social.name}
              title={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default SocialSidebar;