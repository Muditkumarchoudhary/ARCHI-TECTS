import React, { useState, useEffect } from 'react';
import './Home.css';  // Ensure this file includes the styles
import image1 from './assets/image1.jpg'; // Your image 1 path
import image2 from './assets/image2.jpg'; // Your image 2 path
import image3 from './assets/image3.jpg'; // Your image 3 path
import statImage from './assets/stat-image.jpg';
import ExpImage from './assets/experience.png';
import ClientImage from './assets/client.png';
import safetyImage from './assets/safety.jpg'; // New image for safety
import buildingStaffImage from './assets/staff.jpg';
import heavyfoundationImage from './assets/heavyfoundation.jpg'
import MaterialSupply from './assets/material.jpg'; // New image for building staff
import adani from './assets/adani.png'; 
import adani1 from './assets/adani-logo.jpg';
import tata from './assets/tata-logo.jpg';
import jaquar from './assets/jaquar.jpg';
import asahi from './assets/asahi.jpg';
import ContactForm from './components/ContactForm.js'; // Import the new ContactForm component

const Home = () => {
  const [showForm, setShowForm] = useState(false);

  // For stats counting animation
  useEffect(() => {
    const stats = document.querySelectorAll('.stat-number');
    
    stats.forEach(stat => {
      const countTo = stat.getAttribute('data-count');
      let count = 0;

      const interval = setInterval(() => {
        stat.textContent = count;
        if (count >= countTo) {
          clearInterval(interval); // Stop the counting when the target number is reached
        } else {
          count++;
        }
      }, 10); // Adjust the interval timing for faster or slower counting
    });
  }, []);

  // Handle button click to toggle form visibility
  const handleButtonClick = () => {
    setShowForm(!showForm); // Toggle form visibility
  };

  return (
    <div className="home-page">
      <div className="home">
        <div className="namebox">
          {/* Blue Container */}
          <div className="blue-container">
            <h2>Your Dream,</h2>
            <h3>Will be Reality</h3>
            <p>Committed to excellence in construction, we offer end-to-end services for residential, commercial, and industrial projects. Our team is dedicated to delivering outstanding results on time and within budget.</p>
          </div>
          
          {/* Red Container (Image Slider) */}
          <div className="red-container">
            <div className="slider">
              <img src={image1} alt="Construction material 1" className="slide" />
              <img src={image2} alt="Construction material 2" className="slide" />
              <img src={image3} alt="Construction material 3" className="slide" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats">
        <div className="stat-item">
          <img src={statImage} alt="Project icon" className="stat-icon" />
          <h3 className="stat-title">Projects</h3>
          <p className="stat-number" data-count="469">0</p>
        </div>
        <div className="stat-item">
          <img src={ExpImage} alt="Experience icon" className="stat-icon" />
          <h3 className="stat-title">Years of Experience</h3>
          <p className="stat-number" data-count="1">0</p>
        </div>
        <div className="stat-item">
          <img src={ClientImage} alt="Client icon" className="stat-icon" />
          <h3 className="stat-title">Clients</h3>
          <p className="stat-number" data-count="236">0</p>
        </div>
      </div>

      {/* Yellow-Gold Line */}
      <div className="yellow-line"></div>

      {/* Centered Text */}
      <div className="centered-text">
        <h1>You dream it. We can build it.</h1>
        <h2>We provide quality Services</h2>
      </div>

      {/* Safety Assurance & Building Staffs */}
      <div className="side-by-side-section">
        <div className="side-by-side-item">
          <img src={safetyImage} alt="Safety Assurance" className="side-image" />
          <div className="side-text">
            <h3>Safety Assurance</h3>
            <p>At ARCHI-TECT, safety is our top priority. We implement stringent safety protocols and ensure all team members are trained to handle potential risks, creating a safe and secure environment for every project.</p>
          </div>
        </div>

        <div className="side-by-side-item">
          <img src={buildingStaffImage} alt="Building Staffs" className="side-image" />
          <div className="side-text">
            <h3>Building Staffs</h3>
            <p>At ARCHI-TECT, we believe our success is built on the strength of our people. From project managers to skilled tradespeople, our staff brings a wealth of knowledge and a commitment to delivering quality work on time, every time.</p>
          </div>
        </div>
      </div>

      {/* Second Row for Safety Assurance & Building Staffs */}
      <div className="side-by-side-section">
        <div className="side-by-side-item">
          <img src={heavyfoundationImage} alt="Heavy Foundation" className="side-image" />
          <div className="side-text">
            <h3>Heavy Foundation</h3>
            <p>At ARCHI-TECT, we specialize in providing heavy foundation solutions designed for large, complex, and high-load structures. Our experienced team uses advanced techniques and high-quality materials to ensure a strong, stable foundation for every project.</p>
          </div>
        </div>

        <div className="side-by-side-item">
          <img src={MaterialSupply} alt="Material Supply" className="side-image" />
          <div className="side-text">
            <h3>Material Supply</h3>
            <p>At ARCHI-TECT, we supply only the highest-quality construction materials to ensure the success of every project. Whether you need basic building supplies or specialized materials, we deliver what you need, when you need it.</p>
          </div>
        </div>
      </div>

      {/* Our Collaborations and Partners Section */}
      <div className="collaborations-heading">
        <h2>Our Collaborations and Partners</h2>
      </div>
      {/* Brand Logos Slider */}
      <div className="brand-logos-container">
        <div className="brand-logos-slider">
          <img src={adani} alt="brand-logo" className="slide" />
          <img src={adani1} alt="brand-logo" className="slide" />
          <img src={tata} alt="brand-logo" className="slide" />
          <img src={jaquar} alt="brand-logo" className="slide" />
          <img src={asahi} alt="brand-logo" className="slide" />
        </div>
      </div>

      {/* New Banner Section */}
      <div className="new-banner-section">
        <div className="banner-image-container">
          {/* Text on the left side of the banner */}
          <div className="banner-text">
            Safety is an equal priority in our construction.
          </div>

          {/* Button */}
          <button className="get-in-touch-button" onClick={handleButtonClick}>Get in Touch</button>
        </div>
      </div>
      {/* Modal for Contact Form */}
      {showForm && (
        <div className="form-overlay">
          <div className="form-container">
            <button className="close-button" onClick={() => setShowForm(false)}>
              &times;
            </button>
            <ContactForm />
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 ARCHI-TECT. All rights reserved.</p>
        <div className="footer-links">
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-of-service">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
};

export default Home;