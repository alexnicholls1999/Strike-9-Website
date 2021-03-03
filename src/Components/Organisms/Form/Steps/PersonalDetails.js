import React from 'react'
import styled from "styled-components";
import { Col, Container, Row } from 'react-bootstrap';
import { useFormikContext } from 'formik';
import { FormGroup } from '@material-ui/core';
import Label from '../../../Atoms/Forms/Label';
import Input from '../../../Atoms/Forms/Input';
import ErrorMessage from '../../../Atoms/Forms/ErrorMessage';
import Gender from '../../../Molecules/Form/Gender';
import Ethnicity from '../../../Molecules/Form/Ethnicity';
import DatePicker from '../../../Molecules/Form/DatePicker';

const Title = styled.h3`
    color: ${({theme}) => theme.colors.primary.RoyalPurple};    
    font-weight: bold;
`;

function PersonalDetails() {

    const formik = useFormikContext();
    
    return (
        <Container>
            <Title>Personal Details</Title>
            <div className="py-2"></div>

            <Row>
                <Col md={6}>
                    <FormGroup>
                        <Label style={formik.errors.firstName ? {color: "#C90808"} : null}>First Name</Label>
                        <Input 
                            style={formik.errors.firstName ? {color: "#C90808"} : null}
                            type="text"
                            name="firstName"
                            value={formik.values.firstName}
                            onChange={formik.handleChange}
                            placeholder="Enter First Name"
                        />
                        <ErrorMessage>{formik.errors.firstName}</ErrorMessage>
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label style={formik.errors.lastName ? {color: "#C90808"} : null}>Last Name</Label>
                        <Input 
                            style={formik.errors.lastName ? {color: "#C90808"} : null}
                            type="text"
                            name="lastName"
                            value={formik.values.lastName}
                            onChange={formik.handleChange}
                            placeholder="Enter Last Name"
                        />
                        <ErrorMessage>{formik.errors.lastName}</ErrorMessage>
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label style={formik.errors.email ? {color: "#C90808"} : null}>Email</Label>
                        <Input 
                            style={formik.errors.email ? {color: "#C90808"} : null}
                            type="text"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            placeholder="Enter Email"
                        />
                        <ErrorMessage>{formik.errors.email}</ErrorMessage>
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label style={formik.errors.mobile ? {color: "#C90808"} : null}>Mobile</Label>
                        <Input 
                            style={formik.errors.mobile ? {color: "#C90808"} : null}
                            type="text"
                            name="mobile"
                            value={formik.values.mobile}
                            onChange={formik.handleChange}
                            placeholder="Enter Mobile"
                        />
                        <ErrorMessage>{formik.errors.mobile}</ErrorMessage>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <FormGroup>
                        <Gender />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <FormGroup>
                        <Label style={formik.errors.selectedDate ? {color: "#C90808"} : null}>Date</Label>
                        <DatePicker name="selectedDate"/>
                        <ErrorMessage>{formik.errors.selectedDate}</ErrorMessage>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <FormGroup>
                        <Ethnicity />
                    </FormGroup>
                </Col>
            </Row>
        </Container>
    )
}

export default PersonalDetails;
