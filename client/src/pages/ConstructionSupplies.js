import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import './Products.css'; // Ensure you import the CSS file

// Import images
import bricks from './assets/bricks.jpg';
import cement from './assets/cement.png';
import sand from './assets/sand.jpg';
import steel from './assets/steel.jpg';
import paint from './assets/paint.jpg';
import tiles from './assets/tiles.png';
import handles from './assets/handles.jpg';

const ConstructionSupplies = () => {
  const [products, setProducts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Sample products for demo purposes
    const sampleProducts = [
      { id: 4, name: 'Bricks', category: 'Construction', price: 100, description: 'High quality bricks', image: bricks },
      { id: 5, name: 'Cement', category: 'Construction', price: 50, description: 'Strong cement', image: cement },
      { id: 6, name: 'Sand', category: 'Construction', price: 30, description: 'Fine sand', image: sand },
      { id: 7, name: 'Steel', category: 'Construction', price: 300, description: 'Durable steel', image: steel },
      { id: 10, name: 'Paint', category: 'Construction', price: 25, description: 'High-quality paint', image: paint },
      { id: 11, name: 'Tiles', category: 'Construction', price: 150, description: 'Durable tiles', image: tiles },
      { id: 16, name: 'Door Handles', category: 'Construction', price: 20, description: 'Sturdy door handles', image: handles },
    ];
    setProducts(sampleProducts);

    // Check if user is logged in
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
  }, []);

  const handleBuyNow = (productId) => {
    if (!isLoggedIn) {
      navigate('/login-signup');
    } else {
      // Handle buy now logic
      console.log(`Buying product with id: ${productId}`);
    }
  };

  const handleAddToCart = (productId) => {
    if (!isLoggedIn) {
      navigate('/login-signup');
    } else {
      // Handle add to cart logic
      console.log(`Adding product with id: ${productId} to cart`);
    }
  };

  return (
    <div className="products-page">
      <h1>Construction Supplies</h1>
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

export default ConstructionSupplies;