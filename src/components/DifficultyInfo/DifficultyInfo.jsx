import { Wrapper, Title, BadgeList, Badge } from "./DifficultyInfo.styled";

export const DifficultyInfo = ({difficulty}) => {
  return (
		<Wrapper>
			<Title>Difficulty</Title>
			<BadgeList>
				<Badge active={difficulty === 'easy'}>Easy</Badge>
				<Badge active={difficulty === 'medium'}>Medium</Badge>
				<Badge active={difficulty === 'hard'}>Hard</Badge>
			</BadgeList>
		</Wrapper>
	);
};

