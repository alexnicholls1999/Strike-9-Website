import { useParams } from "react-router";
import useBookEvent from "../react-hooks/useBookEvent";
import BookingTemplate from "../Components/Templates/BookingTemplate";
import useEvents from "../react-hooks/useEvents";


function Booking({user}) {

    const params = useParams()
    const { booked, handleSubmit } = useBookEvent();
    const { events } = useEvents()

    const slots = 100;

    const userInfo = {
        uid: user,
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
        user: userInfo,
        params: params,
        events: events,
        slots: slots,
        booked: booked,
        handleSubmit: handleSubmit
    }

    console.log(user.uid);

    return <BookingTemplate bookingContent={bookingContent} />
}

export default Booking
