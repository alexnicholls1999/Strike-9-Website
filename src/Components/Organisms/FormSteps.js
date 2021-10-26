import PropTypes from "prop-types";
import styled from "styled-components";
import { useFormikContext } from "formik";
import { Col, Row } from "react-bootstrap";
import FormControl from "./../Molecules/FormControl";
import Label from "../Atoms/Form/Label";

const StyledStepSummary = styled.div`
    display: flex;
    
    ul {
        list-style-type: none;
        padding: 1vw 0 0 1vw;
        li {
            margin-bottom: 5px;
        }
    }
`;

export function EventDetails({ eventDetails }) {
    
    const { values, errors, handleChange } = useFormikContext();

    const configTeamName =  {
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
                    <Col md={6}><FormControl controls={{label: {style: errors.teamName ? {borderColor: "#C90808"} : null, name: "Team Name"}, errMsg: errors.teamName ? {borderColor: "#C90808"} : null}}{...configTeamName}/></Col>
                </Row>
            </>
        </>
    )
}

export function BillingAddress() {

    const { values, errors, handleChange } = useFormikContext()

    const configBillingAddress1 =  {
        style: errors.billingAddressLine1 ? {borderColor: "#C90808"} : null,
        type: "text",
        name: "billingAddressLine1",
        value: values.billingAddressLine1,
        onChange: handleChange,
        placeholder: "Enter Billing Address Line 1"
    };
    
    const configBillingAddress2 =  {
        style: errors.billingAddressLine2 ? {borderColor: "#C90808"} : null,
        type: "text",
        name: "billingAddressLine2",
        value: values.billingAddressLine2,
        onChange: handleChange,
        placeholder: "Enter Billing Address Line 2"
    };

    const configBillingAddress3 =  {
        style: errors.billingAddressLine3 ? {borderColor: "#C90808"} : null,
        type: "text",
        name: "billingAddressLine3",
        value: values.billingAddressLine3,
        onChange: handleChange,
        placeholder: "Enter Billing Address Line 3"
    };

    const configLocation =  {
        style: errors.location ? {borderColor: "#C90808"} : null,
        type: "text",
        name: "location",
        value: values.location,
        onChange: handleChange,
        placeholder: "Enter Location"
    };

    const configPostcode =  {
        style: errors.postcode ? {borderColor: "#C90808"} : null,
        type: "text",
        name: "postcode",
        value: values.postcode,
        onChange: handleChange,
        placeholder: "Enter Postcode"
    };

    return (
        <>
            <Row>
                <h3 className="py-2">Event Details</h3>
            </Row>
            <Row>
                <Col md={6}>
                    <FormControl 
                        controls={{
                            label: {
                                style: errors.teamName ? {borderColor: "#C90808"} : null,
                                name: "Billing Address Line 1",
                            },
                            errMsg: errors.teamName ? {borderColor: "#C90808"} : null
                        }}
                        {...configBillingAddress1}
                    />
                </Col>
                <Col md={6}>
                    <FormControl 
                        controls={{
                            label: {
                                style: errors.teamName ? {borderColor: "#C90808"} : null,
                                name: "Billing Address Line 2",
                            },
                            errMsg: errors.teamName ? {borderColor: "#C90808"} : null
                        }}
                        {...configBillingAddress2}
                    />
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <FormControl 
                        controls={{
                            label: {
                                style: errors.teamName ? {borderColor: "#C90808"} : null,
                                name: "Billing Address Line 3",
                            },
                            errMsg: errors.teamName ? {borderColor: "#C90808"} : null
                        }}
                        {...configBillingAddress3}
                    />
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <FormControl 
                        controls={{
                            label: {
                                style: errors.teamName ? {borderColor: "#C90808"} : null,
                                name: "Town/City",
                            },
                            errMsg: errors.teamName ? {borderColor: "#C90808"} : null
                        }}
                        {...configLocation}
                    />
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <FormControl 
                        controls={{
                            label: {
                                style: errors.teamName ? {borderColor: "#C90808"} : null,
                                name: "Postcode",
                            },
                            errMsg: errors.teamName ? {borderColor: "#C90808"} : null
                        }}
                        {...configPostcode}
                    />
                </Col>
            </Row>
        </>
    )
}

export function Summary({eventDate}) {
    const { values } = useFormikContext();

    const steps = [
        {
            labelName: "Events Details",
            items: [eventDate, values.teamName]
        }, 
        {
            labelName: "Personal Details",
            items: [values.firstName, values.lastName, values.email, values.mobile, values.gender, values.selectedDate, values.ethnicity ]
        }, 
        {
            labelName: "Billing Address",
            items: [values.billingAddressLine1, values.billingAddressLine2, values.billingAddressLine3, values.location, values.postcode ]
        }, 
    ]
    
    return (
        <div>
            <h3>Summary</h3>
            <div className="py-2"></div>

            <Row>
                {steps.map((step, index) => {
                    return (
                        <Col md={6} key={index}>
                            <Label name={step.labelName} />
                            <StyledStepSummary>
                                <ul>{step.items.map((item, index) => <li key={index}>{item}</li>)}</ul>
                            </StyledStepSummary>
                        </Col>
                    )
                })}
            </Row>
        </div>
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

Summary.propTypes = {
    eventDate: PropTypes.string.isRequired
}
