import styled from "styled-components";
import { renderSteps } from "../../react-helpers/formHelpers";
import MainLayout from "../../Layouts/MainLayout";
import FormStepper from "../../Components/Organisms/FormStepper";

const FormWrapper = styled.div`
    margin-top: -2rem

`

function BookingTemplate({bookingContent, isAuthenticated, signOut}) {


    const id = bookingContent.params.id;
    const events = bookingContent.events;


    return (
        <>
            {events.map((event) => {

                const eventId = event.id;
                const slots = event.slots;

                console.log(event.slots);

                if (eventId === id) {
                    return (
                        <MainLayout 
                            isAuthenticated={isAuthenticated}
                            signOut={signOut}
                            hero={{ content: { title: bookingContent.hero.title}}}
                            noDisplay
                        > 
                            <FormWrapper >
                                <FormStepper
                                    initialValues={{
                                        eventId: eventId,
                                        uid: bookingContent.uid,
                                        slots: slots - 1,
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
                                        bookingContent.handleSubmit(values);
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
