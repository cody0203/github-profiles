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
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.secondary};
  }

  a {
    font-size: 1.1rem;
    color: ${({ theme }) => theme.lightTextColor};
    text-decoration: none;

    :hover {
      color: ${({ theme }) => theme.secondary};
    }
  }
`;
