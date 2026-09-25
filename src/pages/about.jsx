//Fonction pour la page d'Index//
import { NavLink } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import "../assets/style/styleAbout.sass";

//Fonction pour la page About//
function About() {
  return (
    <div>
      <Header />
      <div className="about-page__scroll">
        <div className="about-content">
          <h1 className="about-content__title">À propos de moi</h1>

          <div>
            <h2>Mon parcours</h2>
            <p>
              Je suis une accro aux technologies depuis toute petite (merci Papa
              !) Mes premiers souvenirs remontent à une époque où il fallait
              encore insérer une disquette pour lancer un jeu en pixel.
            </p>
          </div>

          <div>
            <h2>Une reconversion assumée</h2>
            <p>
              Autodidacte pour commencer, j'ai vite compris qu'il me fallait une
              vraie formation de développeuse web si je voulais me faire une
              place dans ce monde. Depuis, je tente de découvrir et d'en
              apprendre un peu plus chaque jour en inspectant les sites internet
              pour comprendre comment mettre toutes les possiblités au service
              de vos besoins.
            </p>
          </div>

          <div>
            <h2>Mais encore</h2>
            <p>
              Je ne me limite pas à la tech et au code : je suis aussi une
              grande fan de cuisine, de jeux vidéo et d'onglerie. J'ai besoin de
              créativité et de challenge au quotidien au risque de tourner
              rond...
            </p>
          </div>

          <div>
            <h2>Et vous dans tout ça ?</h2>
            <p>
              Vous avez un projet ? Vous ne savez pas comment le mettre en place
              ? Discutons-en et{" "}
              <NavLink to="/contact" className="about-content__contact-link">
                envoyez-moi un message
              </NavLink>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
