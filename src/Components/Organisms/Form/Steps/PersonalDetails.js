import React from 'react'
import {Container, Row, FormGroup} from 'react-bootstrap';
import styled from "styled-components";

import Input from "../../../Atoms/Form/Input";
import Gender from "../../../Molecules/Form/Gender";
import DatePicker from "../../../Molecules/Form/DatePicker";
import Ethnicity from "../../../Molecules/Form/Ethnicity";
import FormikStep from '../../../Atoms/Form/Step';
import Label from '../../../Atoms/Form/Label';

const Title = styled.h3 `
    color: ${({theme}) => theme.colors.primary.RoyalPurple};
    font-weight: bold;
`

function PersonalDetails(props) {
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
        <FormikStep label={label}>
            <Title>Personal Details</Title>
            <div className="p-2"></div>
            <FormGroup>
                <Label>First Name</Label>
                <Input placeholder="Enter First Name" value={firstName} onChange={onFirstNameChange} />
            </FormGroup>
            <FormGroup>
                <Label>Last Name</Label>
                <Input placeholder="Enter Last Name" value={lastName} onChange={onLastNameChange} />
            </FormGroup>
            <FormGroup>
                <Label>Email</Label>
                <Input placeholder="Enter Email" value={email} onChange={onEmailChange} />
            </FormGroup>
            <FormGroup>
                <Label>Mobile</Label>
                <Input placeholder="Enter Mobile" value={mobile} onChange={onMobileChange} />
            </FormGroup>
            <FormGroup>
                <Label>Gender</Label>
                <Gender gender={gender} handleGenderChange={onGenderChange}/>
            </FormGroup>
            <FormGroup>
                <Label>Date of Birth</Label>
                <DatePicker selected={selectedDate} onChange={onSelectedDateChange}/>
            </FormGroup> 
            <FormGroup>
                <Label>Ethnicity</Label>
                <Ethnicity value={ethnicity} onChange={onEthnicityChange}/>
            </FormGroup>
        </FormikStep>

    )
}

export default PersonalDetails
