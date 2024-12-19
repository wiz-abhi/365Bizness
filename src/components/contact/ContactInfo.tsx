import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactInfo = () => {
  return (
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
  );
};

export default ContactInfo;