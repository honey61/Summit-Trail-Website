

import "../../Style/Component/hero.css";
import videoFile from "./Images/video.mp4";
import AboutSection from "../sections/AboutSection.jsx";
import mountain from "./Images/mountain.jpg";
import PopulartrekSection from "../sections/PopulartrekSection.jsx";
import valley from "./Images/footer.jpg";
import WhyTrekSection from "../sections/WhyTrekSection.jsx";
import TestimonialsSection from "../sections/TestimonialsSection.jsx";
import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <div>
      {/* HERO SECTION */}
     <section className="hero-section">
  <video 
    className="hero-video" 
    autoPlay 
    loop 
    muted 
    playsInline 
    src={videoFile} 
  />
  <div className="hero-overlay">
    <div className="hero-content">
      <h1 className="hero-title animate-slide-in">
        Less Screen. More Scene.
      </h1>
      <p className="hero-subtitle animate-fade-in">
       Some moments aren't meant for screen so come live them whith us because the best moments don't happen online they happen out here .
      </p>
  <div className="hero-buttons">
  <Link to="/treks" className="glass-btn primary-btn">Explore Treks</Link>
  <Link to="/contact" className="glass-btn secondary-btn">Contact Us</Link>
</div>
    </div>
  </div>
</section>


      {/* DYNAMIC SECTIONS */}
  
        <AboutSection
          image={mountain}
          title="About Us"
        />
        <PopulartrekSection
  image={valley}
  title="Popular Treks" 
/>
        <WhyTrekSection />
        <TestimonialsSection />
      </div>
  
  );
}
