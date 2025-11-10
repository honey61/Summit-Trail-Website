// import "./style.css";
// import { useState, useEffect } from "react";

// export default function Populartrek({ image, title }) {
//   const allTreks = [
//     { name: "Everest Base Camp", desc: "The roof of the world adventure" },
//     { name: "Kedarkantha Trek", desc: "Snowy peaks and pine forests" },
//     { name: "Hampta Pass", desc: "High-altitude beauty of Himachal" },
//     { name: "Valley of Flowers", desc: "Nature’s colorful paradise" },
//     { name: "Sandakphu", desc: "See 4 of the 5 tallest peaks" },
//   ];

//   const [visibleTreks, setVisibleTreks] = useState([...allTreks]);
//   const [loading, setLoading] = useState(false);

//   // Infinite scroll logic
//   useEffect(() => {
//     const handleScroll = () => {
//       if (
//         window.innerHeight + window.scrollY >=
//           document.body.offsetHeight - 100 &&
//         !loading
//       ) {
//         setLoading(true);

//         // Simulate fetch delay
//         setTimeout(() => {
//           setVisibleTreks((prev) => [...prev, ...allTreks]);
//           setLoading(false);
//         }, 1000);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [loading]);

//   return (
//     <section
//       className="Populartrek-section"
//       style={{ backgroundImage: `url(${image})` }}
//     >
//       <div className="Popular-content">
//         <h1>{title}</h1>
//       </div>

//       <div className="listoftrek-content">
//         {visibleTreks.map((trek, index) => (
//           <div className="trek-card2" key={index}>
//             <div
//               className="trek-image2"
//               style={{ backgroundImage: `url(${trek.img})` }}
//             >
//               <div className="trek-title-overlay">
//                 <h3>{trek.name}</h3>
//               </div>
//             </div>
//             <div className="trek-info">
//               <p>{trek.desc}</p>
//               <button className="explore-btn">Explore</button>
//             </div>
//           </div>
//         ))}

//         {loading && <p className="loading-text">Loading more treks...</p>}
//       </div>
//     </section>
//   );
// }


import "./style.css";
import { FaStar } from "react-icons/fa";

export default function  Populartrek(image, title) {
  const tours = [

    {
      image: "https://i.ytimg.com/vi/Vx0KWccKsN8/maxresdefault.jpg",
      name: "Kedarkantha Trek",
      desc: "Snowy peaks and pine forests.",
      price: 499,
      rating: 4.8,
      reviews: "9,527 reviews",
      btn: "Explore"
    },
    {
      image: "https://i0.wp.com/banzaras.in/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-24-at-13.38.04.jpeg?fit=800%2C450&ssl=1",
      name: "Hampta Pass",
      desc: "High-altitude beauty of Himachal.",
      price: 699,
      rating: 4.7,
      reviews: "8,915 reviews",
      btn: "Explore"
    },
    {
      image: "https://www.trekupindia.com/wp-content/uploads/2024/05/uttrakhand-valley-of-flowers-trek-1024x576.webp",
      name: "Valley of Flowers",
      desc: "Nature’s colorful paradise.",
      price: 599,
      rating: 4.85,
      reviews: "10,214 reviews",
      btn: "Explore"
    },
    {
      image: "https://himtrek.co.in/wp-content/uploads/2025/10/Sandakphu-Trek.webp",
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
