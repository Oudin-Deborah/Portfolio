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

      <main className="contact-page__book parchment">
        <div className="contact-page__pages">
          <section className="contact-page__intro">
            <h1>Vous souhaitez me contacter ?</h1>

            {/*lien vers mes pages linkedin et github*/}
            <nav aria-label="Réseaux sociaux" className="contact-page__socials">
              <ul>
                <li>
                  <a
                    href="https://www.linkedin.com/in/oudin-deborah/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Profil LinkedIn de Déborah Oudin"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Oudin-Deborah"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Profil GitHub de Déborah Oudin"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </li>
              </ul>
            </nav>
          </section>

          <ContactForm />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Contact;
