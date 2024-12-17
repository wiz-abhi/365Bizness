import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import Container from './Container';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-8">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* Social Media Section */}
          <div className="mb-6 md:mb-0 md:mr-12"> {/* Increased margin-right */}
            <h3 className="text-white text-lg font-semibold mb-4">Socials</h3>
            <div className="flex space-x-6">
              <a href="#" className="text-white hover:text-cyan-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-cyan-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-cyan-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-cyan-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Centered 365Bizness */}
          <div className="text-white text-3xl font-semibold mb-4 mx-auto"> {/* Increased font size */}
            365Bizness
          </div>

          {/* Contact Section */}
          <div className="md:ml-12"> {/* Increased margin-left */}
            <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
            <a href="mailto:contact@365bizness.com" className="text-white hover:text-cyan-400 transition-colors">
              contact@365bizness.com
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-4 border-t border-gray-800">
          <p className="text-gray-400 text-sm">
            © {currentYear}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
