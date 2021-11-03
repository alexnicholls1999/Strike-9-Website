import { useParams } from "react-router";
import useBookEvent from "../react-hooks/useBookEvent";
import BookingTemplate from "../Components/Templates/BookingTemplate";
import useEvents from "../react-hooks/useEvents";


function Booking() {

    const params = useParams()
    const { booked, handleSubmit } = useBookEvent();
    const { events } = useEvents()

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

    const bookingContent = {
        hero: {
            title: "STRIKE 9 VLU REGISTER EVENTS FORM" 
        },
        params: params,
        events: events,
        slots: slots,
        user: user,
        booked: booked,
        handleSubmit: handleSubmit
    }


    return <BookingTemplate bookingContent={bookingContent} />
}

export default Booking
