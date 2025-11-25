const express = require("express");
const Booking = require("../models/Booking");
const router = express.Router();

// Create new booking
router.post("/", async (req, res) => {
  try {
    const booking = await Booking.create(req.body);
    res.json(booking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all bookings (admin)
router.get("/", async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Approve / Reject
router.put("/:id", async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(booking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
