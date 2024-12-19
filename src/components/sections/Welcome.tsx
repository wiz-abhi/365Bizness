import React from 'react';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className="relative h-[90vh] flex flex-col items-center mt-16 justify-center text-white text-center">
      {/* Background Color */}
      <div className="absolute inset-0 bg-[#000066] z-0"></div>
      
      {/* Main Content with added padding */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 pt-20"> {/* pt-16 to shift down */}
        <h2 className="text-sm uppercase tracking-wider mb-4">WELCOME</h2>
        <h1 className="text-5xl font-bold mb-6">
          Transforming your business, Unlocking your true potential
        </h1>
        <p className="text-xl mb-8 text-gray-300">
          Our mission is to ensure the success of your business transformation and achieve your
          objectives. Leaveraging our advanced technology, industry expertise and unwavering passion, we generate enduring value.
          collaboratively, we develop tailored propelling it towards a sustainble and digital future.
        </p>
        <Link to="/contact">
          <Button variant="primary" className="text-lg px-12 bg-cyan-400 hover:bg-cyan-500">
            GET STARTED
          </Button>
        </Link>
      </div>

      {/* Image Below Button */}
      <img
        src="/images/welcome.jpg" // Adjust the path as needed
        alt="Business Welcome"
        className="relative mt-24 mb-16 h-[300px] w-full z-10"
      />
    </div>
  );
};

export default Welcome;
