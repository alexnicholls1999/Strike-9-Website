import { useState } from "react";
import * as Yup from "yup";
import FormikStepper from '../../Molecules/FormikStepper';
import FormikStep from "./../../Atoms/FormikStep";
import BillingAddress from "./Steps/BillingAddress";
import EventDetails from './Steps/EventDetails';
import PersonalDetails from './Steps/PersonalDetails';
import Summary from "./Steps/Summary";

const sleep = (time) => new Promise((acc) => setTimeout(acc, time));

const teamSchema = Yup.object({
    teamName: Yup.string().min(2, "Too Short!").required()
});

const personalSchema = Yup.object({
    fullName: Yup.string().min(2, "Too Short!").required()
});

const billingAddressSchema = Yup.object({
    location: Yup.string().min(2, "Too Short!").required()
});

function BookingForm({params}) {

    const [state, setState] = useState({
        eventId: params.id,
        userId: "ladsasdwawda5423af",
        slots: 100,
        booked: "Summary"
    })

    const { eventId, userId, slots, booked} = state;

    return (
        <FormikStepper
            initialValues={{
                eventId: eventId,
                authId: userId,
                slots: slots - 1,
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
                postcode: "",
            }}
            onSubmit={async (values) => {
                await sleep(3000);
                console.log(values);
                setState({
                    ...state,
                    booked: "Booked!"
                })
            }}
        >
            <FormikStep label="Events Details" validationSchema={teamSchema}>
                <EventDetails 
                    eventDetails={{
                        date: "17th October 2020",
                        time: "10:00 - 12:00",
                        address: "Mosley School Sports Centre, Springfield Road, B13 9NP",
                        cost: "FREE",
                    }}
                />
            </FormikStep>
            
            <FormikStep label="Personal Details">
                <PersonalDetails />
            </FormikStep>

            <FormikStep label="Billing Address">
                <BillingAddress />
            </FormikStep>

            <FormikStep label={booked}>
                { booked === "Booked!" ? (
                    <h1 style={{color: "#5E3D83", textAlign: "center"}}>Booking Successful</h1>
                ) : (
                    <Summary />
                )}
            </FormikStep>
        </FormikStepper>
    )
}

export default BookingForm
