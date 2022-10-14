import { Recipe } from "./Recipe";

export const RecipeList = ({ recipes }) => { 
  return (
    <ul>
      {recipes.map((recipe, idx) => (
        <li key={idx}>
          <Recipe />
        </li>
      ))}
    </ul>
  );
};