import PropTypes from "prop-types";
import styled from "styled-components";

const StyledLabel = styled.label`
    color: ${({theme}) => theme.colors.neutral.Black};
    font-weight: ${({theme}) => theme.typography.fontWeight.bold};
`;

function Label({children, style}) {
    return <StyledLabel style={style}>{children}</StyledLabel>
}


Label.propTypes = {
    style: PropTypes.string,
    children: PropTypes.string.isRequired
}

export default Label
