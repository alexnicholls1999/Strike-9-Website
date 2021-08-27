import PropTypes from "prop-types";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import Button from "../Atoms/Buttons/Button";
import SocialMedia from "../Molecules/SocialMedia";
import { useHistory } from "react-router";

const HeroWrapper = styled.div`
    position: relative;
    top: 0;
    background-color: ${({theme, secondary}) => secondary ? theme.colors.primary.RoyalPurple : "none"};
    width: 100%;
    padding: 1rem;
    height: 90%;
    color: ${({theme}) => theme.colors.neutral.White};
`;

const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 300px;
`;

const SocialMediaHeroWrapper = styled.div`
    position: absolute;
    bottom: 10vh;
    right: 10%;
`;


function Hero({children, secondary, homepage, heroDetails}) {

    const history = useHistory();

    return (
        <HeroWrapper secondary={secondary}>
            <Container>
                <Row>
                    <Col lg={8} md={8} sm>
                        <h1>{heroDetails.title}</h1>
                        <p>{heroDetails.paragraph}</p>
                    </Col>
                </Row>
            </Container>
            <Container>
                {!secondary ? (
                    homepage ? (
                        <>
                            <Row>
                                <ButtonsWrapper>
                                    <Button style={{marginRight: "10px"}} onClick={() => history.push('/events')} text="REGISTER" />
                                    <Button text="FIND OUT MORE" />
                                </ButtonsWrapper>
                            </Row>
                            <SocialMediaHeroWrapper>
                                <SocialMedia />
                            </SocialMediaHeroWrapper>
                        </>
                    ) : null
                ) : (
                    <Row>
                        {children}
                    </Row>
                )}

            </Container>
        </HeroWrapper>
    )
}

Hero.propTypes = {
    heroDetails: PropTypes.shape({
        title: PropTypes.string,
        paragraph: PropTypes.string
    }),
    secondary: PropTypes.bool,
    homepage: PropTypes.bool,
    children: PropTypes.element,
}


export default Hero
