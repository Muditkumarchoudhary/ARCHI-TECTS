import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from './assets/logo.png'; // Import the logo image

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const [loginDropdownOpen, setLoginDropdownOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const toggleLoginDropdown = () => {
    setLoginDropdownOpen(!loginDropdownOpen);
  };

  const toggleProductsDropdown = () => {
    setProductsDropdownOpen(!productsDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <ul className="menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact-us">Contact Us</Link></li>
          <li className="nav-item dropdown">
            <button className="nav-links dropdown-toggle" onClick={toggleProductsDropdown}>
              Products <span className="down-arrow">&#9660;</span>
            </button>
            {productsDropdownOpen && (
              <div className="dropdown-menu show">
                <Link to="/products/interior-furnishing" className="dropdown-item" onClick={() => setProductsDropdownOpen(false)}>
                  Interior Furnishing
                </Link>
                <Link to="/products/electrical-and-electronics" className="dropdown-item" onClick={() => setProductsDropdownOpen(false)}>
                  Electrical and Electronics
                </Link>
                <Link to="/products/construction-supplies" className="dropdown-item" onClick={() => setProductsDropdownOpen(false)}>
                  Construction Supplies
                </Link>
              </div>
            )}
          </li>
          {token ? (
            <>
              <li className="nav-item">
                <Link to="/user-account" className="nav-links">
                  My Account
                </Link>
              </li>
              <li className="nav-item">
                <button className="nav-links logout-button" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li className="nav-item dropdown">
              <button className="nav-links dropdown-toggle" onClick={toggleLoginDropdown}>
                Login <span className="down-arrow">&#9660;</span>
              </button>
              {loginDropdownOpen && (
                <div className="dropdown-menu show">
                  <Link to="/login" className="dropdown-item" onClick={() => setLoginDropdownOpen(false)}>
                    Login
                  </Link>
                  <Link to="/signup" className="dropdown-item" onClick={() => setLoginDropdownOpen(false)}>
                    Signup
                  </Link>
                  <Link to="/vendor-login" className="dropdown-item" onClick={() => setLoginDropdownOpen(false)}>
                    Vendor Login
                  </Link>
                  <Link to="/vendor-register" className="dropdown-item" onClick={() => setLoginDropdownOpen(false)}>
                    Vendor Registration
                  </Link>
                </div>
              )}
            </li>
          )}
          <li><Link to="/cart">Cart</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
