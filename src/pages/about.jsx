//Fonction pour la page d'Index//
import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import Contact from "../pages/contact";

//Fonction pour la page d'accueil//
function About() {
  return (
    <div>
      <Header />
      <h1>A Propos de moi</h1>
      <h2> Mon parcours</h2>
      <p>
        {" "}
        Je suis une accro aux technologies depuis enfant (merci Papa!), mes
        souvenirs remontent aux temps anciens où nous devions insérer des
        disquettes pour lancer un jeu pixel
      </p>
      <h2> Mon parcours</h2>
      <p>
        Auto-didacte pour commencer j'ai vite compris que je devais passer une
        formation de developpeuse web si je voulais avoir une place dans ce
        monde.
      </p>
      <h2>Mais encore</h2>
      <p>
        Je n'aime pas seulement les technologies et le code, je suis une grande
        fan de cuisine, de jeux videos et d'onglerie
      </p>
      <h2> Et vous dans tout ça?</h2>
      <p>
        Vous avez un projet? Vous ne savez pas comment le mettre en place?
        Discutons en et envoyez moi un message
        <NavLink to="/Contact" className="nav__link Link__Contact">
          En cliquant ici
        </NavLink>
      </p>
      <Footer />
    </div>
  );
}

export default About;
