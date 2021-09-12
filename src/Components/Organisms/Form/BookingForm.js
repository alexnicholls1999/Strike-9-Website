import { useContext, useState } from "react";
import useAuth from "../../../firebase/useAuth";
import { EventContext } from "../../../react-context/EventContext";
import { StoreContext } from "../../../react-context/StoreContext";
import { UserContext } from "../../../react-context/UserContext";
import { BillingAddressSchema, EventsDetailsSchema, PersonalDetailsSchema, sleep} from "../../../react-helpers/formikHelpers";
import useBookEvent from "../../../react-hooks/useBookEvent";
import FormikStepper from '../../Molecules/FormikStepper';
import FormikStep from "./../../Atoms/FormikStep";
import BillingAddress from "./Steps/BillingAddress";
import EventDetails from './Steps/EventDetails';
import PersonalDetails from './Steps/PersonalDetails';
import Summary from "./Steps/Summary";

function BookingForm({params}) {

    const events = useContext(EventContext);
    const user = useContext(UserContext);
    const store = useContext(StoreContext);

    const { booked, handleSubmit } = useBookEvent(store);
    
    const id = params.id;

    return (
        <>
            {events.map((event) => {
                if (event.id === id) {  
                    return (
                        <FormikStepper
                            initialValues={{
                                eventId: event.id,
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
                                // await sleep(3000);
                                handleSubmit(values, user.uid)
                            }}
                        >
                            <FormikStep label="Events Details">
                                <EventDetails 
                                    eventDetails={{
                                        date: event.date,
                                        time: event.time,
                                        address: "Mosley School Sports Centre, Springfield Road, B13 9NP",
                                        cost: event.cost,
                                    }}
                                />
                            </FormikStep>
                            
                            <FormikStep label="Personal Details" >
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
                    <p> Loading Events... </p>
                }
            })}
        </>
    )   
}

export default BookingForm
