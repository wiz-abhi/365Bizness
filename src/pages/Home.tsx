import React from 'react';
import Welcome from '../components/sections/Welcome';
import OurThinking from '../components/sections/OurThinking';
import OurMission from '../components/sections/OurMission';
import WhoWeAre from '../components/sections/about/WhoWeAre';
import Startup from '../components/sections/about/Startup';
import WhatWeAre from '../components/sections/about/WhatWeAre';
import WhyWeAre from '../components/sections/about/WhyWeAre';
import GetConnectedComponent from '../components/sections/GetConnectedComponent';


const Home = () => {
  return (
    <div className="bg-indigo-950 text-white m-0 p-0">
      {/* Section 1: Welcome, Thinking, and Mission */}
      <section>
        <Welcome />
        <OurThinking />
        <OurMission />
        <GetConnectedComponent />
      </section>

      {/* Section 2: About Us */}
      <section className="bg-[#000066] py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">About 365 Bizness</h1>
          <div className="space-y-16">
            <WhoWeAre />
            <WhatWeAre />
            <WhyWeAre />
            <Startup/>
          </div>
        </div>
        <section className="w-full h-[300px] mt-20 pb-5">
        <img src="images/img.jpg" alt="Provided Image" className="max-w-full max-h-full object-cover w-full" />
      </section>
      </section>
    </div>
  );
};

export default Home;
