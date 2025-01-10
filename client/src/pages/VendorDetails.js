import React, { useEffect, useState } from 'react';
import './VendorDetails.css'; // Ensure you import the CSS file

const VendorDetails = () => {
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    const fetchVendors = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/vendor-details');
        const data = await response.json();
        if (response.ok) {
          setVendors(data);
        } else {
          alert(data.message);
        }
      } catch (error) {
        console.error('Error fetching vendor details:', error);
        alert('Error fetching vendor details. Please try again.');
      }
    };

    fetchVendors();
  }, []);

  return (
    <div className="vendor-details-page">
      <h1>Vendor Details</h1>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Date of Birth</th>
            <th>Age</th>
            <th>Shop Name</th>
            <th>GSTIN</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Country</th>
            <th>Aadhaar</th>
          </tr>
        </thead>
        <tbody>
          {vendors.map((vendor) => (
            <tr key={vendor._id}>
              <td>{vendor.firstName}</td>
              <td>{vendor.lastName}</td>
              <td>{vendor.dob}</td>
              <td>{vendor.age}</td>
              <td>{vendor.shopName}</td>
              <td>{vendor.gstin}</td>
              <td>{vendor.email}</td>
              <td>{vendor.phone}</td>
              <td>{vendor.country}</td>
              <td>{vendor.aadhaar}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VendorDetails;