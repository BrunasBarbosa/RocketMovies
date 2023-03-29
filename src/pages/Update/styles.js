import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 10.5rem 8.4rem auto;
  grid-template-areas:
  "header"
  "return"
  "content";
`;

export const Content = styled.div`
  grid-area: content;
  padding-right: 1.6rem;

  display: flex;
  flex-direction: column;
  gap: 4rem;

  input,
  textarea {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }
  
  section {
    display: flex;
    gap: 4rem;
  }
    
  h2 {
    font-size: 2rem;
    font-weight: 400;

    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }

  h1 {
    font-size: 3.6rem;
    font-weight: 500;
    line-height: 4.7rem;
      
    color: ${({ theme }) => theme.COLORS.GRAY_000};
  }

  .tags {
    display: flex;
    align-items: center;
    gap: 2.4rem;

    flex-wrap: wrap;
    overflow-y: auto;
    width: 100%;
    height: 8.8rem;
    
    margin-top: -1.6rem;
    padding: 1.4rem;
    border-radius: 1rem;
      
    background-color: ${({ theme }) => theme.COLORS.DARK};
  }
`;
