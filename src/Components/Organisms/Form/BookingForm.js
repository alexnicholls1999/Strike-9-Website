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
import FormikStepper from '../../Molecules/Form/Stepper';
import PersonalDetails from './Steps/PersonalDetails';
import BillingAddress from './Steps/BillingAddress';
import Summary from './Steps/Summary';
import Confirmation from './Steps/Confirmation';



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
    
    const [booked, setBooked] = useState("Summary");


    const handleSubmit = () => {

        setBooked("Booked!")
        // db.collection("booking")
        //   .add({
        //     teamName: teamName,
        //     firstName: firstName,
        //     lastName: lastName,
        //     email: email,
        //     mobile: mobile,
        //     gender: gender,
        //     selectedDate: selectedDate,
        //     ethnicity: ethnicity,
        //     billingLine1: billingLine1,
        //     billingLine2: billingLine2,
        //     billingLine3: billingLine3,
        //     location: location,
        //     postcode: postcode
        //   })
        //   .then(() => {
        //     setTeamName("");
        //     setFirstName("");
        //     setLastName("");
        //     setEmail("");
        //     setMobile("");
        //     setGender("");
        //     setSelectedDate(null);
        //     setEthnicity("");
        //     setBillingLine1("");
        //     setBillingLine2("");
        //     setBillingLine3("");
        //     setLocation("");
        //     setPostcode("");
        //     setBooked("Booked!");
            
        //   });
    }

    return (
        <FormikStepper
            initialValues={{
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
                postcode: postcode
            }}
            onSubmit={handleSubmit}
        >
            <EventDetails 
                label="Events Details"
                teamName={teamName} 
                onTeamNameChange={(e) => setTeamName(e.target.value)} 
            />

            <PersonalDetails 
                label="Personal Details"
                firstName={firstName}
                lastName={lastName}
                email={email}
                mobile={mobile}
                gender={gender}
                selectedDate={selectedDate}
                ethnicity={ethnicity}

                onFirstNameChange={(e) => setFirstName(e.target.value)}
                onLastNameChange={(e) => setLastName(e.target.value)}
                onEmailChange={(e) => setEmail(e.target.value)}
                onMobileChange={(e) => setMobile(e.target.value)}
                onGenderChange={(e) => setGender(e.target.value)}
                onSelectedDateChange={(date) => setSelectedDate(date)}
                onEthnicityChange={(e) => setEthnicity(e.target.value)}
            />

            <BillingAddress 
                label="Billing Address"
                billingLine1={billingLine1}
                billingLine2={billingLine2}
                billingLine3={billingLine3}
                location={location}
                postcode={postcode}
                
                onBillingLine1Change={(e) => setBillingLine1(e.target.value)}
                onBillingLine2Change={(e) => setBillingLine2(e.target.value)}
                onBillingLine3Change={(e) => setBillingLine3(e.target.value)}
                onLocationChange={(e) => setLocation(e.target.value)}
                onPostcodeChange={(e) => setPostcode(e.target.value)}
            />

            { booked === "Booked!" ? (
                <Confirmation label={booked}/>
            ) : (
                <Summary 
                    label={booked}
                    teamName={teamName}
                    firstName={firstName}
                    lastName={lastName}
                    email={email}
                    mobile={mobile}
                    gender={gender}
                    selectedDate={new Date(selectedDate).toDateString()}
                    ethnicity={ethnicity}
                    billingLine1={billingLine1}
                    billingLine2={billingLine2}
                    billingLine3={billingLine3}
                    location={location}
                    postcode={postcode}
                />
            )}


        </FormikStepper>
    )
}

export default Form;