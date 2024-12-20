import React from 'react';

const WhyWeAre = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div>
        <img
          src="/images/image.png"
          alt="Creative Mind"
          className="rounded-lg w-full"
        />
      </div>
      <div>
        <h2 className="text-3xl font-bold mb-6 text-cyan-400">WHY WE ARE</h2>
        <div className="space-y-6 text-gray-300">
          <p className="leading-relaxed">
            In this challenging and tough growing world, many will try to reach out 
            to you to show the "Shining" side of reality without much laser focus 
            and uniqueness. We, with our expert team, help you to grow by finding 
            the right problem that creates barriers between you and business growth. 
            Our thinking is the business we work with should get converted from a 
            seed to a giant tree. We work solely towards making seeds grow faster 
            and stronger into a well-developed tree with a strong foundation. We 
            plan our journaling with you not as selling services but as a true 
            partner so that our business can reach its true potential and get true value.
          </p>
          <div>
            <p className="text-gray-400">In 365-Bizness, our belief is:</p>
            <p className="text-xl text-cyan-400 mt-2">
              "You and Your business deserve more than what it is now"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyWeAre;