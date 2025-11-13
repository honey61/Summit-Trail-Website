

import "../../Style/Component/hero.css";
import videoFile from "./Images/video.mp4";
import AboutSection from "../sections/AboutSection.jsx";
import mountain from "./Images/mountain.jpg";
import PopulartrekSection from "../sections/PopulartrekSection.jsx";
import valley from "./Images/footer.jpg";
import WhyTrekSection from "../sections/WhyTrekSection.jsx";
import TestimonialsSection from "../sections/TestimonialsSection.jsx";
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
        Explore the Himalayas: Treks, Trails & Timeless Adventures
      </h1>
      <p className="hero-subtitle animate-fade-in">
        Discover handcrafted journeys across the mountains — from serene valley walks to high-altitude expeditions, guided by experts and powered by passion.
      </p>
      <div className="hero-buttons">
  <button className="glass-btn primary-btn">Explore Treks</button>
  <button className="glass-btn secondary-btn">Contact Us</button>
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
