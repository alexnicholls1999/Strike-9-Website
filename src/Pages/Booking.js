import PropTypes from "prop-types";
import { useParams } from "react-router";
import BookingTemplate from "../Components/Templates/BookingTemplate";


function Booking({useAuth, useEvents, useBookEvents}) {

    const params = useParams()

    const slots = 100;

    const bookingContent = {
        hero: {
            title: "STRIKE 9 VLU REGISTER EVENTS FORM" 
        },
        uid: useAuth.user.uid,
        params: params,
        events: useEvents.events,
        slots: slots,
        booked: useBookEvents.booked,
        handleSubmit: useBookEvents.handleSubmit
    }


    return <BookingTemplate bookingContent={bookingContent} />
}

Booking.propTypes = {
    useAuth: PropTypes.shape({
        user: PropTypes.object.isRequired
    }),
    useEvents: PropTypes.shape({
        events: PropTypes.object
    }),
    useBookEvents: PropTypes.shape({
        booked: PropTypes.bool.isRequired,
        handleSubmit: PropTypes.func.isRequired
    })
}


export default Booking
