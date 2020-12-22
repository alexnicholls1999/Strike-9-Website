import React from 'react';
import {Switch, Route } from 'react-router';
import theme from "./config/theme";
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './config/GlobalStyles';
import Events from "./Pages/Events";
import MainLayout from "./Components/Templates/mainlayout";
import SecondaryLayout from "./Components/Templates/secondarylayout";

function App() {
  return (
    <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <Switch>
          <Route exact path="/">
            <SecondaryLayout>
                <Events />
            </SecondaryLayout>
          </Route>
        </Switch>
    </ThemeProvider>
  )
}

export default App;
