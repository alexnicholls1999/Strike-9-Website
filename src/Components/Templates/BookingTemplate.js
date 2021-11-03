import styled from "styled-components";
import { isFormCompleted } from "../../react-helpers/formHelpers";
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
    

    return (
        <MainLayout 
            hero={{ content: { title: bookingContent.hero.title}}}
            noDisplay
        >
            {bookingContent.events.map((event, index) => {
                if (event.id === bookingContent.params.id) {
                    <FormWrapper>
                        <FormStepper
                            key={index}
                            initialValues={{
                                eventId: bookingContent.params.id,
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
                } else {
                    return <p>Loading Events</p>
                }
            })}
        </MainLayout>
    )
}

export default BookingTemplate
