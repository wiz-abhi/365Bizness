import React, { useState } from 'react';
import Input from '../ui/Input';
import TextArea from '../ui/TextArea';
import Button from '../ui/Button';
import Card from '../ui/Card';

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false); // State for form submission status

  const handleSubmit = (e) => {
    e.preventDefault();

    // Set the form submission status to true after the form is submitted
    setIsSubmitted(true);
  };

  return (
    <Card>
      {!isSubmitted ? (
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="space-y-6 bg-white p-6 rounded-lg shadow-md" // Add bg-white class for white background
        >
          {/* Hidden field to identify the form */}
          <input type="hidden" name="form-name" value="contact" />

          {/* Honeypot field for bots */}
          <p className="hidden">
            <label htmlFor="bot-field" className="sr-only">
              Don't fill this out if you're human:
              <input id="bot-field" name="bot-field" />
            </label>
          </p>

          {/* User inputs */}
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
          
          {/* Submit button */}
          <Button type="submit" fullWidth>
            Send Message
          </Button>
        </form>
      ) : (
        <div className="success-message">
          <h2>Thank you for your message!</h2>
          <p>We will get back to you soon.</p>
        </div>
      )}
    </Card>
  );
};

export default ContactForm;
