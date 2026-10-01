//Fonction pour la page d'erreur//
import { Link } from "react-router-dom";
import Footer from "../components/footer";
import Logo from "../components/logo";
import "../assets/style/styleError.sass";

function Error() {
  return (
    <section className="Body__Error">
      <Logo />
      
      <h1>Erreur 404</h1>
      <div className="error_section">
      <p className="error_P">Ce lieu n'est pas sûr il faut retourner là où tu es en sécurité.</p>
      <Link to="/" className="Error__link">
        Retourner en sécurité
      </Link>
      </div>
      <Footer />
    </section>
  );
}

export default Error;