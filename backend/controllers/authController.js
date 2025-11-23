const Admin = require('../models/Admin');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.login = async (req,res) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email });
    if(!admin) return res.status(401).json({ message: 'Invalid credentials' });
    const valid = await bcrypt.compare(password, admin.passwordHash);
    if(!valid) return res.status(401).json({ message: 'Invalid credentials' });
    const token = jwt.sign({ id: admin._id, email: admin.email }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.json({ token, email: admin.email });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.changePassword = async (req,res) => {
  try {
    const { oldPassword, newPassword } = req.body;
    const admin = await Admin.findById(req.admin.id);
    if(!admin) return res.status(404).json({ message: 'Not found' });
    const ok = await bcrypt.compare(oldPassword, admin.passwordHash);
    if(!ok) return res.status(400).json({ message: 'Old password wrong' });
    const salt = await bcrypt.genSalt(10);
    admin.passwordHash = await bcrypt.hash(newPassword, salt);
    await admin.save();
    res.json({ message: 'Password changed' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
