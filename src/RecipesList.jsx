import { Link } from "react-router-dom";

const RecipesList = ({ recipes, title }) => {
  return (
    <div className="recipes-list">
      <h2>{title}</h2>
      {recipes.map((recipe) => (
        <div className="recipes-preview" key={recipe.id}>
          <Link to={`/recipes/${recipe.id}`}>
            <h2>{recipe.title}</h2>
            <p>Ingrédients : {recipe.ingredients}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RecipesList;
