import React from 'react'
import {Container, Row, FormGroup} from 'react-bootstrap';
import styled from "styled-components";
import { useFormikContext } from "formik";

import Input from "../../../Atoms/Form/Input";
import Gender from "../../../Molecules/Form/Gender";
import DatePicker from "../../../Molecules/Form/DatePicker";
import Ethnicity from "../../../Molecules/Form/Ethnicity";
import FormikStep from '../../../Atoms/Form/Step';
import Label from '../../../Atoms/Form/Label';
import ErrorMessage from '../../../Atoms/Form/ErrorMessage';

const Title = styled.h3 `
    color: ${({theme}) => theme.colors.primary.RoyalPurple};
    font-weight: bold;
`

function PersonalDetails(props) {
    const formik = useFormikContext();

    const {
        label,
        firstName, 
        lastName, 
        email, 
        mobile, 
        gender, 
        selectedDate, 
        ethnicity,
        onFirstNameChange,
        onLastNameChange,
        onEmailChange,
        onMobileChange,
        onGenderChange,
        onSelectedDateChange,
        onEthnicityChange
    } = props;
    return (
        <Container>
            <Title>Personal Details</Title>
            <div className="p-2"></div>
            <FormGroup>
                <Label style={formik.errors.firstName ? {color: "#C90808"} : null}>First Name</Label>
                <input style={formik.errors.firstName ? {borderColor: "#C90808"} : null} type="text" name="firstName" value={formik.values.firstName} onChange={formik.handleChange} placeholder="Enter First Name"/>
                <ErrorMessage>{formik.errors.firstName}</ErrorMessage>
            </FormGroup>
            <FormGroup>
                <Label style={formik.errors.lastName ? {color: "#C90808"} : null}>Last Name</Label>
                <input style={formik.errors.lastName ? {borderColor: "#C90808"} : null} type="text" name="lastName" value={formik.values.lastName} onChange={formik.handleChange} placeholder="Enter Last Name"/>
                <ErrorMessage>{formik.errors.lastName}</ErrorMessage>
            </FormGroup>
            <FormGroup>
                <Label style={formik.errors.email ? {color: "#C90808"} : null}>Email</Label>
                <input style={formik.errors.email ? {borderColor: "#C90808"} : null} type="text" name="email" value={formik.values.email} onChange={formik.handleChange} placeholder="Enter Email Address"/>
                <ErrorMessage>{formik.errors.email}</ErrorMessage>
            </FormGroup>
            <FormGroup>
                <Label style={formik.errors.mobile ? {color: "#C90808"} : null}>Mobile</Label>
                <input style={formik.errors.mobile ? {borderColor: "#C90808"} : null} type="number" name="mobile" value={formik.values.mobile} onChange={formik.handleChange} placeholder="Enter Mobile"/>
                <ErrorMessage>{formik.errors.mobile}</ErrorMessage>
            </FormGroup>
            <FormGroup>
                <Gender />
            </FormGroup> 
            <FormGroup>
            <Label style={formik.errors.selectedDate ? {color: "#C90808"} : null}>Date of Birth</Label>
                <DatePicker name="selectedDate"/>
                <ErrorMessage>{formik.errors.selectedDate}</ErrorMessage>
            </FormGroup> 
            <FormGroup>
                <Ethnicity />
            </FormGroup>
        </Container>

    )
}

export default PersonalDetails
