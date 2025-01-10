const mongoose = require('mongoose');

const vendorSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  dob: { type: Date, required: true },
  age: { type: Number, required: true },
  shopName: { type: String, required: true },
  gstin: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  country: { type: String, required: true },
  aadhaar: { type: String, required: true },
  password: { type: String, required: true },
  profilePhoto: { type: String }, // Store file path or URL
});

module.exports = mongoose.model('Vendor', vendorSchema);
