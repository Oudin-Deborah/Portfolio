const recipes = ["Poulet au curry", "Pates au lardon", "chocolat"];

function RecipesList() {
  return (
    <ul className="recipes-list">
      {recipes.map((recipe) => (
        <li key={recipe} className="recipes-list__item">
          {recipe}
        </li>
      ))}
    </ul>
  );
}

export default RecipesList;
