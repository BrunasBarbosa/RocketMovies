import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.6rem;

  border-radius: 1rem;
  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : 'none' };

  background-color: ${({ theme, isNew }) => isNew ? 'transparent' : theme.COLORS.BACKGROUND_700};
  
  > button {
    width: 2.2rem;
    height: 2.2rem;
    
    border: none;
    background: none;
    color: ${({ theme }) => theme.COLORS.SALMON};

    svg {
      width: 2.2rem;
      height: 2.2rem;
    }
  }

  > input {
    width: 100%;

    font-family: 'Roboto', sans-serif;
    font-weight: 400;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`;