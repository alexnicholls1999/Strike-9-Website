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
          <Route exact path="/" component={Events} />
          <Route exact path="/events/:id" component={BookEvent}/>
        </Switch>
    </ThemeProvider>
  )
}

export default App;
