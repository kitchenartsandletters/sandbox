import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./index.css"; // Reuse existing styles

const BookCarousel = ({ books }) => {
  const [isMobile, setIsMobile] = useState(typeof window !== "undefined" ? window.innerWidth <= 1024 : false);
  const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0, text: "" });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!books || books.length === 0) {
    return <p>No books available.</p>;
  }

  const layoutClass = isMobile ? "book-carousel" : "book-grid";

  return (
    <div className={layoutClass}>
      {books.map((b, idx) => (
        <div
          key={idx}
          className="book-card"
          onMouseMove={(e) => setTooltip({ visible: true, x: e.clientX, y: e.clientY, text: b.blurb })}
          onMouseLeave={() => setTooltip({ ...tooltip, visible: false })}
        >
          <img
            src={`/assets/${b.image}`}
            alt={b.title}
            loading="lazy"
          />
          <div>
            <h4 className="book-title">{b.title}</h4>
            {b.subtitle && <p className="book-subtitle">{b.subtitle}</p>}
          </div>
        </div>
      ))}
      {tooltip.visible && (
        <div
          className="book-tooltip dynamic"
          style={{
            position: "fixed",
            top: tooltip.y + 15,
            left: tooltip.x + 15,
            background: "white",
            color: "#333",
            padding: "0.5rem 0.75rem",
            borderRadius: "4px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            zIndex: 9999,
            pointerEvents: "none",
            transition: "opacity 0.2s ease"
          }}
        >
          {tooltip.text}
        </div>
      )}
    </div>
  );
};

BookCarousel.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string,
      blurb: PropTypes.string,
    })
  ),
};

export default BookCarousel;
