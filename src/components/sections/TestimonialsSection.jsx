import React, { useEffect, useRef } from "react";
import "../../Style/Section/TestimonialsSection.css";
import { FaStar } from "react-icons/fa";

export default function TestimonialsSection() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;

    const autoScroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += 1;
        scrollAmount += 1;
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0;
          scrollContainer.scrollLeft = 0;
        }
      }
    };

    const interval = setInterval(autoScroll, 30); // adjust speed here
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      name: "Aarav Mehta",
      photo: "https://randomuser.me/api/portraits/men/75.jpg",
      stars: 5,
      text: "An unforgettable experience! Summit Trails made me feel safe and inspired every step of the way.",
    },
    {
      name: "Riya Sharma",
      photo: "https://randomuser.me/api/portraits/women/65.jpg",
      stars: 5,
      text: "Loved the team’s energy! The guides were friendly and the group size was perfect — personal and fun.",
    },
    {
      name: "Karan Singh",
      photo: "https://randomuser.me/api/portraits/men/68.jpg",
      stars: 4,
      text: "Well-organized, beautiful trails, and amazing people. Would definitely trek again with Summit Trails.",
    },
    {
      name: "Sneha Patel",
      photo: "https://randomuser.me/api/portraits/women/71.jpg",
      stars: 5,
      text: "They really care about safety and comfort. It felt like trekking with friends, not a company!",
    },
    {
      name: "Rahul Verma",
      photo: "https://randomuser.me/api/portraits/men/85.jpg",
      stars: 5,
      text: "Everything from food to route planning was on point. Summit Trails made my first trek special.",
    },
  ];

  return (
    <section className="testimonials-section" id="testimonials">
      <h2 className="testimonials-title">What Trekkers Say</h2>
      <div className="testimonials-container" ref={scrollRef}>
        {testimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <img src={item.photo} alt={item.name} className="testimonial-photo" />
            <div className="testimonial-content">
              <h3>{item.name}</h3>
              <div className="testimonial-stars">
                {[...Array(item.stars)].map((_, i) => (
                  <FaStar key={i} color="#fbbf24" />
                ))}
              </div>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
