/*Zone cliquable de la scène : un vrai bouton, avec son nom affiché */

function InteractiveElement({
  label,
  children,
  className = "",
  position = "top",
  onActivate,
}) {
  return (
    <button
      type="button"
      className={`interactive-element ${className}`}
      onClick={onActivate}
    >
      {children}

      <span
        className={`interactive-element__label interactive-element__label--${position}`}
      >
        {label}
      </span>
    </button>
  );
}

export default InteractiveElement;
