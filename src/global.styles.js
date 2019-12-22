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
    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.secondary};
  }

  a {
    font-size: 1.1rem;
    color: ${props => props.theme.lightTextColor};
    text-decoration: none;

    :hover {
      color: ${props => props.theme.secondary};
    }
  }
`;
