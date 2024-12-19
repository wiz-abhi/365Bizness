import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className={`py-3 shadow-md ${
        isMenuOpen ? 'bg-white text-[#000066]' : 'bg-[#000066] text-white'
      } transition-colors duration-300 relative`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo Section */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="images/logo.jpg" // Path to your logo image
            alt="Logo"
            className="h-12 w-12 object-contain"
          />
          <span className="text-xl font-bold tracking-wide">365 Bizness</span>
        </Link>

        {/* Hamburger Menu Icon (Mobile Only) */}
        <button
          className="md:hidden text-inherit focus:outline-none z-30"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>

        {/* Navigation Links (Desktop and Mobile) */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="hover:text-cyan-400 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/services"
            className="hover:text-cyan-400 transition-colors duration-300"
          >
            Services
          </Link>
          <Link
            to="/blog"
            className="hover:text-cyan-400 transition-colors duration-300"
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className="hover:text-cyan-400 transition-colors duration-300"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-white z-20 flex flex-col items-center justify-center md:hidden">
            <button
              className="absolute top-4 right-4 text-[#000066] focus:outline-none"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <ul className="space-y-6 text-xl">
              <li>
                <Link
                  to="/"
                  className="hover:text-cyan-400 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-cyan-400 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="hover:text-cyan-400 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-cyan-400 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
