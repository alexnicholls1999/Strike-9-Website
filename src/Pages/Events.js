import React, {useState, useEffect} from 'react';
import {Container, Row} from 'react-bootstrap';
import { db } from '../firebase/utils';

import Event from '../Components/Molecules/Event'

import Search from '../Components/Organisms/Search'
import Hero from '../Components/Organisms/Hero'

function Events() {
  const [updateEvents, setUpdateEvents] = useState([]);
  const [date, setDate] = useState("Any");
  const [time, setTime] = useState("Any");
  const [type, setType] = useState("Any");
  const [age, setAge] = useState("Any");
  const [checkbox, setCheckbox] = useState(false);

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
        <>
            <Hero title="SEARCH FOR STRIKE 9 VLU EVENTS" half>
              <Container>
                <Search 
                      handleDateChange={(e) => setDate(e.target.value)}
                      handleTimeChange={(e) => setTime(e.target.value)}
                      handleTypeChange={(e) => setType(e.target.value)}
                      handleAgeChange={(e) => setAge(e.target.value)}
                      date={date}
                      time={time}
                      type={type}
                      age={age}
                      onClick={handleSubmit}
                />
              </Container>
            </Hero>


            <div>
                {updateEvents.map((event) => (
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
            </div>
            
        </>
    )
}

export default Events;
