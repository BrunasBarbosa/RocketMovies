import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 9rem;
  display: grid;
  grid-template-rows: 10.5rem 8.4rem auto;
  grid-template-areas:
  "header"
  "return"
  "content";
  
  > a:nth-child(2) {
    padding: 4.8rem 12.4rem 2.4rem;
  }
  
  > main {
    grid-area: content;
    overflow-y: auto;
    padding: 0 12.4rem;
    
    display: flex;
    flex-direction: column;
    gap: 4rem;
    
    section {
      display: flex;
      gap: 4rem;
    }

    h2 {
    font-size: 2rem;
    font-weight: 400;

    color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  h1 {
      font-size: 3.6rem;
      font-weight: 500;
      line-height: 4.7rem;
  
      color: ${({ theme }) => theme.COLORS.WHITE};
  }

  .tags {
    display: flex;
    align-items: center;
    gap: 2.4rem;
    flex-wrap: wrap;
    overflow-y: auto;
    width: 100%;
    height: 8.8rem;

    padding: 1.4rem;
    border-radius: 1rem;
    
    background-color: ${({ theme }) => theme.COLORS.DARK};
    
  }
`;

export const Delete = styled.button`
  width: 100%;
  padding: 1.7rem 0;
  
  font-size: 1.6rem;
  align-items: center;

  border: none;
  border-radius: 1rem;

  background-color: ${({ theme }) => theme.COLORS.DARK};
  color: ${({ theme }) => theme.COLORS.SALMON};
`;