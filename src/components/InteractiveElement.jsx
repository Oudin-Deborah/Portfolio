/*Fonction interactive pour l'affichage des noms sur la page principale */

function InteractiveElement({
  label,
  children,
  className = "",
  position = "top",
  onActivate,
}) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onActivate?.();
    }
  };

  return (
    <div
      className={`interactive-element ${className}`}
      onClick={onActivate}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
    >
      {children}

      <span
        className={`interactive-element__label interactive-element__label--${position}`}
      >
        {label}
      </span>
    </div>
  );
}

export default InteractiveElement;
