import styled from "styled-components";
import { renderBookingForm, renderSteps } from "../../react-helpers/formHelpers";
import MainLayout from "../../Layouts/MainLayout";
import FormStepper from "../../Components/Organisms/FormStepper";

const FormWrapper = styled.div`
    margin-top: -2rem

`

function BookingTemplate({bookingContent}) {


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
                            <FormWrapper >
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

                                    {renderSteps(bookingContent, event)}

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
