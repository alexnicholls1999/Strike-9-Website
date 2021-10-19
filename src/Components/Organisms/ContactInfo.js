import PropTypes from "prop-types";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import SocialMedia from "../Molecules/SocialMedia";
import ListItem from "../Molecules/Text/ListItem";

const contactInfos = [
    {
        paragraph: "Moseley School Sports Centre, Springfield Road, B13 9NP"
    },
    {   
        paragraph: "079341234113"
    },
    {
        paragraph: "info@strike9training.co.uk"
    }
]

const StyledContactInfoWrapper = styled.div`
    position: relative;
    background: ${({theme}) => theme.colors.neutral[800]};
    padding: 2rem;
    height: 100%;
    
    h3 {
        color: ${({theme}) => theme.colors.neutral[100]};
    }

`;

const StyledContactInfoUl = styled.div`
    list-style: none;
    color: ${({theme}) => theme.colors.neutral[100]};
    padding: 3rem 0;
`;

const SocialMediaWrapper = styled.div`

`;

function ContactInfo({contactInfo}) {
    return (
        <Col lg={4} md={12}>
            <StyledContactInfoWrapper>
                <Row>
                    <Col md={12}>
                        <h3>{contactInfo.title}</h3>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <StyledContactInfoUl>
                            {contactInfo.contactMethods.map((contactMethod, index) => <ListItem key={index} name={contactInfo.paragraph}/>)}
                        </StyledContactInfoUl>                        
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <SocialMediaWrapper>
                            <SocialMedia />
                        </SocialMediaWrapper>
                        <div className="p-1"></div>
                    </Col>
                </Row>
            </StyledContactInfoWrapper>
        </Col>
    )
}

export default ContactInfo
