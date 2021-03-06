import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    transition: all 300ms;
  }
  html, body {
    overflow-x: hidden;
  }
  body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.bgColor};
    font-family: 'Poppins', sans-serif;
    color: ${({ theme }) => theme.color};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  #root {
    width: 100vw;
  }
`;

export default GlobalStyle;
