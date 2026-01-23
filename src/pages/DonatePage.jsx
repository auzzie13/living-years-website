// ============================================
// FILE: src/pages/DonatePage.jsx 
// ============================================
import React from 'react';
import Section from '../components/layout/Section';
import SectionTitle from '../components/common/SectionTitle';
// import Button from '../components/common/Button';
import { Mail } from 'lucide-react';

const DonatePage = () => {
  return (
    <div className="pt-0">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-living-blue to-[#1a4d62] text-living-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Support Living Years
          </h1>
          <p className="text-xl opacity-90">
            Your donation helps create safe, independent living communities for adults with IDD.
          </p>
        </div>
      </section>

      

      {/* Donation Information */}
      <Section className="bg-living-cream">
        <div className="max-w-2xl mx-auto">
          <SectionTitle>How to Donate</SectionTitle>

          {/* Mail Donation Card */}
          <div className="bg-living-white p-8 rounded-lg shadow-md border-2 border-living-gold mb-8">
            <div className="flex justify-center mb-6">
              <div className="bg-living-blue text-living-white p-4 rounded-full">
                <Mail size={48} />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-living-blue text-center mb-4">
              Donate by Mail
            </h3>
            
            <p className="text-gray-700 text-center mb-6">
              Please make checks payable to <span className="font-semibold">Living Years</span> and mail to:
            </p>
            
            <div className="bg-living-cream p-6 rounded-lg text-center border-2 border-living-blue">
              <p className="text-xl font-bold text-living-blue mb-2">Living Years</p>
              <p className="text-lg text-gray-700">PO Box 731</p>
              <p className="text-lg text-gray-700">Spring Hill, TN 37174</p>
            </div>
            
            <p className="text-sm text-gray-600 text-center mt-6">
              Living Years is a 501(c)(3) nonprofit. Your donation is tax-deductible.
            </p>
          </div>

          {/* Additional Info */}
          <div className="text-center text-gray-700">
            <p className="mb-4">
              For questions about donations or to discuss other ways to give, please contact us at{' '}
              <a href="mailto:mike.epley@outlook.com" className="text-living-blue hover:underline font-semibold">
                mike.epley@outlook.com
              </a>
            </p>
          </div>
        </div>
      </Section>

      
    </div>
  );
};

export default DonatePage;

/* ============================================
   COMMENTED OUT - Original Payment Form Version
   ============================================

import React, { useState } from 'react';
import Section from '../components/layout/Section';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';

const DonatePage = () => {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState('');
  const [donationType, setDonationType] = useState('one-time');

  const presetAmounts = [25, 50, 100, 250, 500];

  const handleDonate = () => {
    const amount = selectedAmount || customAmount;
    if (!amount) {
      alert('Please select or enter a donation amount');
      return;
    }
    
    // TODO: This is where you'll integrate with Stripe/PayPal/Zeffy
    alert(`Proceeding to payment for ${amount} (${donationType})\n\nYou'll integrate your payment provider here!`);
  };

  return (
    <div className="pt-20">
      // ... rest of original payment form code ...
    </div>
  );
};

export default DonatePage;

============================================ */
