import bridal1 from "../assets/bridal1.jpg";
import lehanga1 from "../assets/lehanga1.jpg";
import kid1 from "../assets/kid1.jpg";
import boy1 from "../assets/boy1.jpg";
import work1 from "../assets/work1.jpg";

export default function Custom() {
  return (
    <section className="page custom-page main-container">

      {/* ===== HERO TITLE ===== */}
      <div className="custom-hero">
        <h1 className="custom-title">Custom Aari Design Orders</h1>
        <p className="custom-subtitle">
          Get fully customized Aari embroidery designs for Bridal, Lehanga,
          Kids, Boys & Designer Wear crafted with premium handcrafted detailing
          and elegant finishing.
        </p>
      </div>

      {/* ===== CUSTOM DESIGN PREVIEW (FULL WIDTH - GAP FIX) ===== */}
      <div className="custom-block">
        <h2 className="section-heading center">
          Our Custom Embroidery Collections
        </h2>
        <p className="section-sub center">
          Explore our handcrafted Aari embroidery works for Bridal, Lehanga,
          Kids and Boys designer outfits with luxury detailing.
        </p>

        <div className="preview-grid">
          <div className="preview-card">
            <img src={bridal1} alt="Bridal Aari Work" />
            <h4>Bridal Aari Designs</h4>
          </div>

          <div className="preview-card">
            <img src={lehanga1} alt="Lehenga Aari Work" />
            <h4>Lehenga Embroidery</h4>
          </div>

          <div className="preview-card">
            <img src={kid1} alt="Kids Aari Designs" />
            <h4>Kids Aari Designs</h4>
          </div>

          <div className="preview-card">
            <img src={boy1} alt="Boys Aari Work" />
            <h4>Boys Ethnic Embroidery</h4>
          </div>
        </div>
      </div>

      {/* ===== CUSTOM CATEGORIES ===== */}
      <div className="custom-block">
        <h2 className="section-heading">Custom Designs Available For</h2>

        <div className="requirements-list">
          <div className="requirement-card">
            <h4>👰 Bridal Aari Designs</h4>
            <p>
              Heavy bridal blouses, wedding lehengas and luxury embroidery
              collections with premium finishing.
            </p>
          </div>

          <div className="requirement-card">
            <h4>👗 Lehanga & Designer Wear</h4>
            <p>
              Customized lehanga embroidery with traditional and modern Aari
              patterns for grand occasions.
            </p>
          </div>

          <div className="requirement-card">
            <h4>🧒 Kids Aari Designs</h4>
            <p>
              Beautiful Aari work for kids frocks, pattu pavadai and festive
              outfits with cute detailing.
            </p>
          </div>

          <div className="requirement-card">
            <h4>👦 Boys Ethnic Wear</h4>
            <p>
              Custom embroidery for boys sherwani, kurta sets and traditional
              designer wear.
            </p>
          </div>
        </div>
      </div>

      {/* ===== INTRO ===== */}
      <div className="custom-block">
        <h2 className="section-heading">Personalized Handcrafted Aari Embroidery</h2>
        <p className="custom-text">
          At Prabhas Aari Designs, we specialize in creating fully customized
          Aari embroidery designs based on your reference images, occasion,
          color preferences, and unique design ideas. Each piece is handcrafted
          with precision, creativity, and premium quality finishing to give a
          rich and elegant designer look.
        </p>
      </div>

      {/* ===== PROCESS WITH IMAGE (SIDE BY SIDE - PROFESSIONAL) ===== */}
      <div className="custom-process">
        <div className="process-image">
          <img src={work1} alt="Aari Embroidery Process" />
        </div>

        <div className="process-text">
          <h2>Our Handcrafted Embroidery Process</h2>
          <p>
            Every custom design is carefully handcrafted by skilled artisans
            using traditional Aari techniques with stones, beads, sequins and
            intricate thread work. We focus on neat finishing, durability and
            premium luxury detailing for every outfit.
          </p>
        </div>
      </div>

      {/* ===== CUSTOMIZATION OPTIONS ===== */}
      <div className="custom-block">
        <h2 className="section-heading">Customization Options We Offer</h2>

        <div className="steps-list">
          <div className="step-card">
            <h4>Name & Initial Embroidery</h4>
            <p>Personalized name embroidery for bridal, kids and custom outfits.</p>
          </div>

          <div className="step-card">
            <h4>Stone, Bead & Zardosi Work</h4>
            <p>Luxury detailing with premium stones, beads and rich embroidery styles.</p>
          </div>

          <div className="step-card">
            <h4>Color & Theme Matching</h4>
            <p>Embroidery perfectly matched with saree, lehanga or event theme.</p>
          </div>

          <div className="step-card">
            <h4>Simple / Heavy / Bridal Styles</h4>
            <p>Choose embroidery type based on your occasion and budget.</p>
          </div>

          <div className="step-card">
            <h4>Reference Based Custom Designs</h4>
            <p>We recreate designs based on Instagram or reference images.</p>
          </div>
        </div>
      </div>

      {/* ===== HOW TO PLACE ORDER ===== */}
      <div className="custom-block">
        <h2 className="section-heading">How to Place a Custom Order</h2>

        <div className="steps-list">
          <div className="step-card">
            <h4>1. Share your design reference</h4>
            <p>Send your inspiration image or idea via WhatsApp.</p>
          </div>

          <div className="step-card">
            <h4>2. Discuss design & customization</h4>
            <p>We finalize embroidery style, colors and detailing with you.</p>
          </div>

          <div className="step-card">
            <h4>3. Confirm measurements & materials</h4>
            <p>Provide measurements and fabric details for perfect finishing.</p>
          </div>

          <div className="step-card">
            <h4>4. Handcrafted embroidery process</h4>
            <p>Our artisans craft your design with traditional Aari techniques.</p>
          </div>

          <div className="step-card">
            <h4>5. Final quality check & delivery</h4>
            <p>Strict quality check and safe delivery with premium finishing.</p>
          </div>
        </div>
      </div>

      {/* ===== FINAL CTA ===== */}
      <div className="custom-cta">
        <h2>Start Your Custom Aari Design Today</h2>
        <p>
          Contact Prabhas Aari Designs to create your dream Bridal, Lehanga,
          Kids or Boys Aari embroidery design with luxury handcrafted finishing.
        </p>

        <a
          href="https://wa.me/919876543210?text=Hello%20Prabhas%20Aari%20Designs%20✨%0AI%20want%20to%20place%20a%20custom%20order"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          💬 Place Custom Order on WhatsApp
        </a>
      </div>

    </section>
  );
}