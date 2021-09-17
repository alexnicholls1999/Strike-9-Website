import { useContext } from "react";
import { Route, Switch } from "react-router";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import theme from "./styles/theme";
import RouteProvider, { RouteContext } from "./utils/Context/RouteContext";

import Home from "./Pages/Home";

const pages = [
  {
      routeName: "Home",
      exact: true,
      path: "/",
      component: Home,
  },
  {
      routeName: "About Us",
      path: "/about",
  },
  {
      routeName: "Training",
      path: "/training",
  },
  {
      routeName: "Events",
      exact: true,
      path: "/events",
  },
  {
      routeName: "Coaching",
      exact: true,
      path: "/coaching",  
  },
  {
      routeName: "Contact",
      exact: true,
      path: "/contact",
  }
]

function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Switch>
        <RouteProvider pages={pages}>
          {pages.map(({ exact, path, component } , i) => {return <Route key={i} exact={exact} path={path} component={component}/>})}
        </RouteProvider>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
