import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Section = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5rem 12rem 4rem;

  width: 100%;

  > h1 {
    font-weight: 400;
    font-size: 3.2rem;
    line-height: 4.2rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 20.7rem;
    height: 4.8rem;
    font-size: 1.6rem;
    border-radius: 1rem;

    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    background-color: ${({ theme }) => theme.COLORS.SALMON};

    svg {
      width: 1.6rem;
      height: 1.6rem;

      margin-right: .8rem;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    }
  }

`; 

export const Content = styled.div`
  
`;

export const NewNote = styled(Link)`
  
`;