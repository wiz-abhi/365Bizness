import React from 'react';

const WhoWeAre = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div>
        <img
          src="images/wwer.png"
          alt="Consulting Diagram"
          className="rounded-lg w-full"
        />
      </div>
      <div>
        <h2 className="text-3xl font-bold mb-6 text-cyan-400">WHO WE ARE</h2>
        <p className="text-lg mb-4">Hello Everyone, good to see you!</p>
        <p className="text-gray-300 leading-relaxed">
          We are 365-Bizness. A modern business agency for transformation, 
          innovation across industries, and performance. Our thought is that every 
          minute of our client is of great importance that is what unites us all. 
          Our main objective is to create a positive contribution for our client 
          and their entire value chain. We believe that transformation can only be 
          successful when the spirit of innovation and creativity is combined with 
          collaboration based on partnership alongside industry and project expertise. 
          We act like partners for our clients, not as service providers. We believe 
          in excellence not for its own sake, but the kind achieved when people trusted 
          to realize their full potential and true value.
        </p>
      </div>
    </div>
  );
};

export default WhoWeAre;