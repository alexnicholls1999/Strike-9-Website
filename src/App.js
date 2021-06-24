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
import {connect} from "react-redux";
import {signInAnonymously} from "./redux/actions/authAction";


const content = {
  title: "STRIKE 9 TRAINING ACADEMY",
  msg: "Do you want to bring another level to your Game? Are you tracking your progress? Are you seeking additional training outside of your club team? Football is changing."
}

function RouteGuard(props) {
  const {auth, signInAnonymously, children} = props;

  if (!auth.uid){
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
      <GlobalStyles />
      <Switch>
        <Route exact path="/">
            <MainLayout title={content.title} paragraph={content.msg} >
              <Home  />
            </MainLayout>
        </Route>
        <Route exact path="/events">
          <RouteGuard {...props}>
            <SecondaryLayout>
              <Events/>
            </SecondaryLayout>
          </RouteGuard>
        </Route>
        <Route path="/events/:id">
          <RouteGuard {...props}>
            <SecondaryLayout>
              <BookEvent />
            </SecondaryLayout>
          </RouteGuard>
        </Route>
      </Switch>
    </ThemeProvider>
  );
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
