import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Treks from './pages/Treks';
import TrekForm from './pages/TrekForm';
import Bookings from './pages/Bookings';
import api, { setToken } from './api';
<<<<<<< HEAD
=======
import Leads from './pages/Leads';
import LeadForm from './pages/LeadForm';
>>>>>>> master

function App(){
  const [token, setLocalToken] = useState(localStorage.getItem('adminToken'));

  useEffect(() => {
    if (token) setToken(token);
  }, [token]);

  return (
    <Routes>
<<<<<<< HEAD
=======
        <Route path="/dashboard" element={ token ? <Dashboard /> : <Navigate to="/login" /> } />
>>>>>>> master
      <Route path="/login" element={<Login onLogin={(t)=>{ setLocalToken(t); localStorage.setItem('adminToken', t); setToken(t); }} />} />
      <Route path="/" element={ token ? <Dashboard /> : <Navigate to="/login" /> } />
      <Route path="/treks" element={ token ? <Treks /> : <Navigate to="/login" /> } />
      <Route path="/treks/new" element={ token ? <TrekForm /> : <Navigate to="/login" /> } />
      <Route path="/treks/edit/:id" element={ token ? <TrekForm edit={true} /> : <Navigate to="/login" /> } />
      <Route path="/bookings" element={ token ? <Bookings /> : <Navigate to="/login" /> } />
<<<<<<< HEAD
=======
      <Route path="/lead" element={ token ? <Leads /> : <Navigate to="/login" />} />
<Route path="/lead/:id" element={ token ? <LeadForm /> : <Navigate to="/login" />} />

>>>>>>> master
    </Routes>
  );
}

export default App;
