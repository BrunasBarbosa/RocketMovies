import styled from 'styled-components';

export const Container = styled.div`
  
  width: 100%;
  height: 22.2rem;
  padding: 3.2rem;

  border-radius: 1.6rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  box-shadow: 0 1rem 2rem -1rem rgba(0, 0, 0, 0.5);

  > div:hover {
    cursor: pointer;
    filter: brightness(90%);
    transition: all .5s ease-in-out;
  }
  
  div {
    > h1 {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.COLORS.GRAY_000};
    }
  
    > p {
      height: 5.2rem;
      white-space: nowrap;
      overflow: hidden;

      font-size: 1.6rem;
      text-overflow: ellipsis;
      text-align: justify;
      line-height: 1.9rem;
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }

    > footer {
      margin: 1.5rem 0 3.2rem;
      
      display: flex;
      gap: .8rem;
    }
  }

  svg {
    width: 1.6rem;
    height: 1.6rem;
  }
`;
