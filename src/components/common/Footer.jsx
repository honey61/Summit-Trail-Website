import { useState } from "react";
import "../../Style/Component/footer.css";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaTiktok,
  FaTelegramPlane,
} from "react-icons/fa";

export default function Footer() {
  const [showBox, setShowBox] = useState(false);
  const phoneNumber = "+91 98765 43210";

  const handleCallClick = () => {
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isMobile) {
      // Open phone dialer on mobile
      window.location.href = `tel:${phoneNumber.replace(/\s+/g, "")}`;
    } else {
      // Show popup on desktop
      setShowBox(true);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-overlay">
        <div className="footer-container">
          {/* Left section */}
          <div className="footer-brand">
            <h2 className="footer-logo">
              <span className="highlight">Summit</span>Trails
            </h2>
            <p>
              We help people explore the mountains. We give unforgettable
              adventures and lifelong memories.
            </p>

            {/* Call button */}
            <button className="call-button" onClick={handleCallClick}>
              Talk to our team
            </button>

            {/* Popup box for desktop */}
            {showBox && (
              <div className="call-popup">
                <p>📞 Call us at:</p>
                <h3>{phoneNumber}</h3>
                <button
                  className="close-popup"
                  onClick={() => setShowBox(false)}
                >
                  Close
                </button>
              </div>
            )}
          </div>

          {/* Links */}
          <div className="footer-links">
            <div className="footer-column">
              <h3>For Travelers</h3>
              <ul>
                <li>Tours</li>
                <li>Trekking</li>
                <li>Gallery</li>
                <li>Packages</li>
                <li>Reviews</li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>About Us</h3>
              <ul>
                <li>Our Story</li>
                <li>Founder</li>
                <li>Philosophy</li>
                <li>Safety</li>
                <li>Contact</li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Contacts</h3>
              <ul>
                <li>Phone</li>
                <li>Support</li>
                <li>Email</li>
                <li>Address</li>
              </ul>
            </div>

            {/* Socials */}
            <div className="footer-column">
              <h3>Social</h3>
              <div className="social-icons">
                <FaFacebookF />
                <FaInstagram />
          
                <FaYoutube />
              
              </div>

             
            </div>
          </div>
        </div>
      </div>
      <p className="footer-bottom">© 2025 Summit Trails. All rights reserved.</p>
    </footer>
  );
}
