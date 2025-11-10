import "../../Style/Section/about.css";
import { FaMountain, FaLeaf, FaHiking } from "react-icons/fa";

export default function AboutSection({ image, title }) {
  const aboutItems = [
    {
      icon: <FaMountain />,
      heading: "Our Story",
      text: [
        "Summit Trails started in 2025 with a simple idea — to make the mountains feel like home.",
          "What began as weekend escapes among friends soon grew into a mission to guide adventurers",
          "safely through some of the most breathtaking trails across the Himalayas and beyond.",
      ]
    },
    {
      icon: <FaLeaf />,
      heading: "Our Philosophy",
      text: [
        " We believe in slow travel, savouring meaningful moments, and leaving the wild exactly as we found it.",
      ],

    },
    {
      icon: <FaHiking />,
      heading: "ABOUT THE FOUNDER",
      text: [
        " For Mr. Ashvin Gurung, Summit Trails is more than just a company. It’s his breakout, his brainchild, and his escape to the beautiful life in the mountains.",
        " While others rushed through city life, he always found his peace in the stillness of pine forests, the crunch of gravel underfoot, and the quiet power of distant snow-capped peaks."
      ]
    }
  ];

  return (
    <section
      className="about-section"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="overlay"></div>
      <div className="about-container">
        <h1 className="about-title">{title}</h1>

        <div className="about-grid">
          {aboutItems.map((item, index) => (
            <div key={index} className="about-card">
              <div className="icon">{item.icon}</div>
              <h2>{item.heading}</h2>
              {item.text.map((t, i) => (
                <p key={i}>{t}</p>
              ))}
              {item.link && <a href="#" className="about-link">{item.link}</a>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
// }
