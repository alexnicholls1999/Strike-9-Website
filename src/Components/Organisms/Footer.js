import React from 'react'
import styled from 'styled-components'
import {Container, Row, Col} from 'react-bootstrap'
import FooterNav from '../Molecules/Footer/FooterNav';
import CopyRight from '../Molecules/Footer/CopyRight';
import ContactInfo from '../Molecules/Footer/ContactInfo';
import Logo from '../Molecules/Footer/LogoFooter'

const StyledFooter = styled.footer`

    background: ${({ theme }) => theme.colors.neutral.BlackRock} ;
    color: white;
    bottom: 0;
    padding: 10%;

    @media (min-width: 768px) {
        padding: 0;
        padding-top: 75px; 
    }

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