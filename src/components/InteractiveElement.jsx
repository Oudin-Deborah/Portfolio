import { useHoverLabel } from '../hooks/useHoverLabel';

/*Fonction interactive pour l'affichage des noms sur la page principale */

function InteractiveElement({ label, children, className = '', position = 'top', onActivate }) {
  const { hoveredLabel, showLabel, hideLabel } = useHoverLabel();

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onActivate?.();
    }
  };

  return (
    <div
      className={`interactive-element ${className}`}
      onMouseEnter={() => showLabel(label)}
      onMouseLeave={hideLabel}
      onFocus={() => showLabel(label)}
      onBlur={hideLabel}
      onClick={onActivate}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
    >
      {children}

      {hoveredLabel && (
        <span className={`interactive-element__tooltip interactive-element__tooltip--${position}`}>
          {hoveredLabel}
        </span>
      )}
    </div>
  );
}

export default InteractiveElement;