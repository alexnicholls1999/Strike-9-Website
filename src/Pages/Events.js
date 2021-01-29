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

  const { updateEvents, time, date, type, age, isChecked, state, setState, setTime, setDate, setAge, setType, setIsChecked, handleSubmit } = useSearch();

    return (
        <SecondaryLayout secondary>
            <Hero title="SEARCH FOR STRIKE 9 VLU EVENTS" half>
              <Container>
                <Search 
                      handleDateChange={(e) => setDate(e.target.value)}
                      handleTimeChange={(e) => setTime(e.target.value)}
                      handleTypeChange={(e) => setType(e.target.value)}
                      handleAgeChange={(e) => setAge(e.target.value)}
                      handleCheck={(e) => setIsChecked(e.target.checked)}
                      checked={isChecked}
                      checkedValue={isChecked}
                      date={date}
                      time={time}
                      type={type}
                      age={age}
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
