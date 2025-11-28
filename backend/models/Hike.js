const mongoose = require("mongoose");

const hikeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  location: String,
  distance: String,
  duration: String,
  difficulty: String,
  description: String,
  image: String,
  featured: { type: Boolean, default: false },   // ⭐ ADD THIS
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Hike", hikeSchema);
