import ReactMarkdown from "react-markdown"

export default function RecipeMd({recipe}) {
    return (
        <>
        <h1>{recipe? "Chef Mistril Responds:": null}</h1>
        <ReactMarkdown>{recipe}</ReactMarkdown>
        </>
    )
}