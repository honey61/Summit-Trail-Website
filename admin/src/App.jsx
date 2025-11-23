import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Treks from './pages/Treks';
import TrekForm from './pages/TrekForm';
import Bookings from './pages/Bookings';
import api, { setToken } from './api';

function App(){
  const [token, setLocalToken] = useState(localStorage.getItem('adminToken'));

  useEffect(() => {
    if (token) setToken(token);
  }, [token]);

  return (
    <Routes>
      <Route path="/login" element={<Login onLogin={(t)=>{ setLocalToken(t); localStorage.setItem('adminToken', t); setToken(t); }} />} />
      <Route path="/" element={ token ? <Dashboard /> : <Navigate to="/login" /> } />
      <Route path="/treks" element={ token ? <Treks /> : <Navigate to="/login" /> } />
      <Route path="/treks/new" element={ token ? <TrekForm /> : <Navigate to="/login" /> } />
      <Route path="/treks/edit/:id" element={ token ? <TrekForm edit={true} /> : <Navigate to="/login" /> } />
      <Route path="/bookings" element={ token ? <Bookings /> : <Navigate to="/login" /> } />
    </Routes>
  );
}

export default App;
