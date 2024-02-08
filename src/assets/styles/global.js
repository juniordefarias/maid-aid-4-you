import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @font-face {
    font-family: 'Bree';
    src: url('../../fonts/Bree ExtraBold.ttf') format('truetype');
    font-weight: 800;
    
  }
  @font-face {
    font-family: 'Bree';
    src: url('../../fonts/Bree Bold.ttf') format('truetype');
    font-weight: 700;
  }

  @font-face {
    font-family: 'Bree';
    src: url('../../fonts/Bree Regular.ttf') format('truetype');
    font-weight: 400;
  }

  @font-face {
    font-family: 'Bree';
    src: url('../../fonts/Bree Light.ttf') format('truetype');
    font-weight: 300;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Bree', sans-serif;
  }

  body {
    scroll-behavior: smooth;
  }

  img {
    width: 100%;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  li {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  button {
    border: none;
    background: none;
    outline: none;
    cursor: pointer;
  }

  input {
    //appearance: none;  
    border: none;
    background: none;
    outline: none;
  }
`;
