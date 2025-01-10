import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import './Products.css'; // Ensure you import the CSS file

// Import images
import drill from './assets/drill.jpg';
import fan from './assets/fan.jpg';
import wiring from './assets/wiring.jpg';
import bulbs from './assets/bulbs.jpg';

const ElectricalAndElectronics = () => {
  const [products, setProducts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Sample products for demo purposes
    const sampleProducts = [
      { id: 3, name: 'Drilling Machine', category: 'Electrical', price: 200, description: 'High power drilling machine', image: drill },
      { id: 9, name: 'Ceiling Fan', category: 'Electrical', price: 120, description: 'Energy-efficient ceiling fan', image: fan },
      { id: 12, name: 'Wiring', category: 'Electrical', price: 75, description: 'Safe electrical wiring', image: wiring },
      { id: 15, name: 'Light Bulbs', category: 'Electrical', price: 10, description: 'Energy-saving light bulbs', image: bulbs },
    ];
    setProducts(sampleProducts);

    // Check if user is logged in (this is a simple example, replace with actual authentication logic)
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
  }, []);

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
      <h1>Electrical and Electronics</h1>
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="product-price">${product.price}</p>
              <p>{product.description}</p>
            </div>
            <button onClick={() => handleBuyNow(product.id)}>Buy Now</button>
            <button onClick={() => handleAddToCart(product.id)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ElectricalAndElectronics;