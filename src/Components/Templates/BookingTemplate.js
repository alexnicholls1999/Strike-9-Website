import styled from "styled-components";
import { isFormCompleted, renderBookingForm } from "../../react-helpers/formHelpers";
import MainLayout from "../../Layouts/MainLayout";

import FormStep from "../../Components/Atoms/FormStep";
import FormStepper from "../../Components/Organisms/FormStepper";
import * as Steps from "../../Components/Organisms/FormSteps";

const FormWrapper = styled.div`
    margin-top: -2rem

`

function BookingTemplate({bookingContent}) {

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
            label: bookingContent.booked,
            component: isFormCompleted(bookingContent.booked)
        }
    ]
    
    const id = bookingContent.params.id;
    const events = bookingContent.events;


    return (
        <>
            {events.map((event) => {

                const eventId = event.id;

                if (eventId === id) {
                    return (
                        <MainLayout 
                            hero={{ content: { title: bookingContent.hero.title}}}
                            noDisplay
                        >
                            <FormWrapper>
                                <FormStepper
                                    initialValues={{
                                        eventId: eventId,
                                        slots: bookingContent.slots - 1,
                                        teamName: "",
                                        firstName: bookingContent.user.firstName,
                                        lastName: bookingContent.user.lastName,
                                        email: bookingContent.user.email, 
                                        mobile: bookingContent.user.mobile,
                                        gender: bookingContent.user.gender,
                                        selectedDate: bookingContent.user.dateofbirth,
                                        ethnicity: bookingContent.user.ethnicity,
                                        billingAddressLine1: "",
                                        billingAddressLine2: "",
                                        billingAddressLine3: "",
                                        location: "",
                                        postcode: "",
                                    }}
                                    onSubmit={async (values) => {
                                        bookingContent.handleSubmit(values, bookingContent.user.uid);
                                    }}
                                >


                                    {steps.map(({label, component}, index) => <FormStep key={index} label={label}>{component}</FormStep>)}

                                </FormStepper>
                            </FormWrapper>
                        </MainLayout>
                    )
                } 
            })}
        </>
    )
}

export default BookingTemplate
