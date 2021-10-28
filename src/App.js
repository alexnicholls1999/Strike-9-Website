import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { Switch, Route } from 'react-router';
import RouteProvider from './utils/Context/RouteContext';
import ContentProvider from './utils/Context/ContentContext';
import Home from './Pages/Home';

import content from './utils/content';
import theme from './styles/theme';
import About from './Pages/About';
import Training from './Pages/Training';
import Coaching from './Pages/Coaching';
import Contact from './Pages/Contact';
import Events from './Pages/Events';
import Booking from './Pages/Booking';
import Login from './Pages/Login';
import CreateAccount from './Pages/CreateAccount';

const pages = [
  {
    routeName: "Home",
    exact: true,
    path: "/",
    component: Home
  },
  {
    routeName: "About Us",
    path: "/aboutus",
    component: About
  },
  {
    routeName: "Training",
    path: "/training",
    component: Training,
  },
  {
    routeName: "Events",
    exact: true,
    path: "/events",
    component: Events,
  },
  {
    routeName: "BookingForm",
    path: "/events/:id",
    component: Booking
  },
  {
    routeName: "Coaching",
    path: "/coaching",
    component: Coaching
  },
  {
    routeName: "Contact",
    path: "/contact",
    component: Contact
  },
  {
    routeName: "Login",
    path: "/login",
    component: Login
  },
  {
    routeName: "CreateAccount",
    path: "/createaccount",
    component: CreateAccount
  }
]

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Switch>
        <RouteProvider pages={pages}>
          <ContentProvider content={content}>
            {pages.map(({ exact, path, component}, i) => <Route key={i} exact={exact} path={path} component={component}/>)}
          </ContentProvider>
        </RouteProvider>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
