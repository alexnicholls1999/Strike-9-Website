import { Route, Switch } from 'react-router';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';

// Pages
import Home from './Pages/Home';
import About from './Pages/About';
import Training from './Pages/Training';
import Events from './Pages/Events';
import BookEvent from './Pages/BookEvent';
import Corporate from './Pages/Corporate';
import Contact from './Pages/Contact';
import SecondaryLayout from './Layouts/SecondaryLayout';
import EventContextProvider from './react-context/EventContext';
import UserContextProvider from './react-context/UserContext';

// Remove UserId variable once Firebase is intergrated, add useSearch Hook and bind events value with EventsContextProvider 

const userId = "elasdaXwea2dascx";

// Remove Events json once Firebase is intergrated, add useSearch Hook and bind events value with EventsContextProvider 

const events = [
  {
      "id": "1",
      "age": "Ages 11 to 13",
      "agefltr": true,
      "cost": "FREE",
      "date": "17th October 2020",
      "datefltr": true,
      "description": "We take pride in our adaptability and believe we can impact every player, helping them reach their goals in, and out, of the world of Football.",
      "eventsTitle": "Strike 9 VLU October School Sessions",
      "eventsType": "Girls Sessions",
      "eventsTypefltr": true,
      "slots": 100,
      "time": "12:00 - 14:00",
      "timefltr": true        
  }, 
  {
      "id": "2",
      "age": "Ages 11 to 13",
      "agefltr": true,
      "cost": "FREE",
      "eventsTitle": "Strike 9 VLU October School Sessions",
      "eventsType": "Boys Sessions",
      "eventsTypefltr": true,        
      "date": "17th October 2020",
      "datefltr": true,
      "description": "We take pride in our adaptability and believe we can impact every player, helping them reach their goals in, and out, of the world of Football.",
      "slots": 100,
      "time": "12:00 - 14:00",
      "timefltr": true
  },
  {
      "id": "3",
      "age": "Ages 11 to 13",
      "agefltr": true,
      "cost": "FREE",
      "eventsTitle": "Strike 9 VLU October School Sessions",
      "eventsType": "Mixed Sessions",
      "eventsTypefltr": true,
      "date": "17th October 2020",
      "datefltr": true,
      "description": "We take pride in our adaptability and believe we can impact every player, helping them reach their goals in, and out, of the world of Football.",
      "slots": 100,
      "time": "12:00 - 14:00",
      "timefltr": true
  },
  {
      "id": "4",
      "age": "Ages 14 to 16",
      "agefltr": true,
      "cost": "FREE",
      "date": "20th October 2020",
      "datefltr": true,
      "description": "We take pride in our adaptability and believe we can impact every player, helping them reach their goals in, and out, of the world of Football.",
      "eventsTitle": "Strike 9 VLU October School Sessions",
      "eventsType": "Girls Sessions",
      "eventsTypefltr": true,
      "slots": 100,
      "time": "12:00 - 14:00",
      "timefltr": true        
  }, 
  {
      "id" : "5",
      "age": "Ages 14 to 16",
      "agefltr": true,
      "cost": "FREE",
      "eventsTitle": "Strike 9 VLU October School Sessions",
      "eventsType": "Boys Sessions",
      "eventsTypefltr": true,        
      "date": "20th October 2020",
      "datefltr": true,
      "description": "We take pride in our adaptability and believe we can impact every player, helping them reach their goals in, and out, of the world of Football.",
      "slots": 100,
      "time": "12:00 - 14:00",
      "timefltr": true
  },
  {
      "id": "6",
      "age": "Ages 14 to 16",
      "agefltr": true,
      "cost": "FREE",
      "eventsTitle": "Strike 9 VLU October School Sessions",
      "eventsType": "Mixed Sessions",
      "eventsTypefltr": true,
      "date": "20th October 2020",
      "datefltr": true,
      "description": "We take pride in our adaptability and believe we can impact every player, helping them reach their goals in, and out, of the world of Football.",
      "slots": 100,
      "time": "12:00 - 14:00",
      "timefltr": true
  },
  { 
      "id" : "7",
      "age": "Ages 17 to 18",
      "agefltr": true,
      "cost": "FREE",
      "date": "27th October 2020",
      "datefltr": true,
      "description": "We take pride in our adaptability and believe we can impact every player, helping them reach their goals in, and out, of the world of Football.",
      "eventsTitle": "Strike 9 VLU October School Sessions",
      "eventsType": "Girls Sessions",
      "eventsTypefltr": true,
      "slots": 100,
      "time": "14:00 - 16:00",
      "timefltr": true        
  }, 
  {
      "id" : "8",
      "age": "Ages 17 to 18",
      "agefltr": true,
      "cost": "FREE",
      "eventsTitle": "Strike 9 VLU October School Sessions",
      "eventsType": "Boys Sessions",
      "eventsTypefltr": true,        
      "date": "27th October 2020",
      "datefltr": true,
      "description": "We take pride in our adaptability and believe we can impact every player, helping them reach their goals in, and out, of the world of Football.",
      "slots": 100,
      "time": "14:00 - 16:00",
      "timefltr": true
  },
  {
      "id" : "9",
      "age": "Ages 17 to 18",
      "agefltr": true,
      "cost": "FREE",
      "eventsTitle": "Strike 9 VLU October School Sessions",
      "eventsType": "Mixed Sessions",
      "eventsTypefltr": true,
      "date": "27th October 2020",
      "datefltr": true,
      "description": "We take pride in our adaptability and believe we can impact every player, helping them reach their goals in, and out, of the world of Football.",
      "slots": 100,
      "time": "14:00 - 16:00",
      "timefltr": true
  }    

];




function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/aboutus">
          <About />
        </Route>
        <Route path="/training">
          <Training />
        </Route>

        <UserContextProvider value={userId}>
          <EventContextProvider value={events}>
            <Route exact path="/events">
              <SecondaryLayout>
                <Events/>
              </SecondaryLayout>
            </Route>
            <Route path="/events/:id">
              <SecondaryLayout>
                <BookEvent />
              </SecondaryLayout>
            </Route>
          </EventContextProvider>
        </UserContextProvider>

        <Route path="/corporate">
          <Corporate />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
