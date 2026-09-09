import { createPortal } from "react-dom";
//import "../styles/Modal.sass";

//ouverture et fermeture de la modale parente//
function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Fermer">
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}

export default Modal;