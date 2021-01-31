import React from "react";
import { Route, Switch } from 'react-router-dom';
import {ThemeProvider} from "styled-components";
import theme from "./styles/theme";
import Home from './Pages/Home';
import Events from './Pages/Events';
import GlobalStyles from "./styles/GlobalStyles";


function App() {
  console.log(theme);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/events">
          <Events />
        </Route>
      </Switch>
    </ThemeProvider>

  );
}

export default App;
