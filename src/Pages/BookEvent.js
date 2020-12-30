import React from 'react'
import EventDetails from '../Components/Organisms/EventDetails'
import Hero from '../Components/Organisms/Hero';
import { Container, Row } from "react-bootstrap";
import Form from '../Components/Organisms/BookingForm';

function BookEvent() {
    return (
        <>
            <Hero title="STRIKE 9 VLU REGISTER EVENTS FORM" half>
              <Container>
                <div className="p-5"></div>
              </Container>
            </Hero>
            <Container>
              <Row>
                  <div className="p-5"></div>
              </Row>
              <EventDetails />
              <Row>
                  <div className="p-5"></div>
              </Row>
            </Container>
            <Container>
              <Form />
            </Container>

        </>
    )
}

export default BookEvent;