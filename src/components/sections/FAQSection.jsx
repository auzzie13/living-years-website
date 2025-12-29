// ============================================
// FILE: src/components/sections/FAQSection.jsx
// ============================================
import React from 'react';
import Section from '../layout/Section';
import SectionTitle from '../common/SectionTitle';
import FAQItem from '../cards/FAQItem';

const FAQSection = () => {
  const faqs = [
    {
      q: "Who can qualify to live in a Living Years community?",
      a: `Qualifying Criteria

Except for Tenant Assistants, residents of Living Years apartment communities must have a developmental disability as defined by Tennessee Code Annotated § 33-1-101, as amended, which provides in relevant part:

"Developmental disability" means a condition that:

1. Is attributable to a mental or physical impairment or combination of mental and physical impairments;

2. Is manifested before the age of twenty-two (22) years;

3. Is likely to continue indefinitely;

4. Results in substantial functional limitations in three (3) or more major life activities, including but not limited to:
   • Self-care;
   • Receptive and expressive language;
   • Learning;
   • Mobility;
   • Self-direction;
   • Capacity for independent living; or
   • Economic self-sufficiency; and

5. Reflects the individual's need for a combination and sequence of special, interdisciplinary, or generic services, individualized supports, or other forms of assistance that are of lifelong or extended duration and are individually planned and coordinated.

Tenn. Code Ann. § 33-1-101

Tennessee law further recognizes intellectual disability as a form of developmental disability, defined as significant limitations in intellectual functioning and adaptive behavior that originate during the developmental period, as set forth in Tenn. Code Ann. § 33-1-101.`
    },
    {
      q: "What makes Living Years different?",
      a: "We provide consumer-controlled, affordable, safe, and community-centered apartment living that fosters independence while ensuring residents are never alone. Our communities are designed specifically for adults with developmental disabilities who want to live independently but with the support and security of a caring community."
    },
    {
      q: "How can I apply?",
      a: "Contact us directly to learn about availability and the application process for our communities. You can reach us by email at info@livingyears.org or by phone at (555) 123-4567. Our staff will guide you through the application process and answer any questions you may have."
    },
    {
      q: "What amenities are available in Living Years communities?",
      a: "Our communities offer safe, accessible apartments with modern amenities designed for independent living. Each community includes common areas for social activities, on-site support when needed, and access to community programs that foster connection and belonging."
    }
  ];

  return (
    <Section id="faq" className="bg-living-cream">
      <div className="max-w-4xl mx-auto">
        <SectionTitle>Frequently Asked Questions</SectionTitle>
        <div className="space-y-4">
          {faqs.map((item, i) => (
            <FAQItem key={i} question={item.q} answer={item.a} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default FAQSection;