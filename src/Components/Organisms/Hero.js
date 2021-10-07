import PropTypes from "prop-types";
import styled from "styled-components";
import Introduction from "../Molecules/Text/Introduction";

const StyledHero = styled.div`

`;

function Hero({content}) {
    return (
        <StyledHero>
            <Introduction content={content} />
        </StyledHero>
    )
}

export default Hero
