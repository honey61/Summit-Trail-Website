import React, { useEffect, useState } from 'react';
import api from '../api';
import { Link } from 'react-router-dom';
import "../Style/Admin/Dashboard.css";

export default function Dashboard(){
  const [treks,setTreks] = useState([]);
  const [bookings,setBookings] = useState([]);

  useEffect(()=>{
    async function load(){
      const t = await api.get('/treks');
      setTreks(t.data);
      try {
        const b = await api.get('/bookings');
        setBookings(b.data);
      } catch(e){}
    }
    load();
  },[]);

  return (
    <div className="admin-page">
      <header>
        <h1>Dashboard</h1>
        <nav>
          <Link to="/treks">Treks</Link> | <Link to="/bookings">Bookings</Link>
        </nav>
      </header>

      <section>
        <h2>Quick Stats</h2>
        <div className="stats">
          <div className="stat">
            <strong>{treks.length}</strong>
            <span>Treks</span>
          </div>
          <div className="stat">
            <strong>{bookings.length}</strong>
            <span>Bookings</span>
          </div>
        </div>
      </section>
    </div>
  );
}
