//Bouton de retour en haut de page, en bas des fiches projet et recette//
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

function BackToTop() {
  const handleClick = (e) => {
    // Défilement doux, sauf si l'utilisateur a demandé à réduire les animations
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const behavior = reduceMotion ? "auto" : "smooth";

    // La fiche défile dans son panneau (et la fenêtre sur certains écrans) : on remonte les deux
    const main = e.currentTarget.closest("main");
    main?.scrollTo({ top: 0, behavior });
    window.scrollTo({ top: 0, behavior });

    // Le focus clavier suit : il revient sur le titre de la page
    main?.querySelector("h1")?.focus({ preventScroll: true });
  };

  return (
    <button
      type="button"
      className="project__top"
      onClick={handleClick}
      aria-label="Retour en haut de page"
      title="Retour en haut de page"
    >
      <FontAwesomeIcon icon={faArrowUp} />
    </button>
  );
}

export default BackToTop;
