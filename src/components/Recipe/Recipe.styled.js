import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 8px;
  border: 1px solid ${(p) => p.theme.colors.black};
  border-radius: 4px;  
`;
export const Title = styled.h2`
  margin-bottom: 16px;
`;
export const RecipeInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
export const InfoBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;