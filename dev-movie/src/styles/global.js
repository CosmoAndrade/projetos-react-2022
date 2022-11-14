import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    font-family: 'Courier New', Courier, monospace
  }

  body{
    height: 100vh;
    background-color: #DDD;
  }
`;
 
export default GlobalStyle;

