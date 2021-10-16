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
    font-size: 0.7rem;
    font-weight: ${({theme}) => theme.typography.fontWeight.bold};
    border-radius: 7px;
    width: 9rem;

    @media(min-width: ${({theme}) => theme.viewport.xl}) {
        width: 15rem;
        padding: 1rem;
        font-size: 1rem;
    }
`;

function Button({onClick, text}) {
    return <StyledButton onClick={onClick}>{text}</StyledButton>
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Button
