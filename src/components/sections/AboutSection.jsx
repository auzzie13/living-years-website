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
      bio: "Mike Epley is CEO/founder for Living Years. The passion for this nonprofit started with his faith in Jesus Christ and believes it's a calling from the Lord. He had the vision for 15 years and wanted to put it to fruition. With not ever being married, he believes in community and feels his success has been granted by God and extended through his friendships. He wanted to create that opportunity for adults with intellectual and/or developmental disabilities to have a chance to experience apartment-style living on their own while building friendships within a community.\n\n Currently, he is the play-by-play broadcaster for Indy Nation Sports Network, spotter for the Tennessee Titans, and has been in recruitment on a state and national level for the last 12 plus years.\n\n He has a French bulldog named Stick. No kids and driven to make the world a better place."
    },
    {
      name: "Matt Rogers",
      title: "XXXX",
      image: "/images/Matt_Rogers-2.png",
      bio: "Matt Rogers is the public address announcer for the Tennessee Titans, a role he’s held since 2021 after being selected by fans and the organization from nearly 200 candidates. A former offensive lineman for the University of Washington, he helped lead the Huskies to an 11–1 season, a Rose Bowl championship, and a No. 3 national ranking before launching a successful career in entertainment. Matt first gained national attention as a finalist on American Idol and has since hosted major shows for Discovery Channel, Lifetime, and other networks, including Gold Rush and Deadliest Catch: The Bait.\n\n Beyond broadcasting, Matt is recognized as one of the top philanthropic fundraisers in America, driven by a deeply personal mission after having three children born with cystic fibrosis. His passion has helped raise millions of dollars for research, treatment, and nonprofit organizations nationwide. Known for his unmistakable voice, high-energy presence, and genuine heart, Matt brings the same commitment to every stage—whether it’s an NFL stadium, a national TV audience, or a charity gala changing lives.\n\nMatt has been married to his beautiful wife Teri for 22 years, and together they have four wonderful children: Brayden (19), Mason (17), Samantha (11), and Brooklyn (3). His family remains the center of his world and the driving force behind his purpose, passion, and philanthropic work."
    },
    {
      name: "Daniel Pollard",
      title: "XXXX",
      image: "/images/Daniel_Pollard-2.png",
      bio: "Daniel Pollard. Born and raised in Columbia, Tn. I currently reside in Spring Hill with my wife Jeanne Pollard who is a middle school teacher in Williamson county. We have five children; Daniel – 27, Katie – 25, Hannah – 24, Alex – 21 and Charlotte – 16. Katie is our special needs daughter that was born with a rare genetic disorder, diploid triploid mosaicism. I am one of the 4 co-owners of Jones and Lang Sporting Goods in Columbia, Tn. My favorite hobby during spare time would be golfing. "
    },
    {
      name: "Dave Cherry",
      title: "Treasurer",
      image: "/images/Dave_Cherry-2.png",
      bio: "Dave Cherry serves as Treasurer on the Living Years board. With more than 20 years of experience in consumer and commercial banking, he currently leads commercial product, sales, and support for FirstBank as Director of Treasury Management Services. He is an active member of the Association of Financial Professionals and serves on the Digital Advisory Board for Jack Henry.\n\n Dave has a long history of community involvement, volunteering with organizations such as United Way (Allocations Committee), Junior Achievement, Youth Villages, Pencil Foundation, and the Community Child Care Center, where he served as a board director.\n\n He and his wife, Natalie, met at Middle Tennessee State University and now live in Thompson’s Station with their two teenage sons. In their free time, they enjoy sports, exploring new places, and spending time with friends."
    },
  ];

  return (
    <Section id="about" className="bg-living-white">
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