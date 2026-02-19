import { useState, useEffect } from "react";

// 🔥 CATEGORY IMAGES
import bridal1 from "../assets/bridal1.jpg";
import lehanga1 from "../assets/lehanga1.jpg";
import kid1 from "../assets/kid1.jpg";
import boy1 from "../assets/boy1.jpg";

// 🔥 REAL WORK SLIDER IMAGES
import work1 from "../assets/work1.jpg";
import work2 from "../assets/work2.jpg";
import work3 from "../assets/work3.jpg";
import work4 from "../assets/work4.jpg";
import work5 from "../assets/work5.jpg";
import work6 from "../assets/work6.jpg";
import work7 from "../assets/work7.jpg";
import work8 from "../assets/work8.jpg";
import work9 from "../assets/work9.jpg";
import work10 from "../assets/work10.jpg";

export default function CraftProcess() {
  const [activeStep, setActiveStep] = useState(1);
  const [workIndex, setWorkIndex] = useState(0);

  // 🔥 WORK SLIDER IMAGES ARRAY
  const workImages = [
    work1, work2, work3, work4, work5,
    work6, work7, work8, work9, work10
  ];

  // 🔥 AUTO SLIDER (PREMIUM EFFECT)
  useEffect(() => {
    const interval = setInterval(() => {
      setWorkIndex((prev) => (prev + 1) % workImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [workImages.length]);

  const nextSlide = () => {
    setWorkIndex((prev) => (prev + 1) % workImages.length);
  };

  const prevSlide = () => {
    setWorkIndex((prev) =>
      prev === 0 ? workImages.length - 1 : prev - 1
    );
  };

  const stepsData = {
    1: {
      title: "Design Concept & Pattern Planning",
      desc: "We create unique embroidery concepts based on customer preferences, occasion, and latest trends for Bridal, Lehanga, Kids, and Boys collections.",
      img: bridal1,
    },
    2: {
      title: "Fabric Selection & Framing",
      desc: "Premium fabrics are selected and carefully framed to ensure perfect alignment before starting the Aari embroidery work.",
      img: lehanga1,
    },
    3: {
      title: "Hand Aari Embroidery Work",
      desc: "Our skilled artisans craft detailed hand Aari embroidery using beads, stones, threads, and intricate traditional techniques.",
      img: kid1,
    },
    4: {
      title: "Final Finishing & Quality Check",
      desc: "Each design undergoes strict quality checking, neat finishing, and luxury detailing before delivery to customers.",
      img: boy1,
    },
  };

  return (
    <section className="page craft-page">
      {/* ===== HEADER ===== */}
      <div className="craft-header">
        <h1 className="process-title">Our Crafting Process</h1>
        <p className="process-sub">
          Premium handcrafted Aari embroidery process for Bridal, Lehanga, Kids &
          Boys designer wear with precision and traditional craftsmanship.
        </p>
      </div>

      {/* ===== PROCESS SECTION ===== */}
      <div className="process-container">
        {/* LEFT IMAGE */}
        <div className="process-image">
          <img
            src={stepsData[activeStep].img}
            alt="Aari Craft Process"
          />
        </div>

        {/* RIGHT STEPS */}
        <div className="process-steps">
          {[1, 2, 3, 4].map((step) => (
            <div
              key={step}
              className={`step ${activeStep === step ? "active" : ""}`}
              onMouseEnter={() => setActiveStep(step)}
              onClick={() => setActiveStep(step)}
            >
              <h3>Step {step}</h3>
              <p>{stepsData[step].title}</p>

              {activeStep === step && (
                <span className="step-desc">
                  {stepsData[step].desc}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ===== REAL HANDCRAFTED AARI WORK (NO BLUR + FULL IMAGE) ===== */}
      <div className="craft-extra">
        <h2 className="section-heading">Real Handcrafted Aari Work</h2>

        <div className="real-work-slider">
          <button className="slider-arrow left" onClick={prevSlide}>
            ❮
          </button>

          <img
            src={workImages[workIndex]}
            alt="Handcrafted Aari Embroidery Work"
            className="real-work-image"
          />

          <button className="slider-arrow right" onClick={nextSlide}>
            ❯
          </button>
        </div>

        <p className="craft-slider-text">
          Every design at Prabhas Aari Designs is fully handcrafted using
          traditional Aari techniques with precision, patience, and premium
          finishing to achieve a luxury designer look.
        </p>
      </div>

      {/* ===== TOOLS & MATERIALS ===== */}
      <div className="craft-extra">
        <h2 className="section-heading">Tools & Materials We Use</h2>

        <div className="craft-grid">
          <div className="craft-card">
            <h4>🧵 Aari Needle</h4>
            <p>Traditional Aari needle for intricate embroidery detailing.</p>
          </div>

          <div className="craft-card">
            <h4>✨ Stones & Beads</h4>
            <p>Premium stones, beads and sequins for bridal and designer work.</p>
          </div>

          <div className="craft-card">
            <h4>🪡 Silk Threads</h4>
            <p>High-quality threads for long-lasting and elegant embroidery.</p>
          </div>

          <div className="craft-card">
            <h4>👗 Premium Fabrics</h4>
            <p>Silk, velvet, net and designer fabrics for perfect embroidery base.</p>
          </div>
        </div>
      </div>

      {/* ===== EMBROIDERY EXPERTISE (4 IMAGES IN ONE ROW - NO GAP) ===== */}
      <div className="craft-extra">
        <h2 className="section-heading">Our Embroidery Expertise</h2>

        <div className="craft-image-grid">
          <div className="craft-img-card">
            <img src={bridal1} alt="Bridal Aari Work" />
            <p>Bridal Aari Embroidery</p>
          </div>

          <div className="craft-img-card">
            <img src={lehanga1} alt="Lehanga Aari Work" />
            <p>Lehanga Embroidery</p>
          </div>

          <div className="craft-img-card">
            <img src={kid1} alt="Kids Aari Work" />
            <p>Kids Aari Designs</p>
          </div>

          <div className="craft-img-card">
            <img src={boy1} alt="Boys Aari Work" />
            <p>Boys Ethnic Embroidery</p>
          </div>
        </div>
      </div>

      {/* ===== CTA ===== */}
      <div className="craft-cta">
        <h2>Want a Custom Aari Design?</h2>
        <p>
          Contact Prabhas Aari Designs for Bridal, Lehanga, Kids & Boys custom
          embroidery with premium handcrafted finishing.
        </p>

        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          💬 Enquire on WhatsApp
        </a>
      </div>
    </section>
  );
}