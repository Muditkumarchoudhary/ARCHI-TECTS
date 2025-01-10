const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
  totalAmount: { type: Number, required: true },
  status: { type: String, required: true },
}, { collection: 'Orders' });

module.exports = mongoose.model('Order', OrderSchema);