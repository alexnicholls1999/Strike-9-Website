import EventsTemplate from '../Components/Templates/EventsTemplate';
import withProtected from '../HOC/withProtected';

function Events({ isAuthenticated, signOut, useEvents }) {
  const eventsContent = {
    hero: {
      title: 'SEARCH FOR STRIKE 9 VLU EVENTS',
    },
  };

  return (
    <EventsTemplate
      isAuthenticated={isAuthenticated}
      signOut={signOut}
      useEvents={useEvents}
      eventsContent={eventsContent}
    />
  );
}

export default withProtected(Events);
