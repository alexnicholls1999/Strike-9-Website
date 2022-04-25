import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { Switch, Route } from 'react-router';
import RouteProvider from './utils/Context/RouteContext';
import ContentProvider from './utils/Context/ContentContext';

import content from './utils/content';
import theme from './styles/theme';
import routes from './utils/routes';
import Protected from './HOC/Protected';
import RedirectToEvents from './HOC/RedirectToEvents';

import useAuth from './react-hooks/useAuth';
import { auth, store } from "./firebase/utils";

import CreateAccount from './Pages/CreateAccount';
import Login from './Pages/Login';
import Booking from './Pages/Booking';
import Home from './Pages/Home';
import Events from './Pages/Events';
import About from './Pages/About';
import Training from './Pages/Training';
import Coaching from './Pages/Coaching';
import Contact from './Pages/Contact';


import useBookEvent from './react-hooks/useBookEvent';
import useEvents from './react-hooks/useEvents';
import TermsAndConditions from './Pages/TermsAndConditions';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import CookiesPolicy from './Pages/CookiesPolicy';

const initAttemptedRoute = "/events";

function App() {

  const { user, isAuthenticated, signOut, createEmailUser, signInEmailUser } = useAuth(auth);
  const { state, events, handleOnChangeAvailableSlots, handleOnChangeSearch } = useEvents(store);  
  const { booked, handleSubmit } = useBookEvent(store);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />  
      <Switch> 
        <ContentProvider content={content}>       
          <RouteProvider pages={routes}>
              <Route exact path="/">
                  <Home signOut={signOut} isAuthenticated={isAuthenticated}/>
              </Route>
              <Route path="/aboutus">
                  <About signOut={signOut} isAuthenticated={isAuthenticated}/>
              </Route>
              <Route path="/training">
                  <Training signOut={signOut} isAuthenticated={isAuthenticated}/>
              </Route>    
              <Route exact path="/events">
                  <Events signOut={signOut} isAuthenticated={isAuthenticated} useEvents={{state: state, events: events, handleOnChangeAvailableSlots: handleOnChangeAvailableSlots, handleOnChangeSearch: handleOnChangeSearch}} />
              </Route>
              <Protected authenticated={isAuthenticated} initAttemptedRoute={initAttemptedRoute} path="/events/:id">
                  <Booking signOut={signOut} isAuthenticated={isAuthenticated} useAuth={{user: user}} useEvents={{events: events}} useBookEvents={{booked: booked, handleSubmit: handleSubmit}} />
              </Protected>
              <Route path="/coaching">
                  <Coaching signOut={signOut} isAuthenticated={isAuthenticated}/>
              </Route>  
              <Route path="/contact">
                  <Contact signOut={signOut} isAuthenticated={isAuthenticated}/>
              </Route>  
              <RedirectToEvents authenticated={isAuthenticated} initAttemptedRoute={initAttemptedRoute} path="/login">
                  <Login signInEmailUser={signInEmailUser}/>
              </RedirectToEvents>
              <RedirectToEvents authenticated={isAuthenticated} initAttemptedRoute={initAttemptedRoute} path="/createaccount">
                  <CreateAccount createEmailUser={createEmailUser} />
              </RedirectToEvents> 
              <Route path="/termsandconditions">
                  <TermsAndConditions signOut={signOut} isAuthenticated={isAuthenticated}/>
              </Route>
              <Route path="/privacypolicy">
                  <PrivacyPolicy signOut={signOut} isAuthenticated={isAuthenticated}/>
              </Route>
              <Route path="/cookiespolicy">
                  <CookiesPolicy signOut={signOut} isAuthenticated={isAuthenticated} />
              </Route>
          </RouteProvider>
        </ContentProvider>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
