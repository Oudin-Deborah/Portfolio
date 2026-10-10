//Fonction pour la page d'erreur//
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import "../assets/style/styleNotFound.sass";

function NotFound() {
  return (
    <section className="not-found-page">
      <Logo />
      
      <h1>Erreur 404</h1>
      <div className="not-found-page__message">
      <p className="not-found-page__text">Ce lieu n'est pas sûr il faut retourner là où tu es en sécurité.</p>
      <Link to="/" className="not-found-page__link">
        Retourner en sécurité
      </Link>
      </div>
      <Footer />
    </section>
  );
}

export default NotFound;