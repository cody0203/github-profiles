import { createGlobalStyle } from 'styled-components';

export const GlobalLightStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  html {
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
  }

  body {
    margin: 0;
    background-color: #f5f4f0;
    color: #9a9a90;
  }

  a {
    font-size: 1.1rem;
    color: inherit;
    text-decoration: none;

    :hover {
      color: #7b7c70;
    }
  }
`;
