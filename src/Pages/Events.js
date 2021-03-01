import React from 'react'
import styled from "styled-components"
import { Container } from 'react-bootstrap'
import Hero from '../Components/Organisms/Hero'
import Search from '../Components/Organisms/Search'
import { events } from './../events';
import Event from '../Components/Molecules/Event'

const SearchResults = styled.div`


`;

function Events() {
    return (
        <div>
            <Hero title="SEARCH FOR STRIKE 9 VLU EVENTS" secondary>
                <Container>
                    <Search />
                </Container>
            </Hero>
            <Container>
                <SearchResults>
                    {events.map((event) => (
                        <Event
                            key={event.id}
                            title={event.eventsTitle}
                            type={event.eventsType}
                            age={event.age}
                            cost={event.cost}
                            date={event.date}
                            description={event.description}
                            time={event.time}
                            buttonName="BOOK"
                        />
                    ))}
                </SearchResults>
            </Container>
        </div>
    )
}

export default Events
