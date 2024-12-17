import React from 'react';
import Input from '../ui/Input';
import TextArea from '../ui/TextArea';
import Button from '../ui/Button';
import Card from '../ui/Card';

const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <Card>
      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          label="Name"
          type="text"
          placeholder="Your Name"
        />
        <Input
          label="Email"
          type="email"
          placeholder="your@email.com"
        />
        <TextArea
          label="Message"
          placeholder="Your message..."
        />
        <Button type="submit" fullWidth>
          Send Message
        </Button>
      </form>
    </Card>
  );
};

export default ContactForm;