import React, {useState, useEffect} from 'react';
import {Container, Row} from 'react-bootstrap';
import { db } from '../firebase/utils';
import styled from "styled-components";

import Event from '../Components/Molecules/Event'
import Search from '../Components/Organisms/Search'
import Hero from '../Components/Organisms/Hero'
import NoResults from '../Components/Organisms/NoResults';
import SecondaryLayout from '../Components/Templates/secondarylayout';
import UnavailableEvent from '../Components/Molecules/UnavailableEvent';
import { Checkbox } from '@material-ui/core';
import useSearch from '../hooks/useSearch';

const SearchResults = styled.div`

  background-color: white;



`;


function Events() {

  const { updateEvents , state, handleOnChangeAvailableSlots, handleOnChangeSearch, handleSubmit } = useSearch();

    return (
        <SecondaryLayout secondary>
            <Hero title="SEARCH FOR STRIKE 9 VLU EVENTS" half>
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

            <Container>
              <SearchResults> 
                  {updateEvents.length > 0 ? (
                    updateEvents.map((event) => (
                      event.slots > 0 ? (
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
                      ) : (
                        <UnavailableEvent 
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
                      )
                    ))
                  ) : (
                    <p>No Results Found</p>
                  )}
              </SearchResults>
            </Container>
        </SecondaryLayout>
    )
}
                                   
export default Events;
