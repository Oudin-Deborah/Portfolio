import { useHoverLabel } from '../hooks/useHoverLabel';

/*Fonction interactive pour l'affichage des noms sur la page principale */

function InteractiveElement({ label, children, className = '', position = 'top' }) {
  const { hoveredLabel, showLabel, hideLabel } = useHoverLabel();

  return (
    <div
      className={`interactive-element ${className}`}
      onMouseEnter={() => showLabel(label)}
      onMouseLeave={hideLabel}
      onFocus={() => showLabel(label)}
      onBlur={hideLabel}
      tabIndex={0}
      role="button"
    >
      {children}
{/* modifier le classname plus tard.*/}
      {hoveredLabel && (
        <span className={`interactive-element__tooltip interactive-element__tooltip--${position}`}>
          {hoveredLabel}
        </span>
      )}
    </div>
  );
}

export default InteractiveElement;
