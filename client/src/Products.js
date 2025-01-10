import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

function Products() {
  return (
    <div>
      <h2>Products</h2>
      <ul>
        <li><Link to="construction-material">Construction Material</Link></li>
        <li><Link to="interior-exterior">Interior & Exterior</Link></li>
        <li><Link to="electronics-machines">Electronics Machines</Link></li>
      </ul>
      <Routes>
        <Route path="construction-material" element={<p>Construction Material List</p>} />
        <Route path="interior-exterior" element={<p>Interior & Exterior List</p>} />
        <Route path="electronics-machines" element={<p>Electronics Machines List</p>} />
      </Routes>
    </div>
  );
}

export default Products;
