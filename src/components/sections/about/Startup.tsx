import React from 'react';

const Startup = () => {
  return (
    <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-3xl font-bold mb-6 text-cyan-400">Startup Building Support</h2>
        <p className="text-lg mb-4">Here's how we do it!</p>
        <p className="text-gray-300 leading-relaxed">
          Despite possessing a creative and innovative concept, the lack of sufficient resources hinders its realization. 
          365Bizness is here to assist you in developing your startup and establishing a lasting brand identity. 
          We will receive your input, and our team will then allocate approximately four to five days to thoroughly analyze 
          the overall structure of the idea. If it demonstrates the potential for market success, we will proceed with further necessary steps.
          <br />
          "Get in touch with 365Bizness, and we'll work together from the very first step."
        </p>
      </div>
      <div>
        <img
          src="images/aa.png"
          alt="Consulting Diagram"
          className="rounded-lg w-full"
        />
      </div>
    </div>
  );
};

export default Startup;
