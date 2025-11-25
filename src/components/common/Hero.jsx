import { useState, useEffect } from "react";
import "../../Style/Component/hero.css";
import videoFile from "./Images/video.mp4";

import AboutSection from "../sections/AboutSection.jsx";
import mountain from "./Images/mountain.jpg";
import PopulartrekSection from "../sections/PopulartrekSection.jsx";
import valley from "./Images/footer.jpg";
import WhyTrekSection from "../sections/WhyTrekSection.jsx";
import TestimonialsSection from "../sections/TestimonialsSection.jsx";

import { Link } from "react-router-dom";
import TrekFinderTool from "../Tool/TrekFinderTool.jsx";

export default function Hero() {
  const [showMenu, setShowMenu] = useState(false);

  // NEW ➜ State for Trek Finder Tool
  const [openTrekFinder, setOpenTrekFinder] = useState(false);

  useEffect(() => {
    const handleClick = (e) => {
      if (
        !e.target.closest(".dropdown-btn") &&
        !e.target.closest(".dropdown-menu")
      ) {
        setShowMenu(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div>
      {/* HERO SECTION */}
      <section className="hero-section">
        <video
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
          src={videoFile}
        />

        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title animate-slide-in">
              Less Screen. More Scene.
            </h1>

            <p className="hero-subtitle animate-fade-in">
              Some moments aren't meant for screen so come live them with us
              because the best moments don't happen online — they happen out
              here.
            </p>

            {/* HERO BUTTONS */}
            <div className="hero-buttons">
              <Link to="/treks" className="glass-btn primary-btn">
                Explore Treks
              </Link>

              <button
                className="glass-btn secondary-btn dropdown-btn"
                onClick={() => setShowMenu(!showMenu)}
              >
                Book Now ▾
              </button>

              {/* NEW BUTTON for Trek Finder Tool */}
              <button
                className="glass-btn primary-btn"
                onClick={() => setOpenTrekFinder(true)}
              >
                Find My Trek
              </button>
            </div>

            {/* DROPDOWN MENU */}
            <div className={`dropdown-menu ${showMenu ? "show" : ""}`}>
              <Link to="/treks" className="dropdown-item">Trek</Link>
              <Link to="/hikes" className="dropdown-item">Hike</Link>
              <Link to="/expedition" className="dropdown-item">Expedition</Link>
              <Link to="/paragliding" className="dropdown-item">Paragliding</Link>
              <Link to="/rock-climbing" className="dropdown-item">Rock Climbing</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SHOW TREK FINDER TOOL WHEN OPEN */}
      {openTrekFinder && (
        <TrekFinderTool onClose={() => setOpenTrekFinder(false)} />
      )}

      {/* WEBSITE SECTIONS */}
      <AboutSection image={mountain} title="About Us" />
      <PopulartrekSection image={valley} title="Popular Treks" />
      <WhyTrekSection />
      <TestimonialsSection />
    </div>
  );
}
