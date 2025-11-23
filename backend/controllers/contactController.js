const Contact = require('../models/Contact');

exports.create = async (req,res) => {
  try {
    const c = new Contact(req.body);
    await c.save();
    res.json(c);
  } catch (err) { res.status(500).json({ message: 'Server error' }); }
};

exports.list = async (req,res) => {
  try {
    const list = await Contact.find().sort({ createdAt: -1 });
    res.json(list);
  } catch (err) { res.status(500).json({ message: 'Server error' }); }
};
