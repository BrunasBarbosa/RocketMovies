import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  padding: 1.7rem 0;

  font-size: 1.6rem;
  align-items: center;
  
  border: none;
  border-radius: 1rem;
  
  background-color: ${({ theme }) => theme.COLORS.DARK};
  color: ${({ theme }) => theme.COLORS.SALMON};
`;