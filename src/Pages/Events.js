import { Container } from "react-bootstrap";
import styled from "styled-components";
import Event from "../Components/Molecules/Event";
import Hero from "../Components/Organisms/Hero";
import Search from "../Components/Organisms/Search";
import useSearch from "../react-hooks/useSearch";


function Events({events}) {

    const { state, handleOnChangeSearch, handleOnChangeAvailableSlots, handleSubmit } = useSearch()

    
    const { date, time, type, age, isChecked} = state;

    return (

        <>
            <Hero secondary secondaryDetails={{title: "SEARCH FOR STRIKE 9 VLU EVENTS"}}>
                <Search onClick={handleSubmit} handleFilters={{handleDateChange: handleOnChangeSearch, handleTypeChange: handleOnChangeSearch, handleTimeChange: handleOnChangeSearch, handleAgeChange: handleOnChangeSearch, handleCheck: handleOnChangeAvailableSlots}} filters={{date: date, time: time, type: type, age: age, checked: isChecked, checkedValue: isChecked}} />
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
