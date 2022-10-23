import { BsAlarm } from "react-icons/bs";
import { HiOutlineChartPie, HiOutlineChartBar } from "react-icons/hi";
import { InfoBlock, RecipeInfo, Title, Wrapper } from "./Recipe.styled";

export const Recipe = ({ recipe: { name, time, servings, calories } }) => {
	return (
		<Wrapper>
			<Title>{name}</Title>
			<RecipeInfo>
				<InfoBlock>
					<BsAlarm />
					{time} mins
				</InfoBlock>
				<InfoBlock>
					<HiOutlineChartPie />
					{servings} servings
				</InfoBlock>
				<InfoBlock>
					<HiOutlineChartBar />
					{calories} calories
				</InfoBlock>
			</RecipeInfo>
		</Wrapper>
	);
};
