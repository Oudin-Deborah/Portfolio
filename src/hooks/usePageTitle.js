import { useEffect } from "react";

// Donne à chaque page son propre titre d'onglet (utile aussi au référencement)
export function usePageTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}
