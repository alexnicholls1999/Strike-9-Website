import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { Routes, Route } from 'react-router';
import RouteProvider from './utils/Context/RouteContext';
import ContentProvider from './utils/Context/ContentContext';

import content from './utils/content';
import theme from './styles/theme';
import routes from './utils/routes';

import useAuth from './firebase/useAuth';

import CreateAccount from './Pages/CreateAccount';
import Login from './Pages/Login';
import Booking from './Pages/Booking';
import Home from './Pages/Home';
import Events from './Pages/Events';
import About from './Pages/About';
import Training from './Pages/Training';
import Coaching from './Pages/Coaching';
import Contact from './Pages/Contact';

import useBookEvent from './react-hooks/useBookEvent';
import useEvents from './firebase/useEvents';
import TermsAndConditions from './Pages/TermsAndConditions';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import CookiesPolicy from './Pages/CookiesPolicy';

function App() {
  const { user, isAuthenticated, logOut, createEmailUser, signInEmailUser } = useAuth();
  const { state, events, handleOnChangeAvailableSlots, handleOnChangeSearch } = useEvents();  
  const { booked, handleSubmit } = useBookEvent();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />  

      <ContentProvider content={content}>   
        <RouteProvider pages={routes}>
            <Routes> 
                <Route path="/" element={<Home signOut={logOut} isAuthenticated={isAuthenticated}/> } />
                <Route path="/aboutus" element={<About signOut={logOut} isAuthenticated={isAuthenticated}/>} />
                <Route path="/training" element={<Training signOut={logOut} isAuthenticated={isAuthenticated}/>} />
                <Route path="/events" element={ <Events signOut={logOut} isAuthenticated={isAuthenticated} useEvents={{state: state, events: events, handleOnChangeAvailableSlots: handleOnChangeAvailableSlots, handleOnChangeSearch: handleOnChangeSearch}} />} />
                <Route path="/events/:id" element={<Booking signOut={logOut} isAuthenticated={isAuthenticated} useAuth={{user: user}} useEvents={{events: events}} useBookEvents={{booked: booked, handleSubmit: handleSubmit}} />} />
                <Route path="/coaching" element={<Coaching signOut={logOut} isAuthenticated={isAuthenticated}/>} />
                <Route path="/contact" element={<Contact signOut={logOut} isAuthenticated={isAuthenticated}/>} />
                <Route path="/login" element={<Login signInEmailUser={signInEmailUser}/>} />
                <Route path="/createaccount" element={<CreateAccount createEmailUser={createEmailUser} />} />
                <Route path="/termsandconditions" element={<TermsAndConditions signOut={logOut} isAuthenticated={isAuthenticated}/>} />
                <Route path="/privacypolicy" element={<PrivacyPolicy signOut={logOut} isAuthenticated={isAuthenticated}/>} />
                <Route path="/cookiespolicy" element={<CookiesPolicy signOut={logOut} isAuthenticated={isAuthenticated} />} />
            </Routes>       
        </RouteProvider>  
      </ContentProvider>
    </ThemeProvider>
  );
}

export default App;
