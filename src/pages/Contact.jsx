import "../assets/style/styleContact.sass";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

//formulaire de contact pour me joindre via le composant ContactForm//
function Contact() {
  return (
    <div className="contact-page">
      <Header />

      <main className="contact-page__parchment parchment">
        <h1>Vous souhaitez me contacter ?</h1>
        <ContactForm />

        {/*lien vers mes pages linkedin et github*/}
        <nav aria-label="Réseaux sociaux">
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/oudin-deborah/"
                target="_blank"
                rel="noreferrer"
                aria-label="Profil LinkedIn de Deborah Oudin"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Oudin-Deborah"
                target="_blank"
                rel="noreferrer"
                aria-label="Profil GitHub de Deborah Oudin"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
          </ul>
        </nav>
      </main>

      <Footer />
    </div>
  );
}

export default Contact;
