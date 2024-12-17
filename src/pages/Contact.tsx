import React from 'react';
import Container from '../components/layout/Container';
import { Mail, Phone, MapPin } from 'lucide-react';
import Button from '../components/ui/Button';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    alert('Form Submitted Successfully!'); // Alert the user
  };

  return (
    <div className="bg-[#000066] py-16">
      <Container>
        <h1 className="text-4xl font-bold mb-12 text-cyan-400">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-[#f0f4f8] p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-800 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full p-3 rounded bg-white text-gray-800 border border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-gray-800 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-3 rounded bg-white text-gray-800 border border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-800 mb-2">Message</label>
                <textarea
                  className="w-full p-3 rounded bg-white text-gray-800 border border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 h-32"
                  placeholder="Your message..."
                />
              </div>
              <Button type="submit" variant="primary" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
          <div className="text-white space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-cyan-400">Get in Touch</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="text-cyan-400" />
                  <span>contact@365bizness.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="text-cyan-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="text-cyan-400" />
                  <span>123 Business Avenue, New York</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
