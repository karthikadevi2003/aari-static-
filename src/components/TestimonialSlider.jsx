import { useEffect, useState } from "react";

export default function TestimonialSlider() {
  const testimonials = [
    {
      text: "Amazing bridal Aari work and excellent finishing!",
      name: "Priya S"
    },
    {
      text: "Premium quality embroidery. Highly recommended!",
      name: "Meena R"
    },
    {
      text: "Very elegant and unique blouse designs.",
      name: "Karthi B"
    },
    {
      text: "Neat stitching and professional service.",
      name: "Lakshmi B"
    },
    {
      text: "Best Aariwork  for custom bridal blouses!",
      name: "Rasi B"
    },
     {
      text: "Wonderful Lehanga received from  Prabhas Aari Designs.",
      name: "Mega R"
    },
     {
      text: "Wonderful Lehanga received from  Prabhas Aari Designs.",
      name: "Pradeepa K"
    }
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="testimonial-slider">
      <div className="testimonial-card">
        <p className="testimonial-text">
          ⭐ "{testimonials[index].text}"
        </p>
        <h4 className="testimonial-name">
          – {testimonials[index].name}
        </h4>
      </div>
    </div>
  );
}