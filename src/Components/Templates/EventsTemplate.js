import PropTypes from "prop-types";
import { Container } from "react-bootstrap";
import MainLayout from "../../Layouts/MainLayout";
import useEvents from "../../react-hooks/useEvents";
import Event from "../Organisms/Event";
import Search from "../Organisms/Search";

function EventsTemplate({eventsContent}) {

    const { state, events, handleOnChangeSearch } = useEvents();

    return (
        <MainLayout 
            hero={{ content: { title: eventsContent.hero.title}}} 
            component={
                <Search
                    search={{
                        handleFilters: {
                            handleDateChange: handleOnChangeSearch, 
                            handleTypeChange: handleOnChangeSearch, 
                            handleTimeChange: handleOnChangeSearch, 
                            handleAgeChange: handleOnChangeSearch, 
                        },
                        filters: {
                            date: state.date, 
                            time: state.time, 
                            type: state.type, 
                            age: state.age, 
                            checked: state.isChecked, 
                            checkedValue: state.isChecked
                        }
                    }}
                />
            }
        >
            <Container fluid>
                {events.map((event, index) => (
                    <Event
                        key={index}
                        event={{
                            title: event.eventsTitle,
                            type: event.eventsType,
                            age: event.age,
                            cost: event.cost,
                            date: event.date,
                            description: event.description,
                            time: event.time,
                            linkTo: "/events/" + event.id
                        }}
                    />
                ))}
            </Container>

        </MainLayout>    
    )
}

EventsTemplate.propTypes = {
    eventsContent: PropTypes.shape({
        hero: PropTypes.shape({
            title: PropTypes.string.isRequired
        })
    })
}

export default EventsTemplate
