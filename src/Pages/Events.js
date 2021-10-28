import EventsTemplate from '../Components/Templates/EventsTemplate'

function Events() {

    const eventsContent = {
        hero: {
            title: "SEARCH FOR STRIKE 9 VLU EVENTS",
        }
    }

    return <EventsTemplate eventsContent={eventsContent} />
}

export default Events
