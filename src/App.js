import { Route, Switch } from "react-router";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import theme from "./styles/theme";

import Home from "./Pages/Home";

import HomeLayout from "./Layout/HomeLayout";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Switch>
        <Route exact path="/">
          <HomeLayout>
            <Home />
          </HomeLayout>
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
