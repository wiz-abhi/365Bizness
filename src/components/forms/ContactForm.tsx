import React from 'react';
import Input from '../ui/Input';
import TextArea from '../ui/TextArea';
import Button from '../ui/Button';
import Card from '../ui/Card';

const ContactForm = () => {
  return (
    <Card>
      <form 
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        className="space-y-6"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p className="hidden">
          <label>
            Don't fill this out if you're human: <input name="bot-field" />
          </label>
        </p>

        <Input
          label="Name"
          name="name"
          type="text"
          placeholder="Your Name"
          required
        />
        <Input
          label="Email"
          name="email"
          type="email"
          placeholder="your@email.com"
          required
        />
        <TextArea
          label="Message"
          name="message"
          placeholder="Your message..."
          required
        />
        <Button type="submit" fullWidth>
          Send Message
        </Button>
      </form>
    </Card>
  );
};

export default ContactForm;