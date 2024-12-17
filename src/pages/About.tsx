import React from 'react';
import WhoWeAre from '../components/sections/about/WhoWeAre';
import WhatWeAre from '../components/sections/about/WhatWeAre';
import WhyWeAre from '../components/sections/about/WhyWeAre';

const About = () => {
  return (
    <div className="bg-[#000066] text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-12">About 365 Bizness</h1>
        <div className="space-y-20">
          <WhoWeAre />
          <WhatWeAre />
          <WhyWeAre />
        </div>
      </div>
    </div>
  );
};

export default About;