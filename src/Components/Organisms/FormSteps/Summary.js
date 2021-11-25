import PropTypes from "prop-types";
import styled from "styled-components";
import { useFormikContext } from "formik";
import { Row, Col } from "react-bootstrap";
import Label from "./../../Atoms/Form/Label";


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

export default function Summary({eventDate}) {
    const { values } = useFormikContext();

    const selectedDate = new Date(values.selectedDate).toDateString()

    const steps = [
        {
            labelName: "Events Details",
            items: [eventDate, values.teamName]
        }, 
        {
            labelName: "Personal Details",
            items: [values.firstName, values.lastName, values.email, values.mobile, values.gender, selectedDate, values.ethnicity ]
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


Summary.propTypes = {
    eventDate: PropTypes.string.isRequired
}
