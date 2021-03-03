import React from "react";
import { Route, Switch } from 'react-router-dom';
import {ThemeProvider} from "styled-components";
import theme from "./styles/theme";
import Home from './Pages/Home';
import Events from './Pages/Events';
import GlobalStyles from "./styles/GlobalStyles";
import MainLayout from "./Components/Templates/MainLayout";
import SecondaryLayout from "./Components/Templates/SecondaryLayout";
import BookEvent from "./Pages/BookEvent";

const content = {
  title: "STRIKE 9 TRAINING ACADEMY",
  msg: "Do you want to bring another level to your Game? Are you tracking your progress? Are you seeking additional training outside of your club team? Football is changing."
}


function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Switch>
        <Route exact path="/">
          <MainLayout title={content.title} paragraph={content.msg} >
            <Home  />
          </MainLayout>
        </Route>
        <Route exact path="/events">
          <SecondaryLayout>
            <Events/>
          </SecondaryLayout>
        </Route>
        <Route path="/events/:id">
          <SecondaryLayout>
            <BookEvent />
          </SecondaryLayout>
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
