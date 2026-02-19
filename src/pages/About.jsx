import { useNavigate } from "react-router-dom";

// 🔥 USE CATEGORY BASED IMAGES (VERY IMPORTANT)
import bridalImg from "../assets/bridal1.jpg";
import lehangaImg from "../assets/lehanga1.jpg";
import kidImg from "../assets/kid1.jpg";
import boyImg from "../assets/boy1.jpg";
import workImg from "../assets/work1.jpg"; // craftsmanship image (optional)

export default function About() {
  const navigate = useNavigate();

  return (
    <section className="about-page">

      {/* ===== HERO ABOUT HEADER ===== */}
      <div className="about-hero">
        <h1 className="about-title">About Prabhas Aari Designs</h1>
        <p className="about-subtitle">
          Premium handcrafted Aari embroidery for Bridal, Lehanga, Kids & Boys Designer Wear
        </p>
      </div>

      {/* ===== INTRO WITH IMAGE ===== */}
      <div className="about-intro-section">
        <div className="about-intro-text">
          <h2>Who We Are</h2>
          <p>
            Prabhas Aari Designs is a specialized embroidery studio dedicated to
            creating elegant and premium handcrafted Aari embroidery designs for
            all age groups. Our designs blend traditional craftsmanship with
            modern fashion to create unique and luxurious outfits.
          </p>
          <p>
            We design customized embroidery collections for bridal wear,
            lehengas, kids dresses, and boys ethnic outfits with precision,
            creativity, and premium finishing.
          </p>
        </div>

        <div className="about-intro-image">
          <img src={workImg} alt="Aari embroidery craftsmanship" />
        </div>
      </div>

      {/* ===== OUR SPECIALIZATIONS (UPDATED WITH CORRECT IMAGES) ===== */}
      <div className="about-services">
        <h2 className="section-heading">Our Specializations</h2>

        <div className="about-service-grid">
          
          {/* BRIDAL */}
          <div className="service-card">
            <img src={bridalImg} alt="Bridal Aari Designs" />
            <h3>Bridal Aari Designs</h3>
            <p>
              Luxury bridal Aari embroidery with stones, beads, zardosi and
              intricate handcrafted work perfect for weddings and receptions.
            </p>
          </div>

          {/* LEHANGA */}
          <div className="service-card">
            <img src={lehangaImg} alt="Lehenga Aari Work" />
            <h3>Lehenga & Designer Wear</h3>
            <p>
              Elegant Aari embroidery for lehengas and designer outfits with
              premium finishing and modern traditional patterns.
            </p>
          </div>

          {/* KIDS */}
          <div className="service-card">
            <img src={kidImg} alt="Kids Aari Designs" />
            <h3>Kids Aari Designs</h3>
            <p>
              Customized embroidery for kids frocks, pattu pavadai, and festive
              outfits with cute and elegant detailing.
            </p>
          </div>

          {/* BOYS */}
          <div className="service-card">
            <img src={boyImg} alt="Boys Aari Work" />
            <h3>Boys Aari Work</h3>
            <p>
              Custom Aari embroidery for boys sherwani, kurta, and ethnic wear
              designed for weddings, birthdays, and special occasions.
            </p>
          </div>

        </div>

        {/* GALLERY BUTTON */}
        <button
          className="btn"
          onClick={() => navigate("/designs")}
        >
          View Our Design Gallery
        </button>
      </div>

      {/* ===== MISSION & VISION ===== */}
      <div className="about-mv">
        <div className="mv-card">
          <h2>Our Mission</h2>
          <p>
            To deliver premium handcrafted Aari embroidery designs that enhance
            elegance, tradition, and individuality with high-quality finishing
            and unique customization for every customer.
          </p>
        </div>

        <div className="mv-card">
          <h2>Our Vision</h2>
          <p>
            To become a leading and trusted Aari embroidery brand known for
            bridal, lehanga, kids, and boys designer collections with innovative
            and luxury handcrafted designs.
          </p>
        </div>
      </div>

      {/* ===== WHY CHOOSE US ===== */}
      <div className="about-why">
        <h2 className="section-heading">Why Choose Us</h2>

        <div className="why-grid">
          <div className="why-card">
            <h4>✨ 100% Handcrafted Work</h4>
            <p>Every design is carefully handcrafted using traditional Aari embroidery techniques.</p>
          </div>

          <div className="why-card">
            <h4>🎨 Fully Customized Designs</h4>
            <p>We create unique embroidery based on your reference images and ideas.</p>
          </div>

          <div className="why-card">
            <h4>👑 Premium Quality Finishing</h4>
            <p>High-quality materials, neat stitching, and luxury finishing for every outfit.</p>
          </div>

          <div className="why-card">
            <h4>🧵 Multi-Category Expertise</h4>
            <p>Specialized in Bridal, Lehanga, Kids, and Boys designer Aari embroidery collections.</p>
          </div>
        </div>
      </div>

      {/* ===== FINAL CTA (NON-DUPLICATE) ===== */}
      <div className="about-cta">
        <h2>Start Your Custom Aari Design</h2>
        <p>
          From bridal lehengas to kids and boys designer outfits, we craft
          unique handcrafted Aari embroidery designs tailored to your style,
          occasion, and requirements.
        </p>
        <button className="btn" onClick={() => navigate("/contact")}>
          Enquire Now
        </button>
      </div>

    </section>
  );
}