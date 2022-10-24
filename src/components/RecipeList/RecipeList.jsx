import ptopTypes from "prop-types";
import { ListItem, WrapperList } from "./RecipeList.styled";
import { Recipe } from "../Recipe/Recipe";

export const RecipeList = ({ recipes }) => { 
  return (
    <WrapperList>
      {recipes.map((recipe) =>(
      <ListItem key={recipe.id}>
        <Recipe recipe={recipe} />
      </ListItem>
      ))}
    </WrapperList>
  );
};

RecipeList.ptopTypes = {
  recipes: ptopTypes.arrayOf(
    ptopTypes.shape({
      id: ptopTypes.string.isRequired,
    })
  ),
};