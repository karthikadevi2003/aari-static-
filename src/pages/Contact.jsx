import { useState } from "react";
import { FaInstagram } from "react-icons/fa"; // 🔥 Instagram icon

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const messageText = formData.get("message");

    const phoneNumber = "919876543210";

    const message = `Hello Prabhas Aari Designs ✨

Name: ${name}
Email: ${email}
Requirement: ${messageText}

I am interested in Aari embroidery designs.`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");

    setSubmitted(true);
    e.target.reset();

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="page contact-page main-container">

      {/* TITLE */}
      <h1 className="contact-title">Contact Prabhas Aari Designs</h1>
      <p className="contact-subtitle">
        Enquire for Bridal, Lehanga, Kids & Boys Custom Aari Embroidery Designs
      </p>

      <div className="contact-container">

        {/* FORM */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send Your Design Enquiry</h2>

          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />

          <textarea
            name="message"
            placeholder="Tell us your requirement (Bridal, Lehanga, Kids, Boys, Custom Design...)"
            rows="4"
            required
          ></textarea>

          <button className="btn" type="submit">
            Send via WhatsApp
          </button>

          {submitted && (
            <p style={{ color: "green", marginTop: "10px" }}>
              Redirecting to WhatsApp...
            </p>
          )}
        </form>

        {/* CONTACT DETAILS */}
        <div className="contact-info">
          <h2>Contact Details</h2>
          <p><strong>Brand:</strong> Prabhas Aari Designs</p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>Email:</strong> Prabhas@123</p>
          <p><strong>Location:</strong> Madurai</p>
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            Chat on WhatsApp
          </a>

          {/* 🔥 Instagram Icon Only */}
          <div className="social-icon-wrapper">
            <a
              href="https://www.instagram.com/prabhas_aaridesigns/"
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-icon"
            >
              <FaInstagram />
              <span>Follow on Instagram</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}