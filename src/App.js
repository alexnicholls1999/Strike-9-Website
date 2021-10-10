import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { Switch, Route } from 'react-router';
import RouteProvider from './utils/Context/RouteContext';
import ContentProvider from './utils/Context/ContentContext';
import Home from './Pages/Home';

import content from './utils/content';
import theme from './styles/theme';

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
  },
  {
    routeName: "Training",
    path: "/training",
  },
  {
    routeName: "Events",
    path: "/events",
  },
  {
    routeName: "Coaching",
    path: "/coaching",
  },
  {
    routeName: "Contact",
    path: "/contact",
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
