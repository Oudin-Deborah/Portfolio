//fonction de gestion des projets ajoutés dans data/projects affichés sur l'index//
import projects from "../data/projects.json";
import Carousel from "../components/carousel";

function PortfolioList() {
  return (
    <Carousel
      items={projects}
      renderItem={(project) => (
        <div className="portfolio-card">
          <img src={project.image} alt={project.title} />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer">
              Voir le site
            </a>
          )}
        </div>
      )}
    />
  );
}

export default PortfolioList;
