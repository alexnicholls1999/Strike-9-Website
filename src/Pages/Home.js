import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import HomeLayout from "../Layout/HomeLayout";

import Title from "../Components/Atoms/Typography/Title";
import Pattern from "../Components/Atoms/Iconography/Pattern";

const StyledSportsEnglandWrapper = styled.div`
    background-color: ${({theme}) => theme.colors.secondary.Violet};
    padding: 10%;

    img {
        width: 100%;
    }

    @media (min-width: ${({theme}) => theme.viewport.lg}) {
        padding: 2.5%;
    }
`;

export default function Home() {
    return (
        <HomeLayout>
            <StyledSportsEnglandWrapper>
                <Container>
                    <Row className="justify-content-center">
                        <Col md={3}>
                            <img src="https://www.sportengland.org/themes/custom/se/images/se-logo-white.png" alt="sportengland" />
                        </Col>
                    </Row>
                </Container>
            </StyledSportsEnglandWrapper>
            <Pattern />
            <Container fluid>
                <Row>
                    <Title float={{ right: true }} title="TRAINING PLANS" />
                </Row>
                <Row>
                    
                </Row>
            </Container>
        </HomeLayout>
    )
}
