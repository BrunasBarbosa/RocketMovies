import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  padding: 1.7rem 0;
  
  font-weight: 500;

  background-color: ${({ theme }) => theme.COLORS.SALMON};

  border-radius: 1rem;
  border: none;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
`;