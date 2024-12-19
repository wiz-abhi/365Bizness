import React from 'react';
import Container from '../components/layout/Container';
import ContactForm from '../components/forms/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';

const Contact = () => {
  return (
    <div className="bg-[#000066] py-16">
      <Container>
        <h1 className="text-4xl font-bold mb-12 text-cyan-400">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </Container>
    </div>
  );
}

export default Contact;