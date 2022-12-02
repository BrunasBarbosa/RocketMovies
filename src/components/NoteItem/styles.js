import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 1.6rem;

  border-radius: 1rem;

  background-color: ${({ theme, isNew }) => isNew ? 'transparent' : theme.COLORS.BACKGROUND_700};
  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : 'none' };
  
  > button {
    border: none;
    background: none;
    color: ${({ theme }) => theme.COLORS.SALMON};

    svg {
    width: 2.2rem;
    height: 2.2rem;
    }
  }

  > input {
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: none;
    width: 100%;
  }
`;