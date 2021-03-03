import React from 'react'
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import BookingForm from '../Components/Organisms/Form/BookingForm';
import Hero from '../Components/Organisms/Hero';
import SecondaryLayout from '../Components/Templates/SecondaryLayout';

function BookEvent() {

    const params = useParams();


    return (
        <>
            <Hero title="STRIKE 9 VLU REGISTER EVENTS FORM" secondary>
                <Container>
                    <div className="p-5"></div>
                </Container>
            </Hero>
            <Container>
                <BookingForm params={params} />
            </Container>
        </>
    )
}

export default BookEvent;
