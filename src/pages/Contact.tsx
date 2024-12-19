import React from 'react';
import Container from '../components/layout/Container';
import { Mail, Phone, MapPin } from 'lucide-react';
import Button from '../components/ui/Button';
import { FormEvent } from 'react';

const Contact = () => {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    // Form validation
    const formData = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out all fields.');
      return;
    }

    // Remove the custom fetch logic if using Netlify form submission
    // Let Netlify handle the form submission
    alert('Message sent successfully!');
    form.reset();
  };

  return (
    <div className="bg-[#000066] py-16">
      <Container>
        <h1 className="text-4xl font-bold mb-12 text-cyan-400">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-[#f0f4f8] p-8 rounded-lg shadow-lg">
            {/* Hidden form for Netlify bot detection */}
            <form name="contact" data-netlify="true" hidden>
              <input type="text" name="name" />
              <input type="email" name="email" />
              <textarea name="message"></textarea>
            </form>

            {/* Actual form */}
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Required hidden input for Netlify */}
              <input type="hidden" name="form-name" value="contact" />

              <div>
                <label className="block text-gray-800 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  className="w-full p-3 rounded bg-white text-gray-800 border border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-800 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  className="w-full p-3 rounded bg-white text-gray-800 border border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-800 mb-2">Message</label>
                <textarea
                  name="message"
                  className="w-full p-3 rounded bg-white text-gray-800 border border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 h-32"
                  placeholder="Your message..."
                  required
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
                  <span>yogeshsharma88943@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="text-cyan-400" />
                  <span>+91 9131358297</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="text-cyan-400" />
                  <span>IIT Kharagpur, West Bengal</span>
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
