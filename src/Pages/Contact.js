import { Container } from "react-bootstrap";
import Map from "../Components/Atoms/Map";
import ContactForm from "../Components/Organisms/Form/ContactForm";
import Hero from "../Components/Organisms/Hero";
import theme from "../styles/theme";

function Contact() {
    return (
        <>
            <Hero bgHero={theme.colors.primary.RoyalPurple} heroDetails={{title: "GET IN TOUCH", paragraph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus excepturi, nulla libero explicabo magnam quas incidunt in perferendis tempore cumque."}} secondary>
                <Container>
                    <div className="p-5"></div>
                    <div className="p-5"></div>
                </Container>
            </Hero>
            <Container>
                <ContactForm />
            </Container>
            <div className="p-5"></div>
            <div className="p-5"></div>
            <Map zoom={14} location={{lat: -1.85910, lng: 52.44150}} />
        </>
    )
}

export default Contact
