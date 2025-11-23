import React, { useEffect, useState } from "react";
import api from "../api";

import "../Style/Admin/Bookings.css";

export default function Bookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    api.get("/bookings").then((res) => setBookings(res.data));
  }, []);

  function updateStatus(id, status) {
    api.put("/bookings/" + id, { status }).then((res) => {
      setBookings(bookings.map(b => b._id === id ? res.data : b));
    });
  }

  return (
    <div className="admin-page">
      <h1>Bookings</h1>

      {bookings.map((b) => (
        <div key={b._id} className="booking-card">
          <h3>{b.trekTitle}</h3>
          <p><b>Name:</b> {b.name}</p>
          <p><b>Email:</b> {b.email}</p>
          <p><b>Phone:</b> {b.phone}</p>
          <p><b>People:</b> {b.numberOfPeople}</p>
          <p><b>Date:</b> {b.date}</p>
          <p><b>Status:</b> {b.status}</p>

          <button onClick={() => updateStatus(b._id, "approved")}>
            Approve
          </button>

          <button onClick={() => updateStatus(b._id, "rejected")}>
            Reject
          </button>
        </div>
      ))}
    </div>
  );
}
