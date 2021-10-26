import PropTypes from 'prop-types';
import styled from "styled-components";
import { useFormikContext } from 'formik';
import { Col, Row } from 'react-bootstrap';
import FormControl from "./../../Molecules/FormControl";

const StyledUl = styled.ul`
    list-style: none;
    padding: 0;
`;

const Title = styled.h3`
    color: ${({theme}) => theme.colors.primary.RoyalPurple};
    font-weight: bold;
`;

function EventDetails({eventDetails, authId}) {
    
    const formik = useFormikContext();

    const configTeamName =  {
        type: "text",
        name: "teamName",
        value: formik.values.teamName,
        onChange: formik.handleChange,
        placeholder: "Enter Team Name"
    };
    
    return (
        <>
            <>
                <Row>
                    <h3 className="py-2">Event Details</h3>
                </Row>
                <div className="p-2"></div>
                <Row>
                    <div>
                        <p>Event Timing: {eventDetails.date}, {eventDetails.time}</p>
                        <p>Event Address: {eventDetails.address}</p>
                        <p>Cost: {eventDetails.cost}</p>
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
                    <Col md={6}>
                        <FormControl 
                            controls={{
                                label: {
                                    style: formik.errors.teamName ? {borderColor: "#C90808"} : null,
                                    name: "Team Name",
                                },
                                errMsg: formik.errors.teamName ? {borderColor: "#C90808"} : null
                            }}
                            {...configTeamName}
                        />
                    </Col>
                </Row>
            </>
        </>
    )
}

EventDetails.propTypes = {
    eventDetails: PropTypes.shape({ 
        date: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,
        cost: PropTypes.string.isRequired,
    })
}

export default EventDetails