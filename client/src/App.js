import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'; // Import global styles first
import './styles.css'; // Import other styles
import Navbar from './components/Navbar'; // Import Navbar component
import VendorRegister from './pages/VendorRegister';
import VendorDetails from './pages/VendorDetails';
import VendorDashboard from './pages/VendorDashboard';
import SellItem from './pages/SellItem';
import Home from './pages/Home';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Products from './pages/Products';
import InteriorFurnishing from './pages/InteriorFurnishing';
import ElectricalAndElectronics from './pages/ElectricalAndElectronics';
import ConstructionSupplies from './pages/ConstructionSupplies';
import ContactUs from './pages/ContactUs';
import Login from './pages/Login'; // Update the import path
import Signup from './pages/Signup'; // Import the Signup component
import Cart from './pages/Cart';
import ProjectForm from './pages/ProjectForm';
import VendorLogin from './pages/VendorLogin';
import UserAccount from './pages/UserAccount'; // Import the UserAccount component

const App = () => (
  <Router>
    <div id="root">
      <Navbar />
      <div className="content"> {/* Ensure content starts below navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/interior-furnishing" element={<InteriorFurnishing />} />
          <Route path="/products/electrical-and-electronics" element={<ElectricalAndElectronics />} />
          <Route path="/products/construction-supplies" element={<ConstructionSupplies />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/login-signup" element={<Login />} /> {/* Update this route */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/vendor-register" element={<VendorRegister />} />
          <Route path="/vendor-details" element={<VendorDetails />} />
          <Route path="/vendor-dashboard" element={<VendorDashboard />} />
          <Route path="/sell-item" element={<SellItem />} />
          <Route path="/project-form" element={<ProjectForm />} />
          <Route path="/vendor-login" element={<VendorLogin />} />
          <Route path="/signup" element={<Signup />} /> {/* Add this route */}
          <Route path="/login" element={<Login />} /> {/* Add this route */}
          <Route path="/user-account" element={<UserAccount />} /> {/* Add this route */}
        </Routes>
      </div>
    </div>
  </Router>
);

export default App;