import { createGlobalStyle, css } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    vertical-align: baseline;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      background: ${theme.colors.background};
      font-family: ${theme.font.family.default};
      color: ${theme.colors.white};
      line-height: 1.5;
      font-weight: ${theme.font.normal};
      overflow: hidden;
    }

    input,
    textarea,
    button {
      font: 500 1rem ${theme.font.family.default}, sans-serif;
      color: ${theme.colors.gray500};
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: ${theme.font.family.heading};
      font-weight: ${theme.font.bold};
    }

    button {
      cursor: pointer;
    }

    ul,
    ol {
      list-style: none;
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    [disabled],
    [readonly] {
      cursor: not-allowed;
    }
  `}
`;

export default GlobalStyles;
