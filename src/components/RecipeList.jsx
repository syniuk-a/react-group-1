import { Recipe } from "./Recipe/Recipe";

export const RecipeList = ({ recipes }) => { 
  return (
    <ul>
      {recipes.map((recipe) =>(
      <li key={recipe.id}>
        <Recipe recipe={recipe} />
      </li>
      ))}
    </ul>
  );
};