import Home from './../Pages/Home';
import About from './../Pages/About';
import Training from './../Pages/Training';
import Coaching from './../Pages/Coaching';
import Contact from './../Pages/Contact';
import Events from './../Pages/Events';
import Booking from './../Pages/Booking';
import Login from './../Pages/Login';
import CreateAccount from './../Pages/CreateAccount';

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
      component: About
    },
    {
      routeName: "Training",
      path: "/training",
      component: Training,
    },
    {
      routeName: "Events",
      exact: true,
      path: "/events",
      component: Events,
    },
    {
      routeName: "Coaching",
      path: "/coaching",
      component: Coaching
    },
    {
      routeName: "Contact",
      path: "/contact",
      component: Contact
    },
]

const links = [
    {
      routeName: "Home",
      path: "/",
      location: ""
    },
    {
      routeName: "About Us",
      path: "/aboutus",
      location: "aboutus"
    },
    {
      routeName: "Training",
      path: "/training",
      location: "training"
    },
    {
      routeName: "Events",
      path: "/events",
      location: "events"
    },
    {
      routeName: "Coaching",
      path: "/coaching",
      location: "coaching"
    },
    {
      routeName: "Contact",
      path: "/contact",
      location: "contact"
    },
]

const routes = {
    pages: pages,
    links: links
}

export default routes;