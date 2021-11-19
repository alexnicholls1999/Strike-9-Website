import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { Switch, Route } from 'react-router';
import RouteProvider from './utils/Context/RouteContext';
import ContentProvider from './utils/Context/ContentContext';

import content from './utils/content';
import theme from './styles/theme';
import routes from './utils/routes';
import Protected from './HOC/Protected';
import Events from './Pages/Events';
import RedirectToEvents from './HOC/RedirectToEvents';
import Login from './Pages/Login';
import Booking from './Pages/Booking';
import useAuth from './react-hooks/useAuth';
import firebase from "./firebase/utils";
import CreateAccount from './Pages/CreateAccount';
import Home from './Pages/Home';
import About from './Pages/About';
import Training from './Pages/Training';
import Coaching from './Pages/Coaching';
import Contact from './Pages/Contact';
import useBookEvent from './react-hooks/useBookEvent';
import useEvents from './react-hooks/useEvents';

const initAttemptedRoute = "/events";

function App() {

  const { user, isAuthenticated, signOut, createEmailUser, signInEmailUser } = useAuth(firebase.auth);
  const { state, events, handleOnChangeAvailableSlots, handleOnChangeSearch } = useEvents(firebase.firestore);  
  const { booked, handleSubmit } = useBookEvent(firebase.firestore);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Switch> 
        <ContentProvider content={content}>       
          <RouteProvider pages={routes}>
              <Route exact path="/" component={Home}/>
              <Route path="/aboutus" component={About}/>
              <Route path="/training" component={Training}/>        
              <Route exact path="/events">
                  <Events useEvents={{state: state, events: events, handleOnChangeAvailableSlots: handleOnChangeAvailableSlots, handleOnChangeSearch: handleOnChangeSearch}} signOut={signOut} isAuthenticated={isAuthenticated} />
              </Route>
              <Protected authenticated={isAuthenticated} initAttemptedRoute={initAttemptedRoute} path="/events/:id">
                  <Booking useAuth={{user: user}} useEvents={{events: events}} useBookEvents={{booked: booked, handleSubmit: handleSubmit}} />
              </Protected>
              <Route exact path="/coaching" component={Coaching}/>
              <Route exact path="/contact" component={Contact}/>
      
              <RedirectToEvents authenticated={isAuthenticated} initAttemptedRoute={initAttemptedRoute} path="/login">
                  <Login signInEmailUser={signInEmailUser}/>
              </RedirectToEvents>
              <RedirectToEvents authenticated={isAuthenticated} initAttemptedRoute={initAttemptedRoute} path="/createaccount">
                  <CreateAccount createEmailUser={createEmailUser} />
              </RedirectToEvents>
          </RouteProvider>
        </ContentProvider>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
