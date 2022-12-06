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
    width: 100%;
    grid-area: content;
    padding-right: 1.6rem;
`;