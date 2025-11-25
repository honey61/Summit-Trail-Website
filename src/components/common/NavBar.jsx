
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "../../Style/Component/nav.css";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation(); // to highlight the active link

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-left">
          <div className="logo">
            <Link to="/" className="logo-link" onClick={handleScrollToTop}>
              Summit Trails
            </Link>
          </div>

          <nav className="nav-links">
            {[
              { to: "/", label: "Home" },
              { to: "/treks", label: "Treks" },
              { to: "/hikes", label: "Hikes" },
              { to: "/expeditions", label: "Expeditions" },
              { to: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={handleScrollToTop}
                className={`nav-btn ${
                  location.pathname === link.to ? "active" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <a
          href="mailto:team.summittrails@gmail.com"
          className="enquire-btn"
        >
          Enquire Now
        </a>
      </div>
    </header>
  );
}
