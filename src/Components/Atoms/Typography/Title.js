import PropTypes from "prop-types"
import styled from "styled-components"

const StyledTitle = styled.h2`
    text-align: left;

    @media(min-width: ${({theme}) => theme.viewport.lg}) {
        text-align: ${({left}) => left ? "left" : "right"};
    }

`;

function Title({title, float}) {
    return <StyledTitle left={float.left} right={float.right} title={title}>{title}</StyledTitle>
}

Title.propTypes = {
    title: PropTypes.string.isRequired,
    float: PropTypes.shape({
        left: PropTypes.bool,
        right: PropTypes.bool
    })
}

export default Title
