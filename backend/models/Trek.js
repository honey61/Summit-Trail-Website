const mongoose = require('mongoose');

const trekSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, unique: true, required: true },
  description: String,
  region: String,
  difficulty: { type: String, enum: ['Easy','Moderate','Hard'], default: 'Moderate' },
  durationDays: Number,
  pricePerPerson: Number,
  bestSeason: [String],
  image: String,
  featured: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Trek', trekSchema);
