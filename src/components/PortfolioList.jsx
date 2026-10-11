//fonction de gestion des projets ajoutés dans data/projects affichés sur l'index//
import projects from "../data/projects.json";
import Carousel from "./Carousel";

function PortfolioList() {
  return (
    <Carousel
      items={projects}
      renderItem={(project) => (
        <div className="portfolio-card">
          <img
            src={project.image}
            alt={project.title}
            className="portfolio-card__image"
          />
          <div className="portfolio-card__body">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p className="portfolio-card__stack">{project.stack.join(" · ")}</p>
            <div className="portfolio-card__links">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="portfolio-card__link"
                >
                  Voir le site
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
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    />
  );
}

export default PortfolioList;
