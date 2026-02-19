import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TestimonialSlider from "../components/TestimonialSlider";

// ===== HERO IMAGES =====
import slider4 from "../assets/slider4.jpg";
import slider2 from "../assets/slider2.jpg";
import slider3 from "../assets/slider3.jpg";

// ===== FEATURE COLLECTION IMAGES =====
import lehanga1 from "../assets/lehanga1.jpg";
import boy11 from "../assets/boy11.jpg";

// ===== CRAFT IMAGES =====
import work1 from "../assets/work1.jpg";
import work2 from "../assets/work2.jpg";
import work3 from "../assets/work3.jpg";
import work4 from "../assets/work4.jpg";
import work5 from "../assets/work5.jpg";

export default function Home() {
  const navigate = useNavigate();

  // HERO SLIDER
  const heroImages = [slider4, slider2, slider3];
  const [current, setCurrent] = useState(0);

  // CRAFT SLIDER
  const craftImages = [work1, work2, work3, work4, work5];
  const [craftIndex, setCraftIndex] = useState(0);

  // ===== HERO AUTO SLIDE =====
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  // ===== CRAFT AUTO SLIDE =====
  useEffect(() => {
    const craftInterval = setInterval(() => {
      setCraftIndex((prev) => (prev + 1) % craftImages.length);
    }, 2500);
    return () => clearInterval(craftInterval);
  }, [craftImages.length]);

  return (
    <main className="home-page">
      {/* ===== HERO SECTION ===== */}
      <section className="hero">
        {/* Background Image */}
        <div
          className="hero-bg"
          style={{
            backgroundImage: `url(${heroImages[current]})`,
          }}
        ></div>

        {/* Overlay Content */}
        <div className="hero-overlay">
          <h1 className="hero-title">Prabhas Aari Designs</h1>

          <p className="hero-subtitle">
            Bridal • Lehenga • Kids Wear • Boys Ethnic • Custom Aari Embroidery
          </p>

          <button
            className="hero-btn"
            onClick={() => navigate("/designs")}
          >
            Explore Our Collections
          </button>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section className="home-section">
        <h2>About Prabhas Aari Designs</h2>
        <p>
          Prabhas Aari Designs specializes in premium handcrafted Aari embroidery
          for bridal wear, lehengas, kids dresses, pattu pavadai, boys ethnic wear,
          and custom designer outfits. We blend traditional craftsmanship with
          modern elegance to create unique and luxurious designs.
        </p>
      </section>

      {/* ===== FEATURED COLLECTIONS ===== */}
      <section className="home-section">
        <h2 className="section-title">Our Featured Collections</h2>

        <div className="featured-grid">
          <div
            className="featured-card"
            onClick={() => navigate("/designs")}
            style={{ cursor: "pointer" }}
          >
            <img src={slider4} alt="Bridal Aari Designs" />
            <h4>Bridal Aari Designs</h4>
            <p>Luxury bridal Aari embroidery with rich stone and bead detailing.</p>
          </div>

          <div
            className="featured-card"
            onClick={() => navigate("/designs")}
            style={{ cursor: "pointer" }}
          >
            <img src={lehanga1} alt="Lehenga Aari Designs" />
            <h4>Lehenga Aari Designs</h4>
            <p>Elegant handcrafted Aari embroidery for grand lehenga outfits.</p>
          </div>

          <div
            className="featured-card"
            onClick={() => navigate("/designs")}
            style={{ cursor: "pointer" }}
          >
            <img src={boy11} alt="Kids & Boys Designs" />
            <h4>Kids & Boys Designs</h4>
            <p>Beautiful Aari work for kids frocks and boys ethnic wear.</p>
          </div>
        </div>

        <button
          className="btn view-all-btn"
          onClick={() => navigate("/designs")}
        >
          View All Designs
        </button>
      </section>

      {/* ===== ⭐ NEW: PROCESS PREVIEW SECTION ===== */}
      <section className="home-section">
        <h2 className="section-title">Our Aari Craft Process</h2>

        <p className="section-subtitle">
          From design planning to final finishing, every Aari embroidery piece
          is handcrafted with precision, creativity and traditional techniques
          by skilled artisans.
        </p>

        <div className="process-preview">
          <div className="process-card">
            <h4>🎨 Design Planning</h4>
            <p>Unique design concepts based on customer ideas and trends.</p>
          </div>

          <div className="process-card">
            <h4>🧵 Hand Embroidery</h4>
            <p>Intricate Aari work using beads, stones and silk threads.</p>
          </div>

          <div className="process-card">
            <h4>✨ Premium Finishing</h4>
            <p>Neat finishing with luxury detailing and quality check.</p>
          </div>
        </div>

        <button
          className="btn"
          onClick={() => navigate("/craft")}
        >
          View Full Craft Process
        </button>
      </section>

      {/* ===== CRAFTSMANSHIP SLIDER ===== */}
      <section className="home-section">
        <h2>Our Craftsmanship</h2>

        <div className="craft-slider">
          <img
            src={craftImages[craftIndex]}
            className="craft-img-slider"
            alt="Aari embroidery process"
          />
        </div>

        <p>
          Each piece is carefully handcrafted by skilled artisans using
          traditional Aari techniques with premium finishing, durability,
          and luxury designer detailing.
        </p>
      </section>

      {/* ===== TESTIMONIAL SECTION ===== */}
      <section className="home-section">
        <h2>What Our Clients Say</h2>
        <TestimonialSlider />
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="cta">
        <h2>Looking for Custom Aari Designs?</h2>
        <p>
          Contact Prabhas Aari Designs to create your dream Bridal, Lehenga,
          Kids or Boys Aari embroidery design with premium handcrafted finishing.
        </p>

        <button
          className="btn"
          onClick={() => navigate("/contact")}
        >
          Contact Us
        </button>
      </section>
    </main>
  );
}