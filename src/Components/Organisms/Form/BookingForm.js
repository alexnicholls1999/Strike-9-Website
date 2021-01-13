import React, {useState, useEffect} from 'react'
import styled from 'styled-components';

import Gender from '../../Molecules/Form/Gender';
import Input from '../../Atoms/Form/Input';
import {FormGroup} from 'react-bootstrap';
import Ethnicity from '../../Molecules/Form/Ethnicity';
import DatePicker from '../../Molecules/Form/DatePicker';
import { db } from '../../../firebase/utils';
import { EventsDetailsSchema, PersonalDetailsSchema, BillingAddressSchema } from '../../../dist/schemas';
import Button from '../../Atoms/Button';

import EventsDetails from './Steps/EventDetails';
import FormikStepper from '../../Molecules/Form/Stepper';
import PersonalDetails from './Steps/PersonalDetails';
import BillingAddress from './Steps/BillingAddress';
import Summary from './Steps/Summary';
import Confirmation from './Steps/Confirmation';
import FormikStep from '../../Atoms/Form/Step';
import { LocalActivity } from '@material-ui/icons';
import { faUserInjured } from '@fortawesome/free-solid-svg-icons';

const Step = styled.div `



`;




function Form(props) {


    const eventId = props.match.params.id;

    // Form Values
    const [teamName, setTeamName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [gender, setGender] = useState("");
    const [selectedDate, setSelectedDate] = useState("");
    const [ethnicity, setEthnicity] = useState("");
    const [billingLine1, setBillingLine1] = useState("");
    const [billingLine2, setBillingLine2] = useState("");
    const [billingLine3, setBillingLine3] = useState("");
    const [location, setLocation] = useState("");
    const [postcode, setPostcode] = useState("");

    // Booked Value
    const [booked, setBooked] = useState("Summary");

    const [id, setId] = useState(eventId);
    const [userid, setUserId] = useState("AncaTiTUKOWSxa1")

    const handleSubmit = (values) => {
        setBooked("Booked!");
        db.collection("booking")
            .add({
                eventId: values.eventId,
                uid: values.uid,
                teamName: values.teamName,
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
                mobile: values.mobile,
                gender: values.gender,
                selectedDate: new Date(values.selectedDate).toDateString(),
                ethnicity: values.ethnicity,
                billingLine1: values.billingLine1,
                billingLine2: values.billingLine2,
                billingLine3: values.billingLine3,
                location: values.location,
                postcode: values.postcode
            });
    }


    return (
        <FormikStepper
            initialValues={{
                eventId: id,
                uid: userid,
                teamName: "",
                firstName: "",
                lastName: "",
                email: "",
                mobile: "",
                gender: "",
                selectedDate: "",
                ethnicity: "",
                billingLine1: "",
                billingLine2: "",
                billingLine3: "",
                location: "",
                postcode: ""
            }}
            onSubmit={async (values) => {
                handleSubmit(values);
                setBooked("Booked!");
                console.log("Successful Submit", values);
            }}
        >
        
            <FormikStep label="Events Details" validationSchema={EventsDetailsSchema}>
                <EventsDetails />
            </FormikStep>

            <FormikStep label="Personal Details" validationSchema={PersonalDetailsSchema} >
                <PersonalDetails />
            </FormikStep>

            <FormikStep label="Billing Address" validationSchema={BillingAddressSchema}>
                <BillingAddress />
            </FormikStep>


            { booked === "Booked!" ? (
                <Confirmation label={booked}/>
            ) : (
                <FormikStep label={booked}>
                    <Summary />
                </FormikStep>
            )}


        </FormikStepper>
    )
}

export default Form;