import React from 'react'
import EventDetails from '../Components/Organisms/Form/Steps/EventDetails'
import Hero from '../Components/Organisms/Hero';
import { Container, Row } from "react-bootstrap";
import Form from '../Components/Organisms/Form/BookingForm';

function BookEvent() {
    return (
        <>
            <Hero title="STRIKE 9 VLU REGISTER EVENTS FORM" half>
              <Container>
                <div className="p-5"></div>
              </Container>
            </Hero>
            <Container>
              <Form />
            </Container>

        </>
    )
}

export default BookEvent;