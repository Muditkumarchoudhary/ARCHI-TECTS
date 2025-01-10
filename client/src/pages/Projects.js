import React from 'react';
import './Projects.css'; // Ensure you have a CSS file for styling
import manglamHousingApartments from './assets/manglamproject.jpg';
import Interior from './assets/fivestar.jpg';
import Footer from '../components/Footer';
const Projects = () => (
  <div className="projects-page">
  <div className="Bannerproject">
  <div className='Bannerproject-text'>
    <h1>Our Projects</h1>
  </div>
  </div>
  <div className="content h2"></div>
  <h2>Outgoing Projects</h2>
  <div className="container">
      <div className="image-container">
        <img
          src={manglamHousingApartments}
          alt="Manglam Housing Apartments"
        />
      </div>
      <div className="text-container">
        <h1>Commercial And Housing Properties</h1>
        <h2>Manglam Housing Apartments</h2>
        <p>
          Our apartments feature modern layouts, premium finishes, and
          amenities like landscaped gardens, swimming pools, and smart home
          technology, ensuring a perfect blend of convenience and elegance. Ideal
          for families, professionals, and investors seeking high-quality living
          spaces in prime locations.
        </p>
        <ul>
          <li>
            <i class="fa-solid fa-circle-check"></i>✔Multipurpose Sports Court
          </li>
          <li>
            <i class="fa-solid fa-circle-check"></i>✔Club Lawn
          </li>
          <li>
            <i class="fa-solid fa-circle-check"></i>✔Parking
          </li>
          <li>
            <i class="fa-solid fa-circle-check"></i>✔Fitness Centre
          </li>
          <li>
            <i class="fa-solid fa-circle-check"></i>✔24x7 CCTV Surveillance
          </li>
        </ul>
      </div>
      </div>
    <div className="container2">
      <div className="image-container2">
        <img src={Interior} alt="Interior Renovation" />
      </div>
      <div className="content2">
        <h1>Interior Renovation</h1>
        <h2>Five-star Tech Furnishing</h2>
        <p>
          At ARCHI-TECT, we believe high-quality interior renovations shouldn't break
          the bank. We offer top-tier materials and expert craftsmanship at
          competitive prices, delivering luxurious results within your budget. Let us
          help you elevate your home with stunning finishes, while keeping your wallet
          happy.
        </p>
        <ul>
          <li>✔ Transforming Spaces</li>
          <li>✔ Quality & Value</li>
          <li>✔ Customer-Centric Approach</li>
          <li>✔ Creative Appeal</li>
        </ul>
      </div>
    </div>
    <Footer />
    </div>
);


export default Projects;