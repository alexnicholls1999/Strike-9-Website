import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router';
import Home from './Pages/Home';
import Events from './Pages/Events';
import EventDetails from './Pages/EventDetails';

function App() {
  return (
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
  );
}

export default App;
