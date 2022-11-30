import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 5.6rem;

  background-color: ${({ theme }) => theme.COLORS.SALMON};

  border-radius: 1rem;
  border: none;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  font-weight: 500;
`;