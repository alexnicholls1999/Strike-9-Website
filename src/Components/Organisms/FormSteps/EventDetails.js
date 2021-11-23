import PropTypes from "prop-types";
import { useFormikContext } from "formik";
import FormControl from "./../../Molecules/FormControl";
import { Row, Col } from "react-bootstrap";

export default function EventDetails({ eventDetails }) {
    
    const { values, errors, handleChange } = useFormikContext();

    const configTeamName =  {
        style: errors.teamName ? {borderColor: "#C90808"} : null,
        type: "text",
        name: "teamName",
        value: values.teamName,
        onChange: handleChange,
        placeholder: "Enter Team Name"
    };
    
    return (
        <>
            <>
                <Row><h3 className="py-2">Event Details</h3></Row>
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
                        <p>Use hand sanitizier placed at the gate to the 4g pitch</p>
                        <p>Make yourself available for temperate checks before session start. </p>
                        <p >Inform us of your attendance prior to the session, once you have filled in an event registration form any future visits you will only have to acknowledge attendance of that days session.</p>
                    </div>
                </Row>
                <Row>
                    <Col md={6}>
                        <FormControl 
                            controls={{
                                label: {
                                    style: errors.teamName ? {color: "#C90808"} : null,
                                    name: "Team Name: "
                                }, 
                                errMsg: errors.teamName
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
