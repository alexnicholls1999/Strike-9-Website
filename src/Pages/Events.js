import { useContext } from "react";
import { Container } from "react-bootstrap";
import Event from "../Components/Molecules/Event";
import Hero from "../Components/Organisms/Hero";
import Search from "../Components/Organisms/Search";
import { StoreContext } from "../react-context/StoreContext";
import useSearch from "../react-hooks/useSearch";
import theme from "./../styles/theme";


function Events() {

    const store = useContext(StoreContext);

    const { state, events, handleOnChangeSearch, handleOnChangeAvailableSlots, handleSubmit } = useSearch(store);

    return (

        <>
            <Hero secondary bgHero={theme.colors.primary.RoyalPurple} heroDetails={{title: "SEARCH FOR STRIKE 9 VLU EVENTS"}}>
                <Search 
                    onClick={(e) => handleSubmit(e)} 
                    handleFilters={{
                        handleDateChange: handleOnChangeSearch, 
                        handleTypeChange: handleOnChangeSearch, 
                        handleTimeChange: handleOnChangeSearch, 
                        handleAgeChange: handleOnChangeSearch, 
                        handleCheck: handleOnChangeAvailableSlots
                    }} 
                    filters={{
                        date: state.date, 
                        time: state.time, 
                        type: state.type, 
                        age: state.age, 
                        checked: state.isChecked, 
                        checkedValue: state.isChecked
                    }} 
                />
            </Hero>
            <div style={{padding: "0 5%"}}>
                <Container>
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
            </div>  
        </>
    )
}
 
export default Events
