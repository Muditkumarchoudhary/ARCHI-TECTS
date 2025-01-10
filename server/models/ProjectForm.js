const mongoose = require('mongoose');

const ProjectFormSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contact: { type: String, required: true },
  address: { type: String, required: true },
  constructionType: { type: String, required: true },
  landArea: { type: String, required: true },
  budget: { type: String, required: true },
  startDate: { type: Date, required: true },
  agreement: { type: Boolean, required: true }
});

module.exports = mongoose.model('ProjectForm', ProjectFormSchema);