import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 10.5rem 8.4rem auto;
  grid-area: 
  "header"
  "return"
  "content";

  main {
    overflow-y: auto;
  }
`;

export const Content = styled.div`
    margin: 0 auto;
    padding: 0 12.3rem;
    grid-area: content;
    max-width: 155rem;
    margin-bottom: 15rem;
`;