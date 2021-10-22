import { Step } from "@material-ui/core";
import PropTypes from "prop-types";
import MainLayout from '../../Layouts/MainLayout';
import FormStepper from "../Organisms/Form/Form.Stepper";
import FormStep from "../Atoms/FormStep";

function BookingTemplate({bookingContent, params}) {

    const id = params.id;
    
    const slots = 100;
    const user = {
        uid: "1231lwsdaawoqae21asxzd"
    }

    return (
        <MainLayout
            hero={{ content: { title: bookingContent.hero.title }}}
        >
            <FormStepper
                bookingform={{
                    initialValues: {
                        eventId: id,
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
                    },
                    onSubmit: async (values) => {
                        console.log(values, user.uid)
                    }
                }}

            >
                <FormStep>
                    <h2>Events Details</h2>
                </FormStep>
                <FormStep>
                    <h2>Billing Address</h2>
                </FormStep>
                <FormStep>
                    <h2>Summary</h2>
                </FormStep>
            </FormStepper>
        </MainLayout>
    )
}

BookingTemplate.propTypes = {
    bookingContent: PropTypes.shape({   
        hero: PropTypes.shape({
            title: PropTypes.string.isRequired
        }),
        params: PropTypes.any.isRequired
    })
}

export default BookingTemplate


{/* <FormikStep label="Events Details">
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
</FormikStep> */}