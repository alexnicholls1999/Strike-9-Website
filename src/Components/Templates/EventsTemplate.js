import PropTypes from "prop-types";
import { Container } from "react-bootstrap";
import MainLayout from "../../Layouts/MainLayout";
import { renderSearchResults } from "../../react-helpers/eventHelpers";
import Search from "../Organisms/Search";

function EventsTemplate({eventsContent, isAuthenticated, signOut, useEvents}) {

    return (
        <MainLayout 
            isAuthenticated={isAuthenticated}
            signOut={signOut}
            hero={{ content: { title: eventsContent.hero.title}}} 
            component={
                <Search
                    search={{
                        handleFilters: {
                            handleDateChange: useEvents.handleOnChangeSearch, 
                            handleTypeChange: useEvents.handleOnChangeSearch, 
                            handleTimeChange: useEvents.handleOnChangeSearch, 
                            handleAgeChange:useEvents. handleOnChangeSearch, 
                            handleCheck: useEvents.handleOnChangeAvailableSlots
                        },
                        filters: {
                            date: useEvents.state.date, 
                            time: useEvents.state.time, 
                            type: useEvents.state.type, 
                            age: useEvents.state.age, 
                            checkedValue: useEvents.state.isChecked
                        },
                        checked: useEvents.state.isChecked, 
                    }}
                />  
            }
        >
            <Container fluid>
                {renderSearchResults(useEvents.events)}
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
