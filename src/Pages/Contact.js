import { Container } from "react-bootstrap";
import ContactForm from "../Components/Organisms/Form/ContactForm";
import Hero from "../Components/Organisms/Hero";

function Contact() {
    return (
        <>
            <Hero heroDetails={{title: "GET IN TOUCH", paragraph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus excepturi, nulla libero explicabo magnam quas incidunt in perferendis tempore cumque."}} secondary>
                <Container>
                    <div className="p-5"></div>
                </Container>
            </Hero>
            <Container>
                <ContactForm />
            </Container>
        </>
    )
}

export default Contact
