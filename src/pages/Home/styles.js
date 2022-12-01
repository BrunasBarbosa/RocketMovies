import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 10.5rem 12.5rem auto;
  grid-template-areas:
  "header"
  "label"
  "content";

  > main {
    overflow-y: auto;
  }
`;

export const Section = styled.div`
  grid-area: label;
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
`;

export const Content = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding: 0 12rem;
  
    > div:last-child {
      margin-bottom: 5.8rem;
    }
  `;

export const NewNote = styled(Link)`
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
`;