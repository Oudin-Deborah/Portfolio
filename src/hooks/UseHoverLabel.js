import { useState } from "react";

//Hook utilisé pour afficher le label de chaque section sur la page d'accueil

export function useHoverLabel() {
  const [hoveredLabel, setHoveredLabel] = useState(null);

  const showLabel = (label) => setHoveredLabel(label);
  const hideLabel = () => setHoveredLabel(null);
  return { hoveredLabel, showLabel, hideLabel };
}
