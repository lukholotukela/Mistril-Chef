import React, { useState } from "react";
import IngredientsList from "./components/IngredientsList";
import { getRecipeFromMistral } from "./ai";
import RecipeMd from "./components/RecipeMd";
import loadingGif from "./images/loading.gif";

export default function Main() {
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState(false);
  const [loading, setLoading] = useState(false);

  async function toggleRecipe() {
    setLoading(true);
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    setRecipe(recipeMarkdown);
    setLoading(false);
  }

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  return (
    <main>
      <form action={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. chicken"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>

      {ingredients.length > 0 && (
        <IngredientsList
          ingredients={ingredients}
          toggleRecipe={toggleRecipe}
          setLoading={setLoading}
        />
      )}

      {loading && (
        <div>
          <img className="loading-gif" src={loadingGif} alt="Loading..." />
        </div>
      )}

      <RecipeMd recipe={recipe} />
    </main>
  );
}
