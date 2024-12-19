import React from 'react';
import Container from '../layout/Container';

const OurMission = () => {
  return (
    <div className="bg-[#000066] py-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 text-white">
            <h2 className="text-4xl font-bold mb-6 text-cyan-400">Our Mission</h2>
            <p className="text-lg">
              Our mission at 365-Bizness is to provide exceptional products and services to our clients, 
              upholding the highest standards of quality and professionalism. We are dedicated to fostering enduring 
              partnerships with our clients, collaborating to achieve shared objectives and success.
            </p>
          </div>
          <div className="order-1 md:order-2 rounded-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&q=80"
              alt="Business Growth"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OurMission;
