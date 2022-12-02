import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-rows: 10.5rem 9.4rem auto;
  grid-template-areas:
  "header"
  "return"
  "content";

  > a:nth-child(2) {
    grid-area: return;
    padding: 4rem 0 2rem;
  }
  
  > main {
    grid-area: content;
    overflow-y: auto;
    
    display: flex;
    flex-direction: column;
    gap: 4rem;
    

    .title {
      display: flex;
    }

  }

  h1 {
      font-size: 3.6rem;
      font-weight: 500;
      line-height: 4.7rem;
  
      color: ${({ theme }) => theme.COLORS.WHITE};
  }

  h2 {
    font-size: 2rem;
    font-weight: 400;

    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`;

export const Delete = styled.button`
  background-color: ${({ theme }) => theme.COLORS.DARK};
  color: ${({ theme }) => theme.COLORS.SALMON};

  font-size: 1.6rem;

  border: none;
  padding: 1.7rem 0;
  align-items: center;
`;