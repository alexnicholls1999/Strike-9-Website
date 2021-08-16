import PropTypes from "prop-types";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

const HeroWrapper = styled.div`
    position: relative;
    top: 0;
    background: ${({theme, secondary}) => secondary ? theme.colors.primary.RoyalPurple : "none" };
    width: 100%;
    padding: 1rem;
    height: 90%;
`;

function Hero({children, secondary, secondaryDetails}) {
    return (
        <HeroWrapper secondary={secondary}>
            <Container>
                <Row>
                    <Col lg={8} md={8} sm>
                        <h1>{secondaryDetails.title}</h1>
                        <p>{secondaryDetails.paragraph}</p>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    {children}
                </Row>
            </Container>
        </HeroWrapper>
    )
}

Hero.propTypes = {
    secondary: PropTypes.bool,
    children: PropTypes.element,
    secondaryDetails: PropTypes.shape({
        title: PropTypes.string,
        paragraph: PropTypes.string
    })
}


export default Hero
