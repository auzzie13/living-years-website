// ============================================
// FILE: src/pages/DonatePage.jsx (NEW)
// ============================================
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
    alert(`Proceeding to payment for $${amount} (${donationType})\n\nYou'll integrate your payment provider here!`);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-living-blue to-[#1a4d62] text-living-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Support Living Years
          </h1>
          <p className="text-xl opacity-90">
            Your donation helps create safe, independent living communities for adults with developmental disabilities.
          </p>
        </div>
      </section>

      {/* Impact Section */}
      <Section className="bg-living-white">
        <SectionTitle>Your Impact</SectionTitle>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center p-6">
            <div className="text-4xl font-bold text-living-blue mb-2">$25</div>
            <p className="text-gray-700">Provides essential supplies for one resident for a week</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl font-bold text-living-blue mb-2">$100</div>
            <p className="text-gray-700">Funds community activities and social programs for a month</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl font-bold text-living-blue mb-2">$500</div>
            <p className="text-gray-700">Helps maintain safe and accessible living spaces</p>
          </div>
        </div>
      </Section>

      {/* Donation Form */}
      <Section className="bg-living-cream">
        <div className="max-w-2xl mx-auto">
          <SectionTitle>Make Your Donation</SectionTitle>

          {/* One-time vs Monthly */}
          <div className="flex gap-4 justify-center mb-8">
            <button
              onClick={() => setDonationType('one-time')}
              className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                donationType === 'one-time'
                  ? 'bg-living-blue text-living-white'
                  : 'bg-living-white text-living-blue border-2 border-living-blue'
              }`}
            >
              One-Time
            </button>
            <button
              onClick={() => setDonationType('monthly')}
              className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                donationType === 'monthly'
                  ? 'bg-living-blue text-living-white'
                  : 'bg-living-white text-living-blue border-2 border-living-blue'
              }`}
            >
              Monthly
            </button>
          </div>

          {/* Preset Amounts */}
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4 mb-6">
            {presetAmounts.map((amount) => (
              <button
                key={amount}
                onClick={() => {
                  setSelectedAmount(amount);
                  setCustomAmount('');
                }}
                className={`p-4 rounded-lg font-semibold transition-all ${
                  selectedAmount === amount
                    ? 'bg-living-blue text-living-white scale-105'
                    : 'bg-living-white text-living-blue border-2 border-gray-300 hover:border-living-blue'
                }`}
              >
                ${amount}
              </button>
            ))}
          </div>

          {/* Custom Amount */}
          <div className="mb-8">
            <label className="block text-gray-700 font-semibold mb-2">
              Or enter custom amount:
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600 text-xl">
                $
              </span>
              <input
                type="number"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  setSelectedAmount(null);
                }}
                placeholder="Enter amount"
                className="w-full pl-8 pr-4 py-3 rounded-lg border-2 border-gray-300 focus:border-living-blue focus:outline-none text-lg"
                min="1"
              />
            </div>
          </div>

          {/* Donate Button */}
          <div className="text-center">
            <button
              onClick={handleDonate}
              className="bg-living-blue text-living-white px-12 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-colors"
            >
              Donate {selectedAmount || customAmount ? `$${selectedAmount || customAmount}` : ''} 
              {donationType === 'monthly' ? ' Monthly' : ''}
            </button>
            <p className="text-sm text-gray-600 mt-4">
              Living Years is a 501(c)(3) nonprofit. Your donation is tax-deductible.
            </p>
          </div>
        </div>
      </Section>

      {/* Other Ways to Help */}
      <Section className="bg-living-white">
        <SectionTitle>Other Ways to Support</SectionTitle>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="p-6 border-2 border-living-blue rounded-lg">
            <h3 className="text-2xl font-bold text-living-blue mb-3">Volunteer</h3>
            <p className="text-gray-700 mb-4">
              Share your time and talents with our residents. We have flexible volunteer opportunities.
            </p>
            <Button variant="outline" href="/#support">Learn More</Button>
          </div>
          <div className="p-6 border-2 border-living-blue rounded-lg">
            <h3 className="text-2xl font-bold text-living-blue mb-3">Corporate Partnerships</h3>
            <p className="text-gray-700 mb-4">
              Partner with us to make a lasting impact in your community.
            </p>
            <Button variant="outline" href="mailto:info@livingyears.org">Contact Us</Button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default DonatePage;