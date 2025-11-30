const mongoose = require("mongoose");

const ExpeditionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  country: String,
  peakHeight: String,
  duration: String,
  difficulty: String,
  description: String,
  image: String,
  featured: { type: Boolean, default: false },  // ⭐ ADD THIS
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Expedition", ExpeditionSchema);
