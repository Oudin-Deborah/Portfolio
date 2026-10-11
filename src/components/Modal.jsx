import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";
import "../assets/style/styleModal.sass"

//ouverture et fermeture de la modale parente//
function Modal({ isOpen, onClose, title, children }) {
  const modalRef = useRef(null);
  const previousFocusRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    // Mémorisation du focus
    previousFocusRef.current = document.activeElement;

    // Premier focus de la modale
    modalRef.current?.focus();

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }

      if (e.key === "Tab") {
        const focusableElements = modalRef.current.querySelectorAll(
          'button, [href], input, textarea, select, [tabindex]:not([tabindex="-1"])',
        );
        if (focusableElements.length === 0) return;

        const first = focusableElements[0];
        const last = focusableElements[focusableElements.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      //Ferme le focus
      document.removeEventListener("keydown", handleKeyDown);
      previousFocusRef.current?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className="modal" onClick={onClose}>
      <div
        className="modal__content parchment"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        tabIndex={-1}
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="modal__close"
          onClick={onClose}
          aria-label="Fermer"
        >
          &times;
        </button>
        {/* Titre de la modale, lu par les lecteurs d'écran mais non affiché */}
        <h2 id="modal-title" className="visually-hidden">
          {title}
        </h2>
        <div className="modal__inner">{children}</div>
      </div>
    </div>,
    document.body,
  );
}

export default Modal;
