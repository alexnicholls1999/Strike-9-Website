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

const sleep = (time) => new Promise((acc) => setTimeout(acc, time));

const Step = styled.div `



`;


function Form() {

    const [booked, setBooked] = useState("Summary");

    return (
        <FormikStepper
            initialValues={{
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
                console.log("values", values);
                setBooked("Booked!")
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