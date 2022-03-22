import { createGlobalStyle, css } from "styled-components";

const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: 'Quicksand';
    font-style: normal;
    font-weight: 300;
    src: local(''),
        url('/fonts/quicksand-v28-latin-300.woff2') format('woff2') /* Super Modern Browsers */
  }
  @font-face {
    font-family: 'Quicksand';
    font-style: normal;
    font-weight: 400;
    src: local(''),
        url('/fonts/quicksand-v28-latin-regular.woff2') format('woff2') /* Super Modern Browsers */
  }

  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    src: local(''),
        url('/fonts/roboto-v29-latin-300.woff2') format('woff2') /* Super Modern Browsers */
  }
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: local(''),
        url('/fonts/roboto-v29-latin-regular.woff2') format('woff2') /* Super Modern Browsers */
  }
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    src: local(''),
        url('/fonts/roboto-v29-latin-500.woff2') format('woff2') /* Super Modern Browsers */
  }
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    src: local(''),
        url('/fonts/roboto-v29-latin-700.woff2') format('woff2')/* Super Modern Browsers */
  }


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
      font: ${theme.font.normal} ${theme.font.sizes.medium}
          ${theme.font.family.default},
        sans-serif;
      color: ${theme.colors.white};
      line-height: 1.5;
      overflow: hidden;
    }

    input,
    textarea,
    button {
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
