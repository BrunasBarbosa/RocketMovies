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

  section {
    width: clamp(54rem,38rem + 60vw,130rem);
    padding: 1.6rem;
    display: flex;
    margin: 0 auto;
    align-items: center;
    gap: 4rem;
  }
`;

export const Content = styled.div`
  margin: 0 auto;
  width: 100%;
  padding-right: 1.6rem;

  grid-area: content;
`;