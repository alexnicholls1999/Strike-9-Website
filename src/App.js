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
import RedirectToLogin from './HOC/RedirectToLogin';
import Login from './Pages/Login';
import Booking from './Pages/Booking';
import useAuth from './react-hooks/useAuth';
import firebase from "./firebase/utils";
import CreateAccount from './Pages/CreateAccount';

const initAttemptedRoute = "/";

function App() {

  const { isAuthenticated, createEmailUser, signInEmailUser } = useAuth(firebase.auth);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Switch>
        {/* <RouteProvider pages={routes}>
          <ContentProvider content={content}>
            {routes.pages.map(({ exact, path, component}, i) => <Route key={i} exact={exact} path={path} component={component}/>)}
          </ContentProvider>
        </RouteProvider> */}

        <RouteProvider pages={routes}>
          <Protected authenticated={isAuthenticated} initAttemptedRoute={initAttemptedRoute} exact path="/">
            <Events />
          </Protected>
          <RedirectToLogin authenticated={isAuthenticated} initAttemptedRoute={initAttemptedRoute} path="/login">
              <Login signInEmailUser={signInEmailUser} />
          </RedirectToLogin>
          <RedirectToLogin authenticated={isAuthenticated} initAttemptedRoute={initAttemptedRoute} path="/createaccount">
              <CreateAccount createEmailUser={createEmailUser} />
          </RedirectToLogin>
        </RouteProvider>

      </Switch>
    </ThemeProvider>
  );
}

export default App;
