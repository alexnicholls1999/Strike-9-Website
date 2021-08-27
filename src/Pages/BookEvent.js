import { Container } from "react-bootstrap";
import { useParams } from "react-router";
import BookingForm from "../Components/Organisms/Form/BookingForm";
import Hero from "../Components/Organisms/Hero";

function BookEvent() {

    const params = useParams();

    return (
        <>
            <Hero heroDetails={{title: "STRIKE 9 VLU REGISTER EVENTS FORM"}} secondary>
                <Container>
                    <div className="p-5"></div>
                </Container>
            </Hero>
            <Container>
                <BookingForm params={params} />
            </Container>
        </>
    )
}

export default BookEvent
