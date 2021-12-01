import PropTypes from "prop-types";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import Button from "./../Atoms/Form/Button";
import SocialMedia from "../Molecules/SocialMedia";
import Introduction from "../Molecules/Text/Introduction";

const StyledHero = styled.div`
    position: relative;
    display: flex;
    flex-flow: column;
    width: 100%;
    height: 80%;
    padding: ${({secondary}) => secondary && "4.5rem 1rem"};
    color: ${({theme}) => theme.colors.neutral[100]};
    text-align: ${({secondary}) => secondary ? "left" : "center"};
    justify-content: align-start;
    padding-top: 2rem;

    @media(min-width: ${({theme}) => theme.viewport.lg}) {     
        align-items: ${({secondary}) => secondary ? "align-start" : "center"};
        justify-content: ${({secondary}) => secondary ? "align-start" : "center"};
        padding: ${({secondary}) => secondary && "4.5rem 1rem 6rem"};
    }
`;

const SocialMediaWrapper = styled.div`
    position: absolute;
    bottom: 0;
    right: 10%;
`;

const ButtonsWrapper = styled.div`
    display: flex;
    max-width: 100%;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 1rem;
`;

function Hero({content, secondary, component, ...props}) {
    return (
        <>
            {!secondary ? (
                <StyledHero {...props}>
                    <Container>
                        <Introduction content={content} center />
                        <ButtonsWrapper>
                            <Button text="REGISTER" />
                            <Button text="FIND OUT MORE"/>
                        </ButtonsWrapper>
                        <SocialMediaWrapper>
                            <SocialMedia />
                        </SocialMediaWrapper>
                    </Container>
                </StyledHero>
            ) : (
                <StyledHero secondary={secondary} {...props}>
                    <Introduction content={content} />
                    {component}
                </StyledHero>
            )}  
        </>

    )
}

Hero.propTypes = {
    content: PropTypes.object.isRequired
}

export default Hero
