//fonction de gestion des projets ajoutés dans data/projects affichés sur l'index//
import { Link } from "react-router-dom";
import projects from "../data/projects.json";
import Carousel from "./Carousel";

// initialId : projet à afficher en premier (retour depuis sa fiche), sinon le premier de la liste
function PortfolioList({ initialId }) {
  const initialIndex = Math.max(
    0,
    projects.findIndex((project) => project.id === initialId),
  );

  return (
    <Carousel
      items={projects}
      initialIndex={initialIndex}
      renderItem={(project) => (
        <article className="portfolio-card">
          <img
            src={import.meta.env.BASE_URL + project.image}
            alt={`Aperçu du projet ${project.title}`}
            className="portfolio-card__image"
            loading="lazy"
            decoding="async"
          />
          <div className="portfolio-card__body">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p className="portfolio-card__stack">{project.stack.join(" · ")}</p>
            <div className="portfolio-card__links">
              <Link
                to={`/projets/${project.id}`}
                className="portfolio-card__link"
              >
                À propos
                <span className="visually-hidden">
                  {" "}
                  du projet {project.title}
                </span>
              </Link>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="portfolio-card__link"
                >
                  Voir le site
                  <span className="visually-hidden"> {project.title}</span>
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="portfolio-card__link"
                >
                  Repository GitHub
                  <span className="visually-hidden"> de {project.title}</span>
                </a>
              )}
            </div>
          </div>
        </article>
      )}
    />
  );
}

export default PortfolioList;
