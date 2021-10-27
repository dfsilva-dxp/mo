import { createGlobalStyle } from "styled-components";
// import "react-toastify/dist/ReactToastify.css";

export const GlobalStyles = createGlobalStyle`
  :root {
    /* COLORS */
    --white: #fff;

    --gray-50: #EEEEF2;
    --gray-100: #D1D2DC;
    --gray-200: #B3B5C6;
    --gray-300: #9699B0;
    --gray-400: #797D9A;
    --gray-500: #616480;
    --gray-600: #4B4D63;
    --gray-700: #404152;
    --gray-750: #353646;
    --gray-800: #1F2029;
    --gray-900: #181B23;

    --green-500: #3DB2BD;
    
    --orange-500: #FF5C00;

    --red-400: #E83F5B;
    --red-500: #e5001b;

    --yellow-400: #F2D129;
    --yellow-500: #FFC727;
    
    --purple-500: #8257e5;

    /* FONTS */
    --ft-8: 0.5rem;
    --ft-10: 0.625rem;
    --ft-12: 0.75rem;
    --ft-14: 0.875rem;
    --ft-15: 0.9375rem;
    --ft-16: 1rem;
    --ft-20: 1.25rem;
    --ft-24: 1.5rem;
    --ft-36: 2.25rem;
    --ft-48: 3rem;
    --ft-54: 3.375rem;


    /* BOX-SIZE */
    --px-4: 0.25rem;
    --px-8: 0.5rem;
    --px-10: 0.625rem;
    --px-16: 1rem;
    --px-20: 1.25rem;
    --px-40: 2.5rem;
    --px-48: 3rem;
    --px-64: 4rem;
    --px-80: 5rem;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    vertical-align: baseline;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 768px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--gray-900);
    font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--white);
    line-height: 1.5;
    font-weight: 400;
    overflow: hidden;
  }

  input, 
  textarea, 
  button,
  label {
    font: 400 var(--ft-15)/var(--ft-15) "Roboto", sans-serif;
    outline: 0;
    color: var(--gray-500);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Barlow Condensed", sans-serif;
    font-weight: 700;
  }

  ol,
  ul {
    list-style: none;
  }

  span {
    display: inline-block;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  strong {
    font-family: "Rajdhani", sans-serif;
    font-weight: 700;
  }

  p, a {
    font-family: "Roboto Mono", sans-serif;
    font-size: var(--ft-15);
    font-weight: 500;
  }

  button { 
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  /* CLASSES GERAIS */
  .container {
    width: 100%;
    margin: 0 auto;
    padding: 0 1rem;
  
    @media (min-width: 576px) {
      max-width: 540px;
    }
    @media (min-width: 768px) {
      max-width: 720px;
    }
    @media (min-width: 992px) {
      max-width: 960px;
    }
    @media (min-width: 1200px) {
      max-width: 1480px;
    }
    @media (min-width: 1920px) {
      max-width: 1640px;
    }
  }
  
  .float-left {
    opacity: 0;
    transform: translateX(-20px);
    animation: floatLeft 0.3s forwards;
  }

  @keyframes floatLeft {
    to {
      opacity: 1;
      transform: initial;
    }
  }

  /* .Toastify__toast-theme--colored.Toastify__toast--success {
    background: var(--green-500) !important;
    color: var(--gray-800) !important;
  }
  .Toastify__toast-theme--colored.Toastify__toast--error {
    background: var(--red-500) !important;
  }
  ::-webkit-scrollbar {
    width: 7px !important;
  }
  ::-webkit-scrollbar-track {
    background: var(--gray-100) !important;
  }
  ::-webkit-scrollbar-thumb {
    background: var(--purple-400) !important;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: var(--purple-500) !important;
  } */
`;
