const Trek = require('../models/Trek');

exports.list = async (req, res) => {
  try {
    const treks = await Trek.find().sort({ createdAt: -1 });
    res.json(treks);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};


exports.get = async (req,res) => {
  try {
    const trek = await Trek.findById(req.params.id);
    res.json(trek);
  } catch (err) { res.status(500).json({ message: 'Server error' }); }
};

exports.create = async (req,res) => {
  try {
    const data = req.body;
    const trek = new Trek(data);
    await trek.save();
    res.json(trek);
  } catch (err) { res.status(500).json({ message: 'Server error', error: err.message }); }
};

exports.update = async (req,res) => {
  try {
    const trek = await Trek.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(trek);
  } catch (err) { res.status(500).json({ message: 'Server error' }); }
};

exports.remove = async (req,res) => {
  try {
    await Trek.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted' });
  } catch (err) { res.status(500).json({ message: 'Server error' }); }
};

exports.featured = async (req, res) => {
  try {
    const treks = await Trek.find({ featured: true }).sort({ createdAt: -1 });
    res.json(treks);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

