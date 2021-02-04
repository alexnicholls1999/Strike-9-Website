import React from "react";
import { Route, Switch } from 'react-router-dom';
import {ThemeProvider} from "styled-components";
import theme from "./styles/theme";
import Home from './Pages/Home';
import Events from './Pages/Events';
import GlobalStyles from "./styles/GlobalStyles";
import MainLayout from "./Components/Templates/MainLayout";
import SecondaryLayout from "./Components/Templates/SecondaryLayout";



function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Switch>
        <Route exact path="/">
          <MainLayout secondary>
            <Home />
          </MainLayout>
        </Route>
        <Route path="/events">
          <SecondaryLayout>
            <Events/>
          </SecondaryLayout>
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
