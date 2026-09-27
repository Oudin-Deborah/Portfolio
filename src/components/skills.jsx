import { useState } from "react";
import projects from "../data/projects.json";
import "../assets/style/styleSkills.sass";

function SkillsModal() {
  const [expandedSkill, setExpandedSkill] = useState(null);

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
              className="skills-list__toggle"
              onClick={() => toggleSkill(skill)}
              aria-expanded={isOpen}
            >
              <span>{skill}</span>
              <span
                className={`skills-list__arrow ${isOpen ? "skills-list__arrow--open" : ""}`}
              >
                ›
              </span>
            </button>

            {isOpen && (
              <ul className="skills-list__projects">
                {relatedProjects.map((project) => (
                  <li key={project.id}>{project.title}</li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default SkillsModal;
