import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserAccount.css';

const UserAccount = () => {
  const [userDetails, setUserDetails] = useState(null);
  const navigate = useNavigate();

  const fetchUserDetails = useCallback(async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/user-details', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (data.success) {
        setUserDetails(data);
      } else {
        alert('Failed to fetch user details: ' + data.message);
      }
    } catch (error) {
      console.error('Error fetching user details:', error);
      alert('An error occurred while fetching user details. Please try again.');
    }
  }, [navigate]);

  useEffect(() => {
    fetchUserDetails();
  }, [fetchUserDetails]);

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
        fetchUserDetails(); // Refresh user details
      } else {
        alert('Failed to add product to cart: ' + data.message);
      }
    } catch (error) {
      console.error('Error adding product to cart:', error);
      alert('An error occurred while adding product to cart. Please try again.');
    }
  };

  const handlePlaceOrder = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/place-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (data.success) {
        alert('Order placed successfully');
        fetchUserDetails(); // Refresh user details
      } else {
        alert('Failed to place order: ' + data.message);
      }
    } catch (error) {
      console.error('Error placing order:', error);
      alert('An error occurred while placing order. Please try again.');
    }
  };

  if (!userDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="user-account-container">
      <h1>User Account</h1>
      <div className="user-details">
        <h2>User Details</h2>
        <p><strong>First Name:</strong> {userDetails.user.firstName}</p>
        <p><strong>Last Name:</strong> {userDetails.user.lastName}</p>
        <p><strong>Email:</strong> {userDetails.user.email}</p>
        <p><strong>Phone Number:</strong> {userDetails.user.phoneNumber}</p>
      </div>
      <div className="orders">
        <h2>Orders</h2>
        {userDetails.orders.length > 0 ? (
          <ul>
            {userDetails.orders.map(order => (
              <li key={order._id}>
                <p><strong>Order ID:</strong> {order._id}</p>
                <p><strong>Total Amount:</strong> ${order.totalAmount}</p>
                <p><strong>Status:</strong> {order.status}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No orders found.</p>
        )}
      </div>
      <div className="cart">
        <h2>Cart</h2>
        {userDetails.cart && userDetails.cart.products.length > 0 ? (
          <ul>
            {userDetails.cart.products.map(product => (
              <li key={product._id}>
                <p><strong>Product ID:</strong> {product._id}</p>
                <p><strong>Product Name:</strong> {product.name}</p>
                <p><strong>Price:</strong> ${product.price}</p>
                <button onClick={() => handleAddToCart(product._id)}>Add to Cart</button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No products in cart.</p>
        )}
        {userDetails.cart && userDetails.cart.products.length > 0 && (
          <button onClick={handlePlaceOrder}>Place Order</button>
        )}
      </div>
      <div className="architects">
        <h2>Architects Hired</h2>
        {userDetails.architects.length > 0 ? (
          <ul>
            {userDetails.architects.map(architect => (
              <li key={architect._id}>
                <p><strong>Architect ID:</strong> {architect.architectId}</p>
                <p><strong>Hired Date:</strong> {new Date(architect.hiredDate).toLocaleDateString()}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No architects hired.</p>
        )}
      </div>
    </div>
  );
};

export default UserAccount;