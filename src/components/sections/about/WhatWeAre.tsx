import React from 'react';

const WhatWeAre = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-3xl font-bold mb-6 text-cyan-400">WHAT WE ARE</h2>
        <p className="text-xl text-cyan-400 mb-6 italic">
          "We empower today's business into future Brand."
        </p>
        <ul className="space-y-4 text-gray-300">
          <li>
            We are not just a technology and service-providing company, we are beyond that.
          </li>
          <li>
            Our innovative and experienced team is there to overcome the toughest and 
            most complex business challenges. From innovative strategies to creative 
            thinking and everything in between, our team drives actionable result that 
            creates a long-term impact. For us, you are everything; we put you first at every turn.
          </li>
          <li className="italic">
            Our thinking: PLANNING • IMPLEMENTATION • GROWTH provides a sense of belief to people, 
            which is why, from everything apart, we keep our thinking at the topmost. 
            After all, "Building today will transform tomorrow"
          </li>
        </ul>
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
          alt="Digital Network"
          className="rounded-lg w-full"
        />
      </div>
    </div>
  );
};

export default WhatWeAre;