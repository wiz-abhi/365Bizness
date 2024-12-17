import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-[#000066] text-white py-3 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo Section */}
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src="images/logo.jpg"  // Path to your logo image
            alt="Logo" 
            className="h-12 w-12 object-contain" 
          />
          <span className="text-xl font-bold tracking-wide">365 Bizness</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-cyan-400 transition-colors duration-300">Home</Link>
          <Link to="/services" className="hover:text-cyan-400 transition-colors duration-300">Services</Link>
          <Link to="/blog" className="hover:text-cyan-400 transition-colors duration-300">Blog</Link>
          {/* <Link to="/about" className="hover:text-cyan-400 transition-colors duration-300">About</Link> */}
          <Link to="/contact" className="hover:text-cyan-400 transition-colors duration-300">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
