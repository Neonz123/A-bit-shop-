import React, { useRef } from "react";
import "./NewsletterSubscription.css";
import { FaArrowLeft, FaArrowRight, FaStar, FaCheckCircle } from "react-icons/fa";

const NewsletterSubscription = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const offset = direction === "left" ? -320 : 320;
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };
  return (
    <div className="happy-customers-section">
      <h2 className="title">OUR HAPPY CUSTOMERS</h2>
      <div className="testimonial-wrapper">
        <button className="arrow-btn" onClick={() => scroll("left")} aria-label="Previous">
          {<FaArrowLeft />}
        </button>

        <div className="testimonials" ref={scrollRef}>
          {testimonials.map((t, index) => (
            <div className="testimonial-card" key={index}>
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>
                    {<FaStar />}
                  </span>
                ))}
              </div>
              <div className="name">
                <strong>{t.name}</strong>
                <span className="verified">
                  {<FaCheckCircle />}
                </span>
              </div>
              <p className="text">{t.text}</p>
            </div>
          ))}
        </div>

        <button className="arrow-btn" onClick={() => scroll("right")} aria-label="Next">
          {<FaArrowRight />}
        </button>
      </div>
    </div>
  );
};

export default NewsletterSubscription;

const testimonials = [
  {
    name: "Sarah M.",
    text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    name: "Alex K.",
    text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
  },
  {
    name: "James L.",
    text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
  },
  {
    name: "Emma T.",
    text: "The quality, packaging, and customer service were top-notch. I’ll definitely be ordering again soon!",
  },
  {
    name: "Liam W.",
    text: "Best online fashion store. The size guide helped perfectly. Got compliments already!",
  },
];
