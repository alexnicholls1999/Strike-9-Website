import EventsTemplate from '../Components/Templates/EventsTemplate'

function Events({isAuthenticated, signOut, useEvents}) {

    const eventsContent = {
        hero: {
            title: "SEARCH FOR STRIKE 9 VLU EVENTS",
        }
    }

    return <EventsTemplate isAuthenticated={isAuthenticated} useEvents={useEvents} signOut={signOut} eventsContent={eventsContent} />
}

export default Events
