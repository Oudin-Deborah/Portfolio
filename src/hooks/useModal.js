import { useState, useCallback } from "react";

//fonction parent de gestion d'ouverture des modales//
// initialContent : contenu à ouvrir dès l'arrivée sur la page (retour depuis une fiche projet)
export function useModal(initialContent = null) {
  const [activeContent, setActiveContent] = useState(initialContent);

  const openModal = useCallback((contentKey) => setActiveContent(contentKey), []);
  const closeModal = useCallback(() => setActiveContent(null), []);

  return { activeContent, openModal, closeModal };
}