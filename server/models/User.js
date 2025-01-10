const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  userId: { type: String, required: true, unique: true },
  password: { type: String, required: true },
}, { collection: 'Userdetails' }); // Specify the collection name

module.exports = mongoose.model('User', UserSchema);
