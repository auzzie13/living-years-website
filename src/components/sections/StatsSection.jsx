// ============================================
// FILE: src/components/sections/StatsSection.jsx
// ============================================
import React from "react";
import { Home, Users, TrendingUp, Building2, Heart } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: <Users size={40} />,
      stat: "33.4%",
      description: "of Tennessee adults live with a disability",
      subtext:
        "Approximately 1.8 million people—higher than the national average",
    },
    {
      icon: <TrendingUp size={40} />,
      stat: "1 in 4",
      description: "adults with disabilities live in poverty",
      subtext: "SSI covers less than 20% of area median income",
    },
    {
      icon: <Home size={40} />,
      stat: "121,810",
      description: "additional affordable rental homes needed",
      subtext: "Very few existing homes meet basic accessibility standards",
    },
    {
      icon: <Building2 size={40} />,
      stat: "34,000",
      description: "Tennesseans in institutional settings",
      subtext: "Plus 8,000+ experiencing homelessness nightly",
    },
    {
      icon: <Heart size={40} />,
      stat: "Growing",
      description: "need for Home & Community-Based Services",
      subtext: "More people need services than programs can accommodate",
    },
  ];

  return (
    <section className="py-16 bg-living-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-living-blue mb-4">
            The Housing Crisis in Tennessee
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Tennessee faces a critical shortage of affordable, accessible
            housing for people with disabilities and older adults. The data
            tells a compelling story of urgent need.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          {stats.map((item, index) => (
            <div
              key={index}
              className={`
    bg-living-cream p-6 rounded-lg border-2 border-living-gold hover:shadow-lg transition-shadow
    md:col-span-1
    lg:col-span-4
    ${index === 3 ? "lg:col-start-3" : index === 4 ? "lg:col-start-7" : ""}
  `}
            >
              <div className="flex justify-center mb-4 text-living-blue">
                {item.icon}
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-living-blue mb-2">
                  {item.stat}
                </div>
                <div className="text-lg font-semibold text-gray-800 mb-2">
                  {item.description}
                </div>
                <div className="text-sm text-gray-600">{item.subtext}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Finding Callout */}
        <div className="bg-living-blue text-living-white p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4 text-center">
            Critical Finding
          </h3>
          <p className="text-lg text-center leading-relaxed">
            In <span className="font-bold">every county</span> in Tennessee,
            renting a one-bedroom apartment exceeds the full monthly SSI
            benefit, making stable housing unattainable without assistance.
          </p>
        </div>

        {/* Source Citation */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            Source:{" "}
            <a
              href="/kelsey_report.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-living-blue hover:underline font-semibold"
            >
              Tennessee Housing Program & Needs Assessment Report for People
              with Disabilities & Older Adults
            </a>{" "}
            (June 2025)
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
