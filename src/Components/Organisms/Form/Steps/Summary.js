import React from 'react'
import FormikStep from '../../../Atoms/Form/Step';
import Label from '../../../Atoms/Form/Label';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import {useFormikContext} from "formik";
import PersonalDetails from './PersonalDetails';
import BillingAddress from './BillingAddress';

const StyledSummary = styled.div`



`;

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

function Summary(props) {
    
    const formik = useFormikContext();

    const { label, teamName, firstName, lastName, email, mobile, gender, selectedDate, ethnicity, billingLine1, billingLine2, billingLine3, location, postcode } = props;

    return (
    
        
        <FormikStep label={label}>
            <StyledSummary>
                <Container>
                    <Title>Summary</Title>
                    <div className="p-2"></div>

                    <Row>
                        <Col md={6}>
                            <Label>Event Details</Label>
                            <EventsDetailsSummary>
                                <ul>
                                    <li>27th October 2020</li>
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
                                    <li><hr style={{border: "none", padding: "3px"}}/></li>
                                    <li>{new Date(formik.values.selectedDate).toString()}</li>
                                </ul>
                            </PersonalDetailsSummary>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={6}>
                            <Label>Billing Address</Label>
                            <BillingAddressSummary>
                                <ul>
                                    <li>{formik.values.billingLine1}</li>
                                    <li>{formik.values.billingLine2}</li>
                                    <li>{formik.values.billingLine3}</li>
                                    <li>{formik.values.location}</li>
                                    <li>{formik.values.postcode}</li>
                                </ul>
                                
                            </BillingAddressSummary>
                            
                            
                        </Col>
                    </Row>

                </Container>
             </StyledSummary>         
        </FormikStep>

    )
}

export default Summary
