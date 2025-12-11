// ============================================
// FILE: src/components/sections/AboutSection.jsx
// ============================================
import React from 'react';
import Section from '../layout/Section';
import SectionTitle from '../common/SectionTitle';
import BoardMemberCard from '../cards/BoardMemberCard';

const AboutSection = () => {
  const boardMembers = [
    {
      name: "Mike Epley",
      title: "CEO",
      image: "/images/Mike_Epley.png",
      bio: "Add biography here for board member 1. This should be a brief description of their background, expertise, and role with Living Years."
    },
    {
      name: "Matt Rogers",
      title: "XXXX",
      image: "/images/Matt_Rogers.png",
      bio: "Add biography here for board member 3. This should be a brief description of their background, expertise, and role with Living Years."
    },
    {
      name: "Daniel Pollard",
      title: "XXXX",
      image: "/images/Daniel_Pollard.png",
      bio: "Add biography here for board member 4. This should be a brief description of their background, expertise, and role with Living Years."
    },
    {
      name: "Dave Cherry",
      title: "Treasurer",
      image: "/images/Dave_Cherry.png",
      bio: "Add biography here for board member 2. This should be a brief description of their background, expertise, and role with Living Years."
    },
  ];

  return (
    <Section id="about" className="bg-white">
      <SectionTitle>About Us</SectionTitle>
      <div className="max-w-4xl mx-auto text-center mb-12">
        <p className="text-lg text-gray-700 leading-relaxed">
          Living Years creates communities for adults with developmental disabilities that fulfill 
          their need for independence while ensuring their safety. Our dedicated board members bring 
          diverse expertise and a shared commitment to our mission.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {boardMembers.map((member, index) => (
          <BoardMemberCard key={index} {...member} />
        ))}
      </div>
    </Section>
  );
};

export default AboutSection;