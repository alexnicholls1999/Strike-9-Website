import styled from "styled-components";
import PropTypes from "prop-types";
import { Col, Container, Row } from "react-bootstrap";

const HeroWrapper = styled.div`
    position: relative;
    top: 0;
    background-color: ${({ theme, secondary }) => secondary ? theme.colors.primary : "none" };
    width: 100%;
    padding: 1 rem;
    height: 90%;
    color: ${({theme}) => theme.colors.neutral.White};
`;

const ButtonsWrapper = styled.div`  
    display: flex;
    flex-direction: row;
    width: 300px;
`;

const SocialMediaWrapper = styled.div`
    position: absolute;
    bottom: 10vh;
    right: 10%;
`;

function Hero({ children, secondary, heroDetails}) {
    return (
        <HeroWrapper secondary={secondary}>
            <Container>
                <Row>
                    <Col lg={8} md={8}>

                    </Col> 
                </Row>
            </Container>
        </HeroWrapper>
    )
}

Hero.propTypes = {
    secondary: PropTypes.bool,
    heroDetails: PropTypes.shape({
        title: PropTypes.string,
        paragraph: PropTypes.string
    }),
}

export default Hero
