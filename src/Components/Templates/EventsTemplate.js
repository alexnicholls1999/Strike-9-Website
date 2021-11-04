import PropTypes from "prop-types";
import { Container } from "react-bootstrap";
import MainLayout from "../../Layouts/MainLayout";
import { renderSearchResults } from "../../react-helpers/eventHelpers";
import useEvents from "../../react-hooks/useEvents";
import Search from "../Organisms/Search";

function EventsTemplate({eventsContent}) {

    const { state, events, handleOnChangeSearch, handleOnChangeAvailableSlots } = useEvents();

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
                            handleCheck: handleOnChangeAvailableSlots
                        },
                        filters: {
                            date: state.date, 
                            time: state.time, 
                            type: state.type, 
                            age: state.age, 
                            checkedValue: state.isChecked
                        },
                        checked: state.isChecked, 
                    }}
                />  
            }
        >
            <Container fluid>
                {renderSearchResults(events)}
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
