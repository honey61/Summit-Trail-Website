const Hike = require("../models/Hike");

// ADMIN → show ALL hikes
exports.list = async (req, res) => {
  try {
    const hikes = await Hike.find().sort({ createdAt: -1 });
    res.json(hikes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// FRONTEND → show ONLY featured hikes
exports.featured = async (req, res) => {
  try {
    const hikes = await Hike.find({ featured: true }).sort({ createdAt: -1 });
    res.json(hikes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.get = async (req, res) => {
  try {
    const hike = await Hike.findById(req.params.id);
    if (!hike) return res.status(404).json({ error: "Hike not found" });
    res.json(hike);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const hike = await Hike.create(req.body);
    res.status(201).json(hike);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const hike = await Hike.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(hike);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.remove = async (req, res) => {
  try {
    await Hike.findByIdAndDelete(req.params.id);
    res.json({ message: "Hike deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
