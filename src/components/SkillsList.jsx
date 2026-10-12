import { useState } from "react";
import { Link } from "react-router-dom";
import projects from "../data/projects.json";

// initialSkill : compétence à déplier dès l'ouverture (retour depuis une fiche projet)
function SkillsList({ initialSkill = null }) {
  const [expandedSkill, setExpandedSkill] = useState(initialSkill);

  // Liste des stacks uniques, dérivée des projets — pas de duplication de données
  const allSkills = [...new Set(projects.flatMap((p) => p.stack))].sort();

  const toggleSkill = (skill) => {
    setExpandedSkill((prev) => (prev === skill ? null : skill));
  };

  return (
    <ul className="skills-list">
      {allSkills.map((skill) => {
        const relatedProjects = projects.filter((p) => p.stack.includes(skill));
        const isOpen = expandedSkill === skill;

        return (
          <li key={skill} className="skills-list__item">
            <button
              type="button"
              className="skills-list__toggle"
              onClick={() => toggleSkill(skill)}
              aria-expanded={isOpen}
            >
              <span>{skill}</span>
              <span
                className={`skills-list__arrow ${isOpen ? "skills-list__arrow--open" : ""}`}
                aria-hidden="true"
              >
                ›
              </span>
            </button>

            {isOpen && (
              <ul className="skills-list__projects">
                {relatedProjects.map((project) => (
                  <li key={project.id}>
                    {/* state : la fiche saura revenir sur cette compétence */}
                    <Link
                      to={`/projets/${project.id}`}
                      state={{ from: "skills", skill }}
                      className="skills-list__project-link"
                    >
                      {project.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default SkillsList;
