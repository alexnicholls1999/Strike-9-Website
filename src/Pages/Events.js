import React from 'react'
import styled from "styled-components"
import { Container } from 'react-bootstrap'
import Hero from '../Components/Organisms/Hero'
import Search from '../Components/Organisms/Search'
import { events } from './../events';
import Event from '../Components/Molecules/Event';
import FadeIn from './../Animations/FadeIn';
import useSearch from "./../react-hooks/useSearch";

const SearchResults = styled.div`
    padding: 0 5%;
`;

function Events() {

    const { updateEvents, state, handleOnChangeAvailableSlots, handleOnChangeSearch, handleSubmit } = useSearch(); 

    return (
        <div>
            <Hero title="SEARCH FOR STRIKE 9 VLU EVENTS" secondary>
                <Container>
                    <Search 
                        handleDateChange={handleOnChangeSearch}
                        handleTimeChange={handleOnChangeSearch}
                        handleTypeChange={handleOnChangeSearch}
                        handleAgeChange={handleOnChangeSearch}
                        handleCheck={handleOnChangeAvailableSlots}
                        checked={state.isChecked}
                        checkedValue={state.isChecked}
                        date={state.date}
                        time={state.time}
                        type={state.type}
                        age={state.age}
                        onClick={handleSubmit}
                    />
                </Container>
            </Hero>
            <SearchResults>
                    {updateEvents.length > 0 ? (
                        updateEvents.map((event) => (
                            event.slots > 0 ? (
                                <Event 

                                />
                            ) : (
                                <UnavailableEvent />
                            )
                        ))
                    ) : (
                        <p>No Results Found</p>
                    )}
            </SearchResults>
        </div>
    )
}

export default Events
