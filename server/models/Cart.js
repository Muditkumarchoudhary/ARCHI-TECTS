const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
}, { collection: 'Carts' });

module.exports = mongoose.model('Cart', CartSchema);