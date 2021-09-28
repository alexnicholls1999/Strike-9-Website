import styled from "styled-components";
import PropTypes from "prop-types";
import { Col, Container, Row } from "react-bootstrap";
import SocialMedia from "../Molecules/SocialMedia";
import ButtonWrapper from "../Molecules/ButtonWrapper";

const HeroWrapper = styled.div`
    position: relative;
    top: 0;
    background-color: ${({ theme, secondary }) => secondary ? theme.colors.primary : "none" };
    width: 100%;
    height: 80%;
    color: ${({theme}) => theme.colors.neutral.White};
    text-align: ${({secondary}) => secondary ? "center" : "left"};
    margin: 0 auto;

`;

const StyledIntro = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;
    justify-content: flex-start;
    margin-top: 10%;
    padding: 5px;

    p {
        margin: 0 auto;
    }

    @media (min-width: ${({theme}) => theme.viewport.lg}) {
        justify-content: center;
        margin-top: 0;

        p {
            width: 50%;
        }
    }

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

const buttons = [
    {
        secondary: false,
        text: "REGISTER"
    },
    {
        secondary: false,
        text: "FIND OUT MORE"
    }
]

function Hero({ children, secondary, heroDetails}) {
    return (
        <HeroWrapper secondary={secondary}>
            {secondary ? (
                <>
                    <StyledIntro>
                        <h1>{heroDetails.title}</h1>
                        <p>{heroDetails.paragraph}</p>
                        <ButtonWrapper buttons={buttons}  width="400px" />
                    </StyledIntro>
                    <SocialMediaWrapper>
                        <SocialMedia />
                    </SocialMediaWrapper>
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
