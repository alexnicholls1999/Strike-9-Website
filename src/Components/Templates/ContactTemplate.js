import PropTypes from "prop-types";
import { Container, Row } from "react-bootstrap";
import styled from "styled-components";
import MainLayout from "../../Layouts/MainLayout";
import Card from "../Atoms/Card";
import ContactForm from "../Organisms/ContactForm";
import ContactInfo from "../Organisms/ContactInfo";
import Pattern from "../../assets/PatternA.svg";
import Map from "../Atoms/Map";

const StyledContactFormWrapper = styled.div`
    margin-top: -2em;
    position: relative;

    @media(min-width: ${({theme}) => theme.viewport.md}) {
        margin-top: -5em;
        margin-inline: auto;
    }

    &::after {
        content: '';
        z-index: -1;
        position: absolute;
        bottom: -2rem;
        right: -4rem;
        height: 10rem;
        width: 15rem;
        background: url(${Pattern});
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
            style={{paddingBottom: "10rem"}}
            noDisplay
        >
            <Container>
                <StyledContactFormWrapper>
                    <Card>
                        <Row>
                            <ContactForm  contactForm={{title: contactContent.contactForm.title}}/>
                            <ContactInfo  
                                contactInfo={{
                                    title: contactContent.contactInfo.title,
                                    contactMethods: contactContent.contactInfo.contactMethods
                                }}
                            />
                        </Row>
                    </Card>
                </StyledContactFormWrapper>
            </Container>
            <div className="p-5"></div>
            <div className="p-5"></div>
            <Map map={{location: { lat: contactContent.map.location.lat, lng: contactContent.map.location.lng }, zoom: contactContent.map.zoom, accessToken: contactContent.map.accessToken }} />
        </MainLayout>
    )
}

ContactTemplate.propTypes = {
    contactContent: PropTypes.shape({
        heroTitle: PropTypes.string.isRequired,
        paragraph: PropTypes.string.isRequired,
        contactForm: PropTypes.shape({
            title: PropTypes.string.isRequired
        }),
        contactInfo: PropTypes.shape({
            title: PropTypes.string.isRequired,
            contactMethods: PropTypes.array.isRequired
        }),
        map: PropTypes.shape({
            accessToken: PropTypes.string.isRequired,
            zoom: PropTypes.number.isRequired,
            location: PropTypes.shape({
                lat: PropTypes.number.isRequired,
                lng: PropTypes.number.isRequired
            })
        })
    })
}

export default ContactTemplate
