import PropTypes from "prop-types";
import { Container, Row } from "react-bootstrap";
import styled from "styled-components";
import MainLayout from "../../Layouts/MainLayout";
import Card from "../Atoms/Card";
import ContactForm from "../Organisms/ContactForm";
import ContactInfo from "../Organisms/ContactInfo";

const StyledContactFormWrapper = styled.div`
    margin-top: -2em;

    @media(min-width: ${({theme}) => theme.viewport.md}) {
        margin-top: -5em;
        margin-inline: auto;
    }

`;

function ContactTemplate({contactContent}) {
    return (
        <MainLayout
            hero={{
                content: {
                    title: contactContent.heroTitle,
                    text: contactContent.paragraph
                }
            }}
            noDisplay
        >
            <Container>
                <StyledContactFormWrapper>
                    <Card>
                        <Row>
                            <ContactForm contactForm={{title: contactContent.contactForm.title, name: contactContent.contactForm.name, email: contactContent.contactForm.email, message: contactContent.contactForm.message, send: contactContent.contactForm.send}}/>
                            <ContactInfo contactInfo={{title: contactContent.contactInfo.title, contactMethods: contactContent.contactInfo.contactMethods}} />
                        </Row>
                    </Card>
                </StyledContactFormWrapper>
            </Container>
        </MainLayout>
    )
}

ContactTemplate.propTypes = {
    contactContent: PropTypes.shape({
        heroTitle: PropTypes.string.isRequired,
        paragraph: PropTypes.string.isRequired,
        contactForm: PropTypes.shape({
            title: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
            message: PropTypes.string.isRequired,
            send: PropTypes.string.isRequired,
        }),
        contactInfo: PropTypes.shape({
            title: PropTypes.string.isRequired,
            contactMethods: PropTypes.array.isRequired
        })
    })
}

export default ContactTemplate
