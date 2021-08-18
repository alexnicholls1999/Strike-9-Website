import * as Yup from "yup";
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

    const eventId = params.id;
    const userId = "ladsasdwawda5423af";
    const slots = 100;

    return (
        <FormikStepper
            initialValues={{
                eventId: eventId,
                userId: userId,
                eventSlots: slots - 1,
                teamName: '',
                fullName: '',
                location: '',
            }}
            onSubmit={async (values) => {
                await sleep(3000);
                console.log(values);
            }}
        >
            <FormikStep label="Events Details" validationSchema={teamSchema}>
                <EventDetails />
            </FormikStep>
            
            <FormikStep label="Personal Details">
                <PersonalDetails />
            </FormikStep>

            <FormikStep label="Billing Address">
                <BillingAddress />
            </FormikStep>

            <FormikStep label="Summary">
                <Summary />
            </FormikStep>
        </FormikStepper>
    )
}

export default BookingForm
