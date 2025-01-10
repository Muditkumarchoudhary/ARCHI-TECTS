import React, { useState } from 'react';
import './ProjectForm.css'; // Ensure this file includes the styles

const ProjectForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    address: '',
    constructionType: '',
    landArea: '',
    budget: '',
    startDate: '',
    agreement: false
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Submitting form data:', formData);
      const response = await fetch('http://localhost:5000/api/project-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (response.ok) {
        setMessage('Form submitted successfully!');
      } else {
        setMessage('Error submitting form: ' + data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Error submitting form: ' + error.message);
    }
  };

  return (
    <div className="project-form-page">
      <form className="project-form" onSubmit={handleSubmit}>
        <h2>Project Details</h2>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Contact Methods:
          <input type="text" name="contact" value={formData.contact} onChange={handleChange} required />
        </label>
        <label>
          Address:
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />
        </label>
        <label>
          Type of Construction:
          <select name="constructionType" value={formData.constructionType} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="home">Home</option>
            <option value="buildings">Buildings</option>
            <option value="roads">Roads</option>
            <option value="complex">Complex</option>
            <option value="others">Others</option>
          </select>
        </label>
        <label>
          Land Area for Construction (m²):
          <input type="text" name="landArea" value={formData.landArea} onChange={handleChange} required />
        </label>
        <label>
          Budget (in Crores):
          <input type="text" name="budget" value={formData.budget} onChange={handleChange} placeholder="e.g., 5" required />
        </label>
        <label>
          Estimated Time to Start the Project:
          <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} required />
        </label>
        <label className="agreement-label">
          <input type="checkbox" name="agreement" checked={formData.agreement} onChange={handleChange} />
          I agree to share my details with architects for more knowledge and to be contacted via call or email.
        </label>
        <button type="submit">Submit</button>
        {message && <p className="message">{message}</p>}
      </form>
    </div>
  );
};

export default ProjectForm;