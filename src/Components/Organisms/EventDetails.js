import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import styled from "styled-components";

const StyledUl = styled.ul`

    list-style: none;
    padding: 0;

`

function EventDetails() {
    return (
        <Container>
            <Row>
                <h3 className="py-3">Event Details</h3>
            </Row>
            <Row>
                <div>
                    <p>Event Timing: Saturday 27th & 29th October, 2020, 3pm Start. </p>
                    <p>Event Address: Moseley School Sports Centre, Springfield Road, B13 9NP</p>
                    <p>Cost: FREE</p>
                </div>
            </Row>
            <Row>
                <div>
                    <p>COVID19 SAFETY</p>
                    <p>Track & trace</p>
                    <p>Can all participants on entry to the pitch: </p>
                    <StyledUl> 
                        <li>Use the hand sanitizer placed at the gate to the 4g pitch</li>
                        <li>Make yourself available for temperate checks before session start.</li>
                    </StyledUl>
                    <p style={{width: "50%"}}>Inform us of your attendance prior to the session, once you have filled in an event registration form any future visits you will only have to acknowledge attendance of that days session. </p>
                </div>
            </Row>
        </Container>
    )
}

export default EventDetails;