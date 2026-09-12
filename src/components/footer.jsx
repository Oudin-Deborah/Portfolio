//Fonction pour le footer visible sur toutes les pages du site//
import "../assets/style/styleFooter.sass"
function Footer() {
  return (
    <footer className="footer">
      <p>©2026 Deborah Oudin — Tous droits réservés </p>
      <p>
        Loop witch by{" "}
        <a
          href="https://www.youtube.com/@Gribz_Music"
          target="_blank"
          aria-label="Gribz music youtube"
        >
          Gribz
        </a>{" "}
        - ©2026 Tous droits réservés
      </p>
    </footer>
  );
}
export default Footer;
