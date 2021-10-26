import { useParams } from "react-router"
import FormStep from "../Components/Atoms/FormStep";
import FormStepper from "../Components/Organisms/FormStepper";
import BillingAddress from "../Components/Organisms/Steps/BillingAddress";
import EventDetails from "../Components/Organisms/Steps/EventsDetails";
import Summary from "../Components/Organisms/Steps/Summary";
import MainLayout from "../Layouts/MainLayout";
import useBookEvent from "../react-hooks/useBookEvent";
import theme from "../styles/theme";


function Booking() {

    const params = useParams()

    const slots = 100;

    const userId = 'kmdasqwedq12edsc'


    const { booked, handleSubmit } = useBookEvent();

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
                    handleSubmit(values, userId);
                }}
            >
                <FormStep label="Events Details">
                    <EventDetails 
                        eventDetails={{
                            date: "20th October 2020",
                            time: "15:00 - 17:00",
                            address: "Mosley School Sports Centre, Springfield Road, B13 9NP",
                            cost: "FREE",
                        }} 
                    />
                </FormStep>

                <FormStep label="Personal Details">

                </FormStep>

                <FormStep label="Billing Address">
                    <BillingAddress />
                </FormStep>

                <FormStep label={booked}>
                    { booked === "Booked!" ? (
                        <>
                            <h1 style={{color: theme.colors.primary[500], textAlign: "center"}}>Booking Successful</h1>
                            <div className="p-2"></div>
                            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ut molestias suscipit sed quibusdam corrupti nostrum et ex illum saepe.</p>
                        </>
                    ) : (
                        <Summary eventDate= "20th October 2020"/>
                    )}
                </FormStep>

            </FormStepper>
        </MainLayout>
    )
}

export default Booking
