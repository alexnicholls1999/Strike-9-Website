import React from 'react'
import styled from 'styled-components'
import { Col } from 'react-bootstrap'
import SocialMedia from '../SocialMedia';

function ContactInfo() {
    return (
        <Col lg={4} className="text-center">
            <p>info@strike9training.co.uk</p>
            <SocialMedia />
        </Col >
    )
}

export default ContactInfo;
