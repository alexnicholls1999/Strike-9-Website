import React from 'react'
import FormikStep from '../../../Atoms/Form/Step';
import Label from '../../../Atoms/Form/Label';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import {useFormikContext} from "formik";

const StyledSummary = styled.div`



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
                        <Col lg={4}>
                            <Label>Event Details</Label>
                            <p>27th October 2020</p>
                            <p>{formik.values.teamName}</p>
                        </Col>
                        <Col lg={4}>
                            <Label>Personal Details</Label>
                            <p>{formik.values.firstName}</p>
                            <p>{formik.values.lastName}</p>
                            <p>{formik.values.email}</p>
                            <p>{formik.values.mobile}</p>
                            <p>{formik.values.gender}</p>
                            <p>{new Date(formik.values.selectedDate).toString()}</p>
                            <p>{formik.values.ethnicity}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4}>
                            <Label>Billing Address</Label>
                            <p>{formik.values.billingLine1}</p>
                            <p>{formik.values.billingLine2}</p>
                            <p>{formik.values.billingLine3}</p>
                            <p>{formik.values.location}</p>
                            <p>{formik.values.postcode}</p>
                        </Col>
                    </Row>
                </Container>
             </StyledSummary>         
        </FormikStep>

    )
}

export default Summary
