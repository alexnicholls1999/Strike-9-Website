import PropTypes from "prop-types";
import styled from "styled-components";
import Introduction from "../Molecules/Text/Introduction";
import Container from ".././../Grid/Container";

const StyledHero = styled.div`
    position: relative;
    // height: 90%;
    width: 100%;
    // background: ${({theme}) => theme.colors.primary[600]};
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
