import { Switch, Route } from 'react-router';


import Home from './Pages/Home';
import Events from './Pages/Events';
import EventDetails from './Pages/EventDetails';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/events">
            <Events />
        </Route>
        <Route path="/eventsdetails">
            <EventDetails />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
