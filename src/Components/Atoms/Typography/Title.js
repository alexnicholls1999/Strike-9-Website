import PropTypes from "prop-types"
import styled from "styled-components"

const StyledTitle = styled.h2`
    font-size: clamp(4vh, 6rem, 10vw);
    font-weight: ${({theme}) => theme.typography.fontWeight.bold};
    text-align: left;

    &::after {
        content: '${({title}) => title}';
        position: absolute;
        left: 0;
        font-size: clamp(5vh, 8rem, 15vw);
        color: ${({theme}) => theme.colors.neutral.Grey};
        z-index: -1;
        opacity: 0.5;
    }

    @media(min-width: ${({theme}) => theme.viewport.lg}) {
        text-align: ${({left}) => left ? "left" : "right"};
        
        &::after {
            left: ${({left}) => left && "0"};
            right: ${({right}) => right && "0"};
        }
    }

`;

function Title({title, float}) {
    return (
        <StyledTitle left={float.left} right={float.right} title={title}>{title}</StyledTitle>
    )
}

Title.propTypes = {
    title: PropTypes.string.isRequired,
    float: PropTypes.shape({
        left: PropTypes.bool,
        right: PropTypes.bool
    })
}

export default Title
