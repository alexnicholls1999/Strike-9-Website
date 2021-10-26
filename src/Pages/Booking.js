import { useParams } from "react-router"
import { isFormCompleted } from "../react-helpers/formHelpers";
import useBookEvent from "../react-hooks/useBookEvent";

import FormStep from "../Components/Atoms/FormStep";
import FormStepper from "../Components/Organisms/FormStepper";
import * as Steps from "../Components/Organisms/FormSteps";
import MainLayout from "../Layouts/MainLayout";


function Booking() {

    const params = useParams()
    const { booked, handleSubmit } = useBookEvent();

    const slots = 100;

    const user = {
        uid: "kmdasqwedq12edsc",
        firstName: "Asmir",
        lastName: "Podak",
        email: "aspodak@yahoo.com",
        mobile: "02312324341",
        gender: "Male",
        dateofbirth: "22/12/1985",
        ethnicity: "White Cascasian"
    }

    const steps = [
        {
            label: "Events Details",
            component: <Steps.EventDetails eventDetails={{date: "20th October 2020", time: "15:00 - 17:00", address: "Mosley School Sports Centre, Springfield Road, B13 9NP", cost: "FREE",}}/>
        },
        {
            label: "Personal Details"
        },
        {
            label: "Billing Address",
            component: <Steps.BillingAddress />
        },
        {
            label: booked,
            component: isFormCompleted(booked)
        }
    ]
    

    return (
        <MainLayout 
            hero={{
                content: {
                    title: "Booking Form"
                }
            }}
            noDisplay
        >
            <FormStepper
                initialValues={{
                    eventId: params.id,
                    slots: slots - 1,
                    teamName: "",
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email, 
                    mobile: user.mobile,
                    gender: user.gender,
                    selectedDate: user.dateofbirth,
                    ethnicity: user.ethnicity,
                    billingAddressLine1: "",
                    billingAddressLine2: "",
                    billingAddressLine3: "",
                    location: "",
                    postcode: "",
                }}
                onSubmit={async (values) => {
                    handleSubmit(values, user.uid);
                }}
            >

                {steps.map(({label, component}, index) => <FormStep key={index} label={label}>{component}</FormStep>)}

            </FormStepper>
        </MainLayout>
    )
}

export default Booking
