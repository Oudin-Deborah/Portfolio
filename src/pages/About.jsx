//Imports de la page À propos//
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../assets/style/styleAbout.sass";

//Fonction pour la page About//
function About() {
  return (
    <div className="about-page">
      <Header />
      <main className="about-page__scroll parchment">
        <div className="about-content">
          <header className="about-content__header">
            <NavLink
              to="/index"
              className="about-content__back"
              aria-label="Retour à la scène"
              title="Retour à la scène"
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </NavLink>
            <h1 className="about-content__title">À propos de moi</h1>
          </header>

          <section>
            <h2>Mon parcours</h2>
            <p>
              Je suis accro aux technologies depuis toute petite (merci Papa !).
              Mes premiers souvenirs : insérer une disquette pour lancer un jeu
              totalement pixélisé, puis, à l'âge de 8 ans, mes premières lignes
              de code sur un terminal, avec un énorme livre, tout ça pour
              changer la couleur de la police.
            </p>
          </section>

          <section>
            <h2>Une reconversion assumée</h2>
            <p>
              Autodidacte au départ, j'ai vite compris qu'il me fallait une
              vraie formation pour me faire une place dans ce monde. J'ai donc
              suivi le parcours de développeuse full-stack avec OpenClassrooms.
              Depuis, j'apprends chaque jour en inspectant des sites et en
              codant encore et encore, pour comprendre comment mettre toutes les
              possibilités au service de vos besoins.
            </p>
          </section>

          <section>
            <h2>Mais encore</h2>
            <p>
              Je ne me limite pas à la tech : je suis aussi une grande fan de
              cuisine, de jeux vidéo et d'onglerie. J'ai besoin de créativité et
              de challenge au risque de tourner en rond, c'est pourquoi
              j'apprends d'autres langages tout en me perfectionnant dans ceux
              que je connais déjà !
            </p>
          </section>

          <section>
            <h2>Et vous dans tout ça ?</h2>
            <p>
              Vous avez un projet ? Vous ne savez pas comment le mettre en place
              ? Discutons-en et{" "}
              <NavLink to="/contact" className="about-content__contact-link">
                envoyez-moi un message
              </NavLink>
              .
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default About;
