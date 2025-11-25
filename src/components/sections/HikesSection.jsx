

import React, { useState, useEffect } from "react";
import { TREKS } from "../../data/treks";
import "../../Style/Section/TreksSection.css";
import Footer from "../common/Footer";
import videoFile from "../common/Images/video.mp4";
import DetailSection from "./DetailSection";

export default function  HikesSection() {
  const [filter, setFilter] = useState("all");
  const [selectedTrek, setSelectedTrek] = useState(null);

  const filtered = TREKS.filter(
    (t) => filter === "all" || t.difficulty.toLowerCase().includes(filter)
  );

  /* ---------- Scroll Animation Logic ---------- */
  useEffect(() => {
    const cards = document.querySelectorAll(".trek-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    cards.forEach((card, i) => {
      card.style.animationDelay = `${i * 0.10}s`;
      observer.observe(card);
    });
  }, [filtered]);

  if (selectedTrek) {
    return <DetailSection trek={selectedTrek} onBack={() => setSelectedTrek(null)} />;
  }

  return (
    <div>
      {/* -------- VIDEO SECTION -------- */}
      <section className="treks-video-section">
        <video className="treks-video" src={videoFile} autoPlay loop muted playsInline />
        <div className="treks-video-overlay">
          <h1 className="treks-video-title">All Treks</h1>
          <p className="treks-video-subtitle">
            Some walks change your day and some change your life...
          </p>
        </div>
      </section>

      <div className="treks-page">
        {/* -------- FILTER -------- */}
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

        {/* -------- TREKS GRID -------- */}
        <div className="treks-grid">
          {filtered.map((t, index) => (
            <div className="trek-card" key={index}>
              <div className="trek-image-container">
                <img
                  src={t.image?.[0] || "/images/default-trek.jpg"}
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

                <button className="detail-btn" onClick={() => setSelectedTrek(t)}>
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
