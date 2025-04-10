const mongoose = require('mongoose');

const manufacturerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  country: {
    type: String,
    required: true,
    trim: true
  },
  website: {
    type: String,
    trim: true
  },
  foundedYear: {
    type: Number,
    min: 1000,
    max: new Date().getFullYear()
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Manufacturer', manufacturerSchema); 