//Fiche détaillée d'une recette : l'identifiant vient de l'adresse (/recettes/:id)//
import { Link, useLocation, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import NotFound from "./NotFound";
import recipes from "../data/recipes.json";
import { usePageTitle } from "../hooks/usePageTitle";
// Mise en page commune avec les fiches projet (panneau, en-tête, encadré final)
import "../assets/style/styleProject.sass";
import "../assets/style/styleRecipe.sass";

// Informations pratiques, dans l'ordre d'affichage
const INFOS = [
  { key: "portions", label: "Quantité" },
  { key: "preparation", label: "Préparation" },
  { key: "repos", label: "Repos" },
  { key: "cuisson", label: "Cuisson" },
];

function Recipe() {
  const { id } = useParams();
  const location = useLocation();
  // L'adresse est comparée sans tenir compte des majuscules
  const recipe = recipes.find((r) => r.id.toLowerCase() === id.toLowerCase());

  usePageTitle(
    recipe
      ? `${recipe.title} — Recette de Déborah Oudin`
      : "Page introuvable — Déborah Oudin",
  );

  // Identifiant inconnu : page d'erreur
  if (!recipe) return <NotFound />;

  // Retour : modale des recettes rouverte sur la saison d'où l'on vient
  const backState = {
    modal: "recipes",
    season: location.state?.season ?? recipe.seasons[0],
  };

  return (
    <div className="project-page">
      <Header />

      <main className="project-page__panel parchment">
        <article className="project">
          <header className="project__header">
            <Link
              to="/index"
              state={backState}
              className="project__back"
              aria-label="Retour aux recettes"
              title="Retour aux recettes"
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </Link>
            {/* tabIndex -1 : le bouton « retour en haut » peut y ramener le focus */}
            <h1 className="project__title" tabIndex={-1}>
              {recipe.title}
            </h1>
          </header>

          <div className="project__intro">
            {/* Photo et crédit de son auteur */}
            <figure className="recipe__figure">
              <img
                src={import.meta.env.BASE_URL + recipe.image}
                alt={`Photo de la recette ${recipe.title}`}
                className="recipe__image"
              />
              {recipe.credit && (
                <figcaption className="recipe__credit">
                  Photo :{" "}
                  {recipe.credit.url ? (
                    <a href={recipe.credit.url} target="_blank" rel="noreferrer">
                      {recipe.credit.author}
                    </a>
                  ) : (
                    recipe.credit.author
                  )}
                </figcaption>
              )}
            </figure>

            <div className="project__summary">
              <p className="project__description">{recipe.description}</p>

              <dl className="recipe__infos">
                {INFOS.filter(({ key }) => recipe.infos[key]).map(
                  ({ key, label }) => (
                    <div key={key} className="recipe__info">
                      <dt>{label}</dt>
                      <dd>{recipe.infos[key]}</dd>
                    </div>
                  ),
                )}
              </dl>

              <h2>Saison</h2>
              <ul className="project__stack">
                {recipe.seasons.map((season) => (
                  <li key={season}>{season}</li>
                ))}
              </ul>
            </div>
          </div>

          <section className="project__section">
            <h2>Ingrédients</h2>
            <ul>
              {recipe.ingredients.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="project__section">
            <h2>Étapes</h2>
            {/* Liste numérotée : l'ordre des étapes compte */}
            <ol className="recipe__steps">
              {recipe.etapes.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </section>

          {recipe.astuces?.length > 0 && (
            <section className="project__section project__section--review">
              <h2>Astuces</h2>
              <ul>
                {recipe.astuces.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          )}

          <BackToTop />
        </article>
      </main>

      <Footer />
    </div>
  );
}

export default Recipe;
