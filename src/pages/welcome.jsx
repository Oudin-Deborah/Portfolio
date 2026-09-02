import React from "react";
import Footer from "../components/footer";
import Logo from "../components/logo";
import "../assets/style/styleWelcome.sass";
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
          l'icone <AudioLoop /> Ce site me représente, pas seulement ce que je
          sais faire, mais qui je suis. <br /> Alors prennez autant de plaisir à
          le découvrir que moi à vous l'offrir. <br />
        </p>
        <h2>Déborah, la sorcière 3.0</h2>
      </div>

      <Footer />
    </section>
  );
}

export default Welcome;
