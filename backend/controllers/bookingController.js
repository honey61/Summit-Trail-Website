const Booking = require('../models/Booking');
const Trek = require('../models/Trek');

exports.create = async (req,res) => {
  try {
    const data = req.body;
    const trek = data.trekId ? await Trek.findById(data.trekId) : null;
    const booking = new Booking({
      ...data,
      trekName: trek ? trek.title : (data.trekName || '')
    });
    await booking.save();
    res.json(booking);
  } catch (err) { res.status(500).json({ message: 'Server error' }); }
};

exports.list = async (req,res) => {
  try {
    const bookings = await Booking.find().populate('trekId').sort({ createdAt: -1 });
    res.json(bookings);
  } catch (err) { res.status(500).json({ message: 'Server error' }); }
};
