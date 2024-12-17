import React from 'react';
import Button from '../ui/Button';

const Hero = () => {
  return (
    <div className="py-20 pt-32 text-white text-center"> {/* pt-32 to shift down */}
      <h1 className="text-5xl font-bold mb-6">
        <span className="text-cyan-400">Transforming</span> your business,{' '}
        <span className="text-cyan-400">Unlocking</span> your true potential
      </h1>
      <p className="text-xl mb-8 text-gray-300">
        Our expertise is in the transformation of your business, both internally and externally.
        Begin this exciting journey with us today!
      </p>
      <Button>GET STARTED</Button>
    </div>
  );
};

export default Hero;
