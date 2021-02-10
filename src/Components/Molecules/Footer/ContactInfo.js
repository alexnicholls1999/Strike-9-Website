import React from 'react';
import styled from "styled-components";
import { Col } from "react-bootstrap";
import SocialMedia from "../SocialMedia";

const StyledContactInfo = styled.div`

`;

function ContactInfo() {
    return (
        <Col lg={4} className="text-center">
            <StyledContactInfo>
                <p>info@strike9training.co.uk</p>
                <SocialMedia />
            </StyledContactInfo>
        </Col>
    )
}

export default ContactInfo
