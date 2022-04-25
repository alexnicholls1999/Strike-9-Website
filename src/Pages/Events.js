import EventsTemplate from '../Components/Templates/EventsTemplate'
import withAuth from '../HOC/withAuth'

function Events({isAuthenticated, signOut, useEvents}) {

    const eventsContent = {
        hero: {
            title: "SEARCH FOR STRIKE 9 VLU EVENTS",
        }
    }

    return <EventsTemplate isAuthenticated={isAuthenticated} signOut={signOut} useEvents={useEvents} eventsContent={eventsContent} />
}

export default withAuth(Events);

