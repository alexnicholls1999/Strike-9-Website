import PropTypes from "prop-types";
import styled from "styled-components";
import Introduction from "../Molecules/Text/Introduction";
import Container from ".././../Grid/Container";

const StyledHero = styled.div`
    position: relative;
    width: 100%;
    height: 90%;
    color: ${({theme}) => theme.colors.neutral[100]};
`;

function Hero({content}) {
    return (
        <StyledHero>
            <Container>
                <Introduction content={content} center />
            </Container>
        </StyledHero>
    )
}

Hero.propTypes = {
    content: PropTypes.object.isRequired
}

export default Hero
