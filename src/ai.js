export async function getRecipeFromClaude(ingredientsArr) {
  const ingredientsString = ingredientsArr.join(", ");
  try {
    const response = await fetch("/api/get-recipe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ingredients: ingredientsString }),
    });
    const data = await response.json();
    return data.content[0].text;
  } catch (err) {
    console.error(err.message);
  }
}
