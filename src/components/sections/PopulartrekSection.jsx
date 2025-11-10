
import "../../Style/Section/Populartrek.css";
import { FaStar } from "react-icons/fa";

export default function  PopulartrekSection(image, title) {
  const tours = [

    {
      image: "https://uttarakhandtriptrek.com/wp-content/uploads/2023/11/Snapinsta.app_293175459_581754693537885_5742373109704896684_n_1024.jpg",
      name: "Kedarnath Trek",
      desc: "Snowy peaks and pine forests.",
      price: 499,
      rating: 4.8,
      reviews: "9,527 reviews",
      btn: "Explore"
    },
    {
      image: "/images/hampta.jpg",
      name: "Hampta Pass",
      desc: "High-altitude beauty of Himachal.",
      price: 699,
      rating: 4.7,
      reviews: "8,915 reviews",
      btn: "Explore"
    },
        {
      image: "/images/valley.jpg",
      name: "Valley of Flowers",
      desc: "Nature’s colorful paradise.",
      price: 599,
      rating: 4.85,
      reviews: "10,214 reviews",
      btn: "Explore"
    },
    {
      image: "/images/sandakphu.jpg",
      name: "Sandakphu",
      desc: "See 4 of the 5 tallest peaks.",
      price: 799,
      rating: 4.9,
      reviews: "11,032 reviews",
      btn: "Explore"
    }
  ];

  return (
    <section className="tours-section">
      <div className="tours-header">
        <h2>Popular Trek</h2>
    
      </div>

      <div className="tours-grid">
        {tours.map((tour, i) => (
          <div className="tour-card" key={i}>
            <div className="tour-image">
              <img src={tour.image} alt={tour.name} />
            </div>
            <div className="tour-info">
              <h3>{tour.name}</h3>
              <p>{tour.desc}</p>
              <div className="tour-price">
                <strong>{tour.price}</strong>
                <span>/week</span>
              </div>
              <button className="tour-btn">{tour.btn}</button>
              <div className="tour-rating">
                <FaStar className="star" />
                <span>{tour.rating}</span>
                <p>{tour.reviews}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
