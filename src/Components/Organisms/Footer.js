import React from 'react'
import styled from 'styled-components'
import {Container, Row, Col} from 'react-bootstrap'
import Logo from '../Atoms/Logo';
import FooterNav from '../Molecules/Footer/FooterNav';
import CopyRight from '../Molecules/Footer/CopyRight';
import SocialMedia from '../Molecules/SocialMedia';
import ContactInfo from '../Molecules/Footer/ContactInfo';

const StyledFooter = styled.footer`

`

function Footer() {
    return (
        <StyledFooter>
            <Container>
                <Row>
                    <Col lg={4}>
                        <Logo />
                    </Col>
                    
                    <ContactInfo />
                    <FooterNav />
                </Row>
                <CopyRight />
            </Container>
            
        </StyledFooter>
    )
}

export default Footer;