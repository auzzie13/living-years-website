import React from 'react';

const BoardMemberCard = ({ name, title, image, bio }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
    <div className="w-full h-80 bg-gray-200 overflow-hidden">
      <img 
        src={image} 
        alt={name}
        className="w-full h-full object-cover object-top"
        onError={(e) => {
          e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%23e5e7eb" width="400" height="400"/%3E%3Ctext fill="%236b7280" font-family="sans-serif" font-size="24" text-anchor="middle" x="200" y="200"%3ENo Image%3C/text%3E%3C/svg%3E';
        }}
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-living-blue mb-1">{name}</h3>
      <p className="text-sm text-gray-600 font-semibold mb-3">{title}</p>
      <p className="text-gray-700 text-sm leading-relaxed">{bio}</p>
    </div>
  </div>
);

export default BoardMemberCard;