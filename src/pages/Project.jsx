//Fiche détaillée d'un projet : l'identifiant vient de l'adresse (/projets/:id)//
import { Link, useLocation, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import NotFound from "./NotFound";
import projects from "../data/projects.json";
import { usePageTitle } from "../hooks/usePageTitle";
import "../assets/style/styleProject.sass";

// Rubriques affichées en liste, dans l'ordre de la page
const SECTIONS = [
  { key: "objectifs", title: "Objectifs" },
  { key: "realisations", title: "Ce que j'ai réalisé" },
  { key: "competences", title: "Compétences développées" },
  { key: "resultats", title: "Résultats" },
];

function Project() {
  const { id } = useParams();
  const location = useLocation();
  // L'adresse est comparée sans tenir compte des majuscules
  const project = projects.find(
    (p) => p.id.toLowerCase() === id.toLowerCase(),
  );

  usePageTitle(
    project
      ? `${project.title} — Projet de Déborah Oudin, développeuse Full Stack`
      : "Page introuvable — Déborah Oudin",
  );

  // Identifiant inconnu : page d'erreur
  if (!project) return <NotFound />;

  const { details } = project;

  // Retour : vers la compétence d'où l'on vient, sinon vers ce projet dans le carrousel
  const fromSkills = location.state?.from === "skills";
  const backState = fromSkills
    ? { modal: "skills", skill: location.state.skill }
    : { modal: "portfolio", projectId: project.id };
  const backLabel = fromSkills
    ? "Retour aux compétences"
    : "Retour au portfolio";

  return (
    <div className="project-page">
      <Header />

      <main className="project-page__panel parchment">
        <article className="project">
          <header className="project__header">
            {/* Retour à la scène, modale rouverte à l'endroit quitté */}
            <Link
              to="/index"
              state={backState}
              className="project__back"
              aria-label={backLabel}
              title={backLabel}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </Link>
            {/* tabIndex -1 : le bouton « retour en haut » peut y ramener le focus */}
            <h1 className="project__title" tabIndex={-1}>
              {project.title}
            </h1>
          </header>

          <div className="project__intro">
            <img
              src={import.meta.env.BASE_URL + project.image}
              alt={`Aperçu du projet ${project.title}`}
              className="project__image"
            />
            <div className="project__summary">
              <p className="project__description">{project.description}</p>

              <h2>Technologies</h2>
              <ul className="project__stack">
                {project.stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>

              <div className="project__links">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="project__link"
                  >
                    Voir le site
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="project__link"
                  >
                    Repository GitHub
                  </a>
                )}
              </div>
            </div>
          </div>

          <section className="project__section">
            <h2>Contexte</h2>
            <p>{details.contexte}</p>
          </section>

          {SECTIONS.map(({ key, title }) => (
            <section key={key} className="project__section">
              <h2>{title}</h2>
              <ul>
                {details[key].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ))}

          <section className="project__section project__section--review">
            <h2>Ce que j'aurais fait différemment / à améliorer</h2>
            <ul>
              {details.ameliorations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <BackToTop />
        </article>
      </main>

      <Footer />
    </div>
  );
}

export default Project;
