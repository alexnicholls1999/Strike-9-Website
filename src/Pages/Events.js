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

const SearchResults = styled.div`

  background-color: white;



`;


function Events() {
  const [updateEvents, setUpdateEvents] = useState([]);
  const [date, setDate] = useState("Any");
  const [time, setTime] = useState("Any");
  const [type, setType] = useState("Any");
  const [age, setAge] = useState("Any");
  const [isChecked, setIsChecked] = useState(false);


  // console.log("Checked is", [isChecked]);

  useEffect(() => {
    db.collection("events").onSnapshot((snapshot) => {
      const newEvents = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));

      setUpdateEvents(newEvents);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    let query = db.collection("events");

    // if (checkbox === true) {
    //   query = query.where("slots", "<", 0);
    // }

    if (isChecked === true) {
        query = query.where("slots", "!=", 0);
    }

    if (date !== "Any") {
      query = query.where("date", "==", date);
    } else {
      query = query.where("datefltr", "==", true);
    }

    if (type !== "Any") {
      query = query.where("eventsType", "==", type);
    } else {
      query = query.where("eventsTypefltr", "==", true);
    }

    if (time !== "Any") {
      query = query.where("time", "==", time);
    } else {
      query = query.where("timefltr", "==", true);
    }

    if (age !== "Any") {
      query = query.where("age", "==", age);
    } else {
      query = query.where("agefltr", "==", true);
    }

    query.onSnapshot((snapshot) => {
      const newEvents = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      

      setUpdateEvents(newEvents);
    });
  };

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
                  {updateEvents.map((event) => (
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

                  ))}

              </SearchResults>
            </Container>
        </SecondaryLayout>
    )
}

export default Events;
