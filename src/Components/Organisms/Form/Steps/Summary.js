import React from 'react'
import FormikStep from '../../../Atoms/Form/Step';
import Label from '../../../Atoms/Form/Label';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import Confirmation from './Confirmation';

const StyledSummary = styled.div`



`

function Summary(props) {

    const { label, teamName, firstName, lastName, email, mobile, gender, selectedDate, ethnicity, billingLine1, billingLine2, billingLine3, location, postcode } = props;

    return (
    
        
        <FormikStep label={label}>
            {label === "Booked!" ? (
                 <Confirmation />
            ) : ( 
                <StyledSummary>
                <Container>
                    <h3>Summary</h3>
                    <div className="p-2"></div>
                    <Row>
                        <Col lg={4}>
                            <Label>Event Details</Label>
                            <p>27th October 2020</p>
                            <p>{teamName}</p>
                        </Col>
                        <Col lg={4}>
                            <Label>Personal Details</Label>
                            <p>{firstName}</p>
                            <p>{lastName}</p>
                            <p>{email}</p>
                            <p>{mobile}</p>
                            <p>{gender}</p>
                            <p>{selectedDate}</p>
                            <p>{ethnicity}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4}>
                            <Label>Billing Address</Label>
                            <p>{billingLine1}</p>
                            <p>{billingLine2}</p>
                            <p>{billingLine3}</p>
                            <p>{location}</p>
                            <p>{postcode}</p>
                        </Col>
                    </Row>
                </Container>
             </StyledSummary>
            )}
            

        </FormikStep>

    )
}

export default Summary
