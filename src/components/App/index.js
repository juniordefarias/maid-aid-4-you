import { useContext } from 'react';

import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../../assets/styles/global';

// if we need two themes on our project, we use the theme from "ThemeContext". (line 15)
// if we need one unique theme, we use the theme from '../../assets/styles/themes/default'. (line 12)

// uncoment the line right bellow if we just need one unique theme on our project
import themes from '../../assets/styles/themes/default';

// comment the line right bellow if we dont need two themes on our project
/* import { ThemeContext } from '../../contexts/ThemeContext'; */

import Routes from '../../Router';

import Header from './../Header';
import Footer from '../Footer';

export default function App() {
  /* const { theme } = useContext(ThemeContext); */

  return (
    <BrowserRouter>
        <ThemeProvider theme={themes}>
          <GlobalStyle />
            {/* <Header /> */}
            <Routes />
            <Footer />
        </ThemeProvider>
      </BrowserRouter>
  );
}