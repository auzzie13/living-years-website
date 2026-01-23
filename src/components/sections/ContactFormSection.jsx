// ============================================
// FILE: src/components/sections/ContactFormSection.jsx
// ============================================
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Section from '../layout/Section';
import SectionTitle from '../common/SectionTitle';

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState(''); // 'sending', 'success', 'error'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    
  const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone_number: formData.phone,
          message: formData.message || 'No message provided',
          to_email: 'mike.epley@outlook.com'
        },
        PUBLIC_KEY
      );

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus(''), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
      setTimeout(() => setStatus(''), 5000);
    }
  };

  return (
    <Section id="contact" className="bg-living-white">
      <div className="max-w-2xl mx-auto">
        <SectionTitle>Apply for Residency</SectionTitle>
        <p className="text-center text-gray-700 mb-8">
           Complete the brief form below, and a member of the Living Years team will be in touch..
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border-2 border-living-gold focus:border-living-blue focus:outline-none"
              placeholder="Your full name"
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border-2 border-living-gold focus:border-living-blue focus:outline-none"
              placeholder="your.email@example.com"
            />
          </div>

          {/* Phone Field */}
          <div>
            <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
              Phone Number *
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border-2 border-living-gold focus:border-living-blue focus:outline-none"
              placeholder="(555) 123-4567"
            />
          </div>

          {/* Message Field (Optional) */}
          <div>
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
              Message (Optional)
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-3 rounded-lg border-2 border-living-gold focus:border-living-blue focus:outline-none resize-none"
              placeholder="Tell us how we can help you..."
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={status === 'sending'}
              className={`px-8 py-3 rounded-lg font-semibold text-living-white transition-colors ${
                status === 'sending'
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-living-blue hover:bg-opacity-90'
              }`}
            >
              {status === 'sending' ? 'Sending...' : 'Submit'}
            </button>
          </div>

          {/* Status Messages */}
          {status === 'success' && (
            <div className="text-center p-4 bg-green-100 text-green-700 rounded-lg">
              Thank you! We've received your message and will be in touch soon.
            </div>
          )}

          {status === 'error' && (
            <div className="text-center p-4 bg-red-100 text-red-700 rounded-lg">
              Oops! Something went wrong. Please try again or email us directly at mike.epley@outlook.com
            </div>
          )}
        </form>
      </div>
    </Section>
  );
};

export default ContactFormSection;