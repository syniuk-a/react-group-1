import { DifficultyInfo } from "components/DifficultyInfo/DifficultyInfo";
import { RecipeInfo } from "components/RecipeInfo/RecipeInfo";
import { Title, Wrapper } from "./Recipe.styled";

export const Recipe = ({ recipe: { name, time, servings, calories, difficulty } }) => {
	return (
		<Wrapper>
			<Title>{name}</Title>
			<RecipeInfo time={time} servings={servings} calories={calories} />
			<DifficultyInfo difficulty={difficulty} />
		</Wrapper>
	);
};
