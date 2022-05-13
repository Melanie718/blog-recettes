import RecipesList from "./RecipesList";
import useFetch from "./useFetch";

const Home = () => {
const { data:recipes, isPending, error} = useFetch("http://localhost:8000/recipes");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Chargement en cours...</div>}
      {recipes && (
        <RecipesList recipes={recipes} title="Toutes nos recettes : " />
      )}
      {/* <RecipesList recipes={recipes.filter((recipe) => recipe.author === "Melanie")} title="Les recettes de Mélanie : "/> */}
    </div>
  );
};

export default Home;
