import PropTypes from "prop-types";
import styled from "styled-components";

const StyledErrorLabel = styled.p`
    color: ${({theme}) => theme.colors.feedback.err};
`;

function ErrorMessage({children}) {
    return <StyledErrorLabel>{children}</StyledErrorLabel>
}

ErrorMessage.propTypes = {
    children: PropTypes.element
}

export default ErrorMessage
