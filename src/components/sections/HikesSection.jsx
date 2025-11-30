import React, { useState, useEffect } from "react";
import "../../Style/Section/TreksSection.css";
import Footer from "../common/Footer";
import videoFile from "../common/Images/video.mp4";
import DetailSection from "./DetailSection";
import api from "../../../admin/src/api";// FIXED PATH

export default function HikesSection() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState(null);

  /* ---------- Load Hikes ---------- */
  useEffect(() => {
    api.get("/hikes/featured")
      .then(res => setItems(res.data))
      .catch(err => console.log("Error loading hikes:", err));
  }, []);

  /* ---------- Filter ---------- */
  const filtered = items.filter(
    t => filter === "all" || t.difficulty?.toLowerCase().includes(filter)
  );

  /* ---------- Scroll Animation ---------- */
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
      card.style.animationDelay = `${i * 0.1}s`;
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, [filtered]);

  /* ---------- Detail View ---------- */
  if (selected) {
    return <DetailSection trek={selected} onBack={() => setSelected(null)} />;
  }

  return (
    <div>
      <section className="treks-video-section">
        <video className="treks-video" src={videoFile} autoPlay loop muted playsInline />
        <div className="treks-video-overlay">
          <h1 className="treks-video-title">All Hikes</h1>
        </div>
      </section>

      <div className="treks-page">

        {/* FILTER */}
        <div className="treks-filter-container">
          <label className="filter-label">Filter:</label>
          <select value={filter} onChange={e => setFilter(e.target.value)} className="filter-select">
            <option value="all">All</option>
            <option value="easy">Easy</option>
            <option value="moderate">Moderate</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        {/* GRID */}
        <div className="treks-grid">
          {filtered.map((t, index) => (
            <div className="trek-card" key={t._id || index}>
              <div className="trek-image-container">
                <img
                  src={t.image || "/images/default-trek.jpg"}
                  alt={t.title}
                  className="trek-image"
                />
              </div>

              <div className="trek-card-details">
                <h2 className="trek-title">{t.title}</h2>

                {t.location && <p><strong>Location:</strong> {t.location}</p>}
                {t.distance && <p><strong>Distance:</strong> {t.distance}</p>}
                {t.duration && <p><strong>Duration:</strong> {t.duration}</p>}
                {t.difficulty && <p><strong>Difficulty:</strong> {t.difficulty}</p>}

                {t.description && (
                  <p className="trek-about">{t.description.slice(0, 100)}...</p>
                )}

                <button className="detail-btn" onClick={() => setSelected(t)}>
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
