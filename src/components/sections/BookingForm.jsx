import React, { useState } from "react";
import "../../Style/Section/BookingForm.css";
import api from "../../../admin/src/api";

export default function BookingForm({ trek, onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    numberOfPeople: 1,
    date: "",
    message: "",
  });

  const [success, setSuccess] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function submit(e) {
    e.preventDefault();

    try {
      const res = await api.post("/bookings", {
        trekId: trek._id,
        trekTitle: trek.title,
        name: form.name,
        email: form.email,
        phone: form.phone,
        numberOfPeople: form.numberOfPeople,
        date: form.date,
        message: form.message,
      });

      setSuccess("Your booking request has been submitted!");

      setTimeout(() => {
        onClose();
        setSuccess("");
      }, 1500);

    } catch (err) {
      console.error(err);
      alert("Failed to submit booking. Try again.");
    }
  }

  return (
    <div className="booking-overlay">
      <div className="booking-popup">
        <button className="booking-close" onClick={onClose}> ✕ </button>

        <h2 className="booking-title">Book {trek.title}</h2>
        <p className="booking-subtitle">Fill in the details below and our team will contact you!</p>

        {success && <p className="success-message">{success}</p>}

        <form className="booking-form" onSubmit={submit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            value={form.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            value={form.email}
            onChange={handleChange}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            value={form.phone}
            onChange={handleChange}
          />

          <div className="booking-row">
            <input
              type="number"
              name="numberOfPeople"
              min="1"
              placeholder="No. of Persons"
              required
              value={form.numberOfPeople}
              onChange={handleChange}
            />

            <input
              type="date"
              name="date"
              required
              value={form.date}
              onChange={handleChange}
            />
          </div>

          <textarea
            name="message"
            rows="3"
            placeholder="Additional message (optional)"
            value={form.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit" className="booking-submit">
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
}
