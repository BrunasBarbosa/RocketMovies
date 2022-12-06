import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 3.2rem;
  height: 22.2rem;
  border-radius: 1.6rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  box-shadow: 0 1rem 2rem -1rem rgba(0, 0, 0, 0.5);

  a {
    > h1 {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.COLORS.GRAY_000};
    }
  
    > p {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      height: 5.2rem;
      text-align: justify;
      font-size: 1.6rem;
      line-height: 1.9rem;
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }

    > footer {
      display: flex;
      gap: .8rem;
      margin: 1.5rem 0 3.2rem;
    }
  }

  svg {
    width: 1.6rem;
    height: 1.6rem;
  }
`;
