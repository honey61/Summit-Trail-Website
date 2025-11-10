import React, { useState } from "react";
import { TREKS } from "../../data/treks";
import "./style.css";
import Footer from "../common/Footer";
import TrekDetails from "./TrekDetails";
import videoFile from "../common/video.mp4"; 

export default function TreksSection() {
  const [filter, setFilter] = useState("all");
  const [selectedTrek, setSelectedTrek] = useState(null); // stores selected trek

  const filtered = TREKS.filter(
    (t) => filter === "all" || t.difficulty.toLowerCase().includes(filter)
  );

  // when detail view is active, show TrekDetails component
  if (selectedTrek) {
    return <TrekDetails trek={selectedTrek} onBack={() => setSelectedTrek(null)} />;
  }

  return (
    <div>
      {/* ---------- VIDEO SECTION (shared video) ---------- */}
      <section className="treks-video-section">
        <video
          className="treks-video"
          src={videoFile}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="treks-video-overlay">
          <h1 className="treks-video-title">All Treks</h1>
          <p className="treks-video-subtitle">
            Some walks change your day and some change your life. At Summit Trails,
          we take you on treks that do both. Whether you're stepping into the forest
          for the first time or heading up to high-altitude meadows, there's something
          for every kind of explorer.
          </p>
        </div>
      </section>
      <div className="treks-page">

        <div className="treks-filter-container">
          <label className="filter-label">Filter:</label>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="filter-select"
          >
            <option value="all">All</option>
            <option value="easy">Easy</option>
            <option value="easy–moderate">Easy–Moderate</option>
            <option value="moderate">Moderate</option>
            <option value="moderate–challenging">Moderate–Challenging</option>
            <option value="challenging">Challenging</option>
            <option value="very challenging">Very Challenging</option>
          </select>
        </div>

        <div className="treks-grid">
          {filtered.map((t, index) => (
            <div className="trek-card" key={index}>
              <div className="trek-image-container">
               <img
  src={t.image && t.image.length > 0 ? t.image[0] : "/images/default-trek.jpg"}
  alt={t.name}
  className="trek-image"
/>

              </div>
              <div className="trek-card-details">
                <h2 className="trek-title">{t.name}</h2>
                <p><strong>Altitude:</strong> {t.altitude}</p>
                <p><strong>Region:</strong> {t.region}</p>
                <p><strong>Difficulty:</strong> {t.difficulty}</p>
                <p><strong>Best Time:</strong> {t.bestTime}</p>
                <p className="trek-about">{t.about}</p>

                <button
                  className="detail-btn"
                  onClick={() => setSelectedTrek(t)}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
