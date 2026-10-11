//Fonction pour le footer visible sur toutes les pages du site//
function Footer() {
  return (
    <footer className="footer">
      <p>
        ©2026 Déborah Oudin — Tous droits réservés —{" "}
        <a
          href="https://github.com/Oudin-Deborah/Portfolio"
          target="_blank"
          rel="noreferrer"
          aria-label="Code source du portfolio sur GitHub (nouvel onglet)"
        >
          Code source
        </a>
      </p>
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
