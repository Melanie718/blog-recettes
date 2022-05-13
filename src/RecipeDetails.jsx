import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

const RecipeDetails = () => {
  const { id } = useParams();
  const {
    data: recipe,
    error,
    isPending,
  } = useFetch("http://localhost:8000/recipes/" + id);
  const history = useHistory();

  const handleClick = () => {
    fetch("http://localhost:8000/recipes/" + recipe.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="recipe-details">
      {isPending && <div>Chargement en cours...</div>}
      {error && <div> {error}</div>}
      {recipe && (
        <article>
          <h2>{recipe.title}</h2>
          <div>{recipe.description}</div>
          <p>Ajoutée par {recipe.author}</p>
          <button onClick={handleClick}>Supprimer la recette</button>
        </article>
      )}
    </div>
  );
};

export default RecipeDetails;
