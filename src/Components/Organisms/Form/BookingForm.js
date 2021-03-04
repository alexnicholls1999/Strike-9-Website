import React from 'react'
import FormikStep from '../../Atoms/Forms/Step';
import FormikStepper from '../../Molecules/Form/Stepper';
import EventDetails from './Steps/EventDetails';
import { BillingAddressSchema, EventsDetailsSchema, PersonalDetailsSchema } from "../../../dist/schemas";
import PersonalDetails from './Steps/PersonalDetails';
import BillingAddress from './Steps/BillingAddress';
import Summary from './Steps/Summary';
import useBookEvent from '../../../react-hooks/useBookEvent';
import Confirmation from './Steps/Confirmation';


function BookingForm({params}) {
    const id = params.id;

    const { handleSubmit, setBooked, booked } = useBookEvent();

    return (
        <FormikStepper
            initialValues={{
                eventId: id,
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
                setBooked("Booked!");
                handleSubmit(values);
            }}
        > 
            <FormikStep label="Events Details" validationSchema={EventsDetailsSchema} >
                <EventDetails 
                    date="17th October 2020"
                    time="12:00 - 14:00"
                    address="Mosley School Sports Centre, Springfield Road, B13 9NP"
                    cost="FREE"
                />
            </FormikStep>
            
            <FormikStep label="Personal Details" validationSchema={PersonalDetailsSchema}>
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

export default BookingForm;
