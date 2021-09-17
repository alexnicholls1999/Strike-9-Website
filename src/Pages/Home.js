import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import HomeLayout from "../Layout/HomeLayout";

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
        </HomeLayout>
    )
}
