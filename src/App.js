import React from 'react';
import {Switch, Route } from 'react-router';
import theme from "./styles/theme";
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Events from "./Pages/Events";
import MainLayout from "./Components/Templates/mainlayout";
import SecondaryLayout from "./Components/Templates/secondarylayout";
import Header from "./Components/Organisms/Header";
import { withRouter } from "react-router-dom";
import BookEvent from './Pages/BookEvent';


function App() {
  return (
    <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <Switch>
          <Route exact path="/">
            <SecondaryLayout secondary>
                <Events />
            </SecondaryLayout>
          </Route>
          <Route exact path="/events/:id">
            <SecondaryLayout secondary title="STRIKE 9 VLU REGISTER EVENTS FORM">
                <BookEvent />
            </SecondaryLayout>
          </Route>
        </Switch>
    </ThemeProvider>
  )
}

export default App;
