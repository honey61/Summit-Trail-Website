const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema(
  {
    trekId: { type: mongoose.Schema.Types.ObjectId, ref: "Trek", required: true },
    trekTitle: { type: String, required: true },

    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },

    numberOfPeople: { type: Number, required: true },
    date: { type: String, required: true },

    message: { type: String },

    status: { 
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Booking", BookingSchema);
