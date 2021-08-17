import PropTypes from "prop-types";
import FormikStep from "../../Atoms/FormikStep";
import FormikStepper from "../../Molecules/FormikStepper";
import EventsDetails from "./Steps/EventsDetails";
import PersonalDetails from "./Steps/PersonalDetails";

function BookingForm({params}) {
    const id = params.id
    const userId = '2ewad3542fsa31';
    const eventSlots = 100;

    return (
        <FormikStepper
            initialValues={{
                eventId: id,
                authId: userId,
                slots: eventSlots - 1,
                teamName: "",
                firstName: "",
                lastName: "",
                email: "",
                mobile: "",
                gender: "",
                selectDate: "",
                ethnicity: "",
                billingLine1: "",
                billingLine2: "",
                billingLine3: "",
                location: "",
                postcode: "",
                checked: false
            }}
            onSubmit={async (values) => {
                console.log(values)
            }}
        >
            <FormikStep label="Events Details">
                {/* Add firebase data here */}
                <EventsDetails
                    eventsDetails={{date: "17th October 2020", time: "10:00 - 12:00", address: "Mosley School Sports Centre, Springfield Road, B13 9NP", cost: "FREE"}}
                />
            </FormikStep>
            
            <FormikStep label="Personal Details">
                <PersonalDetails/>
            </FormikStep>

        </FormikStepper>
    )
}

export default BookingForm
