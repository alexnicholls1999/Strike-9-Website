import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';


function EventDetails() {
    return (
        <Container>
            <Row>
                <h3 className="py-3">Event Details</h3>
            </Row>
            <Row>
                <div>
                    <p>Event Title:</p>
                    <p>Event Date:</p>
                    <p>Event Time:</p>
                    <p>Event Address: Moseley School Sports Centre, Springfield Road, B13 9NP</p>
                    <p>Cost: FREE</p>
                </div>
            </Row>
            <Row>
                <div>
                    <p>COVID19 SAFETY</p>
                    <p>Track & trace</p>
                    <p>Can all participants on entry to the pitch: </p>
                    <ul> 
                        <li>Use the hand sanitizer placed at the gate to the 4g pitch</li>
                        <li>Make yourself available for temperate checks before session start.</li>
                    </ul>
                    <p>Inform us of your attendance prior to the session, once you have filled in an event registration form any future visits you will only have to acknowledge attendance of that days session. </p>
                </div>
            </Row>
        </Container>
    )
}

export default EventDetails;