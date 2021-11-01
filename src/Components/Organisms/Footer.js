import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import LogoFooter from "../Molecules/Footer/LogoFooter";
import FooterNav from "../Molecules/Footer/FooterNav";
import CopyRight from "../Molecules/Footer/CopyRight";

const StyledFooter = styled.footer`
    background-color: ${({theme}) => theme.colors.neutral[700]};
    color:  ${({theme}) => theme.colors.neutral[100]};
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

export default Footer