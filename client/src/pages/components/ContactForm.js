// src/components/ContactForm.js

import React from 'react';
import './ContactForm.css'; // Optional, if you have separate styles for the form

const ContactForm = () => {
  return (
    <div className="contact-form">
      <h2>Contact Us</h2>
      <form>
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Message:
          <textarea name="message" required></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
