import React from 'react';
import styled from "styled-components";
import { useFormikContext } from "formik";
import { Row, Container, FormGroup } from 'react-bootstrap';

import Input from "./../../../Atoms/Forms/Input";
import Label from "./../../../Atoms/Forms/Label";
import ErrorMessage from "./../../../Atoms/Forms/ErrorMessage";

const StyledUl = styled.ul`
    list-style: none;
    padding: 0;
`;

const Title = styled.h3`
    color: ${({theme}) => theme.colors.primary.RoyalPurple};
    font-weight: bold;
`;

function EventDetails({date, time, address, cost}) {
    
    const formik = useFormikContext();
    
    return (
        <Container>
            <Row>
                <Title className="py-2">Event Details</Title>
            </Row>
            <Row>
                <div>
                    <p>Event Timing: {date}, {time}</p>
                    <p>Event Address: {address}</p>
                    <p>Cost: {cost}</p>
                </div>
            </Row>
            <Row>
                <div>
                    <p>COVID19 SAFETY</p>
                    <p>Track & trace</p>
                    <p>Can all participants on entry to the pitch: </p>
                    <StyledUl>
                        <li>Use hand sanitizier placed at the gate to the 4g pitch</li>
                        <li>Make yourself available for temperate checks before session start. </li>
                    </StyledUl>
                    <p >Inform us of your attendance prior to the session, once you have filled in an event registration form any future visits you will only have to acknowledge attendance of that days session.</p>
                </div>
            </Row>
            <Row>
                <FormGroup>
                    <Label style={formik.errors.teamName ? {color: "#C90808"} : null}>Team Name: </Label>
                    <Input 
                        style={formik.errors.teamName ? {borderColor: "#C90808"} : null} 
                        type="text"
                        name="teamName"
                        value={formik.values.teamName}
                        onChange={formik.handleChange}
                        placeholder="Enter Team Name"
                    />
                    <ErrorMessage>{formik.errors.teamName}</ErrorMessage>
                </FormGroup>
            </Row>
        </Container>
    )
}

export default EventDetails
