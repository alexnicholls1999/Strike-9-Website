import PropTypes from "prop-types";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import Button from "./../Atoms/Form/Button";
import SocialMedia from "../Molecules/SocialMedia";
import Introduction from "../Molecules/Text/Introduction";

const StyledHero = styled.div`
    position: relative;
    display: flex;
    flex-flow: column;
    width: 100%;
    height: 90%;
    color: ${({theme}) => theme.colors.neutral[100]};
    text-align: center;
    justify-content: center;

    @media(min-width: ${({theme}) => theme.viewport.md}) {     
        align-items: center;
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
    width: 25rem;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 1rem;
`;

function Hero({content}) {
    return (
        <StyledHero>
                <Introduction content={content} center />
                <br />
                <ButtonsWrapper>
                    <Button text="REGISTER" />
                    <Button text="FIND OUT MORE"/>
                </ButtonsWrapper>
                <SocialMediaWrapper>
                    <SocialMedia />
                </SocialMediaWrapper>
        </StyledHero>
    )
}

Hero.propTypes = {
    content: PropTypes.object.isRequired
}

export default Hero
