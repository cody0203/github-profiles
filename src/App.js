import React from 'react';
import { Switch, Route } from 'react-router-dom';

// pages
import HomeContainer from './view/pages/home/home.container';

// styles
import { AppContainer, StyledH1 } from './app.styles';
import { GlobalLightStyle } from './global.styles';

const App = () => {
  return (
    <AppContainer>
      <StyledH1>Github Profiles</StyledH1>
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route path="**">Not found</Route>
      </Switch>
      <GlobalLightStyle />
    </AppContainer>
  );
};

export default App;
