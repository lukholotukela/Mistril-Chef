import ReactMarkdown from "react-markdown";

export default function RecipeMd({ recipe }) {
  return (
    <div className="suggested-recipe-container">
      <h1>{recipe ? "Chef Mistril Responds:" : null}</h1>
      <ReactMarkdown>{recipe}</ReactMarkdown>
    </div>
  );
}
