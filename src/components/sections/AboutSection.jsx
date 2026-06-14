// ============================================
// FILE: src/components/sections/AboutSection.jsx
// ============================================
import React from 'react';
import Section from '../layout/Section';
import SectionTitle from '../common/SectionTitle';
import BoardMemberCard from '../cards/BoardMemberCard';

const AboutSection = () => {
  const director = {
    name: "Mike Epley",
    title: "Founder/CEO",
    image: "/images/Mike_Epley.png",
    bio: "Mike Epley is passionate for this nonprofit started with his faith in Jesus Christ and believes it's a calling from the Lord. He had the vision for 15 years and wanted to put it to fruition. With not ever being married, he believes in community and feels his success has been granted by God and extended through his friendships. He wanted to create that opportunity for adults with intellectual and/or developmental disabilities to have a chance to experience apartment-style living on their own while building friendships within a community.\n\n Currently, he is the play-by-play broadcaster for Indy Nation Sports Network, spotter for the Tennessee Titans, and has been in recruitment on a state and national level for the last 12 plus years.\n\n He has a French bulldog named Stick. No kids and driven to make the world a better place."
  };

  const boardMembers = [
    {
      name: "Matt Rogers",
      title: "Chief Philanthropy Officer",
      image: "/images/Matt_Rogers-2.png",
      bio: "Matt Rogers is the public address announcer for the Tennessee Titans, a role he's held since 2021 after being selected by fans and the organization from nearly 200 candidates. A former offensive lineman for the University of Washington, he helped lead the Huskies to an 11–1 season, a Rose Bowl championship, and a No. 3 national ranking before launching a successful career in entertainment. Matt first gained national attention as a finalist on American Idol and has since hosted major shows for Discovery Channel, Lifetime, and other networks, including Gold Rush and Deadliest Catch: The Bait.\n\n Beyond broadcasting, Matt is recognized as one of the top philanthropic fundraisers in America, driven by a deeply personal mission after having three children born with cystic fibrosis. His passion has helped raise millions of dollars for research, treatment, and nonprofit organizations nationwide. Known for his unmistakable voice, high-energy presence, and genuine heart, Matt brings the same commitment to every stage—whether it's an NFL stadium, a national TV audience, or a charity gala changing lives.\n\nMatt has been married to his beautiful wife Teri, and together they have four wonderful children: Brayden, Mason, Samantha, and Brooklyn. His family remains the center of his world and the driving force behind his purpose, passion, and philanthropic work."
    },
    {
      name: "Daniel Pollard",
      title: "Secretary",
      image: "/images/Daniel_Pollard-2.png",
      bio: "Daniel Pollard was born and raised in Columbia, TN. He currently resides in Spring Hill with his wife Jeanne Pollard who is a middle school teacher in Williamson county. They have five children; Daniel, Katie, Hannah, Alex and Charlotte. Katie is their special needs daughter that was born with a rare genetic disorder, diploid triploid mosaicism. He is one of the 4 co-owners of Jones and Lang Sporting Goods in Columbia, Tn. His favorite hobby during spare time is golfing."
    },
    {
      name: "Dave Cherry",
      title: "Vice-President/Treasurer",
      image: "/images/Dave_Cherry-2.png",
      bio: "Dave Cherry has more than 20 years of experience in consumer and commercial banking, he currently leads commercial product, sales, and support for FirstBank as Director of Treasury Management Services. He is an active member of the Association of Financial Professionals and serves on the Digital Advisory Board for Jack Henry.\n\n Dave has a long history of community involvement, volunteering with organizations such as United Way (Allocations Committee), Junior Achievement, Youth Villages, Pencil Foundation, and the Community Child Care Center, where he served as a board director.\n\n He and his wife, Natalie, met at Middle Tennessee State University and now live in Thompson's Station with their two teenage sons. In their free time, they enjoy sports, exploring new places, and spending time with friends."
    },
    {
      name: "Peggy Richardson",
      title: "Board Member",
      image: "/images/peggy.png",
      bio: "Peggy Richardson is a retired educator from Brentwood, Tennessee with thirty-three years of experience in special education across elementary, middle, and high school levels, including transition classes and work-based learning programs. A graduate of Middle Tennessee State University, where she earned her Master's degree in Special Education, Peggy dedicated her career to making a difference in the lives of students with special needs. She's now enjoying retirement in College Grove, where she lives in the country with her husband and daughter. In her free time, she loves reading, spending time outdoors, tending to her flowers, swimming, and staying active at the gym. Peggy is also passionate about giving back to her community, having been actively involved with Special Olympics and Best Buddies."
    },
    {
      name: "Tyler Smith",
      title: "Board Member",
      image: "/images/tyler.png",
      bio: "Tyler Smith is a Middle Tennessee native and Managing Partner of CountryLand Roofing, bringing over 20 years of experience in roofing and construction. He is passionate about serving his community through honest work, strong relationships, and helping families protect what matters most. \n\n Tyler and his fiancée, Courtney, are raising their two sons, Barrett (5) and Bennett (4). Their family has personally experienced the unique challenges and rewards that can come with raising a child with additional needs(autism), giving Tyler a deeper appreciation for organizations that support and strengthen families through every season of life. This perspective makes Living Years community's mission especially meaningful to him.\n\n Outside of work, Tyler enjoys spending time with his family, hunting, and being involved in his local church. He is excited to be part of the board and looks forward to helping The Living Years Community continue to grow and make a lasting impact on the families it serves."
    },
    {
      name: "Scott Felts",
      title: "Board Member",
      image: "/images/scott.png",
      bio: "Scott is a CPA and Principal with Blankenship CPA Group. He currently provides leadership to the firms Non-Profit Center of Excellence, bringing together the knowledge and experience of team members across the firm to specifically resource and serve the non-profit community at the highest level.\n\n Scott is a native of TN and graduate of UT Knoxville. He spent 8 years on staff with the ministry of Athletes in Action in Ohio and Germany, before setting off on a new path in public accounting with a focus on tax and consulting. Scott and his wife, Adrienne, reside in Nolensville with their four children."
    }
  ];

  const mascot = {
    name: "Stick",
    title: "Official Mascot",
    image: "/images/stick.png",
    bio: "High-energy, loyal and uber friendly. Loves people, bones, treats, balls, and walks."
  };

  return (
    <Section id="about" className="bg-living-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Leadership Team</SectionTitle>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-lg text-gray-700 leading-relaxed">
            Our board brings together diverse expertise, lived experience, and unwavering commitment to our mission of creating inclusive communities.
          </p>
        </div>
        
        {/* Director - Centered */}
        <div className="flex justify-center mb-20">
          <div className="w-full md:w-1/2 lg:w-1/3">
            <BoardMemberCard {...director} />
          </div>
        </div>

        {/* Board Members Grid - 2 rows of 3 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 max-w-6xl mx-auto">
          {boardMembers.map((member, index) => (
            <BoardMemberCard key={index} {...member} />
          ))}
        </div>

        {/* Mascot Section */}
        <div className="border-t-2 border-living-blue pt-16">
          <h3 className="text-3xl font-bold text-living-blue text-center mb-12">Meet Our Mascot</h3>
          <div className="flex justify-center">
            <div className="w-full max-w-sm">
              <BoardMemberCard {...mascot} />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;