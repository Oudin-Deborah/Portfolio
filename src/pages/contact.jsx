//Fonction pour la page d'Index//
import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import ContactForm from "../components/mailto";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

//formulaire de contact pour me joindre via le composant ContactForm//
function Contact() {
  return (
    <div>
      <Header />
      <p>Vous souhaitez me contacter?</p>
      <ContactForm />
      
      {/*lien vers mes pages linkedin et github*/}
      <li>
        <a
          href="https://www.linkedin.com/in/oudin-deborah/"
          target="_blank"
          aria-label="Profil LinkedIn de Deborah Oudin"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://github.com/Oudin-Deborah"
          target="_blank"
          aria-label="Profil GitHub de Deborah Oudin"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </li>
      <Footer />
    </div>
  );
}

export default Contact;
