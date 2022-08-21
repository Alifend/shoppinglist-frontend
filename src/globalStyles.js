import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box ;
    font-family: 'Quicksand', sans-serif;
  }
  p ,h1,h2,h3,h4,h5{
    font-weight: 500 ;
  }
  button{
    cursor:pointer;
  }
  li{
    list-style-type: none;
  }

`;

export default GlobalStyle;
