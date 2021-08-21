import PropTypes from "prop-types";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { useFormikContext } from 'formik';
import Label from "../../../Atoms/Form/Label";

const EventsDetailsSummary = styled.div`
    ul {
        padding-left: 10px; 
        list-style: none;
        color: #606060;
        li {
            padding: 5px;
        }
    }
`;

const PersonalDetailsSummary = styled.div`
    display: flex;
    flex-direction: row;
    ul {
        padding-left: 10px; 
        list-style: none;
        color: #606060;
        li {
            padding: 5px;
        }
    }
`;

const BillingAddressSummary = styled.div`
    ul {
        padding-left: 10px; 
        list-style: none;
        color: #606060;
        li {
            padding: 5px;
        }
    }
`

const Title = styled.h3 `
    color: ${({theme}) => theme.colors.primary.RoyalPurple};
    font-weight: bold;
`;



function Summary({eventDate}) {
    const formik = useFormikContext();
    
    return (
        <div>
            <Container>
                <Title>Summary</Title>
                <div className="py-2"></div>

                <Row>
                    <Col md={6}>
                        <Label>Event Details</Label>
                        <EventsDetailsSummary>
                            <ul>
                                <li>{eventDate}</li>
                                <li>{formik.values.teamName}</li>
                            </ul>
                        </EventsDetailsSummary>
                    </Col>
                    <Col md={6}>
                        <Label>Personal Details</Label>
                        <PersonalDetailsSummary>
                            <ul>
                                <li>{formik.values.firstName}</li>
                                <li>{formik.values.email}</li>
                                <li>{formik.values.mobile}</li>
                                <li>{formik.values.gender}</li>
                                <li>{formik.values.ethnicity}</li>
                            </ul>
                            <ul>
                                <li>{formik.values.lastName}</li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li>{new Date(formik.values.selectedDate).toDateString()}</li>
                            </ul>
                        </PersonalDetailsSummary>
                    </Col>
                    <Col md={6}>
                        <Label>Billing Address</Label>
                        <BillingAddressSummary>
                            <ul>
                                <li>{formik.values.billingAddressLine1}</li>
                                <li>{formik.values.billingAddressLine2}</li>
                                <li>{formik.values.billingAddressLine3}</li>
                                <li>{formik.values.location}</li>
                                <li>{formik.values.postcode}</li>
                            </ul>
                        </BillingAddressSummary>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

Summary.propTypes = {
    eventDate: PropTypes.string.isRequired
}

export default Summary
