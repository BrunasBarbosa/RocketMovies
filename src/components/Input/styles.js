import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  border-radius: 1rem;

  > svg {
    margin-left: 1.6rem;
  }

  > input {
    width: 100%;
    height: 5.6rem;

    padding: 1.8rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: none;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300}
    }
  }
`;