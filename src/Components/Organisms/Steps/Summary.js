import PropTypes from "prop-types";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import { useFormikContext } from 'formik';
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

const Title = styled.h3 `
    color: ${({theme}) => theme.colors.primary.RoyalPurple};
    font-weight: bold;
`;



function Summary({eventDate}) {
    const formik = useFormikContext();
    
    return (
        <div>
            <>
                <h3>Summary</h3>
                <div className="py-2"></div>

                <Row>
                    <Col md={6}>
                        <Label name="Events Details" />
                        <StyledStepSummary>
                            <ul>
                                <li>{eventDate}</li>
                                <li>{formik.values.teamName}</li>
                            </ul>
                        </StyledStepSummary>
                    </Col>
                    <Col md={6}>
                        <Label name="Personal Details" />
                        <StyledStepSummary>
                            <ul>
                                <li>{formik.values.firstName}{' '}{formik.values.lastName}</li>
                                <li>{formik.values.email}</li>
                                <li>{formik.values.mobile}</li>
                                <li>{formik.values.gender}</li>
                                <li>{new Date(formik.values.selectedDate).toDateString()}</li>
                                <li>{formik.values.ethnicity}</li>
                            </ul>
                        </StyledStepSummary>
                    </Col>
                    <Col md={6}>
                        <Label name="Billing Address" />
                        <StyledStepSummary>
                            <ul>
                                <li>{formik.values.billingAddressLine1}</li>
                                <li>{formik.values.billingAddressLine2}</li>
                                <li>{formik.values.billingAddressLine3}</li>
                                <li>{formik.values.location}</li>
                                <li>{formik.values.postcode}</li>
                            </ul>
                        </StyledStepSummary>
                    </Col>
                </Row>
            </>
        </div>
    )
}

Summary.propTypes = {
    eventDate: PropTypes.string.isRequired
}

export default Summary