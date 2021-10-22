import { useContext } from "react";
import { useParams } from "react-router"
import BookingTemplate from "../Components/Templates/BookingTemplate"
import { ContentContext } from "../utils/Context/ContentContext"

function Booking() {

    const params = useParams();

    const content = useContext(ContentContext)

    return <BookingTemplate bookingContent={{hero: {title: content.booking.hero.title}}} params={params} />
}

export default Booking;
