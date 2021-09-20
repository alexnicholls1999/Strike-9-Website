import PropTypes from "prop-types"
import styled from "styled-components"

const StyledTitle = styled.h2`
    text-align: left;


    &::after {
        content: '${({title}) => title}';
        position: absolute;
        left: 0;
        font-size: clamp(2vh, 6rem, 5vw);
        color: ${({theme}) => theme.colors.neutral.Grey};
        z-index: -1;
        opacity: 0.5;
    }

    @media(min-width: ${({theme}) => theme.viewport.lg}) {
        text-align: ${({left}) => left ? "left" : "right"};
        padding-left: ${({left}) => left && "2.5%"};
        padding-right: ${({right}) => right && "2.5%"};

        &::after {
            left: ${({left}) => left && "2.5%"};
            right: ${({right}) => right && "2.5%"};

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
