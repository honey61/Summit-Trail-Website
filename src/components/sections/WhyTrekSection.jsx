
import React, { useEffect, useRef } from "react";
import { FaHiking, FaUsers, FaShieldAlt, FaMapMarkedAlt, FaMountain } from "react-icons/fa";
import "../../Style/Section/WhyTrekSection.css";

export default function WhyTrekSection() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 } // triggers when 20% of card visible
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const reasons = [
    {
      icon: <FaHiking />,
      title: "Experienced & Caring Guides",
      desc: "Our trek leaders are not just skilled — they genuinely care and ensure everyone feels safe and confident.",
    },
    {
      icon: <FaUsers />,
      title: "Small Groups, Real Connections",
      desc: "We keep our groups small so each trek feels personal — more bonding, more laughter, and zero crowd stress.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Safety First, Always",
      desc: "We follow strict safety standards — from equipment checks to altitude precautions — your well-being comes first.",
    },
    {
      icon: <FaMapMarkedAlt />,
      title: "Trails We Know by Heart",
      desc: "We only trek routes we’ve explored ourselves — no guesswork, just scenic, well-tested trails you can trust.",
    },
    {
      icon: <FaMountain />,
      title: "Treks for Every Dreamer",
      desc: "Whether you’re new or experienced, there’s a Summit Trail waiting for you — easy, moderate, or challenging.",
    },
  ];

  return (
    <section className="why-trek-section" id="why-trek">
      <div className="why-trek-container">
        <h2 className="why-trek-title">Why Trek with Summit Trails</h2>
        <div className="why-trek-grid">
          {reasons.map((item, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="why-trek-card hidden"
            >
              <div className="icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
