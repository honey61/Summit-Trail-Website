import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/common/NavBar";
import Hero from "./components/common/Hero";
import Footer from "./components/common/Footer";
import SplashScreen from "./components/common/SplashScreen";
import PopulartrekSection from "./components/sections/PopulartrekSection";
import "./App.css";

export default function App() {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <div className="app-root">

        <div className="min-h-screen bg-gray-50 text-gray-900">
          {/* <Sidebar /> */}
          <NavBar />
          <main>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Hero />
                    <Footer />
                  </>
                }
              />
              {/* <Route path="/treks" element={<TreksSection />} />
              <Route path="/treks/:id" element={<TrekDetails />} />
              <Route path="/expeditions" element={<ExpeditionsSection />} />
              <Route path="/hikes" element={<HikesSection />} />
              <Route path="/contact" element={<ContactSection />} /> */}
            </Routes>
          </main>
        </div>


      {/* ✅ Splash overlay sits on top, fades away smoothly */}
      <SplashScreen onFinish={() => setSplashDone(true)} hidden={splashDone} />
    </div>
  );
}
