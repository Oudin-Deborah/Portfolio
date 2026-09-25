//Caroussel pour la gestion des projets/skills//

import { useState } from "react";

function Carousel({ items, renderItem }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="carousel">
      <button
        className="carousel__arrow carousel__arrow--prev"
        onClick={goToPrev}
        aria-label="Précédent"
      >
        ‹
      </button>

      <div className="carousel__track">
        {renderItem(items[currentIndex], currentIndex)}
      </div>

      <button
        className="carousel__arrow carousel__arrow--next"
        onClick={goToNext}
        aria-label="Suivant"
      >
        ›
      </button>

      <div className="carousel__dots">
        {items.map((_, i) => (
          <button
            key={i}
            className={`carousel__dot ${i === currentIndex ? "carousel__dot--active" : ""}`}
            onClick={() => setCurrentIndex(i)}
            aria-label={`Aller à l'élément ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
