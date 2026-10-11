import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import "../assets/style/styleWelcome.sass";
import { usePageTitle } from "../hooks/usePageTitle";

function Welcome() {
  usePageTitle("Déborah Oudin — Développeuse Full Stack | Portfolio React");

  return (
    <div className="welcome-page">
      <header>
        <Logo />
      </header>

      <main className="welcome-page__parchment parchment">
        <div className="welcome-page__content">
          <h1>Bienvenue</h1>
          {/* Qui je suis, en texte : le logo le dit en image, illisible pour un moteur de recherche */}
          <p className="welcome-page__role">
            Déborah Oudin, développeuse web full stack
          </p>
          <p className="welcome-page__subtitle">
            Je vous propose ici une expérience immersive
          </p>
          <p className="welcome-page__text">
            Pour plus d'immersion je vous invite à activer le son représenté par
            l'icône en haut à gauche. <br />
            Ce site sera mis à jour régulièrement, avec de nouvelles surprises qui
            arriveront au fil du temps.
            <br />
            Pour continuer votre navigation, cliquez sur mon logo ou sur
            « Entrer » !
          </p>
          <p className="welcome-page__signature">Déborah, la sorcière 3.0</p>
          <Link to="/index" className="welcome-page__enter">
            Entrer
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Welcome;
