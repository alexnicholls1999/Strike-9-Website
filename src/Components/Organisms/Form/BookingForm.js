import React, {useState, useEffect} from 'react'
import styled from 'styled-components';

import Gender from '../../Molecules/Form/Gender';
import Input from '../../Atoms/Form/Input';
import {FormGroup} from 'react-bootstrap';
import Ethnicity from '../../Molecules/Form/Ethnicity';
import DatePicker from '../../Molecules/Form/DatePicker';
import { db } from '../../../firebase/utils';
import Button from '../../Atoms/Button';
import EventDetails from './Steps/EventDetails';

const StyledForm = styled.form`

    label {
        color: black;
        margin-bottom: 1rem;
        font-weight: bold;
    }

`;

const Step = styled.div `



`;




function Form({eventdate}) {

    const [teamName, setTeamName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [gender, setGender] = useState("");
    const [selectedDate, setSelectedDate] = useState(null);
    const [ethnicity, setEthnicity] = useState("");
    const [billingLine1, setBillingLine1] = useState("");
    const [billingLine2, setBillingLine2] = useState("");
    const [billingLine3, setBillingLine3] = useState("");
    const [location, setLocation] = useState("");
    const [postcode, setPostcode] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection("booking")
            .add({
                teamName: teamName,
                firstName: firstName,
                lastName: lastName,
                email: email,
                mobile: mobile,
                gender: gender,
                selectedDate: selectedDate,
                ethnicity: ethnicity,
                billingLine1: billingLine1,
                billingLine2: billingLine2,
                billingLine3: billingLine3,
                location: location,
                postcode: postcode,    
            })
            .then(() => {
                setTeamName("");
                setFirstName("");
                setLastName("");
                setEmail("");
                setMobile("");
                setGender("");
                setSelectedDate(null);
                setEthnicity("");
                setBillingLine1("");
                setBillingLine2("");
                setBillingLine3("");
                setLocation("");
                setPostcode("");
                alert("Successfully Booked")
            })

    }



    return (
        <StyledForm>
            
            {/* <EventDetails 
                teamName={teamName} 
                onTeamNameChange={(e) => setTeamName(e.target.value)} 
            /> */}

            <Step>
                <div className="p-4"></div>
                <h3>Personal Details</h3>
                <div className="p-2"></div>
                <FormGroup>
                    <label>First Name</label>
                    <Input placeholder="Enter First Name" value={firstName} onChange={(e) => setFirstName(e.target.value) } />
                </FormGroup>
                <FormGroup>
                    <label>Last Name</label>
                    <Input placeholder="Enter Last Name" value={lastName} onChange={(e) => setLastName(e.target.value) } />
                </FormGroup>
                <FormGroup>
                    <label>Email</label>
                    <Input placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value) } />
                </FormGroup>
                <FormGroup>
                    <label>Mobile</label>
                    <Input placeholder="Enter Mobile" value={mobile} onChange={(e) => setMobile(e.target.value) } />
                </FormGroup>
                <FormGroup>
                    <label>Gender</label>
                    <Gender gender={gender} handleGenderChange={(e) => setGender(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <label>Date of Birth</label>
                    <DatePicker selected={selectedDate} onChange={(date) => setSelectedDate(date)}/>
                </FormGroup> 
                <FormGroup>
                    <label>Ethnicity</label>
                    <Ethnicity value={ethnicity} onChange={(e) => setEthnicity(e.target.value)}/>
                </FormGroup>
            </Step>
            <Step>
                <div className="p-4"></div>
                <h3>Billing Address</h3>
                <div className="p-2"></div>
                
                <FormGroup>
                    <label>Billing Address Line 1</label>
                    <Input placeholder="Enter Billing Address Line 1" value={billingLine1} onChange={(e) => setBillingLine1(e.target.value) } />
                </FormGroup>
                <FormGroup>
                    <label>Billing Address Line 2</label>
                    <Input placeholder="Enter Billing Address Line 2" value={billingLine2} onChange={(e) => setBillingLine2(e.target.value) } />
                </FormGroup>
                <FormGroup>
                    <label>Billing Address Line 3</label>
                    <Input placeholder="Enter Billing Address Line 3" value={billingLine3} onChange={(e) => setBillingLine3(e.target.value) } />
                </FormGroup>
                <FormGroup>
                    <label>Town/City</label>
                    <Input placeholder="Enter Town/City" value={location} onChange={(e) => setLocation(e.target.value) } />
                </FormGroup>
                <FormGroup>
                    <label>Postcode</label>
                    <Input placeholder="Enter Postcode" value={postcode} onChange={(e) => setPostcode(e.target.value) } />
                </FormGroup>
            </Step>
            <div className="summary">
                <div className="p-4"></div>
                <h3>Summary</h3>
                <div className="p-2"></div>
                
                <div className="step-group">
                    <label>Event Details</label>
                    <p>27th October 2020</p>
                    <p>{teamName}</p>
                </div> 

                <div className="step-group">
                    <label>Personal Details</label>
                    <p>{firstName}</p>
                    <p>{lastName}</p>
                    <p>{email}</p>
                    <p>{gender}</p>
                    <p>{new Date(selectedDate).toDateString()}</p>
                    <p>{ethnicity}</p>
                </div>                
                <div className="step-group">
                    <label>Billing Address</label>
                    <p>{billingLine1}</p>
                    <p>{billingLine2}</p>
                    <p>{billingLine3}</p>
                    <p>{location}</p>
                    <p>{postcode}</p>
                </div>
            </div>
            <Button text="BOOK EVENT" onClick={handleSubmit}/>


        </StyledForm>
    )
}

export default Form;