import Footer from "../components/footer";
import Logo from "../components/logo";
import "../assets/style/styleWelcome.sass";
import { UseAudio } from "../context/UseAudio";
import AudioLoop from "../components/audioloop";

function Welcome() {
  return (
    <section className="Welcome__page">
      <Logo />
      <div className="Welcome__Wrapper">
        <h1>Bienvenue</h1>
        <h2 className="Welcome__h2">
          Je vous propose ici une experience immersive
        </h2>
        <p className="Welcome__p">
          Pour plus d'immersion je vous invite à activer le son représenté par
          l'icone en haut à gauche. <br />
          Ce site sera mis à jour régulièrement, avec de nouvelles surprises qui
          arriveront au fil du temps.
          <br />
          <span className="">Pour continuer votre navigation, cliquez sur mon logo!</span>
        </p>
        <h2>Déborah, la sorcière 3.0</h2>
      </div>

      <Footer />
    </section>
  );
}

export default Welcome;
