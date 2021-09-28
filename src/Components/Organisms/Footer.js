import styled from "styled-components";
import { Row, Col, Container } from 'react-bootstrap';
import CopyRight from '../Molecules/Footer/CopyRight';
import FooterNav from '../Molecules/Footer/FooterNav';
import LogoFooter from '../Molecules/Footer/LogoFooter';

const StyledFooter = styled.footer`
    background-color: ${({theme}) => theme.colors.neutral.BlackRock};
    color:  ${({theme}) => theme.colors.neutral.White};
    bottom: 0;
    padding: 10% 10px;
    @media (min-width: 768px) {
        padding: 5%;
    }
`;

function Footer() {
    return (
        <StyledFooter>
            <Container>
                <Row>
                    <Col md={4} sm={12}>
                        <LogoFooter />
                    </Col>
                    <FooterNav />
                </Row>
                <CopyRight />
            </Container>
        </StyledFooter>
    )
}

export default Footer;