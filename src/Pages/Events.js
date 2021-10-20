import { useContext } from 'react'
import EventsTemplate from '../Components/Templates/EventsTemplate'
import events from '../utils/contentPages/events.content';
import { ContentContext } from '../utils/Context/ContentContext'

function Events() {

    const content = useContext(ContentContext);

    const eventsContent = {
        hero: {
            title: content.events.hero.title,
        }
    }

    return <EventsTemplate eventsContent={eventsContent} />
}

export default Events
