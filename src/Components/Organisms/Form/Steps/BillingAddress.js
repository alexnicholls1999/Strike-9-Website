import React from 'react'
import styled from "styled-components"
import { useFormikContext } from 'formik'
import { Container, Row, Col, FormGroup } from 'react-bootstrap';

import Label from "../../../Atoms/Forms/Label";
import Input from "../../../Atoms/Forms/Input";
import ErrorMessage from "../../../Atoms/Forms/ErrorMessage";


const Title = styled.h3`
    color: ${({theme}) => theme.colors.primary.RoyalPurple};
    font-weight: bold;
`;

function BillingAddress() {
    const formik = useFormikContext();
    return (
        <Container>
            <Title>Billing Address</Title>
            <div className="py-2"></div>

            <Row>
                <Col md={6}>
                    <FormGroup>
                        <Label style={formik.errors.billingLine1 ? {color: "#C90808"} : null}>Billing Address Line 1</Label>
                        <Input 
                            style={formik.errors.billingLine1 ? {borderColor: "#C90808"} : null} 
                            type="text"
                            name="billingLine1"
                            value={formik.values.billingLine1}
                            onChange={formik.handleChange}
                            placeholder="Enter Billing Address Line 1"
                        />
                        <ErrorMessage>{formik.errors.billingLine1}</ErrorMessage>
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label style={formik.errors.billingLine2 ? {color: "#C90808"} : null}>Billing Address Line 2</Label>
                        <Input 
                            style={formik.errors.billingLine2 ? {borderColor: "#C90808"} : null} 
                            type="text"
                            name="billingLine2"
                            value={formik.values.billingLine2}
                            onChange={formik.handleChange}
                            placeholder="Enter Billing Address Line 2"
                        />
                        <ErrorMessage>{formik.errors.billingLine2}</ErrorMessage>
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label style={formik.errors.billingLine3 ? {color: "#C90808"} : null}>Billing Address Line 3</Label>
                        <Input 
                            style={formik.errors.billingLine3 ? {borderColor: "#C90808"} : null} 
                            type="text"
                            name="billingLine3"
                            value={formik.values.billingLine3}
                            onChange={formik.handleChange}
                            placeholder="Enter Billing Address Line 3 (optional)"
                        />
                        <ErrorMessage>{formik.errors.billingLine3}</ErrorMessage>
                    </FormGroup>
                </Col>
            </Row>

            <Row>
                <Col md={6}>
                    <FormGroup>
                        <Label style={formik.errors.location ? {color: "#C90808"} : null}>Location</Label>
                        <Input 
                            style={formik.errors.location ? {borderColor: "#C90808"} : null} 
                            type="text"
                            name="location"
                            value={formik.values.location}
                            onChange={formik.handleChange}
                            placeholder="Enter Location"
                        />
                        <ErrorMessage>{formik.errors.location}</ErrorMessage>
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label style={formik.errors.postcode ? {color: "#C90808"} : null}>Postcode</Label>
                        <Input 
                            style={formik.errors.postcode ? {borderColor: "#C90808"} : null} 
                            type="text"
                            name="postcode"
                            value={formik.values.postcode}
                            onChange={formik.handleChange}
                            placeholder="Enter Postcode"
                        />
                        <ErrorMessage>{formik.errors.postcode}</ErrorMessage>
                    </FormGroup>
                </Col>
            </Row>
        </Container>
    )
}

export default BillingAddress;
