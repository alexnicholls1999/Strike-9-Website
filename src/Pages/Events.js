import EventsTemplate from '../Components/Templates/EventsTemplate'

function Events({isAuthenticated, signOut}) {

    const eventsContent = {
        hero: {
            title: "SEARCH FOR STRIKE 9 VLU EVENTS",
        }
    }

    return <EventsTemplate isAuthenticated={isAuthenticated} signOut={signOut} eventsContent={eventsContent} />
}

export default Events
