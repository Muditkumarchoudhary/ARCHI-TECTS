import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import './Products.css'; // Ensure you import the CSS file

// Import images
import sofa from './assets/sofa.png';
import kitchen from './assets/kitchen.jpg';
import lamp from './assets/lamp.jpg';
import curtains from './assets/curtains.jpg';
import wallart from './assets/wallart.jpg';

const InteriorFurnishing = () => {
  const [products, setProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Sample products for demo purposes
    const sampleProducts = [
      { id: 1, name: 'Sofa', category: 'Interior', price: 500, description: 'Comfortable sofa', image: sofa },
      { id: 2, name: 'Kitchen Renovation', category: 'Interior', price: 1500, description: 'Complete kitchen renovation', image: kitchen },
      { id: 8, name: 'Table Lamp', category: 'Interior', price: 45, description: 'Stylish table lamp', image: lamp },
      { id: 13, name: 'Curtains', category: 'Interior', price: 80, description: 'Elegant curtains', image: curtains },
      { id: 14, name: 'Wall Art', category: 'Interior', price: 200, description: 'Beautiful wall art', image: wallart },
    ];
    setProducts(sampleProducts);

    // Check if user is logged in (this is a simple example, replace with actual authentication logic)
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
  }, []);

  const handleSortChange = (e) => {
    const order = e.target.value;
    setSortOrder(order);
    sortProducts(order);
  };

  const sortProducts = (order) => {
    let sorted = [...products];
    if (order === 'asc') {
      sorted = sorted.sort((a, b) => a.price - b.price);
    } else if (order === 'desc') {
      sorted = sorted.sort((a, b) => b.price - a.price);
    }
    setProducts(sorted);
  };

  const handleBuyNow = (productId) => {
    if (!isLoggedIn) {
      navigate('/login');
    } else {
      // Handle buy now logic
      console.log(`Buying product with id: ${productId}`);
    }
  };

  const handleAddToCart = (productId) => {
    if (!isLoggedIn) {
      navigate('/login');
    } else {
      // Handle add to cart logic
      console.log(`Adding product with id: ${productId} to cart`);
    }
  };

  return (
    <div className="products-page">
      <h1>Interior Furnishing</h1>
      <div className="filters">
        <label htmlFor="sort">Sort by Price:</label>
        <select id="sort" value={sortOrder} onChange={handleSortChange}>
          <option value="">None</option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </div>
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button onClick={() => handleBuyNow(product.id)}>Buy Now</button>
            <button onClick={() => handleAddToCart(product.id)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default InteriorFurnishing