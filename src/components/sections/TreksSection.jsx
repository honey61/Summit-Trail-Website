import React, { useState, useEffect } from "react";
import "../../Style/Section/TreksSection.css";
import Footer from "../common/Footer";
import videoFile from "../common/Images/video.mp4";
import DetailSection from "./DetailSection";
import api from "../../../admin/src/api";

export default function TreksSection() {
  const [treks, setTreks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [selectedTrek, setSelectedTrek] = useState(null);

  /* ---------- Load Treks From Backend ---------- */
  useEffect(() => {
    api.get("/treks")
      .then(res => setTreks(res.data))
      .catch(err => console.log("Error loading treks:", err));
  }, []);

  /* ---------- Filter Logic ---------- */
  const filtered = treks.filter(
    t => filter === "all" || t.difficulty?.toLowerCase().includes(filter)
  );

  /* ---------- Scroll Animation Logic ---------- */
  useEffect(() => {
    const cards = document.querySelectorAll(".trek-card");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
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

  /* ---------- Detail View ---------- */
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
            onChange={e => setFilter(e.target.value)}
            className="filter-select"
          >
            <option value="all">All</option>
            <option value="easy">Easy</option>
            <option value="moderate">Moderate</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        {/* -------- TREKS GRID -------- */}
        <div className="treks-grid">
          {filtered.map((t, index) => (
            <div className="trek-card" key={t._id || index}>
              <div className="trek-image-container">
                <img
                  src={
                    t.image?.startsWith("http")
                      ? t.image
                      : `/${t.image}`
                  }
                  alt={t.title}
                  className="trek-image"
                />
              </div>

              <div className="trek-card-details">
                <h2 className="trek-title">{t.title}</h2>
                <p><strong>Region:</strong> {t.region}</p>
                <p><strong>Difficulty:</strong> {t.difficulty}</p>
                <p><strong>Duration:</strong> {t.durationDays} days</p>

                <p className="trek-about">
                  {t.description?.slice(0, 100)}...
                </p>

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
