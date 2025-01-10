import React from 'react';
import Footer from '../components/Footer'; // Ensure you have a Footer component
import './ContactUs.css'; // CSS file for styling
import SalesOffices from './contactuspage/SalesOffices'; // Import the SalesOffices component

const ContactUs = () => (
  <div className="contact-us-page">
    {/* Banner Section */}
    <div className="banner-contact">
      <div className="banner-content-contact">
        <h1>Get In Touch</h1>
      </div>
    </div>

    {/* Contact Details Section */}
    <div className="contact-details">
      <div className="contact-left">
        <h2>Address</h2>
        <p>Vaishali Nagar, Near Apollo Hospital, Jaipur-302021</p>
        <h2>Write To Us</h2>
        <p>support@archi-tect.in</p>
        <h2>Call Us</h2>
        <p>+91 8306599265</p>
        <h2>Keep In Touch</h2>
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">Facebook</a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">Twitter</a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">Instagram</a>
        </div>
      </div>
      <div className="contact-right">
        <form>
          <label>
            Name <span>*</span>
            <div className="name-fields">
              <input type="text" placeholder="First Name" required />
              <input type="text" placeholder="Last Name" />
            </div>
          </label>
          <label>
            Email <span>*</span>
            <input type="email" placeholder="Your Email" required />
          </label>
          <label>
            Comment or Message <span>*</span>
            <textarea placeholder="Your Message" required></textarea>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>

    {/* Google Map Section */}
    <div className="map-container">
      <h2>Find Us Here</h2>
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.029851057608!2d75.73559117592055!3d26.91243448312369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db6386d1dbd91%3A0x5bd4f84db242c3db!2sVaishali%20Nagar%2C%20Jaipur%2C%20Rajasthan%20302021!5e0!3m2!1sen!2sin!4v1694702820111!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>

    {/* Sales Offices Section */}
    <SalesOffices />

    {/* Footer */}
    <Footer />
  </div>
);

export default ContactUs;
