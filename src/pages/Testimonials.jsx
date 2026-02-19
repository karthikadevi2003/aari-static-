import TestimonialSlider from "../components/TestimonialSlider";

export default function Testimonials() {
  return (
    <section className="page testimonials-page main-container">
      {/* TITLE */}
      <h1 className="test-title">What Our Clients Say</h1>
      <p className="test-subtitle">
        We take pride in delivering premium handcrafted Aari embroidery
        designs with perfection, elegance, and customer satisfaction.
      </p>

      {/* MAIN SLIDER */}
      <div className="test-slider">
        <TestimonialSlider />
      </div>

      {/* EXTRA REVIEWS GRID */}
      <div className="test-box">
        <p>⭐ "Beautiful bridal blouse with rich detailing!"</p>
        <p>⭐ "Luxury embroidery and on-time delivery."</p>
        <p>⭐ "Highly professional and creative designs."</p>
        <p>⭐ "Top quality materials and neat finishing."</p>
      </div>
    </section>
  );
}