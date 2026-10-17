//Caroussel pour la gestion des projets/skills//

import { useRef, useState } from "react";

// distance minimale (en px) pour qu'un glissement soit compté comme un swipe
const SWIPE_THRESHOLD = 50;

function Carousel({ items, renderItem, initialIndex = 0 }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  // Swipe tactile (mobile / tablette) : on mémorise le point de départ du doigt
  const touchStart = useRef(null);

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    touchStart.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = (e) => {
    if (!touchStart.current) return;
    const touch = e.changedTouches[0];
    const deltaX = touch.clientX - touchStart.current.x;
    const deltaY = touch.clientY - touchStart.current.y;
    touchStart.current = null;

    // on ignore les petits mouvements et le défilement vertical de la page
    if (Math.abs(deltaX) < SWIPE_THRESHOLD || Math.abs(deltaX) < Math.abs(deltaY)) return;

    if (deltaX < 0) goToNext(); // doigt vers la gauche → élément suivant
    else goToPrev(); // doigt vers la droite → élément précédent
  };

  return (
    <div className="carousel" role="group" aria-roledescription="carrousel">
      <button
        type="button"
        className="carousel__arrow carousel__arrow--prev"
        onClick={goToPrev}
        aria-label="Précédent"
      >
        <span aria-hidden="true">‹</span>
      </button>

      <div
        className="carousel__track"
        aria-live="polite"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {renderItem(items[currentIndex], currentIndex)}
      </div>

      <button
        type="button"
        className="carousel__arrow carousel__arrow--next"
        onClick={goToNext}
        aria-label="Suivant"
      >
        <span aria-hidden="true">›</span>
      </button>

      <div className="carousel__dots">
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`carousel__dot ${i === currentIndex ? "carousel__dot--active" : ""}`}
            onClick={() => setCurrentIndex(i)}
            aria-label={`Afficher l'élément ${i + 1} sur ${items.length}`}
            aria-current={i === currentIndex ? "true" : undefined}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
