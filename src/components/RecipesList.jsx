//Liste des recettes classées par saison, données dans data/recipes.json//
import { useState } from "react";
import { Link } from "react-router-dom";
import recipes from "../data/recipes.json";

// Saisons dans l'ordre de l'année : elles sont toutes affichées, même sans recette
const SEASONS = ["Printemps", "Été", "Automne", "Hiver"];

// Même présentation que la liste des compétences (classes skills-list)
// initialSeason : saison à déplier dès l'ouverture (retour depuis une fiche recette)
function RecipesList({ initialSeason = null }) {
  const [expandedSeason, setExpandedSeason] = useState(initialSeason);

  const toggleSeason = (season) => {
    setExpandedSeason((prev) => (prev === season ? null : season));
  };

  return (
    <ul className="skills-list">
      {SEASONS.map((season) => {
        const seasonRecipes = recipes.filter((r) => r.seasons.includes(season));
        const isOpen = expandedSeason === season;

        return (
          <li key={season} className="skills-list__item">
            <button
              type="button"
              className="skills-list__toggle"
              onClick={() => toggleSeason(season)}
              aria-expanded={isOpen}
            >
              <span>{season}</span>
              <span
                className={`skills-list__arrow ${isOpen ? "skills-list__arrow--open" : ""}`}
                aria-hidden="true"
              >
                ›
              </span>
            </button>

            {isOpen && (
              <ul className="skills-list__projects">
                {seasonRecipes.length === 0 && (
                  <li>Pas encore de recette pour cette saison</li>
                )}
                {seasonRecipes.map((recipe) => (
                  <li key={recipe.id}>
                    {/* state : la fiche saura revenir sur cette saison */}
                    <Link
                      to={`/recettes/${recipe.id}`}
                      state={{ season }}
                      className="skills-list__project-link"
                    >
                      {recipe.title}
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

export default RecipesList;
