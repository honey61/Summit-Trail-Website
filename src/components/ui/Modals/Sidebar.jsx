
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../Style/UI/Sidebar.css";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const mainSections = [
  
    { name: "Hikes", path: "/hikes" },
    { name: "Treks", path: "/treks" },
    { name: "Expeditions", path: "/expeditions" },
    { name: "About Us", path: "/about" },
    { name: "Squad on the Summit", path: "/squad" },
    { name: "FAQ’s , Tips & Tricks", path: "/faq" },
    { name: "Careers at Summit Trails", path: "/careers" },
    { name: "Contact Us", path: "/contact" },
  ];

  const adventureActivities = [
    { name: "Rock Climbing", path: "/rock" },
    { name: "Valley Pass", path: "/valley" },
    { name: "Camping", path: "/camping" },
    { name: "Paragliding", path: "/paragliding" },
  ];

  const handleClick = (path) => {
    navigate(path); // navigate to the route
    setOpen(false); // close sidebar after click
  };

  return (
    <div className={`sidebar ${open ? "open" : ""}`}>
      <button className="sidebar-toggle" onClick={() => setOpen(!open)}>
        {open ? "×" : "☰"}
      </button>

      <div className="sidebar-content">
        <h2>Summit Trails</h2>

        <div className="sidebar-section">
          <h3>Main Sections</h3>
          <ul>
            {mainSections.map((item) => (
              <li key={item.name} onClick={() => handleClick(item.path)}>
                {item.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="sidebar-section">
          <h3>Adventure Activities</h3>
          <ul>
            {adventureActivities.map((item) => (
              <li key={item.name} onClick={() => handleClick(item.path)}>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
