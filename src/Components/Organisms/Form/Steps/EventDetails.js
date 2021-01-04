import React from 'react';
import {Container, Row, FormGroup} from 'react-bootstrap';
import styled from "styled-components";

import Input from "../../../Atoms/Form/Input";
import Label from "../../../Atoms/Form/Label";
import FormikStep from '../../../Atoms/Form/Step';
import FormikStepper from '../../../Molecules/Form/Stepper';

const StyledUl = styled.ul`

    list-style: none;
    padding: 0;

`

function EventDetails({teamName, onTeamNameChange}) {
    return (
        <FormikStep label="Event Details">
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
                <Row>
                    <FormGroup>
                        <Label>Enter Team Name</Label>
                        <Input placeholder="Enter Team/Group Name" value={teamName} onChange={onTeamNameChange} />
                    </FormGroup>
                </Row>

            </Container>
        </FormikStep>
        
    )
}

export default EventDetails;