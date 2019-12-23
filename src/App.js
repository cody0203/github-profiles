import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

// pages
import Home from './view/pages/home/home.page';

// styles
import { AppContainer, StyledH1 } from './app.styles';
import { GlobalLightStyle } from './global.styles';

const lightTheme = {
  primary: '#f5f4f0',
  secondary: '#7b7c70',
  shadow: '#d5d4d6',
  lightTextColor: '#9a9a90'
};

const darkTheme = {
  primary: '#2F4858',
  secondary: '#F9FBE9',
  shadow: '#7b7c70',
  lightTextColor: '#F9FBE9'
};

const App = () => {
  const theme = useSelector(({ setting }) => setting.theme);

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <AppContainer>
        <StyledH1>Github Profiles</StyledH1>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="**">Not found</Route>
        </Switch>
        <GlobalLightStyle />
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
