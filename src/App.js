import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from './Styles/globalTheme';
import { Theme, Theme2 } from './Styles/themes'

import Navbar from './Components/Navbar';
import ContactPage from './Views/ContactPage';
import AboutPage from './Views/AboutPage';
import PortfolioPage from './Views/PortfolioPage';
import Footer from './Components/Footer'
import Hero from './Views/Display';

const AppContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  `;

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const swapTheme = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkmode', !darkMode);
  };

  useEffect(() => {
    const darkModeInLocalStorage = JSON.parse(localStorage.getItem('darkmode'));

    if (darkModeInLocalStorage !== null) {
      setDarkMode(darkModeInLocalStorage);
    }
  },[])

  return (
    <Switch>
    <ThemeProvider theme={darkMode ? Theme : Theme2}>
      <GlobalStyle />
      <Navbar darkMode={darkMode} swapTheme={swapTheme}/>
      <AppContainer>
        <Route exact path="/" component={Hero} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/projects" component={PortfolioPage} />
      </AppContainer>
      <Footer />
    </ThemeProvider>
    </Switch>
  );
}

export default App;
