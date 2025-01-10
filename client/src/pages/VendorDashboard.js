import React from 'react';
import { Link } from 'react-router-dom';
import './VendorDashboard.css'; // Ensure you import the CSS file

const VendorDashboard = () => {
  return (
    <div className="vendor-dashboard-page">
      <h1>Vendor Dashboard</h1>
      <div className="dashboard-links">
        <Link to="/sell-item">Sell an Item</Link>
        <Link to="/vendor-products">My Products</Link>
        <Link to="/vendor-orders">My Orders</Link>
      </div>
    </div>
  );
};

export default VendorDashboard;