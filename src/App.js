import { useEffect } from "react";
import { Route, Switch } from 'react-router';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';
import firebase, { store } from './firebase/utils';

// Pages
import Home from './Pages/Home';
import About from './Pages/About';
import Training from './Pages/Training';
import Events from './Pages/Events';
import BookEvent from './Pages/BookEvent';
import Coaching from './Pages/Coaching';
import Contact from './Pages/Contact';
import SecondaryLayout from './Layouts/SecondaryLayout';
import EventContextProvider from './react-context/EventContext';
import UserContextProvider from './react-context/UserContext';
import MainLayout from './Layouts/MainLayout';

import useAuth from './firebase/useAuth';
import useSearch from "./react-hooks/useSearch";

function RouteGuard({children, auth, signInGuest}) {

    useEffect(() => {
      if(!auth) {
        signInGuest();
        console.log(auth)
      } else {
        console.log(auth);
      }
    }, [])

    return <>{children}</>
}


function App() {

  const { user, signInAnomousUser } = useAuth(firebase.auth)

  const { events } = useSearch(store)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Switch>
        <Route exact path="/">
          <MainLayout heroDetails={{ title: "STRIKE 9 TRAINING ACADEMY", paragraph: "Do you want to bring another level to your Game? Are you tracking your progress? Are you seeking additional training outside of your club team? Football is changing. " }}>
            <Home />
          </MainLayout>
        </Route>
        <Route path="/aboutus">
          <SecondaryLayout dark navBg="none" menuBg={theme.colors.primary.RoyalPurple} variant="light">
            <About />
          </SecondaryLayout>
        </Route>
        <Route path="/training">
          <SecondaryLayout navBg={theme.colors.primary.RoyalPurple} menuBg={theme.colors.primary.RoyalPurple} variant="dark">
            <Training />
          </SecondaryLayout>
        </Route>
        <Route exact path="/events">
          <UserContextProvider value={user}>
            <RouteGuard auth={user.uid} signInGuest={signInAnomousUser}>
                <SecondaryLayout navBg={theme.colors.primary.RoyalPurple} menuBg={theme.colors.primary.RoyalPurple} variant="dark">
                  <Events/>
                </SecondaryLayout>
            </RouteGuard>
          </UserContextProvider>
        </Route>
        <Route path="/events/:id">
            <UserContextProvider value={user}>
              <RouteGuard auth={user.uid} signInGuest={signInAnomousUser}>
                <EventContextProvider value={events}>
                  <SecondaryLayout navBg={theme.colors.primary.RoyalPurple} menuBg={theme.colors.primary.RoyalPurple} variant="dark">
                    <BookEvent/>
                  </SecondaryLayout>
                </EventContextProvider>
              </RouteGuard>
            </UserContextProvider>
        </Route>

        <Route path="/coaching">
          <SecondaryLayout navBg={theme.colors.primary.RoyalPurple} menuBg={theme.colors.primary.RoyalPurple} variant="dark">
            <Coaching />
          </SecondaryLayout>
        </Route>

        <Route path="/contact">
          <SecondaryLayout navBg={theme.colors.primary.RoyalPurple} menuBg={theme.colors.primary.RoyalPurple} variant="dark">
            <Contact />
          </SecondaryLayout>
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
