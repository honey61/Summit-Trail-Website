const Expedition = require("../models/Expedition");

// ADMIN → ALL expeditions
exports.list = async (req, res) => {
  try {
    const expeditions = await Expedition.find().sort({ createdAt: -1 });
    res.json(expeditions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// FRONTEND → ONLY featured expeditions
exports.featured = async (req, res) => {
  try {
    const expeditions = await Expedition.find({ featured: true }).sort({ createdAt: -1 });
    res.json(expeditions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.get = async (req, res) => {
  try {
    const exp = await Expedition.findById(req.params.id);
    if (!exp) return res.status(404).json({ error: "Expedition not found" });
    res.json(exp);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const exp = await Expedition.create(req.body);
    res.status(201).json(exp);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const exp = await Expedition.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(exp);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.remove = async (req, res) => {
  try {
    await Expedition.findByIdAndDelete(req.params.id);
    res.json({ message: "Expedition deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
