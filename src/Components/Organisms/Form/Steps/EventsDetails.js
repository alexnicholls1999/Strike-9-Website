import PropTypes from "prop-types";
import styled from "styled-components";
import { useFormikContext } from "formik";
import { Container, Row, FormGroup } from "react-bootstrap";

import Label from "./../../../Atoms/Form/Label";
import Input from "./../../../Atoms/Form/Input";
import ErrorMessage from "../../../Atoms/Form/ErrorMessage";


const Title = styled.h3`
    color: ${({theme}) => theme.colors.primary.RoyalPurple};
    font-weight: ${({theme}) => theme.typography.fontWeight.bold};
`;

const StyledUl = styled.ul`
    list-style: none;
    padding: 0;
`;

function EventsDetails({eventDetails}) {

    const formik = useFormikContext();

    return (
        <Container>
            <Row>
                <Title>Event Details</Title>
            </Row>
            <Row>
                <div>
                    <p>Event Timing: {eventDetails.date}, {eventDetails.time}</p>
                    <p>Event Address: {eventDetails.address}</p>
                    <p>Cost: {eventDetails.cost}</p>
                </div>
            </Row>
            <Row>
                <div>
                    <p>COVID 19 SAFETY</p>
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
                    <Label style={formik.errors.teamName ? {color: "#C90808"} : null}/>
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

EventsDetails.defaultProps = {
    eventDetails: {
        date: "MM/DD",
        time: "00:00 - 00:00",
        address: "Event Address",
        cost: "Event Cost"
    }
}

EventsDetails.propTypes = {
    eventDetails: PropTypes.shape({
        date: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,
        cost: PropTypes.string.isRequired
    })
}

export default EventsDetails
