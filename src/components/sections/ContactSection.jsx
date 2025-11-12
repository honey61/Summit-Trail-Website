import React from "react";
import "../../Style/Section/ContactSection.css";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactSection() {
  return (
    <>
      {/* ==========================
           Top Banner Image Section
      ========================== */}
      <div className="contact-banner">
        <img
          src="https://th.bing.com/th/id/OIP.76b01OL4urziz-1jl3E52gHaEu?w=309&h=197&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1"
          alt="Contact Banner"
          className="contact-banner-img"
        />
        <div className="contact-banner-overlay"></div>
        <h1 className="contact-banner-text">Contact Us</h1>
      </div>

      {/* ==========================
           Main Contact Section
      ========================== */}
      <section className="modern-contact-section" id="contact">
        <div className="contact-overlay">
          <div className="contact-container">
            {/* Left side: Info */}
            <div className="contact-info">
              <h2 className="contact-heading">Let’s Connect</h2>
              <p className="contact-text">
                Have questions about our treks, expeditions, or collaborations?
                We’d love to hear from you. Reach out anytime, and our team will
                get back to you shortly.
              </p>

              <div className="contact-details">
                <div className="contact-detail">
                  <FaEnvelope className="contact-icon" />
                  <div>
                    <h4>Email</h4>
                    <p>team.summittrails@gmail.com</p>
                  </div>
                </div>

                <div className="contact-detail">
                  <FaPhoneAlt className="contact-icon" />
                  <div>
                    <h4>Phone / WhatsApp</h4>
                    <p>+91 70608 24379</p>
                  </div>
                </div>

                <div className="contact-detail">
                  <FaMapMarkerAlt className="contact-icon" />
                  <div>
                    <h4>Address</h4>
                    <p>Dehradun, Uttarakhand, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side: Form */}
            <div className="contact-form">
              <h3>Send us a Message</h3>
              <form>
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea placeholder="Your Message" rows="5" required></textarea>
                <button type="submit" className="send-btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
