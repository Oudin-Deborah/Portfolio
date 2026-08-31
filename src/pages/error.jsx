//Fonction pour la page d'erreur//
import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Logo from "../components/logo";

function Error() {
  return (
    <div>
      <Logo />
      <h1>Erreur 404</h1>
      <Footer />
    </div>
  );
}

export default Error;
