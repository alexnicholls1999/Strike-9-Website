import PropTypes from "prop-types";
import styled from "styled-components";

const StyledButton = styled.button`
    background-color: ${({theme}) => theme.colors.primary[600]};
    border: none;
    color: white;
    padding: 0.75rem;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: max(1vw, 0.665rem);
    font-weight: ${({theme}) => theme.typography.fontWeight.bold};
    border-radius: 7px;
    width: 12rem;
`;

function Button({onClick, text}) {
    return <StyledButton onClick={onClick}>{text}</StyledButton>
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Button
