const mongoose = require('mongoose');

const ArchitectSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  architectId: { type: String, required: true },
  hiredDate: { type: Date, required: true },
}, { collection: 'Architects' });

module.exports = mongoose.model('Architect', ArchitectSchema);