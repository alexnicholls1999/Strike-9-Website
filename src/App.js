import { ThemeProvider } from 'styled-components';
import { Route, Switch } from 'react-router';
import theme from "./styles/theme";
import Home from './Pages/Home';
import HomeLayout from './Layouts/HomeLayout';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/">
          <HomeLayout name="Test">
            <Home />
          </HomeLayout>
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
