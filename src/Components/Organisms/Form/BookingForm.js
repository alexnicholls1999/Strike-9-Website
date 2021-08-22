import { useContext, useState } from "react";
import * as Yup from "yup";
import { EventContext } from "../../../react-context/EventContext";
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

    const [booked, setBooked] = useState("Summary!")
 
    const userId = "elasdaXwea2dascx";
    const events = useContext(EventContext);
    const id = params.id;
    const event = events ? events[id - 1] : null;

    console.log(event.id);

    if (event) {
        return (
            <FormikStepper
                initialValues={{
                    eventId: event.id,
                    authId: userId,
                    slots: event.slots - 1,
                    teamName: "",
                    firstName: "",
                    lastName: "",
                    email: "", 
                    mobile: "",
                    gender: "",
                    selectedDate: "",
                    ethnicity: "",
                    billingAddressLine1: "",
                    billingAddressLine2: "",
                    billingAddressLine3: "",
                    location: "",
                    postcode: "",
                }}
                onSubmit={async (values) => {
                    await sleep(3000);
                    console.log(values);
                    setBooked("Booked!")
                }}
            >
                <FormikStep label="Events Details" validationSchema={teamSchema}>
                    <EventDetails 
                        eventDetails={{
                            date: event.date,
                            time: event.time,
                            address: "Mosley School Sports Centre, Springfield Road, B13 9NP",
                            cost: event.cost,
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
                        <Summary eventDate={event.date}/>
                    )}
                </FormikStep>
            </FormikStepper>
        )    
    } else {
        return <p>Loading Events...</p>
    }   
}

export default BookingForm
