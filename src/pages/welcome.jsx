import React from "react";
import Footer from "../components/footer";
import Logo from "../components/logo";
import "../assets/style/styleWelcome.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolume } from "@fortawesome/free-solid-svg-icons";

function Welcome() {
  return (
    <div className="Welcome__page">
      <Logo />
      <h1>Bienvenue</h1>
      <h2>Je vous propose ici une experience immersive</h2>
      <p className="welcome__p">
        Pour plus d'immersion je vous invite à activer le son représenté par
        l'icone <FontAwesomeIcon icon={faVolume} /> Ce site me représente, pas
        seulement ce que je sais faire, mais qui je suis. Alors prennez autant
        de plaisir à le découvrir que moi à vous l'offrir
      </p>

      <Footer />
    </div>
  );
}

export default Welcome;
