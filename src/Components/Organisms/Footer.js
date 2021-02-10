import React from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import Logo from '../Atoms/Logo';
import ContactInfo from '../Molecules/Footer/ContactInfo';
import FooterNav from '../Molecules/Footer/FooterNav';
import CopyRight from '../Molecules/Footer/CopyRight';
import LogoFooter from '../Molecules/Footer/LogoFooter';

const StyledFooter = styled.footer`
    background-color: ${({theme}) => theme.colors.neutral.BlackRock};
    color:  ${({theme}) => theme.colors.neutral.White};
    bottom: 0;
    padding: 10%;

    @media (min-width: ${({theme}) => theme.viewport.mediumDevices}) {
        padding: 0;
        padding-top: 75px;
    }


`;

function Footer() {
    return (
        <StyledFooter>
            <Container>
                <Row>
                    <Col lg={4}>
                        <LogoFooter />
                    </Col>
                    <ContactInfo/>
                    <FooterNav /> 
                </Row>
                <CopyRight />
            </Container>
        </StyledFooter>
    )
}

export default Footer
