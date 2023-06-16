import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
  }
body {
  font-family: sans-serif;
    height: 100vh;
    width: 100vw;
}
`;

export {GlobalStyles};