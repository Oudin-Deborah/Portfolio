import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import "../assets/style/styleWelcome.sass";
import { useAudio } from "../hooks/useAudio";
import AudioLoop from "../components/AudioLoop";

function Welcome() {
  return (
    <section className="welcome-page">
      <Logo />
      <div className="welcome-page__parchment">
        <h1>Bienvenue</h1>
        <h2 className="welcome-page__subtitle">
          Je vous propose ici une experience immersive
        </h2>
        <p className="welcome-page__text">
          Pour plus d'immersion je vous invite à activer le son représenté par
          l'icone en haut à gauche. <br />
          Ce site sera mis à jour régulièrement, avec de nouvelles surprises qui
          arriveront au fil du temps.
          <br />
          <span>Pour continuer votre navigation, cliquez sur mon logo ou sur « Entrer » !</span>
        </p>
        <h2>Déborah, la sorcière 3.0</h2>
        <Link to="/index" className="welcome-page__enter">
          Entrer
        </Link>
      </div>

      <Footer />
    </section>
  );
}

export default Welcome;
