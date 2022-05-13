import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("Mélanie");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const recipe = { title, ingredients, description, author };

    setIsPending(true);

    fetch("http://localhost:8000/recipes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(recipe),
    }).then(() => {
      console.log("new recipe added");
      setIsPending(false);
      //history.go(-1);
      history.push("/");
    });
  };

  return (
    <div className="create">
      <h2>Ajouter une recette : </h2>
      <form onSubmit={handleSubmit}>
        <label>Titre de la recette : </label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Ingrédients : </label>
        <input
          type="text"
          required
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
        <label>Description : </label>
        <textarea
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>Ajoutée par : </label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="melanie">Mélanie</option>
          <option value="valentin">Valentin</option>
        </select>
        {!isPending && <button>Ajouter la recette</button>}
        {isPending && <button disabled>Ajout de la recette...</button>}
      </form>
    </div>
  );
};

export default Create;
