import { useState } from "react";

// ===== BRIDAL IMAGES =====
import bridal1 from "../assets/bridal1.jpg";
import bridal2 from "../assets/bridal2.jpg";
import bridal3 from "../assets/bridal3.jpg";
import bridal4 from "../assets/bridal4.jpg";
import bridal5 from "../assets/bridal5.jpg";
import bridal6 from "../assets/bridal6.jpg";
import bridal7 from "../assets/bridal7.jpg";
import bridal8 from "../assets/bridal8.jpg";
import bridal9 from "../assets/bridal9.jpg";
import bridal10 from "../assets/bridal10.jpg";
import bridal11 from "../assets/bridal11.jpg";
import bridal12 from "../assets/bridal12.jpg";
import bridal13 from "../assets/bridal13.jpg";
import bridal14 from "../assets/bridal14.jpg";
import bridal15 from "../assets/bridal15.jpg";

// ===== LEHANGA IMAGES =====
import lehanga1 from "../assets/lehanga1.jpg";
import lehanga2 from "../assets/lehanga2.jpg";
import lehanga3 from "../assets/lehanga3.jpg";
import lehanga4 from "../assets/lehanga4.jpg";
import lehanga5 from "../assets/lehanga5.jpg";
import lehanga6 from "../assets/lehanga6.jpg";
import lehanga7 from "../assets/lehanga7.jpg";
import lehanga8 from "../assets/lehanga8.jpg";
import lehanga9 from "../assets/lehanga9.jpg";
import lehanga10 from "../assets/lehanga10.jpg";
import lehanga11 from "../assets/lehanga11.jpg";
import lehanga12 from "../assets/lehanga12.jpg";
import lehanga13 from "../assets/lehanga13.jpg";
import lehanga14 from "../assets/lehanga14.jpg";
import lehanga15 from "../assets/lehanga15.jpg";

// ===== KIDS IMAGES =====
import kid1 from "../assets/kid1.jpg";
import kid2 from "../assets/kid2.jpg";
import kid3 from "../assets/kid3.jpg";
import kid4 from "../assets/kid4.jpg";
import kid5 from "../assets/kid5.jpg";
import kid6 from "../assets/kid6.jpg";
import kid7 from "../assets/kid7.jpg";
import kid8 from "../assets/kid8.jpg";
import kid9 from "../assets/kid9.jpg";
import kid10 from "../assets/kid10.jpg";
import kid11 from "../assets/kid11.jpg";
import kid12 from "../assets/kid12.jpg";
import kid13 from "../assets/kid13.jpg";
import kid14 from "../assets/kid14.jpg";
import kid15 from "../assets/kid15.jpg";

// ===== BOYS IMAGES =====
import boy1 from "../assets/boy1.jpg";
import boy2 from "../assets/boy2.jpg";
import boy3 from "../assets/boy3.jpg";
import boy4 from "../assets/boy4.jpg";
import boy5 from "../assets/boy5.jpg";
import boy6 from "../assets/boy6.jpg";
import boy7 from "../assets/boy7.jpg";
import boy8 from "../assets/boy8.jpg";
import boy9 from "../assets/boy9.jpg";
import boy10 from "../assets/boy10.jpg";
import boy11 from "../assets/boy11.jpg";
import boy12 from "../assets/boy12.jpg";
import boy13 from "../assets/boy13.jpg";
import boy14 from "../assets/boy14.jpg";
import boy15 from "../assets/boy15.jpg";

export default function Designs() {
  const [activeCategory, setActiveCategory] = useState("bridal");
  const [selectedImage, setSelectedImage] = useState(null);
  const [rotation, setRotation] = useState(0);

  const bridal = [
    bridal1, bridal2, bridal3, bridal4, bridal5,
    bridal6, bridal7, bridal8, bridal9, bridal10,
    bridal11, bridal12, bridal13, bridal14, bridal15
  ];

  const lehanga = [
    lehanga1, lehanga2, lehanga3, lehanga4, lehanga5,
    lehanga6, lehanga7, lehanga8, lehanga9, lehanga10,
    lehanga11, lehanga12, lehanga13, lehanga14, lehanga15
  ];

  const kids = [
    kid1, kid2, kid3, kid4, kid5,
    kid6, kid7, kid8, kid9, kid10,
    kid11, kid12, kid13, kid14, kid15
  ];

  const boys = [
    boy1, boy2, boy3, boy4, boy5,
    boy6, boy7, boy8, boy9, boy10,
    boy11, boy12, boy13, boy14, boy15
  ];

  const categories = { bridal, lehanga, kids, boys };
  const currentDesigns = categories[activeCategory];
  const whatsappNumber = "919876543210";

  return (
    <section className="page designs-page main-container">
      {/* ===== TITLE ===== */}
      <h1 className="design-title">Our Aari Design Collections</h1>
      <p className="design-subtitle">
        Bridal, Lehanga, Kids & Boys Premium Handcrafted Aari Embroidery Designs
      </p>

      {/* ===== CATEGORY TABS ===== */}
      <div className="category-tabs">
        {["bridal", "lehanga", "kids", "boys"].map((cat) => (
          <button
            key={cat}
            className={activeCategory === cat ? "active" : ""}
            onClick={() => setActiveCategory(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* ===== DESIGN GRID ===== */}
      <div className="design-grid">
        {currentDesigns.map((img, index) => {
          const designName = `${activeCategory} Design ${index + 1}`;

          return (
            <div className="design-card" key={index}>
              <div
                className="design-img-wrapper"
                onClick={() => {
                  setSelectedImage(img);
                  setRotation(0);
                }}
              >
                <img src={img} alt={designName} loading="lazy" />

                {/* HOVER VIEW OVERLAY */}
                <div className="hover-overlay">
                  🔍 View Design
                </div>

                {/* QUICK ORDER BUTTON */}
                <a
                  href={`https://wa.me/${whatsappNumber}?text=Hello%20Prabhas%20Aari%20Designs%20✨%0AI%20like%20this%20${designName}%0ACan%20I%20place%20an%20order?`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="order-overlay"
                  onClick={(e) => e.stopPropagation()}
                >
                  💬 Order
                </a>
              </div>

              <div className="design-desc">
                Premium handcrafted {activeCategory} Aari embroidery design with elegant finishing.
              </div>
            </div>
          );
        })}
      </div>

      {/* ===== FULL IMAGE MODAL (ZOOM + ROTATE + ORDER) ===== */}
      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            
            {/* CLOSE BUTTON */}
            <span className="close-btn" onClick={() => setSelectedImage(null)}>
              ✕
            </span>

            {/* ROTATE BUTTON */}
            <button
              className="rotate-btn"
              onClick={() => setRotation(rotation + 90)}
            >
              🔄 Rotate
            </button>

            {/* ZOOM CONTAINER (PREMIUM) */}
            <div className="zoom-container">
              <img
                src={selectedImage}
                alt="Full Design"
                className="zoom-image"
                style={{ transform: `rotate(${rotation}deg)` }}
              />
            </div>

            {/* ORDER THIS DESIGN */}
            <a
              href={`https://wa.me/${whatsappNumber}?text=Hello%20Prabhas%20Aari%20Designs%20✨%0AI%20want%20to%20order%20this%20design`}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-order-btn"
            >
              💖 Order This Design on WhatsApp
            </a>
          </div>
        </div>
      )}
    </section>
  );
}