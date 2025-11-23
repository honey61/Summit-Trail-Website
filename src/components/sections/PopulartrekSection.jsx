import { useEffect, useState } from "react";
import "../../Style/Section/Populartrek.css";
import { FaStar } from "react-icons/fa";

export default function PopulartrekSection() {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/treks")
      .then((res) => res.json())
      .then((data) => {
        // Only take top 4 treks OR featured treks
        const popular = data.slice(0, 4);
        setTours(popular);
      })
      .catch((err) => console.log("Error loading treks:", err));
  }, []);

  return (
    <section className="tours-section">
      <div className="tours-header">
        <h2>Popular Trek</h2>
      </div>

      <div className="tours-grid">
        {tours.map((tour, i) => (
          <div className="tour-card" key={tour._id || i}>
            
            <div className="tour-image">
              {/* Cloudinary image OR static image */}
              <img src={tour.image} alt={tour.title} />
            </div>

            <div className="tour-info">
              <h3>{tour.title}</h3>
              <p>{tour.description?.slice(0, 80) || "No description"}</p>

              <div className="tour-price">
                <strong>{tour.pricePerPerson || 0}</strong>
                <span>/person</span>
              </div>

              <button className="tour-btn">Explore</button>

              <div className="tour-rating">
                <FaStar className="star" />
                <span>{tour.rating || 4.8}</span>
                <p>{tour.reviews || "5000+ reviews"}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
