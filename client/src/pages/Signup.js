import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css'; // Ensure you create and import the CSS file
import backgroundImage from './assets/background.jpg'; // Import the background image

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [reconfirmEmail, setReconfirmEmail] = useState('');
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelector('.signup-page').classList.add('show');
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleSignup = async (e) => {
    e.preventDefault();
    if (email !== reconfirmEmail) {
      alert('Email and reconfirm email do not match');
      return;
    }
    try {
      const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, lastName, phoneNumber, email, userId, password }),
      });

      const data = await response.json();

      if (data.success) {
        alert('Registered successfully!');
        localStorage.setItem('isLoggedIn', 'true');
        navigate('/');
      } else {
        alert('Signup failed: ' + data.message);
      }
    } catch (error) {
      console.error('Error during signup:', error);
      alert('An error occurred during signup. Please try again.');
    }
  };

  return (
    <div
      className="signup-container"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div className="signup-page">
        <h1>Signup</h1>
        <form onSubmit={handleSignup}>
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              style={{ color: 'black' }} // Set font color to black
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              style={{ color: 'black' }} // Set font color to black
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number (with country code):</label>
            <input
              type="text"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
              style={{ color: 'black' }} // Set font color to black
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ color: 'black' }} // Set font color to black
            />
          </div>
          <div className="form-group">
            <label htmlFor="reconfirmEmail">Reconfirm Email:</label>
            <input
              type="email"
              id="reconfirmEmail"
              value={reconfirmEmail}
              onChange={(e) => setReconfirmEmail(e.target.value)}
              required
              style={{ color: 'black' }} // Set font color to black
            />
          </div>
          <div className="form-group">
            <label htmlFor="userId">User ID:</label>
            <input
              type="text"
              id="userId"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              required
              style={{ color: 'black' }} // Set font color to black
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ color: 'black' }} // Set font color to black
            />
          </div>
          <button type="submit">Signup</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
