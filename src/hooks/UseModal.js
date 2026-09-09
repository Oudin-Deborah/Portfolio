import { useState, useCallback } from "react";

//fonction parent de gestion d'ouverture des modales//
export function useModal() {
  const [activeContent, setActiveContent] = useState(null);

  const openModal = useCallback((contentKey) => setActiveContent(contentKey), []);
  const closeModal = useCallback(() => setActiveContent(null), []);

  return { activeContent, openModal, closeModal };
}