import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 👇 Add BrowserRouter with basename that matches your repo name */}
    <BrowserRouter basename="/Summit-Trail-/">
      <App />
    </BrowserRouter>
  </StrictMode>
)
