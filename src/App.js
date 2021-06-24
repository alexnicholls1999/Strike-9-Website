import React from 'react';
import {Switch, Route } from 'react-router';
import theme from "./styles/theme";
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Events from "./Pages/Events";
import MainLayout from "./Components/Templates/MainLayout";
import SecondaryLayout from "./Components/Templates/SecondaryLayout";
import BookEvent from './Pages/BookEvent';
import {connect} from "react-redux";
import { signInAnonymously } from './redux/actions/authAction';
import Home from './Pages/Home';


function RouteGuard(props) {
  const { auth, signInAnonymously, children} = props;

  if (!auth.uid) {
    console.log("Sign in Guest", auth.uid);
    signInAnonymously();
  } else {
    console.log(auth.uid);
  }

  return <>{children}</>
}

function App({...props}) {
  return (
    <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/events">
              <RouteGuard {...props}>
                <Events />
              </RouteGuard>
            </Route>
            <Route path="/events/:id">
              <RouteGuard {...props}>
                <SecondaryLayout secondary>
                  <BookEvent />
                </SecondaryLayout>
              </RouteGuard>
            </Route>
        </Switch>
    </ThemeProvider>
  )
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signInAnonymously: () => dispatch(signInAnonymously)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
