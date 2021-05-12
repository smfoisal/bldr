import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`\
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 100%;
  }

  html,
  body {
    min-height: 100vh;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-weight: 300;
    line-height: 1.5;
    margin: 0;
    font-size: 0.875rem;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: 8px;
  }

  main, section {
    display: flex;
    flex-direction: column;
  }
`;

export default GlobalStyle;
