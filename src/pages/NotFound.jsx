//Fonction pour la page d'erreur//
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import "../assets/style/styleNotFound.sass";
import { usePageTitle } from "../hooks/usePageTitle";

function NotFound() {
  usePageTitle("Page introuvable — Déborah Oudin");

  return (
    <div className="not-found-page">
      <header>
        <Logo />
      </header>

      <main className="not-found-page__main">
        <h1>Erreur 404</h1>
        <div className="not-found-page__message">
          <p className="not-found-page__text">
            Ce lieu n'est pas sûr, il faut retourner là où vous êtes en
            sécurité.
          </p>
          <Link to="/" className="not-found-page__link">
            Retourner en sécurité
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default NotFound;
