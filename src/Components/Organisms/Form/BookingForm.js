import { useContext, useState } from "react";
import { EventContext } from "../../../react-context/EventContext";
import { UserContext } from "../../../react-context/UserContext";
import { BillingAddressSchema, EventsDetailsSchema, PersonalDetailsSchema, sleep} from "../../../react-helpers/formikHelpers";
import FormikStepper from '../../Molecules/FormikStepper';
import FormikStep from "./../../Atoms/FormikStep";
import BillingAddress from "./Steps/BillingAddress";
import EventDetails from './Steps/EventDetails';
import PersonalDetails from './Steps/PersonalDetails';
import Summary from "./Steps/Summary";


function BookingForm({params}) {

    const [booked, setBooked] = useState("Summary")
    const events = useContext(EventContext);
    const userId = useContext(UserContext);
    
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
                <FormikStep label="Events Details" validationSchema={EventsDetailsSchema}>
                    <EventDetails 
                        eventDetails={{
                            date: event.date,
                            time: event.time,
                            address: "Mosley School Sports Centre, Springfield Road, B13 9NP",
                            cost: event.cost,
                        }}
                    />
                </FormikStep>
                
                <FormikStep label="Personal Details" validationSchema={PersonalDetailsSchema}>
                    <PersonalDetails />
                </FormikStep>
    
                <FormikStep label="Billing Address" validationSchema={BillingAddressSchema}>
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
