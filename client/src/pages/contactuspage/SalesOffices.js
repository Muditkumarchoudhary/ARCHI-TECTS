import React from 'react';

const SalesOffices = () => {
  return (
    <div className="sales-offices-container">
      <h1>Sales Offices</h1>
      <div className="offices-grid">
        <div className="office-card">
          <div className="location-icon">
            <i className="fas fa-map-marker-alt"></i>
            CyberHub, Gurgaon
          </div>
          <p>CyberHub 2nd Floor, Gurugram</p>
          <p>Tel -(456) 789-0123</p>
          <button className="get-direction-button">Get Direction</button>
        </div>
        <div className="office-card">
          <div className="location-icon">
            <i className="fas fa-map-marker-alt"></i>
            Crestview Heights
          </div>
          <p>Crestview Heights: 5678 Crestview Drive, Apartment 901, Bengaluru PIN: 23456</p>
          <p>Tel -(234) 567-8901</p>
          <button className="get-direction-button">Get Direction</button>
        </div>
        <div className="office-card">
          <div className="location-icon">
            <i className="fas fa-map-marker-alt"></i>
            Willowmere Glen
          </div>
          <p>Willowmere Glen: 5678 Willowmere Road, Floor 234, Hyderabad PIN: 01234</p>
          <p>Tel -(012) 345-6789</p>
          <button className="get-direction-button">Get Direction</button>
        </div>
      </div>
    </div>
  );
};

export default SalesOffices;
