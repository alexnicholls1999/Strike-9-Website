import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Events from './Pages/Events';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/events">
        <Events />
      </Route>
    </Switch>
  );
}

export default App;
