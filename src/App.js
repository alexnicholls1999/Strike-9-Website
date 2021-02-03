import React from "react";
import { Route, Switch } from 'react-router-dom';
import {ThemeProvider} from "styled-components";
import theme from "./styles/theme";
import Home from './Pages/Home';
import Events from './Pages/Events';
import GlobalStyles from "./styles/GlobalStyles";
import MainLayout from "./Components/Templates/MainLayout";


function App() {
  console.log(theme);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Switch>
        <Route exact path="/">
          <MainLayout>
            <Home />
          </MainLayout>
        </Route>
        <Route path="/events">
          <MainLayout>
            <Events/>
          </MainLayout>
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
