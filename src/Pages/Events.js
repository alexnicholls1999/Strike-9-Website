import React from 'react'
import styled from "styled-components"
import { Container } from 'react-bootstrap'
import Hero from '../Components/Organisms/Hero'
import Search from '../Components/Organisms/Search'
import { events } from './../events';
import Event from '../Components/Molecules/Event';
import FadeIn from './../Animations/FadeIn';

const SearchResults = styled.div`
    padding: 0 5%;
`;

function Events() {
    return (
        <div>
            <Hero title="SEARCH FOR STRIKE 9 VLU EVENTS" secondary>
                <Container>
                    <Search />
                </Container>
            </Hero>
            <SearchResults>
                <Container>
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
                            linkTo={"/events/" + event.id}
                        />

                    ))}
                </Container>

            </SearchResults>
        </div>
    )
}

export default Events
