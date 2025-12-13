// ============================================
// FILE: src/components/cards/BoardMemberCard.jsx
// ============================================
import React, { useState } from "react";
import { X } from "lucide-react";

const BoardMemberCard = ({ name, title, image, bio }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Card Preview */}
      <div
        className="bg-living-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <div className="w-full h-80 bg-gray-200 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover object-top"
            onError={(e) => {
              e.target.src =
                'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%23e5e7eb" width="400" height="400"/%3E%3Ctext fill="%236b7280" font-family="sans-serif" font-size="24" text-anchor="middle" x="200" y="200"%3ENo Image%3C/text%3E%3C/svg%3E';
            }}
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-living-blue mb-1">{name}</h3>
          <p className="text-sm text-gray-600 font-semibold mb-2">{title}</p>
          <p className="text-living-blue text-sm font-semibold">
            Click to learn more →
          </p>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-living-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 bg-living-white rounded-full p-2 shadow-lg z-10"
            >
              <X size={24} />
            </button>

            {/* Modal Content - Vertical Layout */}
            <div className="flex flex-col">
              {/* Image */}
              <div className="w-full bg-gray-200 flex items-center justify-center">
                <img
                  src={image}
                  alt={name}
                  className="w-full h-auto object-contain max-h-96"
                />
              </div>

              {/* Info */}
              <div className="p-8">
                <h2 className="text-3xl font-bold text-living-blue mb-2">
                  {name}
                </h2>
                <p className="text-lg text-gray-600 font-semibold mb-6">
                  {title}
                </p>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  {bio.split("\n\n").map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BoardMemberCard;
