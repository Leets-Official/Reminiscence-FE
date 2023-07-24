import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    @font-face {
    font-family: 'Pacifico', cursive;
    font-style: normal;
    src: url('./assets/Fonts/Pacifico-Regular.ttf') format('ttf');
    }
    
    @font-face {
    font-family: 'K2D', sans-serif;
    font-style: normal;
    src: url('./assets/Fonts/K2D-Bold.ttf') format('ttf');
    }
  }
  body{
    background-color: black;
  }
`;

export default GlobalStyle;
