import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Services.css'; // Ensure this file includes the styles
import Footer from '../components/Footer';

import adaniLogo from './assets/adani.png';
import tataLogo from './assets/tata-logo.jpg';
import jaquarLogo from './assets/jaquar.jpg';

const servicesData = [
  {
    title: "Selling Products",
    description: "We offer a wide range of high-quality construction materials and products to meet all your building needs. Our products are sourced from reputable manufacturers and are guaranteed to meet industry standards. Whether you need basic building supplies or specialized materials, we have everything you need to complete your project successfully."
  },
  {
    title: "Collaboration Partners",
    description: "We collaborate with industry leaders like Adani, Tata, and Jaquar to deliver the best services and products. Our partnerships with these renowned companies ensure that we can provide our clients with top-notch materials and services. By working together, we can achieve greater efficiency, quality, and innovation in our projects.",
    logos: [adaniLogo, tataLogo, jaquarLogo]
  },
  {
    title: "Maintenance and Safety",
    description: "We ensure the highest standards of safety and maintenance in all our projects to protect our workers and clients. Our team follows strict safety protocols and regularly undergoes training to stay updated on the latest safety practices. We also conduct regular maintenance checks to ensure that all equipment and materials are in optimal condition, minimizing the risk of accidents and ensuring a smooth workflow."
  },
  {
    title: "Hire an Architect",
    description: "Our experienced architects are available to help you design and build your dream project. From initial concept to final construction, our architects work closely with you to understand your vision and bring it to life. We use the latest design software and techniques to create detailed plans and 3D models, ensuring that every aspect of your project is meticulously planned and executed."
  }
];

const Services = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/project-form');
  };

  return (
    <div className="services-page">
      <div className="banner">
        <div className="banner-text">
          <h1>Our Services</h1>
        </div>
      </div>
      <div className="content">
        {servicesData.map((service, index) => (
          <div className="service-section" key={index}>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            {service.logos && (
              <div className="partners-logos">
                {service.logos.map((logo, idx) => (
                  <img src={logo} alt={service.title} key={idx} />
                ))}
              </div>
            )}
          </div>
        ))}
        <div className="start-project">
          <div className="start-project-text">
            <h2>Start Your Project Now</h2>
            <p>Contact us today to get started on your next big project. Our team is ready to bring your vision to life. We offer comprehensive project management services to ensure that your project is completed on time, within budget, and to the highest standards of quality. Let us help you turn your dream into reality.</p>
            <button onClick={handleGetStartedClick}>Get Started</button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;