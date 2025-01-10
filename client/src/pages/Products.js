import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Products.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = async (productId) => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/add-to-cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ productId }),
      });

      const data = await response.json();

      if (data.success) {
        alert('Product added to cart');
      } else {
        alert('Failed to add product to cart: ' + data.message);
      }
    } catch (error) {
      console.error('Error adding product to cart:', error);
      alert('An error occurred while adding product to cart. Please try again.');
    }
  };

  const handleBuyNow = async (productId) => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/add-to-cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ productId }),
      });

      const data = await response.json();

      if (data.success) {
        const orderResponse = await fetch('http://localhost:5000/api/place-order', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });

        const orderData = await orderResponse.json();

        if (orderData.success) {
          alert('Order placed successfully');
          navigate('/user-account');
        } else {
          alert('Failed to place order: ' + orderData.message);
        }
      } else {
        alert('Failed to add product to cart: ' + data.message);
      }
    } catch (error) {
      console.error('Error placing order:', error);
      alert('An error occurred while placing order. Please try again.');
    }
  };

  return (
    <div className="products-container">
      <h1>Products</h1>
      <div className="products-list">
        {products.map(product => (
          <div key={product._id} className="product-item">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p><strong>Price:</strong> ${product.price}</p>
            <button onClick={() => handleAddToCart(product._id)}>Add to Cart</button>
            <button onClick={() => handleBuyNow(product._id)}>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;