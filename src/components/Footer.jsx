//Fonction pour le footer visible sur toutes les pages du site//
function Footer() {
  return (
    <footer className="footer">
      <p>©2026 Déborah Oudin — Tous droits réservés </p>
      <p>
        Loop witch by{" "}
        <a
          href="https://www.youtube.com/@Gribz_Music"
          target="_blank"
          rel="noreferrer"
          aria-label="Gribz, chaîne YouTube (nouvel onglet)"
        >
          Gribz
        </a>{" "}
        - ©2026 Tous droits réservés
      </p>
    </footer>
  );
}
export default Footer;
