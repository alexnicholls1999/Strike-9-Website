import PropTypes from "prop-types";
import styled from 'styled-components';

const ErrorLabel = styled.p`
    color: #C90808;
`;

function ErrorMessage({children}) {
    return <ErrorLabel>{children}</ErrorLabel>
}

ErrorMessage.propTypes = {
    children: PropTypes.node.isRequired
}

export default ErrorMessage
