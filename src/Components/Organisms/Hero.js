import PropTypes from "prop-types";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import Introduction from "../Molecules/Text/Introduction";


const StyledHero = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    height: 90%;
    color: ${({theme}) => theme.colors.neutral[100]};
    text-align: center;
    justify-content: center;

    @media(min-width: ${({theme}) => theme.viewport.md}) {     
        align-items: center;
    }
`;

function Hero({content}) {
    return (
        <StyledHero>
                <Introduction content={content} center />
        </StyledHero>
    )
}

Hero.propTypes = {
    content: PropTypes.object.isRequired
}

export default Hero
