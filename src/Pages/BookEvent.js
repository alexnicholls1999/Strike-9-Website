import React from 'react'
import EventDetails from '../Components/Organisms/EventDetails'
import Hero from '../Components/Organisms/Hero';
import { Container, Row } from "react-bootstrap";

function BookEvent() {
    return (
        <>
            <Hero title="SEARCH FOR STRIKE 9 VLU EVENTS" half>
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

        </>
    )
}

export default BookEvent;