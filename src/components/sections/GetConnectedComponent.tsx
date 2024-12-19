import React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../layout/Container';

const GetConnectedComponent = () => {
  const navigate = useNavigate();

  const handleStartWriting = () => {
    navigate('/blog');
  };

  return (
    <div className="bg-[#000066] py-24 text-white px-4 md:px-8 lg:px-12">
      <Container>
        {/* Outer Content Box */}
        <div className="max-w-4xl mx-auto text-center">
          {/* Adjusted heading */}
          <h1 className="text-4xl md:text-5xl font-bold mb-10 sm:block">
  Get Connected
  <br className="sm:hidden" />
  with the Changing World
</h1>


          {/* Adjusted inner box to cover 70% of the display and changed color to darker blue */}
          <div className="bg-[#000033] rounded-lg shadow-lg py-10 px-12 w-[100%] mx-auto">
            <p className="text-lg md:text-xl mb-6 text-white">
              You don't have any blog posts yet
            </p>
            <p className="text-lg md:text-xl mb-6 text-white">
              Let's create some content
            </p>
            <button
              className="bg-white text-[#000033] px-6 py-3 rounded-md hover:bg-gray-200 transition-colors"
              onClick={handleStartWriting}
            >
              Start Writing
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default GetConnectedComponent;
