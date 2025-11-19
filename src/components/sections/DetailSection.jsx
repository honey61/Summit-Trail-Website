import React, { useEffect, useState } from "react";
import "../../Style/Section/DetailSection.css";
import { MapPin, Mountain, Gauge } from "lucide-react";

export default function DetailSection({ trek, onBack }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showEnquiry, setShowEnquiry] = useState(false);
  const images = Array.isArray(trek.image) ? trek.image : [trek.image];

  // Auto-slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="trek-detail-page">
      {/* Hero Image Section */}
      <div className="trek-hero">
        <button className="back-btn" onClick={onBack}>← Back</button>
        <img
          src={images[currentIndex] || "/images/default-trek.jpg"}
          alt={trek.name}
          className="trek-hero-image"
        />
        <div className="trek-name-overlay">{trek.name}</div>
      </div>

      {/* Trek Info Section (now fixed in front) */}
      <div className="trek-info-card">
        <div className="trek-info-item">
          <Mountain size={18} />
          <div>
            <strong>Altitude:</strong> {trek.altitude}
          </div>
        </div>
        <div className="trek-info-item">
          <MapPin size={18} />
          <div>
            <strong>Region:</strong> {trek.region}
          </div>
        </div>
        <div className="trek-info-item">
          <Gauge size={18} />
          <div>
            <strong>Difficulty:</strong> {trek.difficulty}
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="trek-content">
        <h3>About the Trek</h3>
        <p>{trek.about}</p>

        {trek.highlights && trek.highlights.length > 0 && (
          <>
            <h3>Highlights</h3>
            <div className="highlight-tags">
              {trek.highlights.map((h, i) => (
                <span key={i} className="highlight-tag">{h}</span>
              ))}
            </div>
          </>
        )}

        <h3>Description</h3>
        <p>{trek.description}</p>

        {/* Enquire Button */}
        <button className="enquire-btn" onClick={() => setShowEnquiry(true)}>
          Enquire
        </button>
      </div>

      {/* Enquiry Modal */}
      {showEnquiry && (
        <div className="enquiry-modal">
          <div className="enquiry-modal-content">
            <h2>Enquire about {trek.name}</h2>
            <form>
              <label>Name</label>
              <input type="text" placeholder="Your Name" required />
              <label>Email</label>
              <input type="email" placeholder="Your Email" required />
              <label>Message</label>
              <textarea placeholder="Your Message" required />
              <button type="submit">Submit</button>
              <button
                type="button"
                className="close-btn"
                onClick={() => setShowEnquiry(false)}
              >
                Close
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
