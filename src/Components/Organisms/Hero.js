import styled from "styled-components";
import PropTypes from "prop-types";
import { Col, Container, Row } from "react-bootstrap";

const HeroWrapper = styled.div`
    position: relative;
    top: 0;
    background-color: ${({ theme, secondary }) => secondary ? theme.colors.primary : "none" };
    width: 100%;
    height: 90%;
    color: ${({theme}) => theme.colors.neutral.White};
    text-align: ${({secondary}) => secondary ? "center" : "left"};
    margin: 0 auto;

`;

const StyledIntro = styled.div`
    margin-top: 50%;

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

function Hero({ children, homepage, secondary, heroDetails}) {
    return (
        <HeroWrapper secondary={secondary}>
            <Container fluid>
            {secondary ? (
                <>
                    <Row>
                        <Col md={12} sm>
                            <StyledIntro>
                                <h1>{heroDetails.title}</h1>
                                <p>{heroDetails.paragraph}</p>
                            </StyledIntro>                            
                        </Col>
                    </Row>
                </>
            ) : (
                <>
                    <Row>
                        <Col md={12} sm>
                            <div className="p-5"></div>
                            <h1>{heroDetails.title}</h1>
                            <p>{heroDetails.paragraph}</p>
                        </Col>
                    </Row>
                    <Row>
                        {children}
                    </Row>
                </>
            )}
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
