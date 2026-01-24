// ============================================
// FILE: src/components/cards/FAQItem.jsx 
// ============================================
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQItem = ({ question, answer, hasButton, buttonText, onButtonClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-living-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
      >
        <h3 className="text-lg font-bold text-living-blue pr-4">{question}</h3>
        <ChevronDown 
          size={24} 
          className={`text-living-blue flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6 pt-2">
          <div className="text-gray-700 leading-relaxed whitespace-pre-line">
            {answer}
          </div>
          {hasButton && (
            <button
              onClick={onButtonClick}
              className="mt-4 bg-living-blue text-living-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
            >
              {buttonText || 'Learn More'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQItem;