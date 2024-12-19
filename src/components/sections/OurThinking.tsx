import React from 'react';
import Container from '../layout/Container';

const OurThinking = () => {
  return (
    <div className="bg-[#000066] pt-20 pb-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="rounded-full overflow-hidden w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] mx-auto">
            <img
              src="images/bulb.jpg"
              alt="Innovation"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-6 text-cyan-400">Our Thinking</h2>
            <p className="text-lg mb-4">
              Building a business entails meticulous attention to detail. This is precisely why we are here to assist you.
            </p>
            <p className="text-xl font-semibold text-cyan-400 mb-4">
              PLAN→IMPLEMENT→TRANSFORMATION
            </p>
            <p className="text-lg">
              These three concepts propel us to overcome contemporary, intricate business challenges and establish a clear perspective for transforming your organization. Our ultimate objective is to propel your business to its full potential.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OurThinking;
