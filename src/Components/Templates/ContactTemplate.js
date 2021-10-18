import PropTypes from "prop-types";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import MainLayout from "../../Layouts/MainLayout";
import ContactForm from "../Organisms/ContactForm";

const StyledContactWrapper = styled.div`
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
                <StyledContactWrapper>
                    <ContactForm />
                </StyledContactWrapper>
            </Container>
        </MainLayout>
    )
}

ContactTemplate.propTypes = {
    contactContent: PropTypes.shape({
        heroTitle: PropTypes.string.isRequired,
        paragraph: PropTypes.string.isRequired,
    })
}

export default ContactTemplate
