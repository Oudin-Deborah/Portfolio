const Recipes = ["Poulet au curry", "Pates au lardon", "chocolat"];

function RecipesList() {
  return (
    <ul className="Recipes-list">
      {Recipes.map((Recipe) => (
        <li key={Recipe} className="Recipes-list__item">
          {Recipe}
        </li>
      ))}
    </ul>
  );
}

export default RecipesList;
