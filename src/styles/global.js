import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-size: 62.5%;
  }

  :root {
    --font-main: 'Roboto Slab', serif;
    --font-second: 'Roboto', sans-serif;

    --background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    --font-color: ${({ theme }) => theme.COLORS.WHITE};
  }

  body {
    background-color: var(--background-color);
    color:(--font-color);
  }

  body, 
  input,
  button,
  textarea {
    font-family: var(--font-main);
    font-size: 1.6rem;
    outline: none;
  }

  a {
    text-decoration: none;
  }

  button,
  a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover,
  a:hover {
    filter: brightness(0.9);
  }
`