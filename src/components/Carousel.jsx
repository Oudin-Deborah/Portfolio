//Caroussel pour la gestion des projets/skills//

import { useRef, useState } from "react";

// distance minimale (en px) pour qu'un glissement soit compté comme un swipe
const SWIPE_THRESHOLD = 50;

function Carousel({ items, renderItem, initialIndex = 0 }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  // décalage horizontal de la carte pendant que le doigt glisse (en px)
  const [dragX, setDragX] = useState(0);
  // sens d'arrivée de la nouvelle carte après un swipe ("next" / "prev"), null sinon
  const [swipeDirection, setSwipeDirection] = useState(null);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  // Flèches et points : changement sans animation de glissement
  const handlePrevClick = () => {
    setSwipeDirection(null);
    goToPrev();
  };

  const handleNextClick = () => {
    setSwipeDirection(null);
    goToNext();
  };

  // Swipe tactile (mobile / tablette) : on mémorise le point de départ du doigt
  // et si le geste est horizontal (swipe) ou vertical (scroll de la page)
  const touchStart = useRef(null);

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    touchStart.current = { x: touch.clientX, y: touch.clientY, horizontal: null };
  };

  const handleTouchMove = (e) => {
    if (!touchStart.current) return;
    const touch = e.touches[0];
    const deltaX = touch.clientX - touchStart.current.x;
    const deltaY = touch.clientY - touchStart.current.y;

    // le sens du geste est décidé une seule fois, après quelques pixels
    if (touchStart.current.horizontal === null) {
      if (Math.abs(deltaX) < 8 && Math.abs(deltaY) < 8) return;
      touchStart.current.horizontal = Math.abs(deltaX) > Math.abs(deltaY);
    }

    // la carte suit le doigt
    if (touchStart.current.horizontal) setDragX(deltaX);
  };

  const handleTouchEnd = () => {
    if (!touchStart.current) return;
    const isHorizontal = touchStart.current.horizontal;
    touchStart.current = null;
    setDragX(0); // geste trop court : la carte revient à sa place

    if (!isHorizontal || Math.abs(dragX) < SWIPE_THRESHOLD) return;

    if (dragX < 0) {
      setSwipeDirection("next"); // doigt vers la gauche → élément suivant
      goToNext();
    } else {
      setSwipeDirection("prev"); // doigt vers la droite → élément précédent
      goToPrev();
    }
  };

  const isDragging = dragX !== 0;
  const slideClass = [
    "carousel__slide",
    swipeDirection && `carousel__slide--from-${swipeDirection}`,
    isDragging && "carousel__slide--dragging",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="carousel" role="group" aria-roledescription="carrousel">
      <button
        type="button"
        className="carousel__arrow carousel__arrow--prev"
        onClick={handlePrevClick}
        aria-label="Précédent"
      >
        <span aria-hidden="true">‹</span>
      </button>

      <div
        className="carousel__track"
        aria-live="polite"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
      >
        {/* key : la carte est recréée à chaque changement, ce qui relance l'animation d'arrivée */}
        <div
          key={currentIndex}
          className={slideClass}
          style={isDragging ? { transform: `translateX(${dragX}px)` } : undefined}
        >
          {renderItem(items[currentIndex], currentIndex)}
        </div>
      </div>

      <button
        type="button"
        className="carousel__arrow carousel__arrow--next"
        onClick={handleNextClick}
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
            onClick={() => {
              setSwipeDirection(null);
              setCurrentIndex(i);
            }}
            aria-label={`Afficher l'élément ${i + 1} sur ${items.length}`}
            aria-current={i === currentIndex ? "true" : undefined}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
