import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';
import { Switch } from 'react-router';
import RouteProvider from './utils/Context/RouteContext';

const pages = [
  {
    routeName: "Home",
    exact: true,
    path: "/",
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
          {pages.map(({ exact, path, component}, i) => {return <Route key={i} exact={exact} path={path} component={component}/>})}
        </RouteProvider>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
